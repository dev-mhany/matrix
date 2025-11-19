'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * HALOBLK-Style Product Gallery Component
 *
 * Features:
 * - Clickable thumbnail navigation
 * - Large main image display
 * - Zoom functionality
 * - Responsive design
 *
 * Based on HALOBLK product page analysis
 */

interface ProductImage {
  src: string
  alt: string
  thumbnail?: string
}

const productImages: ProductImage[] = [
  {
    src: '/images/gallery/product-main-white.jpg',
    alt: 'HALODISC 2 Wheel Cover - Main View'
  },
  {
    src: '/images/gallery/product-angle-1.jpg',
    alt: 'HALODISC 2 Wheel Cover - Angle View 1'
  },
  {
    src: '/images/gallery/product-angle-2.jpg',
    alt: 'HALODISC 2 Wheel Cover - Angle View 2'
  },
  {
    src: '/images/gallery/product-angle-3.jpg',
    alt: 'HALODISC 2 Wheel Cover - Angle View 3'
  },
  {
    src: '/images/lifestyle-cars/model-3.jpg',
    alt: 'Tesla Model 3 with HALODISC 2'
  },
  {
    src: '/images/lifestyle-cars/model-y.jpg',
    alt: 'Tesla Model Y with HALODISC 2'
  },
  {
    src: '/images/lifestyle-cars/model-x.jpg',
    alt: 'Tesla Model X with HALODISC 2'
  },
  {
    src: '/images/lifestyle-cars/model-s.jpg',
    alt: 'Tesla Model S with HALODISC 2'
  }
]

export default function ProductGalleryExample() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      {/* Main Gallery Container */}
      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Left Side - Image Gallery */}
        <div className='space-y-4'>
          {/* Main Image Display */}
          <div
            className='relative aspect-square bg-white rounded-lg overflow-hidden cursor-zoom-in'
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src={productImages[activeIndex].src}
              alt={productImages[activeIndex].alt}
              fill
              className={`object-cover transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              priority
            />

            {/* Zoom Indicator */}
            {!isZoomed && (
              <div className='absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm'>
                Click to zoom
              </div>
            )}
          </div>

          {/* Thumbnail Navigation */}
          <div className='grid grid-cols-4 gap-2'>
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setIsZoomed(false)
                }}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  activeIndex === index
                    ? 'border-black ring-2 ring-black/20'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 25vw, 10vw'
                />
              </button>
            ))}
          </div>

          {/* Navigation Arrows (optional) */}
          <div className='flex gap-2'>
            <button
              onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className='px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50 hover:bg-gray-200'
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setActiveIndex(prev => Math.min(productImages.length - 1, prev + 1))
              }
              disabled={activeIndex === productImages.length - 1}
              className='px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50 hover:bg-gray-200'
            >
              Next →
            </button>
          </div>
        </div>

        {/* Right Side - Product Details (Example) */}
        <div className='space-y-6'>
          <div>
            <p className='text-sm text-gray-500 uppercase tracking-wide'>
              Premium Wheel Covers
            </p>
            <h1 className='text-4xl font-bold mt-2'>HALODISC 2 Wheel Covers</h1>
            <p className='text-2xl font-semibold mt-4'>$299.00</p>
          </div>

          <div className='space-y-4'>
            <h3 className='font-semibold text-lg'>Product Features</h3>
            <ul className='space-y-2 text-gray-700'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Range Boost</strong> – Improves range by up to 10%, for every
                  trip.
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Full Protection</strong> – Wrap-around design prevents curb rash
                  & scratches.
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Anti-Theft Lock</strong> – Center-lock system, only removable by
                  owner.
                </div>
              </li>
            </ul>
          </div>

          {/* Color Selection Example */}
          <div className='space-y-3'>
            <label className='font-semibold text-sm'>Color</label>
            <div className='flex gap-3'>
              <button className='w-12 h-12 rounded-full bg-white border-2 border-black'></button>
              <button className='w-12 h-12 rounded-full bg-black border-2 border-gray-300'></button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className='w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors'>
            Add to Cart
          </button>

          {/* Trust Signals */}
          <div className='grid grid-cols-3 gap-4 pt-4 border-t'>
            <div className='text-center'>
              <p className='text-2xl font-bold'>30s</p>
              <p className='text-xs text-gray-600'>Installation</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold'>20+</p>
              <p className='text-xs text-gray-600'>Tesla Wheels</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold'>10%</p>
              <p className='text-xs text-gray-600'>Range Boost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
