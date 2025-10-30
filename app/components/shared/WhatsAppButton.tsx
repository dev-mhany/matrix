'use client';

import { Button, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { generateWhatsAppURL, getUTMParams } from '@/app/lib/whatsapp';
import { trackWhatsAppClick } from '@/app/components/analytics/GTMEvents';
import type { Variant, Model } from '@/app/types';

interface WhatsAppButtonProps {
  variant?: Variant;
  model?: Model;
  placement?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isPrimary?: boolean;
  showText?: boolean;
  customText?: string;
  message?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  variant,
  model,
  placement = 'default',
  size = 'medium',
  fullWidth = false,
  isPrimary = false,
  showText = false,
  customText = 'Order Now',
  message,
  children,
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
      message,
    });

    trackWhatsAppClick(placement, variant, model, utm_source, utm_campaign);

    window.open(url, '_blank');
  };

  // Determine button content
  const buttonContent = children || (showText && customText);
  const hasContent = !!buttonContent;

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
        minWidth: hasContent ? 'auto' : (size === 'large' ? 64 : size === 'medium' ? 48 : 40),
        boxShadow: isPrimary ? theme.tokens.shadows.glowMd : undefined,
        transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
        '&:hover': {
          boxShadow: isPrimary ? theme.tokens.shadows.glowLg : theme.tokens.shadows.glowSm,
        },
      }}
    >
      {buttonContent}
    </Button>
  );
}

