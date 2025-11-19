'use client'

import { Box, Container, Typography, useTheme } from '@mui/material'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import { content } from '@/app/lib/content'

export default function FinalCTA() {
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
            {content.finalCta.headline[locale]}
          </Typography>

          <Typography
            variant='h6'
            color='text.secondary'
            sx={{
              mb: 5,
              lineHeight: 1.8
            }}
          >
            {content.finalCta.subheadline[locale]}
          </Typography>

          <WhatsAppButton
            category='tesla'
            placement='final-cta'
            size='large'
            isPrimary
            showText
            customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
          />
        </Box>
      </Container>
    </Box>
  )
}
