import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
};

// Create Sanity client
export const sanityClient = createClient(sanityConfig);

// Create image URL builder
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate image URL from Sanity image source
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Check if Sanity is properly configured
 */
export function isSanityConfigured(): boolean {
  return !!(
    sanityConfig.projectId &&
    sanityConfig.dataset &&
    sanityConfig.projectId !== ''
  );
}

