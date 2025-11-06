import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
  UploadTask,
} from 'firebase/storage';
import { storage } from './config';

/**
 * Upload a file to Firebase Storage
 */
export async function uploadFile(
  file: File,
  path: string
): Promise<string> {
  if (!storage) {
    throw new Error('Firebase Storage is not configured');
  }
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}

/**
 * Upload with progress tracking
 */
export function uploadFileWithProgress(
  file: File,
  path: string
): UploadTask {
  if (!storage) {
    throw new Error('Firebase Storage is not configured');
  }
  const storageRef = ref(storage, path);
  return uploadBytesResumable(storageRef, file);
}

/**
 * Get download URL for a file
 */
export async function getFileURL(path: string): Promise<string> {
  if (!storage) {
    throw new Error('Firebase Storage is not configured');
  }
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
}

/**
 * Delete a file from storage
 */
export async function deleteFile(path: string): Promise<void> {
  if (!storage) {
    throw new Error('Firebase Storage is not configured');
  }
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}

