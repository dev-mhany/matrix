'use client'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useLanguage } from '../LanguageContext'
import type { Locale } from '@/app/types'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLocale: Locale | null
  ) => {
    if (newLocale !== null) {
      setLocale(newLocale)
    }
  }

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      onChange={handleChange}
      size='small'
      sx={{
        '& .MuiToggleButton-root': {
          color: 'text.secondary',
          borderColor: theme => theme.palette.text.primary + '3D', // 23% opacity
          '&.Mui-selected': {
            color: 'primary.main',
            backgroundColor: theme => theme.palette.primary.main + '14', // 8% opacity
            '&:hover': {
              backgroundColor: theme => theme.palette.primary.main + '29' // 16% opacity
            }
          }
        }
      }}
    >
      <ToggleButton value='en'>EN</ToggleButton>
      <ToggleButton value='ar'>AR</ToggleButton>
    </ToggleButtonGroup>
  )
}
