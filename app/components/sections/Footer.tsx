'use client'

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Link
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useLanguage } from '../LanguageContext'
import { content } from '@/app/lib/content'

export default function Footer() {
  const { locale } = useLanguage()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    alert(locale === 'en' ? 'Thanks for subscribing!' : 'شكرا لاشتراكك!')
  }

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 6, md: 8 },
        borderTop: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant='h5' fontWeight={700} gutterBottom>
              {content.header.logo}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {content.footer.about.description[locale]}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant='h6' fontWeight={600} gutterBottom>
              {content.footer.links.title[locale]}
            </Typography>
            <Stack spacing={1}>
              {content.footer.links.items.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline='hover'
                  color='text.secondary'
                  sx={{
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {link.label[locale]}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter & Social */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant='h6' fontWeight={600} gutterBottom>
              {content.footer.newsletter.title[locale]}
            </Typography>
            <Box component='form' onSubmit={handleNewsletterSubmit} sx={{ mb: 3 }}>
              <TextField
                fullWidth
                size='small'
                placeholder={content.footer.newsletter.placeholder[locale]}
                type='email'
                required
                sx={{ mb: 1 }}
              />
              <Button
                type='submit'
                variant='contained'
                fullWidth
                sx={{ textTransform: 'none' }}
              >
                {content.footer.newsletter.button[locale]}
              </Button>
            </Box>

            <Typography variant='h6' fontWeight={600} gutterBottom>
              {content.footer.social.title[locale]}
            </Typography>
            <Stack direction='row' spacing={1}>
              <IconButton
                href='https://instagram.com'
                target='_blank'
                rel='noopener'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href='https://youtube.com'
                target='_blank'
                rel='noopener'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: theme => theme.palette.text.primary + '1A', // 10% opacity
            textAlign: 'center'
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            {content.footer.copyright[locale]}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
