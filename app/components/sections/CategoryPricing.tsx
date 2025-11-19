'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Image from 'next/image'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import type { ProductVariant, Category } from '@/app/types'

interface CategoryPricingProps {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  variants: ProductVariant[]
  category: Category
  currency: { en: string; ar: string }
  features: Array<{ en: string; ar: string }>
}

export default function CategoryPricing({
  title,
  subtitle,
  variants,
  category,
  currency,
  features
}: CategoryPricingProps) {
  const { locale } = useLanguage()

  return (
    <Box
      id='pricing'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant='h2' gutterBottom>
            {title[locale]}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            {subtitle[locale]}
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {variants.map((variant, index) => (
            <Grid
              item
              xs={12}
              md={variants.length === 1 ? 12 : variants.length === 2 ? 6 : 4}
              key={variant.name}
            >
              <Card
                className='card-hover'
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                {/* Product Image */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 240
                  }}
                >
                  <Image
                    src={variant.images[0]}
                    alt={variant.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  {/* Variant Name */}
                  <Typography
                    variant='h4'
                    gutterBottom
                    fontWeight={700}
                    color='text.primary'
                  >
                    {variant.name}
                  </Typography>

                  {/* Price */}
                  <Typography
                    variant='h3'
                    color='primary.main'
                    gutterBottom
                    fontWeight={700}
                  >
                    {currency[locale]} {variant.price.toLocaleString()}
                  </Typography>

                  {/* Description */}
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                    {variant.description[locale]}
                  </Typography>

                  {/* Features */}
                  <List sx={{ mb: 3 }}>
                    {features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color='primary' fontSize='small' />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature[locale]}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* CTA */}
                  <WhatsAppButton
                    category={category}
                    variant={category === 'tesla' ? (variant.name as any) : undefined}
                    placement={`pricing-${index}`}
                    size='large'
                    fullWidth
                    isPrimary={index === 0}
                    showText
                    customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
                    message={
                      category !== 'tesla'
                        ? `Hi Matrix! I'm interested in ${variant.name}.\n\nPlease share more details and pricing. Thank you!`
                        : undefined
                    }
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
