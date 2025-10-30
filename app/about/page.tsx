'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function AboutPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'About Matrix', ar: 'عن ماتريكس' },
    subtitle: {
      en: 'Redefining Tesla Accessories in the UAE',
      ar: 'إعادة تعريف إكسسوارات تسلا في الإمارات',
    },
    story: {
      title: { en: 'Our Story', ar: 'قصتنا' },
      text: {
        en: 'Matrix was founded in 2023 by a group of Tesla enthusiasts in Dubai who saw a gap in the market for premium, UAE-tested wheel covers. After months of R&D in extreme desert conditions, we launched AeroCovers V2 - engineered specifically for the demanding climate and roads of the Gulf region.',
        ar: 'تأسست ماتريكس في عام 2023 من قبل مجموعة من عشاق تسلا في دبي الذين رأوا فجوة في السوق لأغطية العجلات الفاخرة المختبرة في الإمارات. بعد أشهر من البحث والتطوير في ظروف الصحراء القاسية، أطلقنا AeroCovers V2 - مصممة خصيصًا للمناخ والطرق الصعبة في منطقة الخليج.',
      },
    },
    mission: {
      title: { en: 'Our Mission', ar: 'مهمتنا' },
      text: {
        en: 'To provide Tesla owners in the UAE with accessories that enhance both aesthetics and performance, backed by local support and genuine care for the EV community.',
        ar: 'تزويد أصحاب تسلا في الإمارات بإكسسوارات تعزز الجماليات والأداء، مدعومة بدعم محلي واهتمام حقيقي بمجتمع السيارات الكهربائية.',
      },
    },
    values: {
      title: { en: 'Our Values', ar: 'قيمنا' },
      items: [
        {
          title: { en: 'Quality First', ar: 'الجودة أولاً' },
          text: {
            en: 'Every product is tested in UAE conditions before launch',
            ar: 'يتم اختبار كل منتج في ظروف الإمارات قبل الإطلاق',
          },
        },
        {
          title: { en: 'Local Support', ar: 'دعم محلي' },
          text: {
            en: 'Real humans based in Dubai, always ready to help',
            ar: 'أشخاص حقيقيون مقرهم دبي، جاهزون دائمًا للمساعدة',
          },
        },
        {
          title: { en: 'Sustainability', ar: 'الاستدامة' },
          text: {
            en: 'Supporting the EV movement with eco-conscious products',
            ar: 'دعم حركة السيارات الكهربائية بمنتجات صديقة للبيئة',
          },
        },
        {
          title: { en: 'Innovation', ar: 'الابتكار' },
          text: {
            en: 'Constantly improving designs based on real user feedback',
            ar: 'تحسين التصاميم باستمرار بناءً على ملاحظات المستخدمين الحقيقية',
          },
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" gutterBottom color="text.primary">
              {content.title[locale]}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {content.subtitle[locale]}
            </Typography>
          </Box>

          {/* Story */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom color="text.primary">
              {content.story.title[locale]}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.story.text[locale]}
            </Typography>
          </Box>

          {/* Mission */}
          <Box sx={{ mb: 8, p: 4, backgroundColor: 'background.paper', borderRadius: 3 }}>
            <Typography variant="h3" gutterBottom color="text.primary">
              {content.mission.title[locale]}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.mission.text[locale]}
            </Typography>
          </Box>

          {/* Values */}
          <Box>
            <Typography variant="h3" gutterBottom color="text.primary" sx={{ mb: 4 }}>
              {content.values.title[locale]}
            </Typography>
            <Grid container spacing={3}>
              {content.values.items.map((value, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card elevation={2} sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary.main">
                        {value.title[locale]}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.text[locale]}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

