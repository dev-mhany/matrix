'use client';

import type { Variant, Model } from '@/app/types';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function initDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

export function pushGTMEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

export function trackWhatsAppClick(
  placement: string,
  variant?: Variant,
  model?: Model,
  utmSource?: string,
  utmCampaign?: string
) {
  pushGTMEvent('cta_whatsapp_click', {
    placement,
    variant: variant || 'Not selected',
    model: model || 'Not selected',
    utm_source: utmSource || 'Direct',
    utm_campaign: utmCampaign || 'N/A',
  });
}

export function trackVariantSelected(variant: Variant) {
  pushGTMEvent('variant_selected', { variant });
}

export function trackModelSelected(model: Model) {
  pushGTMEvent('model_selected', { model });
}

export function trackFAQExpand(question: string) {
  pushGTMEvent('faq_expand', { question });
}

export function trackVideoPlay() {
  pushGTMEvent('video_play', {});
}

