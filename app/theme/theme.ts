'use client';

import { createTheme } from '@mui/material/styles';

// Design Tokens - Single Source of Truth
const tokens = {
  // Dark Mode Colors
  dark: {
    colors: {
      primary: '#1EA7FD',
      primaryLight: '#4FC3F7',
      primaryDark: '#1976D2',
      secondary: '#FF6B6B',
      secondaryLight: '#FF8E8E',
      secondaryDark: '#E74C3C',
      
      bgDark: '#0B0D10',
      bgPaper: '#1A1D23',
      bgLighter: '#2A2D33',
      bgLightest: '#3A3D43',
      
      textPrimary: '#FFFFFF',
      textSecondary: '#B0B8C4',
      textDisabled: '#6B7280',
      
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
      
      accent1: '#FFB347',
      accent2: '#4A4D53',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #1EA7FD 0%, #4FC3F7 100%)',
      text: 'linear-gradient(135deg, #FFFFFF 0%, #B0B8C4 100%)',
      bg: 'linear-gradient(135deg, #0B0D10 0%, #1A1D23 100%)',
      radialPrimary: 'radial-gradient(circle at 20% 50%, rgba(30, 167, 253, 0.1) 0%, transparent 50%)',
      radialDark: 'radial-gradient(circle at 80% 50%, rgba(30, 167, 253, 0.15) 0%, transparent 50%)',
      overlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
    },
  },
  
  // Light Mode Colors
  light: {
    colors: {
      primary: '#1EA7FD',
      primaryLight: '#4FC3F7',
      primaryDark: '#1976D2',
      secondary: '#FF6B6B',
      secondaryLight: '#FF8E8E',
      secondaryDark: '#E74C3C',
      
      bgDark: '#F5F7FA',
      bgPaper: '#FFFFFF',
      bgLighter: '#E5E7EB',
      bgLightest: '#D1D5DB',
      
      textPrimary: '#1F2937',
      textSecondary: '#6B7280',
      textDisabled: '#9CA3AF',
      
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
      
      accent1: '#F97316',
      accent2: '#64748B',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #1EA7FD 0%, #4FC3F7 100%)',
      text: 'linear-gradient(135deg, #1F2937 0%, #6B7280 100%)',
      bg: 'linear-gradient(135deg, #F5F7FA 0%, #FFFFFF 100%)',
      radialPrimary: 'radial-gradient(circle at 20% 50%, rgba(30, 167, 253, 0.08) 0%, transparent 50%)',
      radialDark: 'radial-gradient(circle at 80% 50%, rgba(30, 167, 253, 0.12) 0%, transparent 50%)',
      overlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%)',
    },
  },
  
  // Shadows & Glows (work for both modes)
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.2)',
    xxl: '0 20px 40px rgba(0, 0, 0, 0.25)',
    
    glowSm: '0 0 20px rgba(30, 167, 253, 0.3)',
    glowMd: '0 0 30px rgba(30, 167, 253, 0.4)',
    glowLg: '0 0 40px rgba(30, 167, 253, 0.5)',
    
    card: '0 8px 24px rgba(30, 167, 253, 0.15)',
    cardHover: '0 12px 28px rgba(0, 0, 0, 0.2)',
  },
  
  // Border Radius
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    round: '50%',
  },
  
  // Spacing (multipliers of 8px)
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
  },
  
  // Transitions
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '600ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Z-Index Scale
  zIndex: {
    header: 1100,
    drawer: 1200,
    modal: 1300,
    floating: 1000,
    overlay: 999,
  },
};

// Create theme based on mode
export const createAppTheme = (mode: 'light' | 'dark') => {
  const modeTokens = mode === 'dark' ? tokens.dark : tokens.light;
  
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: modeTokens.colors.primary,
        light: modeTokens.colors.primaryLight,
        dark: modeTokens.colors.primaryDark,
      },
      secondary: {
        main: modeTokens.colors.secondary,
        light: modeTokens.colors.secondaryLight,
        dark: modeTokens.colors.secondaryDark,
      },
      background: {
        default: modeTokens.colors.bgDark,
        paper: modeTokens.colors.bgPaper,
      },
      text: {
        primary: modeTokens.colors.textPrimary,
        secondary: modeTokens.colors.textSecondary,
        disabled: modeTokens.colors.textDisabled,
      },
      success: {
        main: modeTokens.colors.success,
      },
      warning: {
        main: modeTokens.colors.warning,
      },
      error: {
        main: modeTokens.colors.error,
      },
      info: {
        main: modeTokens.colors.info,
      },
    },
    
    typography: {
      fontFamily: 'var(--font-geist-sans), Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.3,
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
    },
    
    shape: {
      borderRadius: 12,
    },
    
    shadows: [
      'none',
      tokens.shadows.sm,
      tokens.shadows.md,
      tokens.shadows.lg,
      tokens.shadows.xl,
      tokens.shadows.xxl,
      tokens.shadows.xxl,
      tokens.shadows.xxl,
      tokens.shadows.glowSm,
      tokens.shadows.glowMd,
      tokens.shadows.glowLg,
      tokens.shadows.sm,
      tokens.shadows.md,
      tokens.shadows.lg,
      tokens.shadows.xl,
      tokens.shadows.xxl,
      tokens.shadows.xxl,
      tokens.shadows.xxl,
      tokens.shadows.glowSm,
      tokens.shadows.glowMd,
      tokens.shadows.glowLg,
      tokens.shadows.glowLg,
      tokens.shadows.glowLg,
      tokens.shadows.glowLg,
      tokens.shadows.glowLg,
    ],
    
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 32px',
            fontSize: '1rem',
            transition: `all ${tokens.transitions.normal} ${tokens.transitions.easing}`,
          },
          containedPrimary: {
            boxShadow: tokens.shadows.glowSm,
            '&:hover': {
              boxShadow: tokens.shadows.glowMd,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: `all ${tokens.transitions.normal} ${tokens.transitions.easing}`,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  });

  // Add mode-specific tokens to theme
  return {
    ...theme,
    tokens: {
      ...tokens,
      colors: modeTokens.colors,
      gradients: modeTokens.gradients,
    },
  };
};

// Export tokens for direct use
export { tokens };

// Type augmentation for custom theme properties
declare module '@mui/material/styles' {
  interface Theme {
    tokens: typeof tokens & {
      colors: typeof tokens.dark.colors;
      gradients: typeof tokens.dark.gradients;
    };
  }
  interface ThemeOptions {
    tokens?: typeof tokens & {
      colors?: typeof tokens.dark.colors;
      gradients?: typeof tokens.dark.gradients;
    };
  }
}

// Default dark theme for backward compatibility
export default createAppTheme('dark');
