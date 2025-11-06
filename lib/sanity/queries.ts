import { sanityClient } from './config';
import { groq } from 'next-sanity';

/**
 * GROQ query builder for Sanity
 * 
 * Example GROQ queries:
 * - All documents: *[]
 * - Filtered: *[_type == "post"]
 * - Sorted: *[_type == "post"] | order(publishedAt desc)
 * - Limited: *[_type == "post"][0...10]
 */

/**
 * Fetch all documents of a specific type
 */
export async function getDocuments(type: string) {
  const query = groq`*[_type == "${type}"] | order(_createdAt desc)`;
  return await sanityClient.fetch(query);
}

/**
 * Fetch a single document by ID
 */
export async function getDocument(id: string) {
  const query = groq`*[_id == "${id}"][0]`;
  return await sanityClient.fetch(query);
}

/**
 * Fetch a single document by slug
 */
export async function getDocumentBySlug(type: string, slug: string) {
  const query = groq`*[_type == "${type}" && slug.current == "${slug}"][0]`;
  return await sanityClient.fetch(query);
}

/**
 * Example: Fetch posts (customize based on your schema)
 */
export async function getPosts() {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "author": author->name,
      mainImage
    }
  `;
  return await sanityClient.fetch(query);
}

/**
 * Example: Fetch a single post by slug
 */
export async function getPost(slug: string) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      "author": author->{name, image},
      mainImage,
      categories[]->
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

/**
 * Example: Fetch page content
 */
export async function getPage(slug: string) {
  const query = groq`
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      seo
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

