import 'dotenv/config'
import admin from 'firebase-admin'

import {
  content as teslaContent,
  jetourContent,
  leopardContent,
  variants as teslaVariants,
  jetourVariants,
  leopardVariants,
  categories as homepageCategories
} from '../app/lib/content'
import type {
  FirestoreCarType,
  FirestoreCategory,
  FirestoreProduct,
  LocalizedString
} from '../app/types'

type SeedCategory = {
  category: FirestoreCategory
  carTypes: FirestoreCarType[]
  products: FirestoreProduct[]
}

function assertEnv(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

const projectId = assertEnv(process.env.FIREBASE_PROJECT_ID, 'FIREBASE_PROJECT_ID')
const clientEmail = assertEnv(process.env.FIREBASE_CLIENT_EMAIL, 'FIREBASE_CLIENT_EMAIL')
const privateKey = assertEnv(process.env.FIREBASE_PRIVATE_KEY, 'FIREBASE_PRIVATE_KEY').replace(
  /\\n/g,
  '\n'
)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey
    })
  })
}

const db = admin.firestore()

const teslaLifestyleImages = [
  {
    src: '/images/lifestyle/lifestyle-car-1.jpg',
    title: { en: 'Tesla Model Y', ar: 'تسلا موديل Y' },
    description: { en: 'Fits 18", 19", 20" wheels perfectly', ar: 'تناسب العجلات مقاس 18 و19 و20 تمامًا' }
  },
  {
    src: '/images/lifestyle/lifestyle-car-2.jpg',
    title: { en: 'Tesla Model X', ar: 'تسلا موديل X' },
    description: { en: 'Custom numbers on rear wheels', ar: 'أرقام مخصصة على العجلات الخلفية' }
  },
  {
    src: '/images/lifestyle/lifestyle-car-3.jpg',
    title: { en: 'Tesla Model 3', ar: 'تسلا موديل 3' },
    description: { en: 'Aerodynamic efficiency proven', ar: 'كفاءة ديناميكية هوائية مثبتة' }
  },
  {
    src: '/images/lifestyle/lifestyle-car-4.jpg',
    title: { en: 'Tesla Model S', ar: 'تسلا موديل S' },
    description: { en: '30-second installation', ar: 'تركيب في 30 ثانية' }
  }
]

const teslaCarTypes: FirestoreCarType[] = [
  {
    id: 'tesla-model-3',
    categoryId: 'tesla',
    name: { en: 'Tesla Model 3', ar: 'تسلا موديل 3' },
    description: {
      en: 'Compatible with 18", 19", and 20" factory wheels.',
      ar: 'متوافق مع العجلات المصنعية مقاس 18 و19 و20 بوصة.'
    },
    order: 1
  },
  {
    id: 'tesla-model-y',
    categoryId: 'tesla',
    name: { en: 'Tesla Model Y', ar: 'تسلا موديل Y' },
    description: {
      en: 'Perfect fit for all Model Y trims.',
      ar: 'تناسب مثالي لجميع فئات موديل Y.'
    },
    order: 2
  }
]

const teslaPricingFeatures: LocalizedString[] = [
  { en: 'Free UAE Delivery', ar: 'توصيل مجاني في الإمارات' },
  { en: '14-Day Money-Back Guarantee', ar: 'ضمان استرداد المال لمدة 14 يومًا' },
  { en: 'Custom numbers and engraving available', ar: 'أرقام ونقش مخصص متاح' },
  { en: 'Installs in 30 seconds', ar: 'تركيب في 30 ثانية' }
]

