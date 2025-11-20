'use client'

import { Grid, TextField, Typography } from '@mui/material'

import type { Locale, LocalizedString } from '@/app/types'

const locales: Array<{ code: Locale; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'Arabic' }
]

interface LocalizedTextFieldsProps {
  label: string
  value: LocalizedString
  onChange: (locale: Locale, value: string) => void
  multiline?: boolean
  helperText?: string
}

export default function LocalizedTextFields({
  label,
  value,
  onChange,
  multiline = false,
  helperText
}: LocalizedTextFieldsProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='subtitle2' fontWeight={600}>
          {label}
        </Typography>
        {helperText && (
          <Typography variant='caption' color='text.secondary'>
            {helperText}
          </Typography>
        )}
      </Grid>
      {locales.map(locale => (
        <Grid item xs={12} md={6} key={locale.code}>
          <TextField
            label={`${locale.label} (${locale.code.toUpperCase()})`}
            fullWidth
            value={value?.[locale.code] ?? ''}
            onChange={event => onChange(locale.code, event.target.value)}
            multiline={multiline}
            minRows={multiline ? 3 : undefined}
          />
        </Grid>
      ))}
    </Grid>
  )
}

