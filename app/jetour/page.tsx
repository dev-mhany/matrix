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
import { jetourContent, jetourVariants } from '../lib/content'

export default function JetourPage() {
  return (
    <>
      <Header />
      <CategoryHero
        headline={jetourContent.hero.headline}
        subheadline={jetourContent.hero.subheadline}
        category='jetour'
        backgroundImage='/images/jetour/roof-rack-lifestyle-1.jpg'
      />
      <CategoryProductShowcase
        title={jetourContent.productShowcase.title}
        subtitle={jetourContent.productShowcase.subtitle}
        variants={jetourVariants}
        category='jetour'
        currency={jetourContent.pricing.currency}
      />
      <CategoryFeatures
        title={jetourContent.features.title}
        items={jetourContent.features.items}
      />
      <CategoryLifestyle
        title={jetourContent.lifestyle.title}
        subtitle={jetourContent.lifestyle.subtitle}
        category='jetour'
        images={jetourContent.lifestyle.images}
      />
      <CategoryPricing
        title={jetourContent.pricing.title}
        subtitle={jetourContent.pricing.subtitle}
        variants={jetourVariants}
        category='jetour'
        currency={jetourContent.pricing.currency}
        features={jetourContent.pricing.features}
      />
      <CategoryTestimonials
        title={jetourContent.testimonials.title}
        items={jetourContent.testimonials.items}
      />
      <CategoryFAQ
        title={jetourContent.faq.title}
        items={jetourContent.faq.items}
        bottomCta={jetourContent.faq.bottomCta}
      />
      <CategoryFinalCTA
        headline={jetourContent.finalCta.headline}
        subheadline={jetourContent.finalCta.subheadline}
        cta={jetourContent.finalCta.cta}
        category='jetour'
      />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
