'use client'

import { useEffect, useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import LocalizedTextFields from './LocalizedTextFields'
import type { FirestoreCarType, FirestoreCategory, LocalizedString } from '@/app/types'

const emptyLocalized = (): LocalizedString => ({ en: '', ar: '' })

interface CarTypeFormProps {
  value: FirestoreCarType
  categories: FirestoreCategory[]
  isNew?: boolean
  onSave: (payload: FirestoreCarType) => Promise<void>
  onDelete?: (id?: string) => Promise<void>
  onCreateReset?: () => void
}

export default function CarTypeForm({
  value,
  categories,
  isNew = false,
  onSave,
  onDelete,
  onCreateReset
}: CarTypeFormProps) {
  const [form, setForm] = useState<FirestoreCarType>(value)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setForm(value)
  }, [value])

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    try {
      await onSave(form)
      if (isNew) {
        onCreateReset?.()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save car type.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6'>
              {isNew ? 'Create Car Type' : `Edit Car Type – ${form.name.en || form.id}`}
            </Typography>
            {!isNew && onDelete && (
              <Button
                color='error'
                startIcon={<DeleteIcon />}
                onClick={() => onDelete(form.id)}
                disabled={saving}
              >
                Delete
              </Button>
            )}
          </Stack>

          {error && (
            <Typography color='error' variant='body2'>
              {error}
            </Typography>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label='Category'
                select
                fullWidth
                value={form.categoryId}
                onChange={event => setForm(prev => ({ ...prev, categoryId: event.target.value }))}
              >
                {categories.map(category => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name.en} ({category.slug})
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Order'
                type='number'
                fullWidth
                value={form.order ?? 0}
                onChange={event =>
                  setForm(prev => ({ ...prev, order: Number(event.target.value) || 0 }))
                }
              />
            </Grid>
          </Grid>

          <LocalizedTextFields
            label='Display Name'
            value={form.name}
            onChange={(locale, val) =>
              setForm(prev => ({
                ...prev,
                name: {
                  ...prev.name,
                  [locale]: val
                }
              }))
            }
          />

          <LocalizedTextFields
            label='Description'
            value={form.description ?? emptyLocalized()}
            multiline
            onChange={(locale, val) =>
              setForm(prev => ({
                ...prev,
                description: {
                  ...(prev.description ?? emptyLocalized()),
                  [locale]: val
                }
              }))
            }
          />

          <Stack direction='row' spacing={2} justifyContent='flex-end'>
            {isNew && (
              <Button
                variant='outlined'
                onClick={() => {
                  setForm(value)
                  onCreateReset?.()
                }}
                disabled={saving}
              >
                Reset
              </Button>
            )}
            <Button variant='contained' onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save Car Type'}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

