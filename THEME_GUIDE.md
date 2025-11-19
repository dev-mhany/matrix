# Matrix Theme System Guide

## Overview

All colors, styles, and design tokens are now centralized in `app/theme/theme.ts`. This provides a single source of truth for the entire design system.

## Architecture

### 1. Design Tokens

Located at the top of `theme.ts`, the `tokens` object contains all design values:

```typescript
const tokens = {
  colors: {
    /* All brand colors */
  },
  shadows: {
    /* Shadow and glow effects */
  },
  radius: {
    /* Border radius values */
  },
  spacing: {
    /* Spacing multipliers */
  },
  gradients: {
    /* Gradient definitions */
  },
  transitions: {
    /* Animation timings */
  },
  zIndex: {
    /* Layer stacking */
  }
}
```

### 2. MUI Theme

The tokens are integrated into the MUI theme and exported:

```typescript
const theme = createTheme({
  palette: {
    /* Using tokens.colors */
  },
  typography: {
    /* Font definitions */
  },
  components: {
    /* Component overrides */
  }
})

// Tokens attached to theme for easy access
theme.tokens = tokens
```

## Usage in Components

### Method 1: Using `useTheme()` Hook

Best for accessing tokens directly:

```typescript
import { useTheme } from '@mui/material';

export default function MyComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.tokens.gradients.primary,
        boxShadow: theme.tokens.shadows.glowMd,
        borderRadius: theme.tokens.radius.md,
        transition: `all ${theme.tokens.transitions.normal}`,
      }}
    >
      Content
    </Box>
  );
}
```

### Method 2: Using Theme Palette

For standard MUI palette colors:

```typescript
<Box
  sx={{
    backgroundColor: 'background.paper',    // From theme.palette
    color: 'text.primary',                  // From theme.palette
    borderColor: 'primary.main',            // From theme.palette
  }}
/>
```

### Method 3: Dynamic Colors with Opacity

For colors with transparency:

```typescript
<Box
  sx={{
    // Add opacity to any palette color
    backgroundColor: (theme) => theme.palette.primary.main + '1A', // 10% opacity
    borderColor: (theme) => theme.palette.text.primary + '3D',     // 23% opacity
  }}
/>
```

## Available Tokens

### Colors (`theme.tokens.colors`)

```typescript
// Brand Colors
primary: '#1EA7FD'
primaryLight: '#4FC3F7'
primaryDark: '#1976D2'
secondary: '#FF6B6B'
secondaryLight: '#FF8E8E'
secondaryDark: '#E74C3C'

// Background Colors
bgDark: '#0B0D10' // Main background
bgPaper: '#1A1D23' // Card/paper background
bgLighter: '#2A2D33' // Lighter backgrounds
bgLightest: '#3A3D43' // Lightest backgrounds

// Text Colors
textPrimary: '#FFFFFF'
textSecondary: '#B0B8C4'
textDisabled: '#6B7280'

// Semantic Colors
success: '#10B981'
warning: '#F59E0B'
error: '#EF4444'
info: '#3B82F6'

// Accent Colors
accent1: '#FFB347' // Warm orange
accent2: '#4A4D53' // Neutral gray
```

### Shadows (`theme.tokens.shadows`)

```typescript
// Standard Shadows
sm: '0 2px 4px rgba(0, 0, 0, 0.2)'
md: '0 4px 8px rgba(0, 0, 0, 0.2)'
lg: '0 8px 16px rgba(0, 0, 0, 0.2)'
xl: '0 12px 24px rgba(0, 0, 0, 0.3)'
xxl: '0 20px 40px rgba(0, 0, 0, 0.4)'

// Glow Effects (for primary color elements)
glowSm: '0 0 20px rgba(30, 167, 253, 0.3)'
glowMd: '0 0 30px rgba(30, 167, 253, 0.5)'
glowLg: '0 0 40px rgba(30, 167, 253, 0.7)'

// Specialized
card: '0 8px 24px rgba(30, 167, 253, 0.2)'
cardHover: '0 12px 28px rgba(0, 0, 0, 0.3)'
```

### Border Radius (`theme.tokens.radius`)

```typescript
xs: '4px'
sm: '8px'
md: '12px' // Default for cards
lg: '16px'
xl: '20px'
round: '50%' // For circular elements
```

### Gradients (`theme.tokens.gradients`)

```typescript
primary: 'linear-gradient(135deg, #1EA7FD 0%, #4FC3F7 100%)'
text: 'linear-gradient(135deg, #FFFFFF 0%, #B0B8C4 100%)'
bg: 'linear-gradient(135deg, #0B0D10 0%, #1A1D23 100%)'
radialPrimary: 'radial-gradient(circle at 20% 50%, rgba(30, 167, 253, 0.1) 0%, transparent 50%)'
radialDark: 'radial-gradient(circle at 80% 50%, rgba(30, 167, 253, 0.15) 0%, transparent 50%)'
overlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)'
```

