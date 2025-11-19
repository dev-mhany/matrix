'use client'

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { useLanguage } from '../LanguageContext'
import type { LocalizedString } from '@/app/types'

interface FeatureItem {
  icon: string
  title: LocalizedString
  description: LocalizedString
}

interface CategoryFeaturesProps {
  title: LocalizedString
  items: FeatureItem[]
}

export default function CategoryFeatures({ title, items }: CategoryFeaturesProps) {
  const { locale } = useLanguage()

  return (
    <Box
      id='features'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='h2' gutterBottom>
            {title[locale]}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.map((feature, index) => (
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
                  <Box
                    sx={{
                      fontSize: '4rem',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant='h5'
                    gutterBottom
                    fontWeight={600}
                    color='text.primary'
                  >
                    {feature.title[locale]}
                  </Typography>

                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ lineHeight: 1.7 }}
                  >
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
