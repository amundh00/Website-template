import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  DocumentData,
  QueryConstraint,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

/**
 * Generic Firestore operations
 */

export const firestoreOperations = {
  // Create a document
  async create(collectionName: string, data: DocumentData) {
    if (!db) {
      throw new Error('Firestore is not configured');
    }
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  },

  // Read a single document
  async getOne(collectionName: string, docId: string) {
    if (!db) {
      throw new Error('Firestore is not configured');
    }
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  },

  // Read multiple documents with optional filters
  async getMany(
    collectionName: string,
    constraints: QueryConstraint[] = []
  ) {
    if (!db) {
      throw new Error('Firestore is not configured');
    }
    const q = query(collection(db, collectionName), ...constraints);
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  // Update a document
  async update(collectionName: string, docId: string, data: DocumentData) {
    if (!db) {
      throw new Error('Firestore is not configured');
    }
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  },

  // Delete a document
  async delete(collectionName: string, docId: string) {
    if (!db) {
      throw new Error('Firestore is not configured');
    }
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  },
};

// Export common query helpers
export { where, orderBy, limit };

