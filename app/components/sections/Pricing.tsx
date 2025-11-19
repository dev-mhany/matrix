'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import { content, variants } from '@/app/lib/content'
import type { Variant } from '@/app/types'

export default function Pricing() {
  const { locale } = useLanguage()

  const features = [
    { en: 'Free UAE Delivery', ar: 'توصيل مجاني في الإمارات' },
    { en: '14-Day Money-Back Guarantee', ar: 'ضمان استرداد المال لمدة 14 يومًا' },
    { en: 'Lifetime Warranty', ar: 'ضمان مدى الحياة' },
    { en: 'WhatsApp Support', ar: 'دعم واتساب' }
  ]

  return (
    <Box
      id='pricing'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant='h2' gutterBottom>
            {content.pricing.title[locale]}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ mb: 1 }}>
            {content.pricing.subtitle[locale]}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {content.pricing.note[locale]}
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {variants.map((variant, index) => (
            <Grid item xs={12} md={4} key={variant.name}>
              <Card
                className='card-hover'
                elevation={variant.name === 'Carbon Fiber Edition' ? 8 : 2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  position: 'relative',
                  border: variant.name === 'Carbon Fiber Edition' ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  transform:
                    variant.name === 'Carbon Fiber Edition' ? 'scale(1.05)' : 'none',
                  overflow: 'hidden'
                }}
              >
                {variant.name === 'Carbon Fiber Edition' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 3,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      zIndex: 1
                    }}
                  >
                    {locale === 'en' ? 'PREMIUM' : 'فاخر'}
                  </Box>
                )}

                {/* Product Image */}
                <CardMedia
                  component='img'
                  height='240'
                  image={variant.images[0]}
                  alt={variant.name}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: 'background.default'
                  }}
                />

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
                    {content.pricing.currency[locale]} {variant.price.toLocaleString()}
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
                    category='tesla'
                    variant={variant.name as Variant}
                    placement={`pricing-${index}`}
                    size='large'
                    fullWidth
                    isPrimary={variant.name === 'Carbon Fiber Edition'}
                    showText
                    customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
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
