# Light & Dark Mode Implementation Guide

## Overview

The Matrix landing page now supports both light and dark modes with seamless switching. Users can toggle between modes, and their preference is saved to localStorage.

## Features

✅ **Light & Dark Modes** - Complete theme support for both modes  
✅ **Smooth Transitions** - Animated theme switching  
✅ **Persistent Preference** - User choice saved to localStorage  
✅ **System Preference Detection** - Respects OS dark mode setting  
✅ **All Components Compatible** - Every section works in both modes  
✅ **Icon Toggle** - Sun/Moon icon in header

## Architecture

### 1. Theme System (`app/theme/theme.ts`)

The theme now includes separate color tokens for light and dark modes:

```typescript
const tokens = {
  dark: {
    colors: {
      primary: '#1EA7FD',
      bgDark: '#0B0D10',
      bgPaper: '#1A1D23',
      textPrimary: '#FFFFFF',
      textSecondary: '#B0B8C4'
      // ... more dark colors
    },
    gradients: {
      /* dark mode gradients */
    }
  },
  light: {
    colors: {
      primary: '#1EA7FD',
      bgDark: '#F5F7FA',
      bgPaper: '#FFFFFF',
      textPrimary: '#1F2937',
      textSecondary: '#6B7280'
      // ... more light colors
    },
    gradients: {
      /* light mode gradients */
    }
  }
}
```

### 2. Theme Mode Context (`app/components/ThemeModeContext.tsx`)

Manages the current theme mode state:

```typescript
interface ThemeModeContextType {
  mode: 'light' | 'dark'
  toggleMode: () => void
  setMode: (mode: 'light' | 'dark') => void
}
```

**Features:**

- Initializes from localStorage
- Falls back to system preference (`prefers-color-scheme`)
- Defaults to dark mode if no preference found
- Persists changes to localStorage

### 3. Theme Registry (`app/components/ThemeRegistry.tsx`)

Updated to create theme based on current mode:

```typescript
const { mode } = useThemeMode()
const theme = React.useMemo(() => createAppTheme(mode), [mode])
```

### 4. Theme Mode Toggle (`app/components/shared/ThemeModeToggle.tsx`)

Icon button in the header that toggles between modes:

- **Dark Mode** → Shows Sun icon (☀️)
- **Light Mode** → Shows Moon icon (🌙)
- Animated rotation on click
- Tooltip shows current action

## Color Comparison

### Dark Mode Colors

| Token         | Value     | Usage           |
| ------------- | --------- | --------------- |
| bgDark        | `#0B0D10` | Main background |
| bgPaper       | `#1A1D23` | Cards, paper    |
| textPrimary   | `#FFFFFF` | Main text       |
| textSecondary | `#B0B8C4` | Secondary text  |

### Light Mode Colors

| Token         | Value     | Usage           |
| ------------- | --------- | --------------- |
| bgDark        | `#F5F7FA` | Main background |
| bgPaper       | `#FFFFFF` | Cards, paper    |
| textPrimary   | `#1F2937` | Main text       |
| textSecondary | `#6B7280` | Secondary text  |

### Colors That Stay The Same

| Token     | Value     | Both Modes |
| --------- | --------- | ---------- |
| primary   | `#1EA7FD` | ✅         |
| secondary | `#FF6B6B` | ✅         |
| success   | `#10B981` | ✅         |
| warning   | `#F59E0B` | ✅         |
| error     | `#EF4444` | ✅         |

## Usage

### Accessing Current Theme Mode

```typescript
import { useThemeMode } from '@/app/components/ThemeModeContext';

export default function MyComponent() {
  const { mode, toggleMode, setMode } = useThemeMode();

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button onClick={toggleMode}>Toggle</button>
      <button onClick={() => setMode('dark')}>Force Dark</button>
      <button onClick={() => setMode('light')}>Force Light</button>
    </div>
  );
}
```

### Conditional Styling Based on Mode

MUI automatically handles most styling, but if you need mode-specific logic:

```typescript
import { useTheme } from '@mui/material';

export default function MyComponent() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{
      // MUI automatically adjusts these
      backgroundColor: 'background.paper',
      color: 'text.primary',

      // Or use theme tokens
      background: theme.tokens.gradients.bg,
      boxShadow: theme.tokens.shadows.card,
    }}>
      Content
    </Box>
  );
}
```

