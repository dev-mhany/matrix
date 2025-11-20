'use client'

import { useMemo } from 'react'

import { useFirestoreCollection } from './useFirestoreCollection'
import {
  orderedCarTypesQuery,
  orderedCategoriesQuery,
  orderedProductsQuery
} from '@/app/lib/firestore'
import type {
  FirestoreCarType,
  FirestoreCategory,
  FirestoreProduct,
  ProductVariant
} from '@/app/types'

interface CategoryCatalogResult {
  category: FirestoreCategory | undefined
  variants: ProductVariant[]
  carTypes: FirestoreCarType[]
  loading: boolean
  error: string | null
}

const sortVariants = (variants: ProductVariant[]): ProductVariant[] =>
  [...variants].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export function useCategoryCatalog(slug: string): CategoryCatalogResult {
  const categoriesState =
    useFirestoreCollection<FirestoreCategory>(orderedCategoriesQuery)
  const productsState = useFirestoreCollection<FirestoreProduct>(orderedProductsQuery)
  const carTypesState = useFirestoreCollection<FirestoreCarType>(orderedCarTypesQuery)

  const category = useMemo(
    () => categoriesState.data.find(cat => cat.slug === slug),
    [categoriesState.data, slug]
  )

  const variants = useMemo(() => {
    if (!category?.id) return []
    const filtered = productsState.data.filter(
      product => product.categoryId === category.id
    )
    return sortVariants(filtered)
  }, [productsState.data, category])

  const carTypes = useMemo(() => {
    if (!category?.id) return []
    return carTypesState.data
      .filter(carType => carType.categoryId === category.id)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  }, [carTypesState.data, category])

  return {
    category,
    variants,
    carTypes,
    loading: categoriesState.loading || productsState.loading || carTypesState.loading,
    error: categoriesState.error || productsState.error || carTypesState.error
  }
}
