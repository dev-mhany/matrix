'use client';

import { Box, Container, Typography, Grid, Card, CardMedia, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useLanguage } from '../LanguageContext';

export default function CenterLockSystem() {
  const { locale } = useLanguage();

  const features = [
    {
      icon: '🔒',
      title: { en: 'Anti-Theft Protection', ar: 'حماية مضادة للسرقة' },
      description: { 
        en: 'Only removable by owner with specialized center lock tool', 
        ar: 'يمكن إزالته فقط من قبل المالك باستخدام أداة قفل مركزية متخصصة' 
      },
    },
    {
      icon: '⚡',
      title: { en: '30-Second Installation', ar: 'تركيب في 30 ثانية' },
      description: { 
        en: 'Quick modular design saves time and effort - no expertise needed', 
        ar: 'تصميم معياري سريع يوفر الوقت والجهد - لا حاجة للخبرة' 
      },
    },
    {
      icon: '🛡️',
      title: { en: 'Premium Materials', ar: 'مواد فاخرة' },
      description: { 
        en: 'Zinc lock core, 304 stainless steel bearing, durable POM material', 
        ar: 'قلب قفل زنك، محمل فولاذ مقاوم للصدأ 304، مادة POM متينة' 
      },
    },
    {
      icon: '💪',
      title: { en: 'High-Speed Stability', ar: 'استقرار عالي السرعة' },
      description: { 
        en: 'Rubber anti-slip gasket reduces friction and protects wheels', 
        ar: 'حشية مطاطية مضادة للانزلاق تقلل الاحتكاك وتحمي العجلات' 
      },
    },
  ];

  return (
    <Box 
      id="center-lock"
      sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            {locale === 'en' ? 'ENGINEERED SECURITY' : 'أمان مهندس'}
          </Typography>
          <Typography variant="h2" gutterBottom>
            {locale === 'en' ? 'HALOBLK Center Lock System' : 'نظام القفل المركزي HALOBLK'}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            {locale === 'en' 
              ? 'Precision-engineered modular locking mechanism combining quick installation with anti-theft protection'
              : 'آلية قفل معيارية مهندسة بدقة تجمع بين التركيب السريع والحماية من السرقة'
            }
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Main Image */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={8}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <CardMedia
                component="img"
                image="/images/technical/center-lock-detail.jpg"
                alt="Center Lock System Detail"
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                }}
              />
              {/* Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                {locale === 'en' ? 'PATENTED DESIGN' : 'تصميم مسجل'}
              </Box>
            </Card>
          </Grid>

          {/* Features */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  {locale === 'en' 
                    ? 'Advanced Locking Mechanism' 
                    : 'آلية قفل متقدمة'
                  }
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {locale === 'en'
                    ? 'The HALOBLK Center Lock combines industrial-grade materials with intelligent design for maximum security and ease of use.'
                    : 'يجمع قفل HALOBLK المركزي بين المواد ذات الدرجة الصناعية والتصميم الذكي لأقصى قدر من الأمان وسهولة الاستخدام.'
                  }
                </Typography>
              </Box>

              <List>
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      mb: 2,
                      p: 2,
                    }}
                  >
                    <ListItemIcon>
                      <Typography variant="h4">{feature.icon}</Typography>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" fontWeight={700}>
                          {feature.title[locale]}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {feature.description[locale]}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
        </Grid>

        {/* Installation Process */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" textAlign="center" fontWeight={700} gutterBottom>
            {locale === 'en' ? 'Installation in 30 Seconds' : 'التركيب في 30 ثانية'}
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            {locale === 'en' 
              ? 'Simple 3-step process - no tools required (center lock tool included)'
              : 'عملية بسيطة من 3 خطوات - لا حاجة لأدوات (أداة القفل المركزي متضمنة)'
            }
          </Typography>

          <Card
            elevation={4}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              maxWidth: 1000,
              mx: 'auto',
            }}
          >
            <CardMedia
              component="img"
              image="/images/technical/installation-process.jpg"
              alt="Installation Process"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Card>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }}
              >
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  1
                </Typography>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {locale === 'en' ? 'Align' : 'محاذاة'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {locale === 'en' 
                    ? 'Position HALODISC over wheel center'
                    : 'ضع HALODISC فوق مركز العجلة'
                  }
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }}
              >
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  2
                </Typography>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {locale === 'en' ? 'Insert' : 'إدخال'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {locale === 'en' 
                    ? 'Push center lock hub into place'
                    : 'ادفع محور القفل المركزي في مكانه'
                  }
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }}
              >
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  3
                </Typography>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {locale === 'en' ? 'Lock' : 'قفل'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {locale === 'en' 
                    ? 'Secure with included center lock tool'
                    : 'قم بتأمينه باستخدام أداة القفل المركزي المرفقة'
                  }
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Metallic Red Cap */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Stack spacing={3}>
                <Typography variant="h3" fontWeight={700}>
                  {locale === 'en' ? 'Metallic Red Cap Finish' : 'غطاء أحمر معدني'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {locale === 'en'
                    ? 'The HALODISC 2 Custom Numbers proudly debuts a unique "Metallic Red" cap finish. This distinctive cap results from an advanced five-layer electroplating process, ensuring radiant and refined brilliance that\'s captivating from every angle.'
                    : 'يفتخر HALODISC 2 Custom Numbers بإطلاق غطاء فريد بلمسة نهائية "أحمر معدني". ينتج هذا الغطاء المميز عن عملية طلاء كهربائي متقدمة من خمس طبقات، مما يضمن لمعانًا ساطعًا ومصقولًا يأسر من كل زاوية.'
                  }
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={locale === 'en' ? '5-Layer Electroplating Process' : 'عملية طلاء كهربائي من 5 طبقات'}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={locale === 'en' ? 'Corrosion-Resistant Finish' : 'تشطيب مقاوم للتآكل'}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={locale === 'en' ? 'UV-Protected Color' : 'لون محمي من الأشعة فوق البنفسجية'}
                    />
                  </ListItem>
                </List>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image="/images/technical/metallic-cap-red.jpg"
                  alt="Metallic Red Cap"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}



