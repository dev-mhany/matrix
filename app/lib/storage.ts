import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

import { firebaseApp } from './firebase'

export const storage = firebaseApp ? getStorage(firebaseApp) : null

export async function uploadFile(
  path: string,
  file: File | Blob
): Promise<string> {
  if (!storage) {
    throw new Error('Firebase Storage is not configured.')
  }

  const storageRef = ref(storage, path)
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}

export function buildUploadPath(bucket: string, fileName: string) {
  const sanitizedName = fileName.replace(/\s+/g, '-').toLowerCase()
  const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return `${bucket}/${uniqueSuffix}-${sanitizedName}`
}

