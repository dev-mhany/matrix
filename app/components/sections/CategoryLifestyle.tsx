'use client';

import { Box, Container, Typography, Grid, Card, useTheme } from '@mui/material';
import Image from 'next/image';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import type { Category } from '@/app/types';

interface CategoryLifestyleProps {
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  category: Category;
  images: Array<{
    src: string;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
}

export default function CategoryLifestyle({
  title,
  subtitle,
  category,
  images,
}: CategoryLifestyleProps) {
  const { locale } = useLanguage();
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            {title[locale]}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            {subtitle[locale]}
          </Typography>
        </Box>

        {/* Images Grid */}
        <Grid container spacing={3}>
          {images.map((img, index) => (
            <Grid item xs={12} md={images.length === 2 ? 6 : 4} key={index}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  height: 400,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.title[locale]}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: theme.tokens.gradients.overlay,
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700}>
                    {img.title[locale]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {img.description[locale]}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <WhatsAppButton
            category={category}
            placement="lifestyle"
            size="large"
            isPrimary
            showText
            customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
          />
        </Box>
      </Container>
    </Box>
  );
}

