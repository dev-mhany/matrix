'use client'

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { useLanguage } from '../LanguageContext'
import { content } from '@/app/lib/content'

export default function Features() {
  const { locale } = useLanguage()

  return (
    <Box
      id='features'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='h2' gutterBottom>
            {content.features.title[locale]}
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {content.features.items.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className='card-hover'
                elevation={2}
                sx={{
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      fontSize: '4rem',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant='h5'
                    gutterBottom
                    fontWeight={600}
                    color='text.primary'
                  >
                    {feature.title[locale]}
                  </Typography>

                  {/* Description */}
                  <Typography variant='body2' color='text.secondary'>
                    {feature.description[locale]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
