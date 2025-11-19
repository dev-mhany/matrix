'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, IconButton, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useLanguage } from '../LanguageContext';

interface Testimonial {
  quote: { en: string; ar: string };
  author: { en: string; ar: string };
  role: { en: string; ar: string };
}

interface CategoryTestimonialsProps {
  title: { en: string; ar: string };
  items: Testimonial[];
}

export default function CategoryTestimonials({
  title,
  items,
}: CategoryTestimonialsProps) {
  const { locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            {title[locale]}
          </Typography>
        </Box>

        {/* Testimonial Card */}
        <Card
          className="animate-fade-in"
          elevation={4}
          sx={{
            backgroundColor: 'background.default',
            borderRadius: 3,
            position: 'relative',
            minHeight: 300,
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
            {/* Quote Icon */}
            <FormatQuoteIcon
              sx={{
                fontSize: '4rem',
                color: 'primary.main',
                opacity: 0.3,
                mb: 2,
              }}
            />

            {/* Quote */}
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                mb: 4,
                fontStyle: 'italic',
                lineHeight: 1.8,
                minHeight: 120,
              }}
            >
              &ldquo;{items[activeIndex].quote[locale]}&rdquo;
            </Typography>

            {/* Author */}
            <Typography variant="h6" fontWeight={700} gutterBottom color="text.primary">
              {items[activeIndex].author[locale]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {items[activeIndex].role[locale]}
            </Typography>
          </CardContent>

          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  transform: 'translateY(-50%)',
                  px: { xs: 1, md: 2 },
                }}
              >
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Stack>

              {/* Dots Indicator */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ pb: 3 }}
              >
                {items.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: index === activeIndex ? 'primary.main' : 'text.secondary',
                      opacity: index === activeIndex ? 1 : 0.3,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Card>
      </Container>
    </Box>
  );
}

