import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

const requiredKeys: Array<keyof typeof firebaseConfig> = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId'
]

const hasFirebaseConfig = requiredKeys.every(key => !!firebaseConfig[key])

let firebaseApp: FirebaseApp | undefined
let db: Firestore | undefined
let auth: Auth | undefined

if (hasFirebaseConfig) {
  firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
  db = getFirestore(firebaseApp)
  auth = getAuth(firebaseApp)
} else if (process.env.NODE_ENV !== 'production') {
  console.warn('Firebase config missing. Set NEXT_PUBLIC_FIREBASE_* env vars to enable Firestore.')
}

export { firebaseApp, db, auth, hasFirebaseConfig }
