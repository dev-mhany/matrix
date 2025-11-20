'use client'

import { useEffect, useRef, useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import LocalizedTextFields from './LocalizedTextFields'
import type { FirestoreCarType, FirestoreCategory, FirestoreProduct } from '@/app/types'

interface ProductFormProps {
  value: FirestoreProduct
  categories: FirestoreCategory[]
  carTypes: FirestoreCarType[]
  isNew?: boolean
  onSave: (payload: { data: FirestoreProduct; files: File[] }) => Promise<void>
  onDelete?: (id?: string) => Promise<void>
  onCreateReset?: () => void
}

export default function ProductForm({
  value,
  categories,
  carTypes,
  isNew = false,
  onSave,
  onDelete,
  onCreateReset
}: ProductFormProps) {
  const [form, setForm] = useState<FirestoreProduct>(value)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingFiles, setPendingFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const carTypeSelectId = `car-types-${form.id ?? 'new'}`


  useEffect(() => {
    setForm(value)
  }, [value])

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    try {
      await onSave({ data: form, files: pendingFiles })
      setPendingFiles([])
      if (isNew) {
        onCreateReset?.()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save product.')
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
              {isNew ? 'Create Product' : `Edit Product – ${form.name}`}
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
            <Grid item xs={12} md={4}>
              <TextField
                label='Product Name'
                fullWidth
                value={form.name}
                onChange={event => setForm(prev => ({ ...prev, name: event.target.value }))}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label='Price (AED)'
                type='number'
                fullWidth
                value={form.price}
                onChange={event =>
                  setForm(prev => ({ ...prev, price: Number(event.target.value) || 0 }))
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label='Display Order'
                type='number'
                fullWidth
                value={form.order ?? 0}
                onChange={event =>
                  setForm(prev => ({ ...prev, order: Number(event.target.value) || 0 }))
                }
              />
            </Grid>
          </Grid>

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
              <FormControl fullWidth>
                <InputLabel id={carTypeSelectId}>Car Types</InputLabel>
                <Select
                  labelId={carTypeSelectId}
                  multiple
                  label='Car Types'
                  value={form.carTypeIds ?? []}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setForm(prev => ({
                      ...prev,
                      carTypeIds: event.target.value as string[]
                    }))
                  }
                  renderValue={selected => (selected as string[]).length + ' selected'}
                >
                  {carTypes.map(carType => (
                    <MenuItem key={carType.id} value={carType.id}>
                      {carType.name.en}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {form.carTypeIds?.length ? (
                <Stack direction='row' spacing={1} mt={1} flexWrap='wrap'>
                  {form.carTypeIds.map(carTypeId => {
                    const match = carTypes.find(ct => ct.id === carTypeId)
                    return <Chip key={carTypeId} label={match?.name.en ?? carTypeId} />
                  })}
                </Stack>
              ) : null}
            </Grid>
          </Grid>

          <LocalizedTextFields
            label='Description'
            value={form.description}
            multiline
            onChange={(locale, val) =>
              setForm(prev => ({
                ...prev,
                description: {
                  ...prev.description,
                  [locale]: val
                }
              }))
            }
          />

          <Stack spacing={2}>
            <Typography variant='subtitle1'>Image URLs</Typography>
            {form.images.map((image, index) => (
              <Stack direction='row' spacing={2} alignItems='center' key={index}>
                <TextField
                  label={`Image ${index + 1}`}
                  fullWidth
                  value={image}
                  onChange={event =>
                    setForm(prev => ({
                      ...prev,
                      images: prev.images.map((img, i) => (i === index ? event.target.value : img))
                    }))
                  }
                />
                <IconButton
                  color='error'
                  onClick={() =>
                    setForm(prev => ({
                      ...prev,
                      images: prev.images.filter((_, i) => i !== index)
                    }))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}
            <input
              type='file'
              accept='image/*'
              multiple
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={event => {
                const files = Array.from(event.target.files ?? [])
                if (files.length) {
                  setPendingFiles(prev => [...prev, ...files])
                }
                event.target.value = ''
              }}
            />
            <Stack spacing={1}>
              <Button
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={() => fileInputRef.current?.click()}
              >
                Upload Images
              </Button>
              {pendingFiles.length > 0 && (
                <Stack spacing={1}>
                  <Typography variant='body2' fontWeight={600}>
                    Pending Uploads
                  </Typography>
                  {pendingFiles.map((file, index) => (
                    <Stack direction='row' spacing={1} alignItems='center' key={`${file.name}-${index}`}>
                      <Typography variant='body2'>{file.name}</Typography>
                      <IconButton
                        size='small'
                        onClick={() =>
                          setPendingFiles(prev => prev.filter((_, i) => i !== index))
                        }
                      >
                        <DeleteIcon fontSize='small' />
                      </IconButton>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
          </Stack>

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
              {saving ? 'Saving...' : 'Save Product'}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

