import { sanityClient } from './config';

/**
 * Create a new document in Sanity
 */
export async function createDocument(type: string, data: Record<string, unknown>) {
  try {
    const result = await sanityClient.create({
      _type: type,
      ...data,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Error creating document:', error);
    return { success: false, error };
  }
}

/**
 * Update an existing document
 */
export async function updateDocument(id: string, data: Record<string, unknown>) {
  try {
    const result = await sanityClient
      .patch(id)
      .set(data)
      .commit();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error updating document:', error);
    return { success: false, error };
  }
}

/**
 * Delete a document
 */
export async function deleteDocument(id: string) {
  try {
    const result = await sanityClient.delete(id);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error deleting document:', error);
    return { success: false, error };
  }
}

/**
 * Upload an image to Sanity
 */
export async function uploadImage(file: File) {
  try {
    const result = await sanityClient.assets.upload('image', file, {
      filename: file.name,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, error };
  }
}

