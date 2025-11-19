'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Stack,
  TextField
} from '@mui/material'
import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import WhatsAppButton from '../shared/WhatsAppButton'

export default function CustomNumbers() {
  const { locale } = useLanguage()
  const [selectedNumber, setSelectedNumber] = useState('52')
  const [customText, setCustomText] = useState('')

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 2)
    setSelectedNumber(value)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.slice(0, 30)
    setCustomText(value)
  }

  return (
    <Box
      id='custom-numbers'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth='lg'>
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='overline'
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            {locale === 'en' ? 'MAKE IT YOURS' : 'اجعلها خاصة بك'}
          </Typography>
          <Typography variant='h2' gutterBottom>
            {locale === 'en'
              ? 'Choose Your Number, Define Your Story'
              : 'اختر رقمك، حدد قصتك'}
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            {locale === 'en'
              ? 'Pick any number from 00-99 and add optional custom text engraving up to 30 characters. Your wheels, your message.'
              : 'اختر أي رقم من 00-99 وأضف نقشًا نصيًا مخصصًا اختياريًا يصل إلى 30 حرفًا. عجلاتك، رسالتك.'}
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems='center'>
          {/* Interactive Number Selector */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: 'background.default',
                border: '2px solid',
                borderColor: 'primary.main'
              }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    {locale === 'en'
                      ? '🔢 Pick Your Number (00-99)'
                      : '🔢 اختر رقمك (00-99)'}
                  </Typography>
                  <TextField
                    fullWidth
                    value={selectedNumber}
                    onChange={handleNumberChange}
                    placeholder='52'
                    inputProps={{
                      maxLength: 2,
                      style: {
                        fontSize: '3rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        letterSpacing: '0.5rem'
                      }
                    }}
                    sx={{
                      mt: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'background.paper'
                      }
                    }}
                  />
                  <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                    {locale === 'en'
                      ? 'Leading zeros supported (00, 01, 07, 09...)'
                      : 'الأصفار البادئة مدعومة (00، 01، 07، 09...)'}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    {locale === 'en'
                      ? '✍️ Custom Text (Optional)'
                      : '✍️ نص مخصص (اختياري)'}
                  </Typography>
                  <TextField
                    fullWidth
                    value={customText}
                    onChange={handleTextChange}
                    placeholder={
                      locale === 'en' ? 'Your message here...' : 'رسالتك هنا...'
                    }
                    multiline
                    rows={2}
                    inputProps={{
                      maxLength: 30
                    }}
                    sx={{
                      mt: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'background.paper'
                      }
                    }}
                  />
                  <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                    {locale === 'en'
                      ? `${customText.length}/30 characters • Spaces and punctuation allowed`
                      : `${customText.length}/30 حرفًا • المسافات وعلامات الترقيم مسموحة`}
                  </Typography>
                </Box>

                <WhatsAppButton
                  fullWidth
                  message={`I want custom numbers: ${selectedNumber}${customText ? ` with text: "${customText}"` : ''}`}
                >
                  {locale === 'en' ? 'Order Custom Numbers' : 'اطلب الأرقام المخصصة'}
                </WhatsAppButton>
              </Stack>
            </Card>
          </Grid>

          {/* Showcase Images */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component='img'
                  image='/images/technical/custom-numbers-showcase.jpg'
                  alt='Custom Numbers Showcase'
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Card>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <CardMedia
                      component='img'
                      image='/images/technical/numbers-detail-1.jpg'
                      alt='Number Detail 1'
                      sx={{ width: '100%', height: 'auto' }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <CardMedia
                      component='img'
                      image='/images/technical/numbers-detail-2.jpg'
                      alt='Number Detail 2'
                      sx={{ width: '100%', height: 'auto' }}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        {/* Number Grid Preview */}
        <Box sx={{ mt: 8 }}>
          <Typography variant='h4' textAlign='center' fontWeight={700} gutterBottom>
            {locale === 'en' ? '00-99 Preview' : 'معاينة 00-99'}
          </Typography>
          <Typography
            variant='body1'
            textAlign='center'
            color='text.secondary'
            sx={{ mb: 4 }}
          >
            {locale === 'en'
              ? 'Industrial typeface applied to both rear wheels (fronts are non-numbered)'
              : 'خط صناعي مطبق على كلا العجلتين الخلفيتين (الأمامية غير مرقمة)'}
          </Typography>
          <Card
            elevation={4}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              maxWidth: 900,
              mx: 'auto'
            }}
          >
            <CardMedia
              component='img'
              image='/images/technical/numbers-grid.jpg'
              alt='Numbers 00-99 Grid'
              sx={{ width: '100%', height: 'auto' }}
            />
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
