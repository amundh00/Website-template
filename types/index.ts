/**
 * Common TypeScript type definitions
 */

// Generic API Response
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// User types
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

// File upload types
export interface UploadedFile {
  url: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

// Location/Map types
export interface Location {
  lat: number;
  lon: number;
  address?: string;
  name?: string;
}

// Form validation
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T = any> {
  values: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
}

