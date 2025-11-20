'use client'

import { startTransition, useEffect, useState } from 'react'
import { onSnapshot, type Query } from 'firebase/firestore'

interface FirestoreCollectionState<T> {
  data: T[]
  loading: boolean
  error: string | null
}

export function useFirestoreCollection<T>(
  queryRef: Query<T> | null
): FirestoreCollectionState<T> {
  const [state, setState] = useState<FirestoreCollectionState<T>>({
    data: [],
    loading: true,
    error: null
  })

  useEffect(() => {
    if (!queryRef) {
      startTransition(() => {
        setState({
          data: [],
          loading: false,
          error: 'Firebase config missing.'
        })
      })
      return
    }

    startTransition(() => {
      setState(prev => ({ ...prev, loading: true }))
    })

    const unsubscribe = onSnapshot(
      queryRef,
      snapshot => {
        setState({
          data: snapshot.docs.map(doc => doc.data()),
          loading: false,
          error: null
        })
      },
      error => {
        console.error('Firestore collection error', error)
        setState({
          data: [],
          loading: false,
          error: error.message
        })
      }
    )

    return () => unsubscribe()
  }, [queryRef])

  return state
}
