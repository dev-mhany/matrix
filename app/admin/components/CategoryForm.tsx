'use client'

import { useEffect, useState, type ReactNode } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import LocalizedTextFields from './LocalizedTextFields'
import type {
  FirestoreCategory,
  LocalizedString,
  CategoryFeature,
  CategoryLifestyleImage,
  FAQItem,
  TestimonialItem
} from '@/app/types'

interface CategoryFormProps {
  value: FirestoreCategory
  isNew?: boolean
  existingSlugs?: Record<string, string | undefined>
  onSave: (payload: FirestoreCategory) => Promise<void>
  onDelete?: (id?: string) => Promise<void>
  onCreateReset?: () => void
}

const emptyLocalized = (): LocalizedString => ({ en: '', ar: '' })

export default function CategoryForm({
  value,
  isNew = false,
  existingSlugs,
  onSave,
  onDelete,
  onCreateReset
}: CategoryFormProps) {
  const [form, setForm] = useState<FirestoreCategory>(value)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setForm(value)
  }, [value])

  const handleBasicChange = <K extends keyof FirestoreCategory>(key: K, val: FirestoreCategory[K]) => {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  const handleLocalizedChange = (
    section: keyof FirestoreCategory,
    field: string,
    locale: 'en' | 'ar',
    val: string
  ) => {
    setForm(prev => {
      const sectionData = prev[section] as Record<string, LocalizedString>
      const target = sectionData?.[field] ?? emptyLocalized()
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: {
            ...target,
            [locale]: val
          }
        }
      }
    })
  }

  const updateLocalized = (obj: LocalizedString, locale: 'en' | 'ar', value: string): LocalizedString => ({
    ...obj,
    [locale]: value
  })

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    try {
      const normalizedSlug = form.slug.trim().toLowerCase()
      if (!normalizedSlug) {
        throw new Error('Slug is required.')
      }
      if (
        existingSlugs &&
        existingSlugs[normalizedSlug] &&
        existingSlugs[normalizedSlug] !== form.id
      ) {
        throw new Error('Slug already exists. Please choose a unique slug.')
      }

      const payload: FirestoreCategory = {
        ...form,
        slug: normalizedSlug
      }

      await onSave(payload)
      setForm(payload)
      if (isNew) {
        onCreateReset?.()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save category.')
    } finally {
      setSaving(false)
    }
  }

  const layoutTitle = isNew ? 'Create Category' : `Edit Category – ${form.slug || form.id}`

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6'>{layoutTitle}</Typography>
            {!isNew && onDelete && (
              <Button
                color='error'
                onClick={() => onDelete(form.id)}
                startIcon={<DeleteIcon />}
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

          <Section title='Basic Info'>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Slug'
                  fullWidth
                  value={form.slug}
                  onChange={event => handleBasicChange('slug', event.target.value)}
                  helperText={
                    form.slug
                      ? `Public URL: /${form.slug.trim().toLowerCase()}`
                      : 'Define the URL slug (e.g., tesla, jetour)'
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Hero Background Image URL'
                  fullWidth
                  value={form.hero.backgroundImage ?? ''}
                  onChange={event =>
                    setForm(prev => ({
                      ...prev,
                      hero: { ...prev.hero, backgroundImage: event.target.value }
                    }))
                  }
                />
              </Grid>
            </Grid>
            <LocalizedTextFields
              label='Name'
              value={form.name}
              onChange={(locale, val) =>
                handleBasicChange('name', updateLocalized(form.name, locale, val))
              }
            />
            <LocalizedTextFields
              label='Description'
              value={form.description}
              multiline
              onChange={(locale, val) =>
                handleBasicChange('description', updateLocalized(form.description, locale, val))
              }
            />
          </Section>

          <Section title='Hero Copy'>
            <LocalizedTextFields
              label='Headline'
              value={form.hero.headline}
              onChange={(locale, val) => handleLocalizedChange('hero', 'headline', locale, val)}
            />
            <LocalizedTextFields
              label='Subheadline'
              value={form.hero.subheadline}
              multiline
              onChange={(locale, val) => handleLocalizedChange('hero', 'subheadline', locale, val)}
            />
          </Section>

          <Section title='Product Showcase'>
            <LocalizedTextFields
              label='Title'
              value={form.productShowcase.title}
              onChange={(locale, val) =>
                handleLocalizedChange('productShowcase', 'title', locale, val)
              }
            />
            <LocalizedTextFields
              label='Subtitle'
              value={form.productShowcase.subtitle}
              onChange={(locale, val) =>
                handleLocalizedChange('productShowcase', 'subtitle', locale, val)
              }
            />
            <LocalizedTextFields
              label='Currency'
              value={form.productShowcase.currency}
              onChange={(locale, val) =>
                handleLocalizedChange('productShowcase', 'currency', locale, val)
              }
            />
            <LocalizedTextFields
              label='Model Picker Label'
              value={form.productShowcase.modelPickerLabel ?? emptyLocalized()}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  productShowcase: {
                    ...prev.productShowcase,
                    modelPickerLabel: updateLocalized(
                      prev.productShowcase.modelPickerLabel ?? emptyLocalized(),
                      locale,
                      val
                    )
                  }
                }))
              }
            />
          </Section>

          <Section title='Features'>
            <LocalizedTextFields
              label='Features Title'
              value={form.features.title}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  features: {
                    ...prev.features,
                    title: updateLocalized(prev.features.title, locale, val)
                  }
                }))
              }
            />

            <Stack spacing={2}>
              {form.features.items.map((item, index) => (
                <Card key={index} variant='outlined'>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle1'>Feature #{index + 1}</Typography>
                        <IconButton
                          color='error'
                          onClick={() =>
                            setForm(prev => ({
                              ...prev,
                              features: {
                                ...prev.features,
                                items: prev.features.items.filter((_, i) => i !== index)
                              }
                            }))
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                      <TextField
                        label='Icon'
                        value={item.icon ?? ''}
                        onChange={event =>
                          updateFeatureItem(index, {
                            ...item,
                            icon: event.target.value
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Title'
                        value={item.title}
                        onChange={(locale, val) =>
                          updateFeatureItem(index, {
                            ...item,
                            title: updateLocalized(item.title, locale, val)
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Description'
                        multiline
                        value={item.description}
                        onChange={(locale, val) =>
                          updateFeatureItem(index, {
                            ...item,
                            description: updateLocalized(item.description, locale, val)
                          })
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    features: {
                      ...prev.features,
                      items: [
                        ...prev.features.items,
                        {
                          icon: '',
                          title: emptyLocalized(),
                          description: emptyLocalized()
                        }
                      ]
                    }
                  }))
                }
              >
                Add Feature
              </Button>
            </Stack>
          </Section>

          <Section title='Lifestyle'>
            <LocalizedTextFields
              label='Title'
              value={form.lifestyle.title}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  lifestyle: {
                    ...prev.lifestyle,
                    title: updateLocalized(prev.lifestyle.title, locale, val)
                  }
                }))
              }
            />
            <LocalizedTextFields
              label='Subtitle'
              value={form.lifestyle.subtitle}
              multiline
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  lifestyle: {
                    ...prev.lifestyle,
                    subtitle: updateLocalized(prev.lifestyle.subtitle, locale, val)
                  }
                }))
              }
            />
            <Stack spacing={2}>
              {form.lifestyle.images?.map((image, index) => (
                <Card key={index} variant='outlined'>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle1'>Image #{index + 1}</Typography>
                        <IconButton
                          color='error'
                          onClick={() =>
                            setForm(prev => ({
                              ...prev,
                              lifestyle: {
                                ...prev.lifestyle,
                                images: prev.lifestyle.images?.filter((_, i) => i !== index) ?? []
                              }
                            }))
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                      <TextField
                        label='Image URL'
                        fullWidth
                        value={image.src}
                        onChange={event =>
                          updateLifestyleImage(index, {
                            ...image,
                            src: event.target.value
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Image Title'
                        value={image.title ?? emptyLocalized()}
                        onChange={(locale, val) =>
                          updateLifestyleImage(index, {
                            ...image,
                            title: updateLocalized(image.title ?? emptyLocalized(), locale, val)
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Description'
                        value={image.description ?? emptyLocalized()}
                        multiline
                        onChange={(locale, val) =>
                          updateLifestyleImage(index, {
                            ...image,
                            description: updateLocalized(
                              image.description ?? emptyLocalized(),
                              locale,
                              val
                            )
                          })
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    lifestyle: {
                      ...prev.lifestyle,
                      images: [
                        ...(prev.lifestyle.images ?? []),
                        {
                          src: '',
                          title: emptyLocalized(),
                          description: emptyLocalized()
                        }
                      ]
                    }
                  }))
                }
              >
                Add Lifestyle Image
              </Button>
            </Stack>
          </Section>

          <Section title='Pricing'>
            <LocalizedTextFields
              label='Pricing Title'
              value={form.pricing.title}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  pricing: {
                    ...prev.pricing,
                    title: updateLocalized(prev.pricing.title, locale, val)
                  }
                }))
              }
            />
            <LocalizedTextFields
              label='Pricing Subtitle'
              value={form.pricing.subtitle}
              multiline
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  pricing: {
                    ...prev.pricing,
                    subtitle: updateLocalized(prev.pricing.subtitle, locale, val)
                  }
                }))
              }
            />
            <LocalizedTextFields
              label='Pricing Currency'
              value={form.pricing.currency}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  pricing: {
                    ...prev.pricing,
                    currency: updateLocalized(prev.pricing.currency, locale, val)
                  }
                }))
              }
            />

            <Typography variant='subtitle1'>Included Features</Typography>
            <Stack spacing={1}>
              {form.pricing.features?.map((feature, index) => (
                <Card key={index} variant='outlined'>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography>Feature #{index + 1}</Typography>
                        <IconButton
                          color='error'
                          onClick={() =>
                            setForm(prev => ({
                              ...prev,
                              pricing: {
                                ...prev.pricing,
                                features: prev.pricing.features?.filter((_, i) => i !== index) ?? []
                              }
                            }))
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                      <LocalizedTextFields
                        label='Text'
                        value={feature}
                        onChange={(locale, val) =>
                          updatePricingFeature(index, updateLocalized(feature, locale, val))
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    pricing: {
                      ...prev.pricing,
                      features: [...(prev.pricing.features ?? []), emptyLocalized()]
                    }
                  }))
                }
              >
                Add Pricing Feature
              </Button>
            </Stack>
          </Section>

          <Section title='Testimonials'>
            <LocalizedTextFields
              label='Testimonials Title'
              value={form.testimonials.title}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  testimonials: {
                    ...prev.testimonials,
                    title: updateLocalized(prev.testimonials.title, locale, val)
                  }
                }))
              }
            />

            <Stack spacing={2}>
              {form.testimonials.items.map((item, index) => (
                <Card key={index} variant='outlined'>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography>Testimonial #{index + 1}</Typography>
                        <IconButton
                          color='error'
                          onClick={() =>
                            setForm(prev => ({
                              ...prev,
                              testimonials: {
                                ...prev.testimonials,
                                items: prev.testimonials.items.filter((_, i) => i !== index)
                              }
                            }))
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                      <LocalizedTextFields
                        label='Quote'
                        value={item.quote}
                        multiline
                        onChange={(locale, val) =>
                          updateTestimonial(index, {
                            ...item,
                            quote: updateLocalized(item.quote, locale, val)
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Author'
                        value={item.author}
                        onChange={(locale, val) =>
                          updateTestimonial(index, {
                            ...item,
                            author: updateLocalized(item.author, locale, val)
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Role'
                        value={item.role}
                        onChange={(locale, val) =>
                          updateTestimonial(index, {
                            ...item,
                            role: updateLocalized(item.role, locale, val)
                          })
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    testimonials: {
                      ...prev.testimonials,
                      items: [
                        ...prev.testimonials.items,
                        {
                          quote: emptyLocalized(),
                          author: emptyLocalized(),
                          role: emptyLocalized()
                        }
                      ]
                    }
                  }))
                }
              >
                Add Testimonial
              </Button>
            </Stack>
          </Section>

          <Section title='FAQ'>
            <LocalizedTextFields
              label='FAQ Title'
              value={form.faq.title}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  faq: {
                    ...prev.faq,
                    title: updateLocalized(prev.faq.title, locale, val)
                  }
                }))
              }
            />

            <Stack spacing={2}>
              {form.faq.items.map((item, index) => (
                <Card key={index} variant='outlined'>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography>Question #{index + 1}</Typography>
                        <IconButton
                          color='error'
                          onClick={() =>
                            setForm(prev => ({
                              ...prev,
                              faq: {
                                ...prev.faq,
                                items: prev.faq.items.filter((_, i) => i !== index)
                              }
                            }))
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                      <LocalizedTextFields
                        label='Question'
                        value={item.q}
                        onChange={(locale, val) =>
                          updateFaqItem(index, {
                            ...item,
                            q: updateLocalized(item.q, locale, val)
                          })
                        }
                      />
                      <LocalizedTextFields
                        label='Answer'
                        value={item.a}
                        multiline
                        onChange={(locale, val) =>
                          updateFaqItem(index, {
                            ...item,
                            a: updateLocalized(item.a, locale, val)
                          })
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    faq: {
                      ...prev.faq,
                      items: [
                        ...prev.faq.items,
                        {
                          q: emptyLocalized(),
                          a: emptyLocalized()
                        }
                      ]
                    }
                  }))
                }
              >
                Add FAQ
              </Button>
            </Stack>

            <LocalizedTextFields
              label='Bottom CTA'
              value={form.faq.bottomCta ?? emptyLocalized()}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  faq: {
                    ...prev.faq,
                    bottomCta: updateLocalized(prev.faq.bottomCta ?? emptyLocalized(), locale, val)
                  }
                }))
              }
            />
          </Section>
          <Section title='Final CTA'>
            <LocalizedTextFields
              label='Headline'
              value={form.finalCta.headline}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  finalCta: {
                    ...prev.finalCta,
                    headline: updateLocalized(prev.finalCta.headline, locale, val)
                  }
                }))
              }
            />
            <LocalizedTextFields
              label='Subheadline'
              value={form.finalCta.subheadline}
              multiline
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  finalCta: {
                    ...prev.finalCta,
                    subheadline: updateLocalized(prev.finalCta.subheadline, locale, val)
                  }
                }))
              }
            />
            <LocalizedTextFields
              label='CTA Label'
              value={form.finalCta.cta}
              onChange={(locale, val) =>
                setForm(prev => ({
                  ...prev,
                  finalCta: {
                    ...prev.finalCta,
                    cta: updateLocalized(prev.finalCta.cta, locale, val)
                  }
                }))
              }
            />
          </Section>

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
            <Button onClick={handleSave} variant='contained' disabled={saving}>
              {saving ? 'Saving...' : 'Save Category'}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )

  function updateFeatureItem(index: number, next: CategoryFeature) {
    setForm(prev => ({
      ...prev,
      features: {
        ...prev.features,
        items: prev.features.items.map((item, i) => (i === index ? next : item))
      }
    }))
  }

  function updateLifestyleImage(index: number, next: CategoryLifestyleImage) {
    setForm(prev => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        images: prev.lifestyle.images?.map((image, i) => (i === index ? next : image)) ?? []
      }
    }))
  }

  function updatePricingFeature(index: number, next: LocalizedString) {
    setForm(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        features: prev.pricing.features?.map((feature, i) => (i === index ? next : feature)) ?? []
      }
    }))
  }

  function updateTestimonial(index: number, next: TestimonialItem) {
    setForm(prev => ({
      ...prev,
      testimonials: {
        ...prev.testimonials,
        items: prev.testimonials.items.map((item, i) => (i === index ? next : item))
      }
    }))
  }

  function updateFaqItem(index: number, next: FAQItem) {
    setForm(prev => ({
      ...prev,
      faq: {
        ...prev.faq,
        items: prev.faq.items.map((item, i) => (i === index ? next : item))
      }
    }))
  }
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box>
      <Typography variant='subtitle1' fontWeight={600}>
        {title}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Stack spacing={2}>{children}</Stack>
    </Box>
  )
}
