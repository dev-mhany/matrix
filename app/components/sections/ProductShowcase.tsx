'use client'

import { useMemo, useState } from 'react'
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
  Stack
} from '@mui/material'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import { trackVariantSelected, trackModelSelected } from '../analytics/GTMEvents'
import type {
  Category,
  FirestoreCarType,
  LocalizedString,
  ProductVariant
} from '@/app/types'

interface ProductShowcaseProps {
  title: LocalizedString
  subtitle: LocalizedString
  currency: LocalizedString
  modelPickerLabel?: LocalizedString
  variants: ProductVariant[]
  carTypes: FirestoreCarType[]
  category?: Category
}

const getCarTypeValue = (carType?: FirestoreCarType) =>
  carType?.name?.en || carType?.name?.ar || ''

export default function ProductShowcase({
  title,
  subtitle,
  currency,
  modelPickerLabel,
  variants,
  carTypes,
  category = 'tesla'
}: ProductShowcaseProps) {
  const { locale } = useLanguage()
  const [selectedVariantName, setSelectedVariantName] = useState<string>('')
  const [selectedModelName, setSelectedModelName] = useState<string>('')

  const activeVariantName = useMemo(() => {
    if (variants.some(variant => variant.name === selectedVariantName)) {
      return selectedVariantName
    }
    return variants[0]?.name ?? ''
  }, [variants, selectedVariantName])

  const activeVariantData = useMemo(
    () => variants.find(v => v.name === activeVariantName),
    [variants, activeVariantName]
  )

  const modelOptions = useMemo(
    () =>
      carTypes.map(carType => ({
        id: carType.id,
        value: getCarTypeValue(carType),
        label: carType.name
      })),
    [carTypes]
  )

  const activeModelName = useMemo(() => {
    if (modelOptions.some(option => option.value === selectedModelName)) {
      return selectedModelName
    }
    return modelOptions[0]?.value || ''
  }, [modelOptions, selectedModelName])

  const handleVariantChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedVariantName(newValue)
    trackVariantSelected(newValue)
  }

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newModel = event.target.value
    setSelectedModelName(newModel)
    trackModelSelected(newModel)
  }

  return (
    <Box
      id='product-showcase'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h2' gutterBottom>
            {title[locale]}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            {subtitle[locale]}
          </Typography>
        </Box>

        {/* Variant Tabs */}
        {variants.length > 1 && (
          <Tabs
            value={activeVariantName}
            onChange={handleVariantChange}
            centered
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: { xs: 100, md: 150 }
              }
            }}
          >
            {variants.map(v => (
              <Tab key={v.name} label={v.name} value={v.name} />
            ))}
          </Tabs>
        )}

        <Grid container spacing={4} alignItems='center'>
          {/* Images */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {activeVariantData?.images.map((image, index) => (
                <Grid item xs={12} sm={index === 0 ? 12 : 6} key={image}>
                  <Card
                    className='hover-scale'
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      backgroundColor: 'background.paper'
                    }}
                  >
                    <CardMedia
                      component='img'
                      image={image}
                      alt={`${activeVariantName} - Image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: index === 0 ? 400 : 250,
                        objectFit: 'cover'
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
                <Typography variant='h4' gutterBottom color='text.primary'>
                  {activeVariantData?.name}
                </Typography>
                <Typography variant='h5' color='primary.main' gutterBottom>
                  {currency[locale]} {activeVariantData?.price.toLocaleString()}
                </Typography>
                <Typography variant='body1' color='text.secondary' sx={{ mb: 2 }}>
                  {activeVariantData?.description[locale]}
                </Typography>
              </Box>

              {/* Model Picker */}
              {carTypes.length > 0 && (
                <Box>
                  <Typography variant='h6' gutterBottom color='text.primary'>
                    {modelPickerLabel ? modelPickerLabel[locale] : 'Select Your Model'}
                  </Typography>
                  <RadioGroup value={activeModelName} onChange={handleModelChange}>
                    {modelOptions.map(option => (
                      <FormControlLabel
                        key={option.id ?? option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label[locale]}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              )}

              {/* CTA */}
              <WhatsAppButton
                category={category}
                variant={activeVariantName}
                model={activeModelName}
                placement='product-showcase'
                size='large'
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
  )
}
