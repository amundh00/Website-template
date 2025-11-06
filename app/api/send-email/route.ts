import { NextRequest, NextResponse } from 'next/server';
import { createElement } from 'react';
import { sendEmail } from '@/lib/email/send';
import { WelcomeEmail } from '@/lib/email/templates/WelcomeEmail';
import { NotificationEmail } from '@/lib/email/templates/NotificationEmail';
import { checkRateLimit } from '@/lib/utils/rateLimit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, type, data } = body;

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimit = checkRateLimit(`email-${ip}`, {
      maxRequests: 5,
      windowMs: 60000, // 5 emails per minute
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: rateLimit.error },
        { status: 429 }
      );
    }

    // Validate required fields
    if (!to || !type) {
      return NextResponse.json(
        { error: 'Missing required fields: to, type' },
        { status: 400 }
      );
    }

    let emailComponent;
    let subject = '';

    // Select email template based on type
    switch (type) {
      case 'welcome':
        subject = 'Welcome to Our Platform';
        emailComponent = createElement(WelcomeEmail, {
          name: data.name,
          loginUrl: data.loginUrl,
        });
        break;
      
      case 'notification':
        subject = data.subject || 'New Notification';
        emailComponent = createElement(NotificationEmail, {
          title: data.title,
          message: data.message,
          actionUrl: data.actionUrl,
          actionText: data.actionText,
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        );
    }

    // Send email
    const result = await sendEmail({
      to,
      subject,
      react: emailComponent,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error in send-email route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

