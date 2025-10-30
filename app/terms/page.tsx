'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function TermsPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'Terms of Service', ar: 'شروط الخدمة' },
    subtitle: {
      en: 'Please read these terms carefully',
      ar: 'يرجى قراءة هذه الشروط بعناية',
    },
    lastUpdated: { en: 'Last Updated: January 2025', ar: 'آخر تحديث: يناير 2025' },
    sections: [
      {
        title: { en: '1. Agreement to Terms', ar: '1. الموافقة على الشروط' },
        content: {
          en: 'By accessing or using Matrix AeroCovers website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.',
          ar: 'من خلال الوصول أو استخدام موقع ماتريكس أيرو كوفرز والخدمات، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام خدماتنا.',
        },
      },
      {
        title: { en: '2. Product Information', ar: '2. معلومات المنتج' },
        content: {
          en: 'We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, colors, or other content are accurate, complete, reliable, current, or error-free. Colors may vary slightly due to screen settings.',
          ar: 'نسعى جاهدين لتوفير أوصاف وصور دقيقة للمنتج. ومع ذلك، لا نضمن أن أوصاف المنتج أو الألوان أو المحتوى الآخر دقيقة أو كاملة أو موثوقة أو حديثة أو خالية من الأخطاء. قد تختلف الألوان قليلاً بسبب إعدادات الشاشة.',
        },
      },
      {
        title: { en: '3. Pricing and Payment', ar: '3. التسعير والدفع' },
        content: {
          en: 'All prices are in UAE Dirhams (AED) and include VAT. We reserve the right to change prices at any time. Payment is processed securely through WhatsApp order confirmation and bank transfer or card payment upon delivery.',
          ar: 'جميع الأسعار بالدرهم الإماراتي (AED) وتشمل ضريبة القيمة المضافة. نحتفظ بالحق في تغيير الأسعار في أي وقت. تتم معالجة الدفع بشكل آمن من خلال تأكيد الطلب على واتساب والتحويل المصرفي أو الدفع ببطاقة عند التسليم.',
        },
      },
      {
        title: { en: '4. Shipping and Delivery', ar: '4. الشحن والتسليم' },
        content: {
          en: 'We ship only within the UAE. Delivery times are estimates and not guaranteed. We are not liable for delays caused by courier partners or circumstances beyond our control.',
          ar: 'نقوم بالشحن فقط داخل الإمارات. أوقات التسليم تقديرية وليست مضمونة. نحن غير مسؤولين عن التأخير الناتج عن شركاء البريد السريع أو الظروف الخارجة عن سيطرتنا.',
        },
      },
      {
        title: { en: '5. Returns and Refunds', ar: '5. الإرجاع والاسترداد' },
        content: {
          en: 'Our 14-day return policy is outlined in our Returns & Refunds page. Returns must meet the conditions specified. We reserve the right to refuse returns that do not meet these conditions.',
          ar: 'سياسة الإرجاع لمدة 14 يومًا موضحة في صفحة الإرجاع والاسترداد الخاصة بنا. يجب أن تستوفي الإرجاعات الشروط المحددة. نحتفظ بالحق في رفض الإرجاعات التي لا تستوفي هذه الشروط.',
        },
      },
      {
        title: { en: '6. Warranty', ar: '6. الضمان' },
        content: {
          en: 'Matrix AeroCovers come with a lifetime warranty against manufacturing defects. The warranty does not cover damage from misuse, accidents, or normal wear and tear. Warranty claims must be made within a reasonable time of discovering the defect.',
          ar: 'تأتي ماتريكس أيرو كوفرز مع ضمان مدى الحياة ضد عيوب التصنيع. لا يغطي الضمان الأضرار الناتجة عن سوء الاستخدام أو الحوادث أو التآكل الطبيعي. يجب تقديم مطالبات الضمان في غضون فترة معقولة من اكتشاف العيب.',
        },
      },
      {
        title: { en: '7. Limitation of Liability', ar: '7. حدود المسؤولية' },
        content: {
          en: 'Matrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our products or services.',
          ar: 'لن تكون ماتريكس مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن استخدامك أو عدم قدرتك على استخدام منتجاتنا أو خدماتنا.',
        },
      },
      {
        title: { en: '8. Governing Law', ar: '8. القانون الحاكم' },
        content: {
          en: 'These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.',
          ar: 'تخضع شروط الخدمة هذه وتفسر وفقًا لقوانين الإمارات العربية المتحدة. أي نزاعات تخضع للاختصاص الحصري لمحاكم دبي.',
        },
      },
      {
        title: { en: '9. Contact Us', ar: '9. اتصل بنا' },
        content: {
          en: 'If you have any questions about these Terms of Service, please contact us via WhatsApp or email at support@matrix-aerocovers.com',
          ar: 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا عبر واتساب أو البريد الإلكتروني على support@matrix-aerocovers.com',
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
            <GavelIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            <Typography variant="h1" gutterBottom color="text.primary">
              {content.title[locale]}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              {content.subtitle[locale]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.lastUpdated[locale]}
            </Typography>
          </Box>

          {/* Sections */}
          {content.sections.map((section, index) => (
            <Card key={index} elevation={2} sx={{ mb: 3, backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  {section.title[locale]}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}
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

