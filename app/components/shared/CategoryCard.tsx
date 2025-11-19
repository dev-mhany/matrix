'use client';

import { Card, CardContent, Typography, Box, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import type { LocalizedString } from '@/app/types';
import Link from 'next/link';

interface CategoryCardProps {
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  href: string;
  ctaText?: LocalizedString;
}

export default function CategoryCard({
  title,
  description,
  image,
  href,
  ctaText,
}: CategoryCardProps) {
  const { locale } = useLanguage();
  const theme = useTheme();

  const defaultCta: LocalizedString = {
    en: 'Explore Products',
    ar: 'استكشف المنتجات',
  };

  const cta = ctaText || defaultCta;

  return (
    <Card
      className="card-hover"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.tokens.shadows.cardHover,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 300,
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={title[locale]}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700}>
          {title[locale]}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, flexGrow: 1, lineHeight: 1.7 }}
        >
          {description[locale]}
        </Typography>
        <Box>
          <Button
            component={Link}
            href={href}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              py: 1.5,
            }}
          >
            {cta[locale]}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

