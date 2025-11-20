'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User
} from 'firebase/auth'
import { addDoc, deleteDoc, updateDoc, type FirestoreError } from 'firebase/firestore'

import { auth } from '@/app/lib/firebase'
import {
  carTypeDoc,
  carTypesCollection,
  categoryDoc,
  categoriesCollection,
  orderedCarTypesQuery,
  orderedCategoriesQuery,
  orderedProductsQuery,
  productById,
  productsCollection
} from '@/app/lib/firestore'
import { uploadFile, buildUploadPath, storage } from '@/app/lib/storage'
import { useFirestoreCollection } from '@/app/hooks/useFirestoreCollection'
import type { FirestoreCarType, FirestoreCategory, FirestoreProduct } from '@/app/types'
import CategoryForm from './components/CategoryForm'
import CarTypeForm from './components/CarTypeForm'
import ProductForm from './components/ProductForm'

const categoryTemplate: FirestoreCategory = {
  slug: '',
  name: { en: '', ar: '' },
  description: { en: '', ar: '' },
  image: '',
  hero: {
    headline: { en: '', ar: '' },
    subheadline: { en: '', ar: '' }
  },
  productShowcase: {
    title: { en: '', ar: '' },
    subtitle: { en: '', ar: '' },
    currency: { en: 'AED', ar: 'درهم' },
    modelPickerLabel: { en: 'Select Model', ar: 'اختر الموديل' }
  },
  features: {
    title: { en: '', ar: '' },
    items: []
  },
  lifestyle: {
    title: { en: '', ar: '' },
    subtitle: { en: '', ar: '' },
    images: []
  },
  pricing: {
    title: { en: '', ar: '' },
    subtitle: { en: '', ar: '' },
    currency: { en: 'AED', ar: 'درهم' },
    features: []
  },
  testimonials: {
    title: { en: '', ar: '' },
    items: []
  },
  faq: {
    title: { en: '', ar: '' },
    items: []
  },
  finalCta: {
    headline: { en: '', ar: '' },
    subheadline: { en: '', ar: '' },
    cta: { en: 'Order Now', ar: 'اطلب الآن' }
  }
}

const createCategoryDraft = (): FirestoreCategory => structuredClone(categoryTemplate)

const productTemplate: FirestoreProduct = {
  name: '',
  price: 0,
  images: [],
  description: { en: '', ar: '' },
  categoryId: '',
  carTypeIds: []
}

const createProductDraft = (): FirestoreProduct => structuredClone(productTemplate)

const carTypeTemplate: FirestoreCarType = {
  categoryId: '',
  name: { en: '', ar: '' },
  order: 0
}

const createCarTypeDraft = (): FirestoreCarType => structuredClone(carTypeTemplate)

type AdminTab = 'categories' | 'carTypes' | 'products'

