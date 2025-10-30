'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createEmotionCacheLTR, createEmotionCacheRTL } from '@/app/lib/createEmotionCache';
import { createAppTheme } from '@/app/theme/theme';
import { useLanguage } from './LanguageContext';
import { useThemeMode } from './ThemeModeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const { mode } = useThemeMode();
  
  // Use different cache for RTL
  const cache = React.useMemo(
    () => (locale === 'ar' ? createEmotionCacheRTL() : createEmotionCacheLTR()),
    [locale]
  );

  // Create theme based on current mode
  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

