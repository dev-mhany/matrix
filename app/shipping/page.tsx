'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function ShippingPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'Shipping Policy', ar: 'سياسة الشحن' },
    subtitle: {
      en: 'Fast, free delivery across the UAE',
      ar: 'توصيل سريع ومجاني في جميع أنحاء الإمارات',
    },
    sections: [
      {
        title: { en: 'Free Shipping', ar: 'شحن مجاني' },
        content: {
          en: 'We offer FREE shipping on all orders within the United Arab Emirates. No minimum order value required.',
          ar: 'نقدم شحن مجاني على جميع الطلبات داخل الإمارات العربية المتحدة. لا يوجد حد أدنى لقيمة الطلب.',
        },
      },
      {
        title: { en: 'Delivery Times', ar: 'أوقات التسليم' },
        content: {
          en: '• Dubai & Abu Dhabi: Same-day or next-day delivery\n• Sharjah, Ajman, RAK, UAQ, Fujairah: 2-3 business days\n• All orders are shipped via trusted courier partners with tracking',
          ar: '• دبي وأبوظبي: توصيل في نفس اليوم أو اليوم التالي\n• الشارقة، عجمان، رأس الخيمة، أم القيوين، الفجيرة: 2-3 أيام عمل\n• يتم شحن جميع الطلبات عبر شركاء البريد السريع الموثوق بهم مع التتبع',
        },
      },
      {
        title: { en: 'Order Processing', ar: 'معالجة الطلب' },
        content: {
          en: 'Orders placed before 2:00 PM (GST) on business days are processed the same day. Orders placed after 2:00 PM or on weekends will be processed the next business day.',
          ar: 'تتم معالجة الطلبات الموضوعة قبل الساعة 2:00 مساءً (توقيت الخليج) في أيام العمل في نفس اليوم. ستتم معالجة الطلبات الموضوعة بعد الساعة 2:00 مساءً أو في عطلات نهاية الأسبوع في يوم العمل التالي.',
        },
      },
      {
        title: { en: 'Tracking Your Order', ar: 'تتبع طلبك' },
        content: {
          en: 'Once your order ships, you will receive a WhatsApp message with tracking information. You can track your package in real-time through our courier partner\'s website.',
          ar: 'بمجرد شحن طلبك، ستتلقى رسالة واتساب مع معلومات التتبع. يمكنك تتبع حزمتك في الوقت الفعلي من خلال موقع شريك البريد السريع الخاص بنا.',
        },
      },
      {
        title: { en: 'International Shipping', ar: 'الشحن الدولي' },
        content: {
          en: 'Currently, we only ship within the UAE. International shipping to GCC countries will be available soon. Contact us on WhatsApp for updates.',
          ar: 'حاليًا، نقوم بالشحن فقط داخل الإمارات. سيكون الشحن الدولي إلى دول مجلس التعاون الخليجي متاحًا قريبًا. اتصل بنا على واتساب للحصول على التحديثات.',
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <LocalShippingIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            <Typography variant="h1" gutterBottom color="text.primary">
              {content.title[locale]}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {content.subtitle[locale]}
            </Typography>
          </Box>

          {/* Sections */}
          {content.sections.map((section, index) => (
            <Card key={index} elevation={2} sx={{ mb: 3, backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom color="primary.main">
                  {section.title[locale]}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontSize: '1.1rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
                >
                  {section.content[locale]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