### Transitions (`theme.tokens.transitions`)

```typescript
fast: '150ms'
normal: '300ms'
slow: '600ms'
easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
```

### Z-Index (`theme.tokens.zIndex`)

```typescript
header: 1100
drawer: 1200
modal: 1300
floating: 1000 // Floating WhatsApp button
overlay: 999
```

## Common Patterns

### Gradient Text

```typescript
<Typography
  sx={{
    background: theme.tokens.gradients.primary,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Gradient Text
</Typography>
```

### Glow Button

```typescript
<Button
  sx={{
    boxShadow: theme.tokens.shadows.glowMd,
    transition: `all ${theme.tokens.transitions.normal}`,
    '&:hover': {
      boxShadow: theme.tokens.shadows.glowLg,
    },
  }}
>
  Glowing Button
</Button>
```

### Card with Hover Effect

```typescript
<Card
  sx={{
    backgroundColor: 'background.paper',
    borderRadius: theme.tokens.radius.md,
    transition: `all ${theme.tokens.transitions.normal}`,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.tokens.shadows.card,
    },
  }}
>
  Card Content
</Card>
```

### Background with Radial Gradient

```typescript
<Box
  sx={{
    background: theme.tokens.gradients.bg,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: theme.tokens.gradients.radialPrimary,
    },
  }}
>
  Content
</Box>
```

## Hex to RGBA Conversion

For adding opacity to hex colors in `sx` props:

```typescript
// 10% opacity
backgroundColor: theme => theme.palette.primary.main + '1A'

// 23% opacity (for borders)
borderColor: theme => theme.palette.text.primary + '3D'

// 8% opacity
backgroundColor: theme => theme.palette.primary.main + '14'

// 16% opacity
backgroundColor: theme => theme.palette.primary.main + '29'
```

### Opacity Conversion Table

| Opacity | Hex | Example        |
| ------- | --- | -------------- |
| 5%      | 0D  | `color + '0D'` |
| 8%      | 14  | `color + '14'` |
| 10%     | 1A  | `color + '1A'` |
| 16%     | 29  | `color + '29'` |
| 23%     | 3D  | `color + '3D'` |
| 50%     | 80  | `color + '80'` |
| 75%     | BF  | `color + 'BF'` |

## Modifying the Theme

### Adding New Colors

Edit `app/theme/theme.ts`:

```typescript
const tokens = {
  colors: {
    // ... existing colors
    newColor: '#HEXCODE'
  }
}
```

### Adding New Gradients

```typescript
gradients: {
  // ... existing gradients
  newGradient: 'linear-gradient(135deg, #START 0%, #END 100%)',
},
```

### Adding New Shadows

```typescript
shadows: {
  // ... existing shadows
  newShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
},
```

## Type Safety

The theme is fully typed. TypeScript will autocomplete all token properties:

```typescript
theme.tokens.colors.primary // ✅ Autocomplete works
theme.tokens.shadows.glowMd // ✅ Autocomplete works
theme.tokens.gradients.primary // ✅ Autocomplete works
```

## CSS Animations

CSS animations use theme variables where possible. See `app/animations.css` for animation definitions that respect the theme system.

## Migration Checklist

When adding new components:

- ✅ Use `useTheme()` hook to access tokens
- ✅ Use theme palette colors (`primary.main`, `text.secondary`, etc.)
- ✅ Use theme tokens for shadows, gradients, transitions
- ✅ Avoid hardcoded hex colors
- ✅ Use opacity helpers for transparent colors
- ✅ Reference theme.tokens for custom values

## Benefits

1. **Single Source of Truth**: All design values in one place
2. **Easy Theme Changes**: Modify colors once, apply everywhere
3. **Type Safety**: Full TypeScript support with autocomplete
4. **Consistency**: Ensures design consistency across all components
5. **Dark Mode Ready**: Built-in dark mode support
6. **Performance**: No runtime color calculations
7. **Maintainability**: Easy to update and refactor

## Examples from Codebase

See these files for real-world examples:

- `app/components/sections/Hero.tsx` - Gradients and badges
- `app/components/sections/Header.tsx` - Logo gradient
- `app/components/shared/WhatsAppButton.tsx` - Glow effects
- `app/components/shared/FloatingWhatsApp.tsx` - Z-index and shadows
- `app/components/sections/FinalCTA.tsx` - Background gradients

---

**Last Updated**: January 2025  
**Theme Version**: 1.0.0
