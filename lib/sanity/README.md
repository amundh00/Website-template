# Sanity CMS Integration

This template includes Sanity CMS support for content management. Use either Firebase or Sanity based on your project needs.

## Setup

### 1. Create a Sanity Project

```bash
npm create sanity@latest
```

Follow the prompts to:
- Create a new project or use existing
- Choose dataset name (usually "production")
- Select project template (or skip for blank)

### 2. Configure Environment Variables

Add to your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```

Get these from: https://www.sanity.io/manage

### 3. Create a Sanity Studio (Optional)

To get a content management interface:

```bash
npx sanity init
```

Or create a separate studio project:

```bash
npm create sanity@latest -- --template clean --create-project "My Studio" --dataset production
```

## Usage

### Basic Queries

```typescript
import { sanityClient } from '@/lib/sanity/config';
import { groq } from 'next-sanity';

// Fetch all posts
const posts = await sanityClient.fetch(
  groq`*[_type == "post"] | order(publishedAt desc)`
);

// Fetch single post
const post = await sanityClient.fetch(
  groq`*[_type == "post" && slug.current == $slug][0]`,
  { slug: 'my-post' }
);
```

### Using Hooks

```typescript
'use client';
import { useSanityQuery } from '@/hooks/useSanity';
import { groq } from 'next-sanity';

export function Posts() {
  const { data, loading, error } = useSanityQuery(
    groq`*[_type == "post"] | order(publishedAt desc)`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map((post: any) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### Image URLs

```typescript
import { urlFor } from '@/lib/sanity/config';

// Generate image URL
const imageUrl = urlFor(post.mainImage)
  .width(800)
  .height(600)
  .url();

// With automatic format
const optimizedUrl = urlFor(post.mainImage)
  .width(800)
  .auto('format')
  .url();
```

### Mutations

```typescript
import { createDocument, updateDocument } from '@/lib/sanity/mutations';

// Create document
const result = await createDocument('post', {
  title: 'My Post',
  slug: { current: 'my-post' },
  publishedAt: new Date().toISOString(),
});

// Update document
await updateDocument('post-id', {
  title: 'Updated Title',
});
```

## Schema Examples

Create schemas in your Sanity Studio:

### Post Schema

```typescript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
```

## API Routes

Create API routes for mutations:

```typescript
// app/api/sanity/create/route.ts
import { createDocument } from '@/lib/sanity/mutations';

export async function POST(request: Request) {
  const { type, data } = await request.json();
  const result = await createDocument(type, data);
  return Response.json(result);
}
```

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Image URLs](https://www.sanity.io/docs/image-url)

