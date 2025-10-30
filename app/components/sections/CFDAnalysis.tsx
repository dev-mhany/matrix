'use client';

import { Box, Container, Typography, Grid, Card, CardMedia, Stack } from '@mui/material';
import { useLanguage } from '../LanguageContext';

export default function CFDAnalysis() {
  const { locale } = useLanguage();

  return (
    <Box 
      id="cfd-analysis"
      sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
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
            {locale === 'en' ? 'PROVEN BY SCIENCE' : 'مثبت علميًا'}
          </Typography>
          <Typography variant="h2" gutterBottom>
            {locale === 'en' ? 'CFD-Proven Efficiency' : 'كفاءة مثبتة بالـ CFD'}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            {locale === 'en' 
              ? 'Computational Fluid Dynamics analysis proves HALODISC 2 reduces drag by up to 10% in high-speed crosswinds'
              : 'تحليل ديناميكا الموائع الحاسوبية يثبت أن HALODISC 2 يقلل المقاومة بنسبة تصل إلى 10% في الرياح المتقاطعة عالية السرعة'
            }
          </Typography>
        </Box>

        {/* Main CFD Image */}
        <Card
          elevation={8}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            mb: 6,
            backgroundColor: 'background.paper',
          }}
        >
          <CardMedia
            component="img"
            image="/images/technical/cfd-analysis-full.jpg"
            alt="CFD Analysis Comparison"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Card>

        {/* Feature Points */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              className="hover-lift"
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'background.paper',
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h4" color="primary.main">
                  🌪️
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {locale === 'en' ? 'Calms Turbulence' : 'يهدئ الاضطراب'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {locale === 'en'
                    ? 'Smooth, closed face design reduces wheel-well turbulence, creating cleaner airflow around the vehicle'
                    : 'تصميم سطح مغلق وسلس يقلل من اضطراب العجلات، مما يخلق تدفق هواء أنظف حول السيارة'
                  }
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              className="hover-lift"
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'background.paper',
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h4" color="primary.main">
                  💨
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {locale === 'en' ? 'Lower Drag' : 'مقاومة أقل'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {locale === 'en'
                    ? 'Tighter rear wake reduces overall aerodynamic drag, improving efficiency at highway speeds'
                    : 'استيقاظ خلفي أضيق يقلل من المقاومة الديناميكية الهوائية الإجمالية، مما يحسن الكفاءة على سرعات الطرق السريعة'
                  }
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              className="hover-lift"
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'background.paper',
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h4" color="primary.main">
                  ⚡
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {locale === 'en' ? 'Up to 10% Boost' : 'زيادة تصل إلى 10%'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {locale === 'en'
                    ? 'In specific high-speed crosswind scenarios, experience range improvements and enhanced stability'
                    : 'في سيناريوهات الرياح المتقاطعة عالية السرعة المحددة، استمتع بتحسينات المدى واستقرار محسّن'
                  }
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>

        {/* Disclaimer */}
        <Box 
          sx={{ 
            mt: 6, 
            p: 3, 
            borderRadius: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderLeft: '4px solid',
            borderColor: 'primary.main',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <strong>{locale === 'en' ? 'Note:' : 'ملاحظة:'}</strong>{' '}
            {locale === 'en'
              ? 'Results vary based on speed, yaw angle, tire type, and road conditions. CFD analysis conducted in controlled simulation environment.'
              : 'تختلف النتائج بناءً على السرعة وزاوية الانعراج ونوع الإطار وظروف الطريق. تم إجراء تحليل CFD في بيئة محاكاة مُتحكم بها.'
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}



