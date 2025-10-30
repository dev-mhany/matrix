'use client';

import { Button, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { generateWhatsAppURL, getUTMParams } from '@/app/lib/whatsapp';
import { trackWhatsAppClick } from '@/app/components/analytics/GTMEvents';
import type { Variant, Model } from '@/app/types';

interface WhatsAppButtonProps {
  variant?: Variant;
  model?: Model;
  placement: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isPrimary?: boolean;
  showText?: boolean;
  customText?: string;
}

export default function WhatsAppButton({
  variant,
  model,
  placement,
  size = 'medium',
  fullWidth = false,
  isPrimary = false,
  showText = false,
  customText = 'Order Now',
}: WhatsAppButtonProps) {
  const theme = useTheme();
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '971501234567'; // Placeholder

  const handleClick = () => {
    const { utm_source, utm_campaign } = getUTMParams();

    const url = generateWhatsAppURL(phone, {
      variant,
      model,
      utm_source,
      utm_campaign,
    });

    trackWhatsAppClick(placement, variant, model, utm_source, utm_campaign);

    window.open(url, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size={size}
      fullWidth={fullWidth}
      onClick={handleClick}
      aria-label="Order on WhatsApp"
      startIcon={<WhatsAppIcon />}
      sx={{
        minWidth: showText ? 'auto' : (size === 'large' ? 64 : size === 'medium' ? 48 : 40),
        boxShadow: isPrimary ? theme.tokens.shadows.glowMd : undefined,
        transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
        '&:hover': {
          boxShadow: isPrimary ? theme.tokens.shadows.glowLg : theme.tokens.shadows.glowSm,
        },
      }}
    >
      {showText && customText}
    </Button>
  );
}

