'use client'

import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import ProductShowcase from '../components/sections/ProductShowcase'
import Lifestyle from '../components/sections/Lifestyle'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Footer from '../components/sections/Footer'
import FloatingWhatsApp from '../components/shared/FloatingWhatsApp'

export default function TeslaPage() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Lifestyle />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
