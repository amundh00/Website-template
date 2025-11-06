/**
 * Sanity-specific type definitions
 */

// Base Sanity document type
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Slug type
export interface Slug {
  _type: 'slug';
  current: string;
}

// Image type
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

// Block content (rich text)
export interface Block {
  _type: 'block';
  _key: string;
  style?: string;
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
}

// Example: Blog post type
export interface Post extends SanityDocument {
  _type: 'post';
  title: string;
  slug: Slug;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  body?: Block[];
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: Array<{
    _id: string;
    title: string;
  }>;
}

// Example: Page type
export interface Page extends SanityDocument {
  _type: 'page';
  title: string;
  slug: Slug;
  content?: Block[];
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImage;
  };
}

// Example: Category type
export interface Category extends SanityDocument {
  _type: 'category';
  title: string;
  slug: Slug;
  description?: string;
}

