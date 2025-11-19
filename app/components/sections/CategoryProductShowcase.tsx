'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import type { ProductVariant, Category } from '@/app/types';

interface CategoryProductShowcaseProps {
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  variants: ProductVariant[];
  category: Category;
  currency: { en: string; ar: string };
}

export default function CategoryProductShowcase({
  title,
  subtitle,
  variants,
  category,
  currency,
}: CategoryProductShowcaseProps) {
  const { locale } = useLanguage();
  const [activeVariant, setActiveVariant] = useState<string>(variants[0]?.name || '');

  const activeVariantData = variants.find((v) => v.name === activeVariant);

  const handleVariantChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveVariant(newValue);
  };

  return (
    <Box id="product-showcase" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            {title[locale]}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {subtitle[locale]}
          </Typography>
        </Box>

        {/* Variant Tabs */}
        {variants.length > 1 && (
          <Tabs
            value={activeVariant}
            onChange={handleVariantChange}
            centered
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: { xs: 100, md: 150 },
              },
            }}
          >
            {variants.map((v) => (
              <Tab key={v.name} label={v.name} value={v.name} />
            ))}
          </Tabs>
        )}

        <Grid container spacing={4} alignItems="center">
          {/* Images */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {activeVariantData?.images.map((image, index) => (
                <Grid item xs={12} sm={index === 0 ? 12 : 6} key={image}>
                  <Card
                    className="hover-scale"
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      backgroundColor: 'background.paper',
                      position: 'relative',
                      height: index === 0 ? 400 : 250,
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${activeVariant} - Image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Details */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {/* Variant Description */}
              <Box>
                <Typography variant="h4" gutterBottom color="text.primary">
                  {activeVariantData?.name}
                </Typography>
                <Typography variant="h5" color="primary.main" gutterBottom>
                  {currency[locale]} {activeVariantData?.price.toLocaleString()}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {activeVariantData?.description[locale]}
                </Typography>
              </Box>

              {/* CTA */}
              <WhatsAppButton
                category={category}
                variant={category === 'tesla' ? (activeVariantData?.name as any) : undefined}
                placement="product-showcase"
                size="large"
                fullWidth
                isPrimary
                showText
                customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
                message={
                  category !== 'tesla' && activeVariantData?.name
                    ? `Hi Matrix! I'm interested in ${activeVariantData.name}.\n\nPlease share more details and pricing. Thank you!`
                    : undefined
                }
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

