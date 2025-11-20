'use client'

import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useTheme,
  Menu,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import WhatsAppButton from '../shared/WhatsAppButton'
import LanguageSwitcher from '../shared/LanguageSwitcher'
import ThemeModeToggle from '../shared/ThemeModeToggle'
import { useLanguage } from '../LanguageContext'
import { content } from '@/app/lib/content'
import { useFirestoreCollection } from '@/app/hooks/useFirestoreCollection'
import { orderedCategoriesQuery } from '@/app/lib/firestore'
import Link from 'next/link'

export default function Header() {
  const { locale } = useLanguage()
  const theme = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [productsMenuAnchor, setProductsMenuAnchor] = useState<null | HTMLElement>(null)
  const {
    data: firestoreCategories,
    loading: categoriesLoading,
    error: categoriesError
  } = useFirestoreCollection(orderedCategoriesQuery)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: content.header.nav.features, href: '/#features' },
    { label: content.header.nav.pricing, href: '/#pricing' },
    { label: content.header.nav.faq, href: '/#faq' }
  ]

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsMenuAnchor(event.currentTarget)
  }

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null)
  }

  const productLinks = firestoreCategories.map(category => ({
    slug: category.slug,
    name: category.name
  }))

  return (
    <>
      <AppBar
        position='sticky'
        elevation={scrolled ? 4 : 2}
        sx={{
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(10px)',
          transition: `all ${theme.tokens.transitions.normal} ${theme.tokens.transitions.easing}`,
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none'
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box
              component={Link}
              href='/'
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: theme.tokens.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              {content.header.logo}
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}
            >
              {/* Products Dropdown */}
              <Box
                onClick={handleProductsMenuOpen}
                sx={{
                  color: 'text.primary',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {locale === 'en' ? 'Products' : 'المنتجات'}
                <ArrowDropDownIcon sx={{ fontSize: '1.2rem' }} />
              </Box>
              <Menu
                anchorEl={productsMenuAnchor}
                open={Boolean(productsMenuAnchor)}
                onClose={handleProductsMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                {categoriesLoading && (
                  <MenuItem disabled>
                    {locale === 'en' ? 'Loading models…' : 'جاري التحميل...'}
                  </MenuItem>
                )}
                {categoriesError && (
                  <MenuItem disabled sx={{ maxWidth: 240, whiteSpace: 'normal' }}>
                    {locale === 'en'
                      ? 'Unable to load categories.'
                      : 'تعذر تحميل الفئات.'}
                  </MenuItem>
                )}
                {!categoriesLoading &&
                  !categoriesError &&
                  productLinks.map(link => (
                    <MenuItem
                      key={link.slug}
                      component={Link}
                      href={`/${link.slug}`}
                      onClick={handleProductsMenuClose}
                    >
                      {link.name[locale]}
                    </MenuItem>
                  ))}
                {!categoriesLoading && !categoriesError && productLinks.length === 0 && (
                  <MenuItem disabled>
                    {locale === 'en' ? 'No categories yet.' : 'لا توجد فئات بعد.'}
                  </MenuItem>
                )}
              </Menu>
              {navItems.map(item => (
                <Box
                  key={item.href}
                  component='a'
                  href={item.href}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.label[locale]}
                </Box>
              ))}
              <ThemeModeToggle />
              <LanguageSwitcher />
              <WhatsAppButton
                placement='header'
                size='medium'
                isPrimary
                showText
                customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
              />
            </Box>

            {/* Mobile Menu Button */}
            <Box
              sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}
            >
              <ThemeModeToggle />
              <LanguageSwitcher />
              <IconButton
                color='inherit'
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
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'background.paper'
          }
        }}
      >
        <List sx={{ pt: 4 }}>
          <ListItem disablePadding>
            <ListItemText
              primary={locale === 'en' ? 'Products' : 'المنتجات'}
              primaryTypographyProps={{ fontWeight: 600, mb: 1 }}
            />
          </ListItem>
          {categoriesLoading && (
            <ListItem disablePadding>
              <ListItemText primary={locale === 'en' ? 'Loading models…' : 'جاري التحميل...'} />
            </ListItem>
          )}
          {categoriesError && (
            <ListItem disablePadding>
              <ListItemText
                primary={
                  locale === 'en'
                    ? 'Unable to load categories.'
                    : 'تعذر تحميل الفئات.'
                }
              />
            </ListItem>
          )}
          {!categoriesLoading &&
            !categoriesError &&
            productLinks.map(link => (
              <ListItem disablePadding key={link.slug}>
                <ListItemButton
                  component={Link}
                  href={`/${link.slug}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={link.name[locale]} />
                </ListItemButton>
              </ListItem>
            ))}
          {!categoriesLoading && !categoriesError && productLinks.length === 0 && (
            <ListItem disablePadding>
              <ListItemText
                primary={locale === 'en' ? 'No categories yet.' : 'لا توجد فئات بعد.'}
              />
            </ListItem>
          )}
          {navItems.map(item => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component='a'
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label[locale]} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2 }}>
            <WhatsAppButton
              placement='header-mobile'
              size='medium'
              fullWidth
              isPrimary
              showText
              customText={locale === 'en' ? 'Order Now' : 'اطلب الآن'}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
