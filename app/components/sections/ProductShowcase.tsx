'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Card,
  CardMedia,
  Stack,
} from '@mui/material';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import { content, variants } from '@/app/lib/content';
import { trackVariantSelected, trackModelSelected } from '../analytics/GTMEvents';
import type { Variant, Model } from '@/app/types';

export default function ProductShowcase() {
  const { locale } = useLanguage();
  const [activeVariant, setActiveVariant] = useState<Variant>('Matte Black');
  const [selectedModel, setSelectedModel] = useState<Model>('Tesla Model 3');

  const activeVariantData = variants.find((v) => v.name === activeVariant);

  const handleVariantChange = (_event: React.SyntheticEvent, newValue: Variant) => {
    setActiveVariant(newValue);
    trackVariantSelected(newValue);
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newModel = event.target.value as Model;
    setSelectedModel(newModel);
    trackModelSelected(newModel);
  };

  return (
    <Box id="product-showcase" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            {content.productShowcase.title[locale]}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {content.productShowcase.subtitle[locale]}
          </Typography>
        </Box>

        {/* Variant Tabs */}
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
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`${activeVariant} - Image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: index === 0 ? 400 : 250,
                        objectFit: 'cover',
                      }}
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
                  {activeVariant}
                </Typography>
                <Typography variant="h5" color="primary.main" gutterBottom>
                  {content.pricing.currency[locale]} {activeVariantData?.price.toLocaleString()}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {activeVariantData?.description[locale]}
                </Typography>
              </Box>

              {/* Model Picker */}
              <Box>
                <Typography variant="h6" gutterBottom color="text.primary">
                  {content.productShowcase.modelPicker.label[locale]}
                </Typography>
                <RadioGroup value={selectedModel} onChange={handleModelChange}>
                  <FormControlLabel
                    value="Tesla Model 3"
                    control={<Radio />}
                    label="Tesla Model 3"
                  />
                  <FormControlLabel
                    value="Tesla Model Y"
                    control={<Radio />}
                    label="Tesla Model Y"
                  />
                </RadioGroup>
              </Box>

              {/* CTA */}
              <WhatsAppButton
                variant={activeVariant}
                model={selectedModel}
                placement="product-showcase"
                size="large"
                fullWidth
                isPrimary
                showText
                customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