## Toggle Button Location

The theme toggle button appears in:

1. **Desktop Header** - Between navigation and language switcher
2. **Mobile Header** - Left of language switcher, before hamburger menu

```tsx
<ThemeModeToggle /> {/* Sun/Moon icon */}
<LanguageSwitcher /> {/* EN/AR toggle */}
<WhatsAppButton />   {/* WhatsApp CTA */}
```

## LocalStorage Key

User preference is stored as:

```javascript
localStorage.getItem('matrix-theme-mode') // 'light' | 'dark'
```

## System Preference Detection

On first visit (no localStorage), the app checks system preference:

```typescript
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  return 'dark'
}
```

## Transition Behavior

All theme changes are animated with smooth transitions:

- Background colors fade smoothly
- Text colors transition
- Shadows adjust gradually
- No jarring switches

Controlled by: `theme.tokens.transitions.normal` (300ms)

## Testing Both Modes

### Manual Testing

1. Visit the site
2. Click the Sun/Moon icon in header
3. Verify all sections look correct
4. Check that preference persists on refresh

### Test Checklist

| Section          | Dark Mode | Light Mode |
| ---------------- | --------- | ---------- |
| Hero             | ✅        | ✅         |
| Header           | ✅        | ✅         |
| Product Showcase | ✅        | ✅         |
| Lifestyle        | ✅        | ✅         |
| Features         | ✅        | ✅         |
| Video Section    | ✅        | ✅         |
| Pricing          | ✅        | ✅         |
| Testimonials     | ✅        | ✅         |
| FAQ              | ✅        | ✅         |
| Final CTA        | ✅        | ✅         |
| Footer           | ✅        | ✅         |
| Floating Button  | ✅        | ✅         |

### Browser DevTools Testing

```javascript
// Check current mode
localStorage.getItem('matrix-theme-mode')

// Force dark mode
localStorage.setItem('matrix-theme-mode', 'dark')
location.reload()

// Force light mode
localStorage.setItem('matrix-theme-mode', 'light')
location.reload()

// Clear preference (will use system default)
localStorage.removeItem('matrix-theme-mode')
location.reload()
```

## Component Updates

All existing components automatically work with both modes because they use:

- MUI palette colors (`primary.main`, `text.primary`, etc.)
- Theme tokens (`theme.tokens.colors.*`, `theme.tokens.gradients.*`)

No component-specific changes needed! 🎉

## Gradients in Both Modes

### Dark Mode Gradients

```typescript
primary: 'linear-gradient(135deg, #1EA7FD 0%, #4FC3F7 100%)'
text: 'linear-gradient(135deg, #FFFFFF 0%, #B0B8C4 100%)'
bg: 'linear-gradient(135deg, #0B0D10 0%, #1A1D23 100%)'
```

### Light Mode Gradients

```typescript
primary: 'linear-gradient(135deg, #1EA7FD 0%, #4FC3F7 100%)' // Same
text: 'linear-gradient(135deg, #1F2937 0%, #6B7280 100%)' // Darker
bg: 'linear-gradient(135deg, #F5F7FA 0%, #FFFFFF 100%)' // Light
```

## Accessibility

- ✅ Sufficient contrast ratios in both modes
- ✅ Icon button has tooltip explaining action
- ✅ Color is not the only differentiator
- ✅ Focus states visible in both modes

## Performance

- Theme creation memoized with `React.useMemo()`
- No unnecessary re-renders
- Smooth 300ms transitions
- No layout shift during mode change

## Future Enhancements

Potential additions:

- Auto mode that follows system changes in real-time
- Scheduled mode switching (e.g., light during day, dark at night)
- Per-section mode override
- High contrast mode option
- Custom color theme creator

## Troubleshooting

### Theme not changing?

Check that you're using theme tokens:

```typescript
// ❌ Hardcoded - won't change
sx={{ backgroundColor: '#1A1D23' }}

// ✅ Theme-aware - changes with mode
sx={{ backgroundColor: 'background.paper' }}
```

### Toggle button not visible?

Ensure `ThemeModeProvider` wraps your component tree (it's in layout.tsx)

### Preference not saving?

Check browser localStorage is enabled and not in incognito mode

---

**Last Updated**: January 2025  
**Mode Support**: Light & Dark  
**Default Mode**: Dark
