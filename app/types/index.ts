export type Locale = 'en' | 'ar';

export type Variant = 'Matte Black' | 'Gloss White' | 'Carbon Fiber Edition';

export type Model = 'Tesla Model 3' | 'Tesla Model Y';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface CTAConfig {
  label: LocalizedString;
  variant?: Variant;
  model?: Model;
  placement: string;
}

export interface WhatsAppParams {
  variant?: Variant;
  model?: Model;
  city?: string;
  utm_source?: string;
  utm_campaign?: string;
  message?: string;
}

export interface ProductVariant {
  name: Variant;
  price: number;
  images: string[];
  description: LocalizedString;
}

export interface TestimonialItem {
  quote: LocalizedString;
  author: LocalizedString;
  role: LocalizedString;
}

export interface FAQItem {
  q: LocalizedString;
  a: LocalizedString;
}

