'use client';

import { useState, useEffect } from 'react';
import { sanityClient } from '@/lib/sanity/config';

/**
 * Hook to fetch data from Sanity with real-time updates
 */
export function useSanityQuery<T = any>(query: string, params: any = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    sanityClient
      .fetch(query, params)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setLoading(false);
      });
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}

/**
 * Hook to subscribe to real-time Sanity updates
 */
export function useSanityLiveQuery<T = any>(
  query: string,
  params: any = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Initial fetch
    sanityClient
      .fetch(query, params)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setLoading(false);
      });

    // Subscribe to updates
    const subscription = sanityClient.listen(query, params).subscribe({
      next: (update) => {
        if (update.result) {
          setData(update.result as T);
        }
      },
      error: (err) => {
        setError(err as Error);
      },
    });

    return () => subscription.unsubscribe();
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}

