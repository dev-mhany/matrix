'use client'

import { startTransition, useEffect, useState } from 'react'
import { onSnapshot, type DocumentReference } from 'firebase/firestore'

interface FirestoreDocumentState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFirestoreDocument<T>(
  docRef?: DocumentReference<T> | null
): FirestoreDocumentState<T> {
  const [state, setState] = useState<FirestoreDocumentState<T>>({
    data: null,
    loading: !!docRef,
    error: null
  })

  useEffect(() => {
    if (!docRef) {
      startTransition(() => {
        setState({ data: null, loading: false, error: 'Firebase config missing.' })
      })
      return
    }

    startTransition(() => {
      setState(prev => ({ ...prev, loading: true }))
    })

    const unsubscribe = onSnapshot(
      docRef,
      snapshot => {
        setState({
          data: snapshot.exists() ? snapshot.data() : null,
          loading: false,
          error: null
        })
      },
      error => {
        console.error('Firestore document error', error)
        setState({
          data: null,
          loading: false,
          error: error.message
        })
      }
    )

    return () => unsubscribe()
  }, [docRef])

  return state
}
