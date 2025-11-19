import type { WhatsAppParams } from '@/app/types'

export function generateWhatsAppURL(phone: string, params: WhatsAppParams): string {
  // Use custom message if provided, otherwise use default template
  let message = params.message || `Hi Matrix! I'm interested in your products.`

  // Only add details if they are actually provided and no custom message
  if (!params.message) {
    if (params.category) {
      const categoryNames: Record<string, string> = {
        tesla: 'Tesla AeroCovers',
        jetour: 'JETOUR T3 Accessories',
        leopard: 'Leopard Accessories'
      }
      message = `Hi Matrix! I'm interested in ${categoryNames[params.category] || params.category}.`
    }

    if (params.variant) {
      message += `\n\nVariant: ${params.variant}`
    }

    if (params.model) {
      message += `\nModel: ${params.model}`
    }

    if (params.city) {
      message += `\nCity: ${params.city}`
    }

    // Add a friendly closing
    message += `\n\nPlease share more details and pricing. Thank you!`
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function getUTMParams(): { utm_source?: string; utm_campaign?: string } {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined
  }
}
