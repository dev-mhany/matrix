'use client'

import { Box, Container, Typography, Grid, Card, CardMedia, Stack } from '@mui/material'
import { useLanguage } from '../LanguageContext'

export default function ProtectionFeatures() {
  const { locale } = useLanguage()

  return (
    <Box
      id='protection'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth='lg'>
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='overline'
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            {locale === 'en' ? 'ULTIMATE PROTECTION' : 'حماية نهائية'}
          </Typography>
          <Typography variant='h2' gutterBottom>
            {locale === 'en'
              ? 'Rock Solid Protection & Stability'
              : 'حماية واستقرار صلب كالصخر'}
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            {locale === 'en'
              ? 'Advanced rubber base and precision engineering ensure your wheels stay protected and HALODISC stays secure at any speed'
              : 'قاعدة مطاطية متقدمة وهندسة دقيقة تضمن حماية عجلاتك وبقاء HALODISC آمنًا بأي سرعة'}
          </Typography>
        </Box>

        {/* Main Features */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                height: '100%'
              }}
            >
              <CardMedia
                component='img'
                image='/images/technical/protection-detail.jpg'
                alt='Protection Detail'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4} height='100%' justifyContent='center'>
              <Box>
                <Typography variant='h3' fontWeight={700} gutterBottom>
                  {locale === 'en' ? 'Protect & Stabilize' : 'حماية واستقرار'}
                </Typography>
                <Typography variant='body1' color='text.secondary' paragraph>
                  {locale === 'en'
                    ? 'HALODISC 2 features a protective rubber base that fits securely along the rim, reducing friction, preventing scratches, and guarding against wear. This design ensures a stable, non-slip fit for enhanced safety while driving.'
                    : 'يتميز HALODISC 2 بقاعدة مطاطية واقية تثبت بإحكام على طول الحافة، مما يقلل الاحتكاك، ويمنع الخدوش، ويحمي من التآكل. يضمن هذا التصميم ملاءمة مستقرة وغير قابلة للانزلاق لتعزيز السلامة أثناء القيادة.'}
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'background.default',
                      height: '100%'
                    }}
                  >
                    <Typography variant='h4' color='primary.main' gutterBottom>
                      🛡️
                    </Typography>
                    <Typography variant='h6' fontWeight={700} gutterBottom>
                      {locale === 'en' ? 'Rim Protection' : 'حماية الحافة'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {locale === 'en'
                        ? 'Wrap-around rubber gasket prevents curb rash and scratches'
                        : 'حشية مطاطية ملتفة تمنع خدوش الرصيف'}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'background.default',
                      height: '100%'
                    }}
                  >
                    <Typography variant='h4' color='primary.main' gutterBottom>
                      🔒
                    </Typography>
                    <Typography variant='h6' fontWeight={700} gutterBottom>
                      {locale === 'en' ? 'Anti-Slip Design' : 'تصميم مضاد للانزلاق'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {locale === 'en'
                        ? 'Friction-reducing material keeps covers firmly in place'
                        : 'مادة مقللة للاحتكاك تحافظ على الأغطية في مكانها بثبات'}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'background.default',
                      height: '100%'
                    }}
                  >
                    <Typography variant='h4' color='primary.main' gutterBottom>
                      ⚡
                    </Typography>
                    <Typography variant='h6' fontWeight={700} gutterBottom>
                      {locale === 'en' ? 'Impact Resistant' : 'مقاوم للصدمات'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {locale === 'en'
                        ? 'Durable POM material withstands road debris and impacts'
                        : 'مادة POM متينة تتحمل حطام الطريق والصدمات'}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'background.default',
                      height: '100%'
                    }}
                  >
                    <Typography variant='h4' color='primary.main' gutterBottom>
                      🌡️
                    </Typography>
                    <Typography variant='h6' fontWeight={700} gutterBottom>
                      {locale === 'en' ? 'Weather Proof' : 'مقاوم للطقس'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {locale === 'en'
                        ? 'UV-resistant materials maintain appearance in all conditions'
                        : 'مواد مقاومة للأشعة فوق البنفسجية تحافظ على المظهر في جميع الظروف'}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        {/* Stability Testing */}
        <Box sx={{ mt: 8 }}>
          <Typography variant='h3' textAlign='center' fontWeight={700} gutterBottom>
            {locale === 'en'
              ? 'Rock Solid - No Shakes, No Worries'
              : 'صلب كالصخر - بدون اهتزازات، بدون قلق'}
          </Typography>
          <Typography
            variant='body1'
            textAlign='center'
            color='text.secondary'
            sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
          >
            {locale === 'en'
              ? 'HALODISC 2, powered by the HALOBLK Center Lock mechanism, stays firmly in place no matter the speed or terrain. From smooth highways to bumpy roads, enjoy unmatched stability and a worry-free drive every time.'
              : 'HALODISC 2، مدعوم بآلية قفل HALOBLK المركزية، يبقى ثابتًا في مكانه بغض النظر عن السرعة أو التضاريس. من الطرق السريعة السلسة إلى الطرق الوعرة، استمتع باستقرار لا مثيل له وقيادة خالية من القلق في كل مرة.'}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component='img'
                  image='/images/technical/stability-test.jpg'
                  alt='Stability Test'
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={3} height='100%' justifyContent='center'>
                <Card
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'background.default'
                  }}
                >
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    🏁 {locale === 'en' ? 'High-Speed Testing' : 'اختبار عالي السرعة'}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {locale === 'en'
                      ? 'Tested at speeds exceeding 200 km/h with zero vibration or movement. The center lock system ensures absolute stability.'
                      : 'تم اختباره بسرعات تتجاوز 200 كم/ساعة بدون اهتزاز أو حركة. يضمن نظام القفل المركزي استقرارًا مطلقًا.'}
                  </Typography>
                </Card>

                <Card
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'background.default'
                  }}
                >
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    🏔️{' '}
                    {locale === 'en' ? 'Rough Terrain Testing' : 'اختبار التضاريس الوعرة'}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {locale === 'en'
                      ? 'Proven performance on desert roads, speed bumps, and uneven surfaces. The rubber gasket absorbs shocks while maintaining firm grip.'
                      : 'أداء مثبت على طرق الصحراء ومطبات السرعة والأسطح غير المستوية. تمتص الحشية المطاطية الصدمات مع الحفاظ على قبضة قوية.'}
                  </Typography>
                </Card>

                <Card
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'background.default'
                  }}
                >
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    🔒 {locale === 'en' ? 'Precision Engineering' : 'هندسة دقيقة'}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {locale === 'en'
                      ? 'Engineered for those who demand reliability. Every component is designed to work in harmony for maximum performance and safety.'
                      : 'مصمم لأولئك الذين يطالبون بالموثوقية. كل مكون مصمم للعمل بتناسق لأقصى أداء وسلامة.'}
                  </Typography>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Guarantee */}
        <Box
          sx={{
            mt: 8,
            p: 6,
            borderRadius: 4,
            backgroundColor: 'primary.main',
            textAlign: 'center'
          }}
        >
          <Typography variant='h3' fontWeight={700} color='white' gutterBottom>
            {locale === 'en'
              ? 'Lifetime Warranty on Protection'
              : 'ضمان مدى الحياة على الحماية'}
          </Typography>
          <Typography
            variant='body1'
            color='rgba(255, 255, 255, 0.9)'
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            {locale === 'en'
              ? "We stand behind our protection features. If the rubber gasket fails or the center lock system malfunctions, we'll replace it for free - for life."
              : 'نقف وراء ميزات الحماية الخاصة بنا. إذا فشلت الحشية المطاطية أو تعطل نظام القفل المركزي، سنستبدله مجانًا - مدى الحياة.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
