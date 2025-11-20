'use client'

import type { ReactNode } from 'react'

import { Box, CircularProgress, Typography } from '@mui/material'

import Header from '@/app/components/sections/Header'
import Footer from '@/app/components/sections/Footer'
import FloatingWhatsApp from '@/app/components/shared/FloatingWhatsApp'
import CategoryHero from '@/app/components/sections/CategoryHero'
import CategoryFeatures from '@/app/components/sections/CategoryFeatures'
import CategoryLifestyle from '@/app/components/sections/CategoryLifestyle'
import CategoryPricing from '@/app/components/sections/CategoryPricing'
import CategoryTestimonials from '@/app/components/sections/CategoryTestimonials'
import CategoryFAQ from '@/app/components/sections/CategoryFAQ'
import CategoryFinalCTA from '@/app/components/sections/CategoryFinalCTA'
import CategoryProductShowcase from '@/app/components/sections/CategoryProductShowcase'
import ProductShowcase from '@/app/components/sections/ProductShowcase'
import { useCategoryCatalog } from '@/app/hooks/useCategoryCatalog'

interface CategoryPageProps {
  slug: string
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const normalizedSlug = slug.toLowerCase()
  const { category, variants, carTypes, loading, error } = useCategoryCatalog(normalizedSlug)

  if (loading) {
    return (
      <>
        <Header />
        <FullPageState>
          <CircularProgress />
        </FullPageState>
      </>
    )
  }

  if (error || !category) {
    return (
      <>
        <Header />
        <FullPageState>
          <Typography variant='h6' color='text.secondary'>
            {error || 'Catalog data is unavailable right now.'}
          </Typography>
        </FullPageState>
      </>
    )
  }

  const showTeslaShowcase = (carTypes?.length ?? 0) > 0

  return (
    <>
      <Header />
      <CategoryHero
        headline={category.hero.headline}
        subheadline={category.hero.subheadline}
        category={category.slug}
        backgroundImage={category.hero.backgroundImage}
      />

      {showTeslaShowcase ? (
        <ProductShowcase
          title={category.productShowcase.title}
          subtitle={category.productShowcase.subtitle}
          currency={category.productShowcase.currency}
          modelPickerLabel={category.productShowcase.modelPickerLabel}
          variants={variants}
          carTypes={carTypes}
          category={category.slug}
        />
      ) : (
        <CategoryProductShowcase
          title={category.productShowcase.title}
          subtitle={category.productShowcase.subtitle}
          variants={variants}
          category={category.slug}
          currency={category.productShowcase.currency}
        />
      )}

      <CategoryFeatures title={category.features.title} items={category.features.items} />
      <CategoryLifestyle
        title={category.lifestyle.title}
        subtitle={category.lifestyle.subtitle}
        category={category.slug}
        images={category.lifestyle.images || []}
      />
      <CategoryPricing
        title={category.pricing.title}
        subtitle={category.pricing.subtitle}
        variants={variants}
        category={category.slug}
        currency={category.pricing.currency}
        features={category.pricing.features || []}
      />
      <CategoryTestimonials title={category.testimonials.title} items={category.testimonials.items} />
      <CategoryFAQ
        title={category.faq.title}
        items={category.faq.items}
        bottomCta={category.faq.bottomCta || category.finalCta.cta}
      />
      <CategoryFinalCTA
        headline={category.finalCta.headline}
        subheadline={category.finalCta.subheadline}
        cta={category.finalCta.cta}
        category={category.slug}
      />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function FullPageState({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3
      }}
    >
      {children}
    </Box>
  )
}

