'use client'

import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import ProductShowcase from './components/sections/ProductShowcase'
import Lifestyle from './components/sections/Lifestyle'
import Features from './components/sections/Features'
import CFDAnalysis from './components/sections/CFDAnalysis'
import CustomNumbers from './components/sections/CustomNumbers'
import CenterLockSystem from './components/sections/CenterLockSystem'
import ProtectionFeatures from './components/sections/ProtectionFeatures'
import VideoSection from './components/sections/VideoSection'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'
import FloatingWhatsApp from './components/shared/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Lifestyle />
      <Features />
      {/* Technical Deep-Dive Sections */}
      <CFDAnalysis />
      <CustomNumbers />
      <CenterLockSystem />
      <ProtectionFeatures />
      {/* End Technical Sections */}
      <VideoSection />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