const tabs: { value: AdminTab; label: string }[] = [
  { value: 'categories', label: 'Categories' },
  { value: 'carTypes', label: 'Car Types' },
  { value: 'products', label: 'Products' }
]

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(!!auth)
  const [authError, setAuthError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<AdminTab>('categories')

  useEffect(() => {
    if (!auth) return undefined

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setAuthLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!auth) {
      setAuthError('Firebase config missing.')
      return
    }
    setAuthError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      const message =
        (error as FirestoreError)?.message || 'Invalid credentials. Please try again.'
      setAuthError(message)
    }
  }

  const handleLogout = async () => {
    if (!auth) return
    await signOut(auth)
  }

  if (!auth) {
    return (
      <CenteredState>
        <Card sx={{ width: '100%', maxWidth: 480 }}>
          <CardContent>
            <Typography variant='h5' gutterBottom>
              Firebase Not Configured
            </Typography>
            <Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
              Add your Firebase web credentials to `.env.local` (see README) to enable the admin
              portal.
            </Typography>
          </CardContent>
        </Card>
      </CenteredState>
    )
  }

  if (authLoading) {
    return (
      <CenteredState>
        <Typography variant='h6'>Checking admin access…</Typography>
      </CenteredState>
    )
  }

  if (!user) {
    return (
      <CenteredState>
        <Card sx={{ width: '100%', maxWidth: 420 }}>
          <CardContent>
            <Typography variant='h5' gutterBottom>
              Admin Login
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              Sign in with your Firebase email/password credentials.
            </Typography>
            <Stack component='form' spacing={2} onSubmit={handleLogin}>
              <TextField
                label='Email'
                type='email'
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
                fullWidth
              />
              <TextField
                label='Password'
                type='password'
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
                fullWidth
              />
              {authError && <Alert severity='error'>{authError}</Alert>}
              <Button type='submit' variant='contained'>
                Sign In
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </CenteredState>
    )
  }

  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Box>
          <Typography variant='h4' fontWeight={700}>
            Catalog Admin
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Signed in as {user.email}
          </Typography>
        </Box>
        <Button variant='outlined' onClick={handleLogout}>
          Sign Out
        </Button>
      </Box>

      <Tabs
        value={activeTab}
        onChange={(_, value) => setActiveTab(value)}
        sx={{ mb: 4 }}
        variant='scrollable'
        scrollButtons='auto'
      >
        {tabs.map(tab => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>

      {activeTab === 'categories' && <CategoryManager />}
      {activeTab === 'carTypes' && <CarTypeManager />}
      {activeTab === 'products' && <ProductManager />}
    </Container>
  )
}

