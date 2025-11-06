import { render } from '@react-email/render';
import { resend, emailConfig, isEmailConfigured } from './config';
import { ReactElement } from 'react';

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react: ReactElement;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
  }>;
  replyTo?: string;
}

/**
 * Send an email using Resend
 */
export async function sendEmail({
  to,
  subject,
  react,
  attachments,
  replyTo,
}: SendEmailOptions) {
  try {
    // Check if email is properly configured
    if (!isEmailConfigured()) {
      console.error('Email service not configured. Please set RESEND_API_KEY environment variable.');
      return { 
        success: false, 
        error: new Error('Email service not configured') 
      };
    }

    const html = await render(react);

    const response = await resend.emails.send({
      from: emailConfig.from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      attachments,
      replyTo: replyTo || emailConfig.replyTo,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

/**
 * Send a batch of emails
 */
export async function sendBatchEmails(emails: SendEmailOptions[]) {
  const results = await Promise.allSettled(
    emails.map((email) => sendEmail(email))
  );

  const successful = results.filter((r) => r.status === 'fulfilled');
  const failed = results.filter((r) => r.status === 'rejected');

  return {
    successful: successful.length,
    failed: failed.length,
    results,
  };
}

