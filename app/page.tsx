'use client'

import { useState, useEffect } from 'react'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import FloatingWhatsApp from './components/shared/FloatingWhatsApp'
import CategoryCard from './components/shared/CategoryCard'
import CategoryTestimonials from './components/sections/CategoryTestimonials'
import { Box, Container, Typography, Grid, useTheme, Card, CardContent, Chip, Button, IconButton, Stack } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useLanguage } from './components/LanguageContext'
import { mainPage, categories } from './lib/content'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { locale } = useLanguage()
  const theme = useTheme()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const carouselImages = mainPage.hero.carouselImages

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <>
      <Header />
      
      {/* Hero Section with Carousel */}
      <Box
        sx={{
          minHeight: { xs: '85vh', md: '95vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: theme.tokens.gradients.bg,
          overflow: 'hidden',
        }}
      >
        {/* Carousel Background Images */}
        {carouselImages.map((image, index) => (
          <Box
            key={image}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: index === activeImageIndex ? 0.15 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 0,
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: theme.tokens.gradients.radialPrimary,
            zIndex: 1,
          }}
        />

        {/* Navigation Buttons */}
        {carouselImages.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: { xs: 10, md: 30 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                backgroundColor: 'background.paper',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
                boxShadow: theme.tokens.shadows.card,
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: 10, md: 30 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                backgroundColor: 'background.paper',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
                boxShadow: theme.tokens.shadows.card,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}

        {/* Dots Indicator */}
        {carouselImages.length > 1 && (
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{
              position: 'absolute',
              bottom: { xs: 20, md: 40 },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}
          >
            {carouselImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveImageIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: index === activeImageIndex ? 'primary.main' : 'background.paper',
                  opacity: index === activeImageIndex ? 1 : 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Stack>
        )}

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            className="animate-fade-in-up"
            sx={{
              maxWidth: 900,
              mx: 'auto',
              textAlign: 'center',
              pt: { xs: 8, md: 0 },
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 3,
                background: theme.tokens.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              {mainPage.hero.headline[locale]}
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 4,
                lineHeight: 1.6,
                fontWeight: 400,
                px: { xs: 2, md: 0 },
              }}
            >
              {mainPage.hero.subheadline[locale]}
            </Typography>

            {/* Badges */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mb: 5,
              }}
            >
              <Chip
                label={mainPage.hero.badges.freeDelivery[locale]}
                sx={{
                  fontSize: '0.95rem',
                  py: 2.5,
                  px: 1,
                  fontWeight: 600,
                  backgroundColor: 'background.paper',
                  boxShadow: theme.tokens.shadows.card,
                }}
              />
              <Chip
                label={mainPage.hero.badges.quality[locale]}
                sx={{
                  fontSize: '0.95rem',
                  py: 2.5,
                  px: 1,
                  fontWeight: 600,
                  backgroundColor: 'background.paper',
                  boxShadow: theme.tokens.shadows.card,
                }}
              />
              <Chip
                label={mainPage.hero.badges.support[locale]}
                sx={{
                  fontSize: '0.95rem',
                  py: 2.5,
                  px: 1,
                  fontWeight: 600,
                  backgroundColor: 'background.paper',
                  boxShadow: theme.tokens.shadows.card,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        id="features"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>
              {mainPage.features.title[locale]}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {mainPage.features.subtitle[locale]}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {mainPage.features.items.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  className="card-hover"
                  elevation={2}
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.default',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box
                      sx={{
                        fontSize: '4rem',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight={600} color="text.primary">
                      {feature.title[locale]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {feature.description[locale]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              {mainPage.stats.title[locale]}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {mainPage.stats.items.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      background: theme.tokens.gradients.text,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label[locale]}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Category Showcase Section */}
      <Box
        id="categories"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              {mainPage.categories.title[locale]}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {mainPage.categories.subtitle[locale]}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CategoryCard
                title={categories.tesla.name}
                description={categories.tesla.description}
                image={categories.tesla.image}
                href={categories.tesla.href}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CategoryCard
                title={categories.jetour.name}
                description={categories.jetour.description}
                image={categories.jetour.image}
                href={categories.jetour.href}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CategoryCard
                title={categories.leopard.name}
                description={categories.leopard.description}
                image={categories.leopard.image}
                href={categories.leopard.href}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <CategoryTestimonials
        title={mainPage.testimonials.title}
        items={mainPage.testimonials.items}
      />

      {/* Final CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          backgroundColor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: theme.tokens.gradients.radialPrimary,
            opacity: 0.5,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 3,
                background: theme.tokens.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {mainPage.finalCta.headline[locale]}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 5,
                lineHeight: 1.7,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              {mainPage.finalCta.subheadline[locale]}
            </Typography>
            <Button
              component={Link}
              href="#categories"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                py: 2,
                px: 6,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 3,
              }}
            >
              {mainPage.finalCta.cta[locale]}
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
