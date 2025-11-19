'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import type { LocalizedString, Category } from '@/app/types';

interface CategoryHeroProps {
  headline: LocalizedString;
  subheadline: LocalizedString;
  backgroundImage?: string;
  category: Category;
}

export default function CategoryHero({
  headline,
  subheadline,
  backgroundImage,
  category,
}: CategoryHeroProps) {
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
        '&::before': backgroundImage
          ? {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
              zIndex: 0,
            }
          : {},
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
            {headline[locale]}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 5,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {subheadline[locale]}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <WhatsAppButton
              category={category}
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

