'use client'

import Image from 'next/image'

/**
 * HALOBLK-Style Feature Grid Component
 *
 * Features:
 * - Image + Text cards
 * - 2-column responsive layout
 * - Clean, professional design
 *
 * Based on HALOBLK's feature showcase sections
 */

const features = [
  {
    title: 'Extended Range',
    description:
      'Optimized airflow helps increase up to 10% range, letting you go farther on every charge.',
    image: '/images/features/range-boost.jpg',
    imageAlt: 'Wheel showing aerodynamic design'
  },
  {
    title: 'Center Lock System',
    description:
      'The HALOBLK Center Lock offers quick installation with its modular design, saving time and effort. Made with durable POM material and rubber anti-slip gasket.',
    image: '/images/features/center-lock.jpg',
    imageAlt: 'Center lock mechanism detail'
  },
  {
    title: 'CFD-Proven Efficiency',
    description:
      'Advanced computational fluid dynamics testing shows improved aerodynamics with a tighter rear wake and lower overall drag at high speeds.',
    image: '/images/features/cfd-analysis.jpg',
    imageAlt: 'CFD analysis visualization'
  },
  {
    title: 'Premium Metallic Finish',
    description:
      'The HALODISC Custom Numbers debuts a unique "Metallic Red" cap finish through an advanced five-layer electroplating process.',
    image: '/images/features/metallic-cap.jpg',
    imageAlt: 'Metallic red cap detail'
  }
]

export default function FeatureGridExample() {
  return (
    <section className='w-full bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Engineered for Performance
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Every detail designed to enhance your Tesla&apos;s efficiency and style
          </p>
        </div>

        {/* Feature Grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
          {features.map((feature, index) => (
            <div key={index} className='group'>
              {/* Image */}
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg'>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className='text-2xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray-700 leading-relaxed'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Alternative: Horizontal Card Layout
 * Good for alternating left/right image placement
 */
export function HorizontalFeatureCards() {
  return (
    <section className='w-full bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 space-y-24'>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'md:grid-flow-dense' : ''
            }`}
          >
            {/* Image */}
            <div
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>

            {/* Text */}
            <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>{feature.title}</h3>
              <p className='text-lg text-gray-700 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * Alternative: Compact Feature Pills
 * Good for quick feature highlights
 */
export function FeaturePills() {
  const quickFeatures = [
    {
      icon: '⚡',
      title: 'Range Boost',
      description: 'Up to 10% increase'
    },
    {
      icon: '🔒',
      title: 'Anti-Theft',
      description: 'Center-lock system'
    },
    {
      icon: '⏱️',
      title: '30-Second Install',
      description: 'Quick & easy'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: '00-99 numbers'
    }
  ]

  return (
    <section className='w-full bg-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {quickFeatures.map((feature, index) => (
            <div
              key={index}
              className='text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors'
            >
              <div className='text-4xl mb-3'>{feature.icon}</div>
              <h4 className='font-bold mb-1'>{feature.title}</h4>
              <p className='text-sm text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Usage Examples:
 *
 * // Main grid layout
 * import FeatureGridExample from './components/examples/FeatureGridExample';
 * <FeatureGridExample />
 *
 * // Alternating horizontal cards
 * import { HorizontalFeatureCards } from './components/examples/FeatureGridExample';
 * <HorizontalFeatureCards />
 *
 * // Quick feature pills
 * import { FeaturePills } from './components/examples/FeatureGridExample';
 * <FeaturePills />
 */
