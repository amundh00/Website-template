import { Resend } from 'resend';

// Use a placeholder API key during build if not provided
const apiKey = process.env.RESEND_API_KEY || 're_placeholder_key_for_build';

if (!process.env.RESEND_API_KEY && process.env.NODE_ENV !== 'production') {
  console.warn('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(apiKey);

export const emailConfig = {
  from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
  replyTo: process.env.EMAIL_REPLY_TO,
};

export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_placeholder_key_for_build';
}

