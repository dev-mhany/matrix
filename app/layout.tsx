import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from './components/LanguageContext'
import { ThemeModeProvider } from './components/ThemeModeContext'
import ThemeRegistry from './components/ThemeRegistry'
import './globals.css'
import './animations.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Matrix AeroCovers V2 - Premium Tesla Wheel Covers | UAE',
  description:
    'Transform your Tesla Model 3 & Y with Matrix AeroCovers V2. Premium Matte Black, Gloss White & Carbon Fiber designs. Free UAE delivery, 5-minute install, 14-day guarantee. Order now on WhatsApp.',
  keywords: [
    'Tesla accessories',
    'Tesla wheel covers',
    'Tesla Model 3',
    'Tesla Model Y',
    'AeroCovers',
    'UAE Tesla',
    'Dubai Tesla',
    'Carbon fiber wheel covers'
  ],
  authors: [{ name: 'Matrix' }],
  openGraph: {
    title: 'Matrix AeroCovers V2 - Premium Tesla Wheel Covers',
    description:
      'Premium wheel covers for Tesla Model 3 & Y. Free UAE delivery, easy install, 14-day guarantee.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_AE',
    siteName: 'Matrix AeroCovers'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrix AeroCovers V2 - Premium Tesla Wheel Covers',
    description: 'Transform your Tesla with premium AeroCovers. Free UAE delivery.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Product */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Matrix AeroCovers V2',
              description:
                'Premium wheel covers for Tesla Model 3 and Model Y with aerodynamic efficiency and luxury aesthetics',
              brand: {
                '@type': 'Brand',
                name: 'Matrix'
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'AED',
                lowPrice: '1299',
                highPrice: '1499',
                availability: 'https://schema.org/InStock'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '87'
              }
            })
          }}
        />

        {/* GTM Script */}
        {gtmId && (
          <Script
            id='gtm-script'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `
            }}
          />
        )}
      </head>
      <body className={geistSans.variable}>
        {/* GTM noscript */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <LanguageProvider>
          <ThemeModeProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
          </ThemeModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
