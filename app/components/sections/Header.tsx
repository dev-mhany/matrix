'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Container, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppButton from '../shared/WhatsAppButton';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import ThemeModeToggle from '../shared/ThemeModeToggle';
import { useLanguage } from '../LanguageContext';
import { content } from '@/app/lib/content';

export default function Header() {
  const { locale } = useLanguage();
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: content.header.nav.features, href: '/#features' },
    { label: content.header.nav.pricing, href: '/#pricing' },
    { label: content.header.nav.faq, href: '/#faq' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 2}
        sx={{
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(10px)',
          transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: theme.tokens.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {content.header.logo}
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Box
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label[locale]}
                </Box>
              ))}
              <ThemeModeToggle />
              <LanguageSwitcher />
              <WhatsAppButton
                placement="header"
                size="medium"
                isPrimary
                showText
                customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
              />
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <ThemeModeToggle />
              <LanguageSwitcher />
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label[locale]} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2 }}>
            <WhatsAppButton
              placement="header-mobile"
              size="medium"
              fullWidth
              isPrimary
              showText
              customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