function CategoryManager() {
  const { data, loading, error } = useFirestoreCollection(orderedCategoriesQuery)
  const [draft, setDraft] = useState<FirestoreCategory>(createCategoryDraft)

  const slugMap = useMemo(() => {
    const map: Record<string, string> = {}
    data.forEach(category => {
      if (category.slug && category.id) {
        map[category.slug.toLowerCase()] = category.id
      }
    })
    return map
  }, [data])

  const handleUpdate = async (payload: FirestoreCategory) => {
    if (!payload.id) throw new Error('Category id missing')
    const ref = categoryDoc(payload.id)
    if (!ref) throw new Error('Firebase config missing.')
    const data = { ...payload }
    delete data.id
    await updateDoc(ref, data)
  }

  const handleDelete = async (id?: string) => {
    if (!id) return
    const ref = categoryDoc(id)
    if (!ref) throw new Error('Firebase config missing.')
    await deleteDoc(ref)
  }

  const handleCreate = async (payload: FirestoreCategory) => {
    if (!categoriesCollection) throw new Error('Firebase config missing.')
    const data = { ...payload }
    delete data.id
    await addDoc(categoriesCollection, data)
    setDraft(createCategoryDraft())
  }

  return (
    <Stack spacing={3}>
      <Typography variant='h5'>Categories</Typography>
      {error && <Alert severity='error'>{error}</Alert>}
      <CategoryForm
        isNew
        value={draft}
        existingSlugs={slugMap}
        onSave={handleCreate}
        onCreateReset={() => setDraft(createCategoryDraft())}
      />
      {loading && <Typography color='text.secondary'>Loading categories…</Typography>}
      {data.map(category => (
        <CategoryForm
          key={category.id}
          value={category}
          existingSlugs={slugMap}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      {!loading && !data.length && (
        <Typography color='text.secondary'>No categories found.</Typography>
      )}
    </Stack>
  )
}

function CarTypeManager() {
  const { data, loading, error } = useFirestoreCollection(orderedCarTypesQuery)
  const categoriesState = useFirestoreCollection(orderedCategoriesQuery)
  const [draft, setDraft] = useState<FirestoreCarType>(createCarTypeDraft)

  const handleUpdate = async (payload: FirestoreCarType) => {
    if (!payload.id) throw new Error('Car type id missing')
    const ref = carTypeDoc(payload.id)
    if (!ref) throw new Error('Firebase config missing.')
    const data = { ...payload }
    delete data.id
    await updateDoc(ref, data)
  }

  const handleDelete = async (id?: string) => {
    if (!id) return
    const ref = carTypeDoc(id)
    if (!ref) throw new Error('Firebase config missing.')
    await deleteDoc(ref)
  }

  const handleCreate = async (payload: FirestoreCarType) => {
    if (!carTypesCollection) throw new Error('Firebase config missing.')
    const data = { ...payload }
    delete data.id
    await addDoc(carTypesCollection, data)
    setDraft(createCarTypeDraft())
  }

  return (
    <Stack spacing={3}>
      <Typography variant='h5'>Car Types</Typography>
      {error && <Alert severity='error'>{error}</Alert>}
      <CarTypeForm
        categories={categoriesState.data}
        value={draft}
        isNew
        onSave={handleCreate}
        onCreateReset={() => setDraft(createCarTypeDraft())}
      />
      {(loading || categoriesState.loading) && (
        <Typography color='text.secondary'>Loading car types…</Typography>
      )}
      {data.map(carType => (
        <CarTypeForm
          key={carType.id}
          value={carType}
          categories={categoriesState.data}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      {!loading && !data.length && (
        <Typography color='text.secondary'>No car types found.</Typography>
      )}
    </Stack>
  )
}

interface ProductFormSubmitPayload {
  data: FirestoreProduct
  files: File[]
}

function ProductManager() {
  const productsState = useFirestoreCollection(orderedProductsQuery)
  const categoriesState = useFirestoreCollection(orderedCategoriesQuery)
  const carTypesState = useFirestoreCollection(orderedCarTypesQuery)
  const [draft, setDraft] = useState<FirestoreProduct>(createProductDraft)

  const handleUpdate = async (payload: ProductFormSubmitPayload) => {
    if (!payload.data.id) throw new Error('Product id missing')
    const ref = productById(payload.data.id)
    if (!ref) throw new Error('Firebase config missing.')
    const prepared = await prepareProductPayload(payload)
    const data = { ...prepared }
    delete data.id
    await updateDoc(ref, data)
  }

  const handleDelete = async (id?: string) => {
    if (!id) return
    const ref = productById(id)
    if (!ref) throw new Error('Firebase config missing.')
    await deleteDoc(ref)
  }

  const handleCreate = async (payload: ProductFormSubmitPayload) => {
    if (!productsCollection) throw new Error('Firebase config missing.')
    const prepared = await prepareProductPayload(payload)
    const data = { ...prepared }
    delete data.id
    await addDoc(productsCollection, data)
    setDraft(createProductDraft())
  }

  return (
    <Stack spacing={3}>
      <Typography variant='h5'>Products</Typography>
      {productsState.error && <Alert severity='error'>{productsState.error}</Alert>}
      <ProductForm
        value={draft}
        categories={categoriesState.data}
        carTypes={carTypesState.data}
        isNew
        onSave={handleCreate}
        onCreateReset={() => setDraft(createProductDraft())}
      />
      {(productsState.loading || categoriesState.loading || carTypesState.loading) && (
        <Typography color='text.secondary'>Loading products…</Typography>
      )}
      {productsState.data.map(product => (
        <ProductForm
          key={product.id}
          value={product}
          categories={categoriesState.data}
          carTypes={carTypesState.data}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      {!productsState.loading && !productsState.data.length && (
        <Typography color='text.secondary'>No products found.</Typography>
      )}
    </Stack>
  )
  async function prepareProductPayload(payload: ProductFormSubmitPayload): Promise<FirestoreProduct> {
    const { data, files } = payload
    if (!files.length) {
      return {
        ...data,
        images: data.images.filter(Boolean)
      }
    }

    if (!storage) {
      throw new Error('Firebase Storage is not configured.')
    }

    const basePath = `products/${data.categoryId || 'general'}`
    const uploaded = await Promise.all(
      files.map(file => uploadFile(buildUploadPath(basePath, file.name), file))
    )

    return {
      ...data,
      images: [...data.images.filter(Boolean), ...uploaded]
    }
  }
}

function CenteredState({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2
      }}
    >
      {children}
    </Box>
  )
}
