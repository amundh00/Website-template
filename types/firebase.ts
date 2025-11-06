import { Timestamp } from 'firebase/firestore';

/**
 * Firebase-specific type definitions
 */

// Base document type
export interface FirestoreDocument {
  id: string;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

// Convert Firestore timestamp to Date
export function timestampToDate(timestamp: Timestamp | Date): Date {
  if (timestamp instanceof Date) {
    return timestamp;
  }
  return timestamp.toDate();
}

// Example collection types
export interface ExampleDocument extends FirestoreDocument {
  title: string;
  description: string;
  status: 'active' | 'inactive';
}

