'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import { content } from '@/app/lib/content';

export default function Hero() {
  const { locale } = useLanguage();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: theme.tokens.gradients.bg,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/images/features/color-options.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: theme.tokens.gradients.radialPrimary,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          className="animate-fade-in-up"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            textAlign: 'center',
            pt: { xs: 8, md: 0 },
          }}
        >
          {/* Headline */}
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 3,
                background: theme.tokens.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {content.hero.headline[locale]}
            </Typography>

          {/* Subheadline */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 5,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {content.hero.subheadline[locale]}
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <WhatsAppButton
              category="tesla"
              placement="hero-primary"
              size="large"
              isPrimary
              showText
              customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

