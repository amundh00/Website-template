'use client';

import { useState } from 'react';
import { getDownloadURL } from 'firebase/storage';
import { uploadFileWithProgress } from '@/lib/firebase/storage';

export function useFileUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const upload = async (file: File, path: string) => {
    setUploading(true);
    setProgress(0);
    setError(null);
    setDownloadURL(null);

    try {
      const uploadTask = uploadFileWithProgress(file, path);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setError(error as Error);
          setUploading(false);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadURL(url);
          setUploading(false);
        }
      );
    } catch (err) {
      setError(err as Error);
      setUploading(false);
    }
  };

  const reset = () => {
    setUploading(false);
    setProgress(0);
    setError(null);
    setDownloadURL(null);
  };

  return { upload, uploading, progress, error, downloadURL, reset };
}

