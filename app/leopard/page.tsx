'use client'

import Header from '../components/sections/Header'
import CategoryHero from '../components/sections/CategoryHero'
import CategoryProductShowcase from '../components/sections/CategoryProductShowcase'
import CategoryFeatures from '../components/sections/CategoryFeatures'
import CategoryLifestyle from '../components/sections/CategoryLifestyle'
import CategoryPricing from '../components/sections/CategoryPricing'
import CategoryTestimonials from '../components/sections/CategoryTestimonials'
import CategoryFAQ from '../components/sections/CategoryFAQ'
import CategoryFinalCTA from '../components/sections/CategoryFinalCTA'
import Footer from '../components/sections/Footer'
import FloatingWhatsApp from '../components/shared/FloatingWhatsApp'
import { leopardContent, leopardVariants } from '../lib/content'

export default function LeopardPage() {
  return (
    <>
      <Header />
      <CategoryHero
        headline={leopardContent.hero.headline}
        subheadline={leopardContent.hero.subheadline}
        category='leopard'
        backgroundImage='/images/leopard/roof-rack-lifestyle-1.jpg'
      />
      <CategoryProductShowcase
        title={leopardContent.productShowcase.title}
        subtitle={leopardContent.productShowcase.subtitle}
        variants={leopardVariants}
        category='leopard'
        currency={leopardContent.pricing.currency}
      />
      <CategoryFeatures
        title={leopardContent.features.title}
        items={leopardContent.features.items}
      />
      <CategoryLifestyle
        title={leopardContent.lifestyle.title}
        subtitle={leopardContent.lifestyle.subtitle}
        category='leopard'
        images={leopardContent.lifestyle.images}
      />
      <CategoryPricing
        title={leopardContent.pricing.title}
        subtitle={leopardContent.pricing.subtitle}
        variants={leopardVariants}
        category='leopard'
        currency={leopardContent.pricing.currency}
        features={leopardContent.pricing.features}
      />
      <CategoryTestimonials
        title={leopardContent.testimonials.title}
        items={leopardContent.testimonials.items}
      />
      <CategoryFAQ
        title={leopardContent.faq.title}
        items={leopardContent.faq.items}
        bottomCta={leopardContent.faq.bottomCta}
      />
      <CategoryFinalCTA
        headline={leopardContent.finalCta.headline}
        subheadline={leopardContent.finalCta.subheadline}
        cta={leopardContent.finalCta.cta}
        category='leopard'
      />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
