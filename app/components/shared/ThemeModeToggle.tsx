'use client';

import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import { useThemeMode } from '../ThemeModeContext';

export default function ThemeModeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const theme = useTheme();

  return (
    <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        sx={{
          color: 'text.primary',
          transition: `all ${theme.tokens.transitions.normal}`,
          '&:hover': {
            color: 'primary.main',
            transform: 'rotate(180deg)',
          },
        }}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
}