const seedData: SeedCategory[] = [
  {
    category: {
      slug: 'tesla',
      name: homepageCategories.tesla.name,
      description: homepageCategories.tesla.description,
      image: homepageCategories.tesla.image,
      hero: teslaContent.hero,
      productShowcase: {
        ...teslaContent.productShowcase,
        currency: teslaContent.pricing.currency
      },
      features: teslaContent.features,
      lifestyle: {
        title: teslaContent.lifestyle.title,
        subtitle: teslaContent.lifestyle.subtitle,
        images: teslaLifestyleImages
      },
      pricing: {
        title: teslaContent.pricing.title,
        subtitle: teslaContent.pricing.subtitle,
        note: teslaContent.pricing.note,
        currency: teslaContent.pricing.currency,
        features: teslaPricingFeatures
      },
      testimonials: teslaContent.testimonials,
      faq: teslaContent.faq,
      finalCta: teslaContent.finalCta
    },
    carTypes: teslaCarTypes,
    products: teslaVariants.map((variant, index) => ({
      name: variant.name,
      price: variant.price,
      images: variant.images,
      description: variant.description,
      categoryId: 'tesla',
      carTypeIds: teslaCarTypes.map(carType => carType.id as string).filter(Boolean),
      order: index + 1
    }))
  },
  {
    category: {
      slug: 'jetour',
      name: homepageCategories.jetour.name,
      description: homepageCategories.jetour.description,
      image: homepageCategories.jetour.image,
      hero: jetourContent.hero,
      productShowcase: {
        ...jetourContent.productShowcase,
        currency: jetourContent.pricing.currency
      },
      features: jetourContent.features,
      lifestyle: jetourContent.lifestyle,
      pricing: jetourContent.pricing,
      testimonials: jetourContent.testimonials,
      faq: jetourContent.faq,
      finalCta: jetourContent.finalCta
    },
    carTypes: [],
    products: jetourVariants.map((variant, index) => ({
      name: variant.name,
      price: variant.price,
      images: variant.images,
      description: variant.description,
      categoryId: 'jetour',
      order: index + 1
    }))
  },
  {
    category: {
      slug: 'leopard',
      name: homepageCategories.leopard.name,
      description: homepageCategories.leopard.description,
      image: homepageCategories.leopard.image,
      hero: leopardContent.hero,
      productShowcase: {
        ...leopardContent.productShowcase,
        currency: leopardContent.pricing.currency
      },
      features: leopardContent.features,
      lifestyle: leopardContent.lifestyle,
      pricing: leopardContent.pricing,
      testimonials: leopardContent.testimonials,
      faq: leopardContent.faq,
      finalCta: leopardContent.finalCta
    },
    carTypes: [],
    products: leopardVariants.map((variant, index) => ({
      name: variant.name,
      price: variant.price,
      images: variant.images,
      description: variant.description,
      categoryId: 'leopard',
      order: index + 1
    }))
  }
]

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

async function seed() {
  const categoriesCollection = db.collection('categories')
  const carTypesCollection = db.collection('carTypes')
  const productsCollection = db.collection('products')

  for (const seedItem of seedData) {
    const categoryId = seedItem.category.slug
    const categoryPayload = { ...seedItem.category }
    delete (categoryPayload as Partial<FirestoreCategory>).id

    console.log(`Seeding category: ${categoryId}`)
    await categoriesCollection.doc(categoryId).set(categoryPayload, { merge: true })

    for (const carType of seedItem.carTypes) {
      const carTypePayload = { ...carType }
      const carTypeId = carTypePayload.id || createSlug(`${categoryId}-${carType.name.en}`)
      carTypePayload.id = carTypeId
      console.log(`  ↳ Car type: ${carTypePayload.name.en}`)
      await carTypesCollection.doc(carTypeId).set(carTypePayload, { merge: true })
    }

    for (const product of seedItem.products) {
      const productPayload = { ...product, categoryId }
      const productId = createSlug(`${categoryId}-${product.name}`)
      console.log(`  ↳ Product: ${productPayload.name}`)
      await productsCollection.doc(productId).set(productPayload, { merge: true })
    }
  }

  console.log('Firestore seed completed successfully.')
}

seed()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Seed failed', error)
    process.exit(1)
  })

