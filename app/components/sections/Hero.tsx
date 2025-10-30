'use client';

import { Box, Container, Typography, Stack, Chip, useTheme } from '@mui/material';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import { content } from '@/app/lib/content';

export default function Hero() {
  const { locale } = useLanguage();
  const theme = useTheme();

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          {/* Trust Badges */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 4 }}
          >
            <Chip
              label={content.hero.badges.freeDelivery[locale]}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main + '1A', // 10% opacity
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
            <Chip
              label={content.hero.badges.easyInstall[locale]}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main + '1A',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
            <Chip
              label={content.hero.badges.customizable[locale]}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main + '1A',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
          </Stack>

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
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <WhatsAppButton
              placement="hero-primary"
              size="large"
              isPrimary
              showText
              customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
            />
            <Box
              component="button"
              onClick={scrollToVideo}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.primary',
                backgroundColor: 'transparent',
                border: '2px solid',
                borderColor: (theme) => theme.palette.text.primary + '3D', // 23% opacity
                borderRadius: theme.tokens.radius.md,
                cursor: 'pointer',
                transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: (theme) => theme.palette.primary.main + '14', // 8% opacity
                },
              }}
            >
              {content.hero.secondaryCta[locale]}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

