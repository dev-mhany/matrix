export type Locale = 'en' | 'ar'

// Dynamic catalog relies on Firestore, so keep these aliases flexible
export type Category = string
export type Variant = string
export type Model = string

export interface LocalizedString {
  en: string
  ar: string
}

export interface CTAConfig {
  label: LocalizedString
  variant?: Variant
  model?: Model
  placement: string
}

export interface WhatsAppParams {
  category?: Category
  variant?: Variant
  model?: Model
  city?: string
  utm_source?: string
  utm_campaign?: string
  message?: string
}

export interface ProductVariant {
  id?: string
  name: string
  price: number
  images: string[]
  description: LocalizedString
  categoryId?: string
  carTypeIds?: string[]
  order?: number
}

export interface FirestoreProduct extends ProductVariant {
  categoryId: string
  carTypeIds?: string[]
}

export interface TestimonialItem {
  quote: LocalizedString
  author: LocalizedString
  role: LocalizedString
}

export interface FAQItem {
  q: LocalizedString
  a: LocalizedString
}

export interface FirestoreCarType {
  id?: string
  categoryId: string
  name: LocalizedString
  description?: LocalizedString
  order?: number
}

export interface CategoryFeature {
  icon?: string
  title: LocalizedString
  description: LocalizedString
}

export interface CategoryLifestyleImage {
  src: string
  title?: LocalizedString
  description?: LocalizedString
}

export interface CategoryLifestyleContent {
  title: LocalizedString
  subtitle: LocalizedString
  images?: CategoryLifestyleImage[]
}

export interface CategoryPricingContent {
  title: LocalizedString
  subtitle: LocalizedString
  note?: LocalizedString
  currency: LocalizedString
  features?: LocalizedString[]
}

export interface CategoryTestimonialsContent {
  title: LocalizedString
  items: TestimonialItem[]
}

export interface CategoryFAQContent {
  title: LocalizedString
  items: FAQItem[]
  bottomCta?: LocalizedString
}

export interface CategoryFinalCTAContent {
  headline: LocalizedString
  subheadline: LocalizedString
  cta: LocalizedString
}

export interface FirestoreCategory {
  id?: string
  slug: string
  name: LocalizedString
  description: LocalizedString
  image?: string
  hero: {
    headline: LocalizedString
    subheadline: LocalizedString
    backgroundImage?: string
  }
  productShowcase: {
    title: LocalizedString
    subtitle: LocalizedString
    currency: LocalizedString
    modelPickerLabel?: LocalizedString
  }
  features: {
    title: LocalizedString
    items: CategoryFeature[]
  }
  lifestyle: CategoryLifestyleContent
  pricing: CategoryPricingContent
  testimonials: CategoryTestimonialsContent
  faq: CategoryFAQContent
  finalCta: CategoryFinalCTAContent
}
