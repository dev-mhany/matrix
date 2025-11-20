import {
  collection,
  doc,
  query,
  where,
  limit,
  orderBy,
  type CollectionReference,
  type DocumentReference,
  type Query,
  type QueryDocumentSnapshot
} from 'firebase/firestore'

import { db } from './firebase'
import type { FirestoreCarType, FirestoreCategory, FirestoreProduct } from '@/app/types'

const withIdConverter = <T extends { id?: string }>(): {
  toFirestore: (data: T) => Omit<T, 'id'>
  fromFirestore: (snapshot: QueryDocumentSnapshot) => T
} => ({
  toFirestore: (data: T) => {
    const { id: _id, ...rest } = data
    void _id
    return rest as Omit<T, 'id'>
  },
  fromFirestore: snapshot =>
    ({
      id: snapshot.id,
      ...(snapshot.data() as T)
    }) as T
})

const createCollection = <T extends { id?: string }>(
  path: string
): CollectionReference<T> | null => {
  if (!db) return null
  return collection(db, path).withConverter(withIdConverter<T>())
}

export const categoriesCollection = createCollection<FirestoreCategory>('categories')
export const productsCollection = createCollection<FirestoreProduct>('products')
export const carTypesCollection = createCollection<FirestoreCarType>('carTypes')

export const orderedCategoriesQuery =
  categoriesCollection && query(categoriesCollection, orderBy('slug'))
export const orderedProductsQuery =
  productsCollection && query(productsCollection, orderBy('order', 'asc'))
export const orderedCarTypesQuery =
  carTypesCollection && query(carTypesCollection, orderBy('order', 'asc'))

export const categoryBySlugQuery = (slug: string): Query<FirestoreCategory> | null =>
  categoriesCollection ? query(categoriesCollection, where('slug', '==', slug), limit(1)) : null

export const productById = (id: string): DocumentReference<FirestoreProduct> | null =>
  productsCollection ? doc(productsCollection, id) : null

export const categoryDoc = (id: string): DocumentReference<FirestoreCategory> | null =>
  categoriesCollection ? doc(categoriesCollection, id) : null

export const carTypeDoc = (id: string): DocumentReference<FirestoreCarType> | null =>
  carTypesCollection ? doc(carTypesCollection, id) : null
