'use client'

import { Box, Container, Typography, useTheme } from '@mui/material'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import type { LocalizedString, Category } from '@/app/types'

interface CategoryFinalCTAProps {
  headline: LocalizedString
  subheadline: LocalizedString
  cta: LocalizedString
  category: Category
}

export default function CategoryFinalCTA({
  headline,
  subheadline,
  cta,
  category
}: CategoryFinalCTAProps) {
  const { locale } = useLanguage()
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.tokens.colors.bgPaper} 0%, ${theme.tokens.colors.bgDark} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: theme.tokens.gradients.radialDark
        }
      }}
    >
      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 3
            }}
          >
            {headline[locale]}
          </Typography>

          <Typography
            variant='h6'
            color='text.secondary'
            sx={{
              mb: 5,
              lineHeight: 1.8
            }}
          >
            {subheadline[locale]}
          </Typography>

          <WhatsAppButton
            category={category}
            placement='final-cta'
            size='large'
            isPrimary
            showText
            customText={cta[locale]}
          />
        </Box>
      </Container>
    </Box>
  )
}
