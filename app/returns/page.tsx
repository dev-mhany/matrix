'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function ReturnsPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'Returns & Refunds', ar: 'الإرجاع والاسترداد' },
    subtitle: {
      en: '14-day money-back guarantee, no questions asked',
      ar: 'ضمان استرداد المال لمدة 14 يومًا، بدون أسئلة',
    },
    sections: [
      {
        title: { en: '14-Day Return Policy', ar: 'سياسة الإرجاع لمدة 14 يومًا' },
        content: {
          en: 'We offer a hassle-free 14-day return policy. If you\'re not completely satisfied with your AeroCovers, you can return them for a full refund within 14 days of delivery. No questions asked.',
          ar: 'نقدم سياسة إرجاع خالية من المتاعب لمدة 14 يومًا. إذا لم تكن راضيًا تمامًا عن أغطية AeroCovers الخاصة بك، يمكنك إرجاعها لاسترداد كامل المبلغ في غضون 14 يومًا من التسليم. بدون أسئلة.',
        },
      },
      {
        title: { en: 'How to Return', ar: 'كيفية الإرجاع' },
        content: {
          en: '1. Contact us on WhatsApp within 14 days of delivery\n2. Our team will schedule a FREE pickup from your location\n3. Pack the items in their original packaging (if possible)\n4. Hand over to our courier partner\n5. Refund will be processed within 3-5 business days',
          ar: '1. اتصل بنا على واتساب في غضون 14 يومًا من التسليم\n2. سيقوم فريقنا بجدولة استلام مجاني من موقعك\n3. قم بتعبئة العناصر في عبواتها الأصلية (إن أمكن)\n4. سلمها لشريك البريد السريع الخاص بنا\n5. سيتم معالجة الاسترداد في غضون 3-5 أيام عمل',
        },
      },
      {
        title: { en: 'Refund Process', ar: 'عملية الاسترداد' },
        content: {
          en: 'Once we receive your returned items, we will inspect them and process your refund. The refund will be credited to your original payment method within 3-5 business days. You will receive a WhatsApp notification once the refund is processed.',
          ar: 'بمجرد استلام العناصر المرتجعة، سنقوم بفحصها ومعالجة استردادك. سيتم إضافة الاسترداد إلى طريقة الدفع الأصلية في غضون 3-5 أيام عمل. ستتلقى إشعارًا على واتساب بمجرد معالجة الاسترداد.',
        },
      },
      {
        title: { en: 'Condition Requirements', ar: 'متطلبات الحالة' },
        content: {
          en: 'To be eligible for a return, items must be:\n• Unused or gently used (we understand you may have tried them on your Tesla)\n• In original packaging when possible\n• Free from damage not caused by manufacturing defects',
          ar: 'لكي تكون مؤهلاً للإرجاع، يجب أن تكون العناصر:\n• غير مستخدمة أو مستخدمة بشكل خفيف (نحن نتفهم أنك قد جربتها على تسلا الخاصة بك)\n• في التعبئة الأصلية عندما يكون ذلك ممكنًا\n• خالية من الأضرار غير الناجمة عن عيوب التصنيع',
        },
      },
      {
        title: { en: 'Exchanges', ar: 'التبديلات' },
        content: {
          en: 'Want to exchange for a different variant? No problem! Contact us on WhatsApp and we\'ll arrange a free exchange. The new variant will be shipped immediately, and we\'ll pick up the old one at the same time.',
          ar: 'تريد التبديل بموديل مختلف؟ لا مشكلة! اتصل بنا على واتساب وسنرتب تبديل مجاني. سيتم شحن الموديل الجديد على الفور، وسنستلم الموديل القديم في نفس الوقت.',
        },
      },
      {
        title: { en: 'Warranty Claims', ar: 'مطالبات الضمان' },
        content: {
          en: 'Manufacturing defects are covered under our lifetime warranty. If you notice any defects, contact us immediately and we\'ll send you a replacement at no cost. No need to return the defective item.',
          ar: 'عيوب التصنيع مشمولة بضماننا مدى الحياة. إذا لاحظت أي عيوب، اتصل بنا على الفور وسنرسل لك بديلاً دون أي تكلفة. لا حاجة لإرجاع العنصر المعيب.',
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
            <AssignmentReturnIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
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

