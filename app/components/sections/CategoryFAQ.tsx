'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppButton from '../shared/WhatsAppButton';
import { useLanguage } from '../LanguageContext';
import type { FAQItem, LocalizedString } from '@/app/types';
import { trackFAQExpand } from '../analytics/GTMEvents';

interface CategoryFAQProps {
  title: LocalizedString;
  items: FAQItem[];
  bottomCta: LocalizedString;
}

export default function CategoryFAQ({ title, items, bottomCta }: CategoryFAQProps) {
  const { locale } = useLanguage();

  const handleExpand = (question: string) => {
    trackFAQExpand(question);
  };

  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom color="text.primary">
            {title[locale]}
          </Typography>
        </Box>

        {items.map((item, index) => (
          <Accordion
            key={index}
            onChange={(_, expanded) => expanded && handleExpand(item.q[locale])}
            sx={{
              backgroundColor: 'background.paper',
              mb: 2,
              borderRadius: '12px !important',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: '0 0 16px 0',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
              }}
            >
              <Typography variant="h6" fontWeight={600} color="text.primary">
                {item.q[locale]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {item.a[locale]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            {bottomCta[locale]}
          </Typography>
          <WhatsAppButton
            placement="faq-bottom"
            size="large"
            isPrimary
            showText
            customText={locale === 'en' ? 'Contact Us' : 'اتصل بنا'}
          />
        </Box>
      </Container>
    </Box>
  );
}

