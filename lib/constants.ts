/**
 * Application-wide constants
 */

export const APP_NAME = 'Website Template';
export const APP_DESCRIPTION = 'A comprehensive Next.js template';

// API Endpoints
export const API_ROUTES = {
  HEALTH: '/api/health',
  SEND_EMAIL: '/api/send-email',
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  EMAIL: {
    maxRequests: 5,
    windowMs: 60000, // 1 minute
  },
  API: {
    maxRequests: 100,
    windowMs: 60000, // 1 minute
  },
  UPLOAD: {
    maxRequests: 10,
    windowMs: 60000, // 1 minute
  },
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword'],
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

// Validation
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_MIN_LENGTH: 10,
} as const;

