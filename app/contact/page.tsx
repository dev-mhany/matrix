'use client';

import { Box, Container, Typography, Grid, Card, TextField, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function ContactPage() {
  const { locale } = useLanguage();

  const content = {
    title: { en: 'Contact Us', ar: 'اتصل بنا' },
    subtitle: {
      en: 'Get in touch with our team',
      ar: 'تواصل مع فريقنا',
    },
    form: {
      title: { en: 'Send us a message', ar: 'أرسل لنا رسالة' },
      name: { en: 'Your Name', ar: 'اسمك' },
      email: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
      message: { en: 'Your Message', ar: 'رسالتك' },
      submit: { en: 'Send Message', ar: 'إرسال الرسالة' },
    },
    info: {
      title: { en: 'Contact Information', ar: 'معلومات الاتصال' },
      whatsapp: {
        title: { en: 'WhatsApp', ar: 'واتساب' },
        text: { en: '+971 50 123 4567', ar: '+971 50 123 4567' },
      },
      email: {
        title: { en: 'Email', ar: 'البريد الإلكتروني' },
        text: { en: 'support@matrix-aerocovers.com', ar: 'support@matrix-aerocovers.com' },
      },
      location: {
        title: { en: 'Location', ar: 'الموقع' },
        text: { en: 'Dubai, United Arab Emirates', ar: 'دبي، الإمارات العربية المتحدة' },
      },
    },
    hours: {
      title: { en: 'Business Hours', ar: 'ساعات العمل' },
      text: {
        en: 'Saturday - Thursday: 9:00 AM - 6:00 PM (GST)\nFriday: Closed',
        ar: 'السبت - الخميس: 9:00 صباحًا - 6:00 مساءً (توقيت الخليج)\nالجمعة: مغلق',
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(locale === 'en' ? 'Thank you! We will get back to you soon.' : 'شكرا لك! سوف نتواصل معك قريبا.');
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

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card elevation={2} sx={{ p: 4, backgroundColor: 'background.paper' }}>
                <Typography variant="h4" gutterBottom color="text.primary">
                  {content.form.title[locale]}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    label={content.form.name[locale]}
                    required
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label={content.form.email[locale]}
                    type="email"
                    required
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label={content.form.message[locale]}
                    multiline
                    rows={6}
                    required
                    sx={{ mb: 3 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    {content.form.submit[locale]}
                  </Button>
                </Box>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Card elevation={2} sx={{ p: 4, mb: 3, backgroundColor: 'background.paper' }}>
                <Typography variant="h4" gutterBottom color="text.primary">
                  {content.info.title[locale]}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WhatsAppIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" color="text.primary">{content.info.whatsapp.title[locale]}</Typography>
                      <Typography color="text.secondary">{content.info.whatsapp.text[locale]}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" color="text.primary">{content.info.email.title[locale]}</Typography>
                      <Typography color="text.secondary">{content.info.email.text[locale]}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" color="text.primary">{content.info.location.title[locale]}</Typography>
                      <Typography color="text.secondary">{content.info.location.text[locale]}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>

              <Card elevation={2} sx={{ p: 4, backgroundColor: 'background.paper' }}>
                <Typography variant="h5" gutterBottom color="text.primary">
                  {content.hours.title[locale]}
                </Typography>
                <Typography sx={{ whiteSpace: 'pre-line', mt: 2 }} color="text.secondary">
                  {content.hours.text[locale]}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

