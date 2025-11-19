'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme
} from '@mui/material'
import WhatsAppButton from '../shared/WhatsAppButton'
import { useLanguage } from '../LanguageContext'
import { content } from '@/app/lib/content'

export default function Lifestyle() {
  const { locale } = useLanguage()
  const theme = useTheme()

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth='lg'>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h2' gutterBottom>
            {content.lifestyle.title[locale]}
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            {content.lifestyle.subtitle[locale]}
          </Typography>
        </Box>

        {/* Split Images */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: 400
              }}
            >
              <CardMedia
                component='img'
                image='/images/lifestyle/lifestyle-car-1.jpg'
                alt='Tesla Model Y with HALODISC 2'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: theme.tokens.gradients.overlay,
                  p: 3
                }}
              >
                <Typography variant='h5' fontWeight={700}>
                  {locale === 'en' ? 'Tesla Model Y' : 'تسلا موديل Y'}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {locale === 'en'
                    ? 'Fits 18", 19", 20" wheels perfectly'
                    : 'تناسب العجلات مقاس 18" و19" و20" تمامًا'}
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              className='hover-lift'
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: 400
              }}
            >
              <CardMedia
                component='img'
                image='/images/lifestyle/lifestyle-car-2.jpg'
                alt='Tesla Model X with HALODISC 2'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: theme.tokens.gradients.overlay,
                  p: 3
                }}
              >
                <Typography variant='h5' fontWeight={700}>
                  {locale === 'en' ? 'Tesla Model X' : 'تسلا موديل X'}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {locale === 'en'
                    ? 'Custom numbers on rear wheels'
                    : 'أرقام مخصصة على العجلات الخلفية'}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Tesla Models */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: 400
              }}
            >
              <CardMedia
                component='img'
                image='/images/lifestyle/lifestyle-car-3.jpg'
                alt='Tesla Model 3 with HALODISC 2'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: theme.tokens.gradients.overlay,
                  p: 3
                }}
              >
                <Typography variant='h5' fontWeight={700}>
                  {locale === 'en' ? 'Tesla Model 3' : 'تسلا موديل 3'}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {locale === 'en'
                    ? 'Aerodynamic efficiency proven'
                    : 'كفاءة ديناميكية هوائية مثبتة'}
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: 400
              }}
            >
              <CardMedia
                component='img'
                image='/images/lifestyle/lifestyle-car-4.jpg'
                alt='Tesla Model S with HALODISC 2'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: theme.tokens.gradients.overlay,
                  p: 3
                }}
              >
                <Typography variant='h5' fontWeight={700}>
                  {locale === 'en' ? 'Tesla Model S' : 'تسلا موديل S'}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {locale === 'en' ? '30-second installation' : 'تركيب في 30 ثانية'}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <WhatsAppButton
            placement='lifestyle'
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
