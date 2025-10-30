'use client';

import { Box, Container, Typography } from '@mui/material';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import { content } from '@/app/lib/content';
import { trackVideoPlay } from '../analytics/GTMEvents';

export default function VideoSection() {
  const { locale } = useLanguage();

  const handleVideoPlay = () => {
    trackVideoPlay();
  };

  return (
    <Box id="video" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" gutterBottom color="text.primary">
            {content.video.title[locale]}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {content.video.subtitle[locale]}
          </Typography>
        </Box>

        {/* Video Embed */}
        <Box
          sx={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: 3,
            backgroundColor: 'background.default',
            mb: 4,
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Matrix AeroCovers Installation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onPlay={handleVideoPlay}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <WhatsAppButton
            placement="video-section"
            size="large"
            isPrimary
            showText
            customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
          />
        </Box>
      </Container>
    </Box>
  );
}

