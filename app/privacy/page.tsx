'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function PrivacyPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    subtitle: {
      en: 'Your privacy is important to us',
      ar: 'خصوصيتك مهمة بالنسبة لنا',
    },
    lastUpdated: { en: 'Last Updated: January 2025', ar: 'آخر تحديث: يناير 2025' },
    sections: [
      {
        title: { en: '1. Information We Collect', ar: '1. المعلومات التي نجمعها' },
        content: {
          en: 'When you place an order via WhatsApp, we collect:\n• Your name and contact information (phone number, email)\n• Delivery address\n• Tesla model and variant preference\n• Payment information (processed securely)',
          ar: 'عندما تقدم طلبًا عبر واتساب، نقوم بجمع:\n• اسمك ومعلومات الاتصال (رقم الهاتف، البريد الإلكتروني)\n• عنوان التسليم\n• موديل تسلا وتفضيل الموديل\n• معلومات الدفع (تتم معالجتها بشكل آمن)',
        },
      },
      {
        title: { en: '2. How We Use Your Information', ar: '2. كيف نستخدم معلوماتك' },
        content: {
          en: 'We use your information to:\n• Process and fulfill your orders\n• Send order updates via WhatsApp\n• Provide customer support\n• Improve our products and services\n• Send promotional offers (only with your consent)',
          ar: 'نستخدم معلوماتك من أجل:\n• معالجة وتنفيذ طلباتك\n• إرسال تحديثات الطلب عبر واتساب\n• تقديم دعم العملاء\n• تحسين منتجاتنا وخدماتنا\n• إرسال العروض الترويجية (فقط بموافقتك)',
        },
      },
      {
        title: { en: '3. Data Security', ar: '3. أمان البيانات' },
        content: {
          en: 'We implement industry-standard security measures to protect your personal information. Your payment information is never stored on our servers and is processed through secure, encrypted channels.',
          ar: 'نطبق إجراءات أمان قياسية في الصناعة لحماية معلوماتك الشخصية. لا يتم تخزين معلومات الدفع الخاصة بك على خوادمنا ويتم معالجتها من خلال قنوات آمنة ومشفرة.',
        },
      },
      {
        title: { en: '4. Third-Party Services', ar: '4. خدمات الطرف الثالث' },
        content: {
          en: 'We use third-party services including:\n• WhatsApp for order communication\n• Courier partners for delivery\n• Payment processors for transactions\n• Google Tag Manager for analytics\n\nThese partners have their own privacy policies and we encourage you to review them.',
          ar: 'نستخدم خدمات الطرف الثالث بما في ذلك:\n• واتساب لتواصل الطلبات\n• شركاء البريد السريع للتسليم\n• معالجات الدفع للمعاملات\n• Google Tag Manager للتحليلات\n\nهذه الشركاء لديها سياسات خصوصية خاصة بها ونشجعك على مراجعتها.',
        },
      },
      {
        title: { en: '5. Cookies and Tracking', ar: '5. ملفات تعريف الارتباط والتتبع' },
        content: {
          en: 'Our website uses cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.',
          ar: 'يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح الخاصة بك وتحليل حركة المرور على الموقع. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.',
        },
      },
      {
        title: { en: '6. Your Rights', ar: '6. حقوقك' },
        content: {
          en: 'You have the right to:\n• Access your personal data\n• Request correction of inaccurate data\n• Request deletion of your data\n• Opt-out of marketing communications\n• Withdraw consent at any time\n\nTo exercise these rights, contact us via WhatsApp or email.',
          ar: 'لديك الحق في:\n• الوصول إلى بياناتك الشخصية\n• طلب تصحيح البيانات غير الدقيقة\n• طلب حذف بياناتك\n• إلغاء الاشتراك في الاتصالات التسويقية\n• سحب الموافقة في أي وقت\n\nلممارسة هذه الحقوق، اتصل بنا عبر واتساب أو البريد الإلكتروني.',
        },
      },
      {
        title: { en: '7. Data Retention', ar: '7. الاحتفاظ بالبيانات' },
        content: {
          en: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.',
          ar: 'نحتفظ بمعلوماتك الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في هذه السياسة، والامتثال للالتزامات القانونية، وحل النزاعات، وإنفاذ اتفاقياتنا.',
        },
      },
      {
        title: { en: '8. Children\'s Privacy', ar: '8. خصوصية الأطفال' },
        content: {
          en: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.',
          ar: 'خدماتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 18 عامًا. نحن لا نجمع عن قصد المعلومات الشخصية من الأطفال. إذا كنت تعتقد أننا جمعنا معلومات من طفل، يرجى الاتصال بنا على الفور.',
        },
      },
      {
        title: { en: '9. Changes to This Policy', ar: '9. التغييرات على هذه السياسة' },
        content: {
          en: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
          ar: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث".',
        },
      },
      {
        title: { en: '10. Contact Us', ar: '10. اتصل بنا' },
        content: {
          en: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us:\n• WhatsApp: +971 50 123 4567\n• Email: privacy@matrix-aerocovers.com',
          ar: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية التعامل مع بياناتك، يرجى الاتصال بنا:\n• واتساب: +971 50 123 4567\n• البريد الإلكتروني: privacy@matrix-aerocovers.com',
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
            <PrivacyTipIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
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
                  sx={{ fontSize: '1.05rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
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

