'use client'

import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

// Create cache for LTR (Left-to-Right) layout
export function createEmotionCacheLTR() {
  return createCache({ key: 'css', prepend: true })
}

// Create cache for RTL (Right-to-Left) layout with stylis RTL plugin
export function createEmotionCacheRTL() {
  return createCache({
    key: 'css-rtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin]
  })
}
