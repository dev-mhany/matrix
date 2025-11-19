'use client';

import { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from 'next/navigation';
import { generateWhatsAppURL, getUTMParams } from '@/app/lib/whatsapp';
import { trackWhatsAppClick } from '@/app/components/analytics/GTMEvents';
import type { Category } from '@/app/types';

export default function FloatingWhatsApp() {
  const theme = useTheme();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '971501234567';

  // Detect category from pathname
  const getCategory = (): Category | undefined => {
    if (pathname?.startsWith('/tesla')) return 'tesla';
    if (pathname?.startsWith('/jetour')) return 'jetour';
    if (pathname?.startsWith('/leopard')) return 'leopard';
    return undefined;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const { utm_source, utm_campaign } = getUTMParams();
    const category = getCategory();
    const url = generateWhatsAppURL(phone, { category, utm_source, utm_campaign });
    trackWhatsAppClick('floating-button', undefined, undefined, utm_source, utm_campaign);
    window.open(url, '_blank');
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        aria-label="WhatsApp"
        onClick={handleClick}
        className="animate-pulse-subtle"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: theme.tokens.zIndex.floating,
          boxShadow: theme.tokens.shadows.glowMd,
          transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
          '&:hover': {
            boxShadow: theme.tokens.shadows.glowLg,
            transform: 'scale(1.1)',
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Zoom>
  );
}

