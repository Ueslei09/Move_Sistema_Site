// src/shared/composables/useWhatsApp.js
import { computed } from 'vue'
import { whatsappService } from '../services/whatsappService'

export function useWhatsApp() {
  const config = whatsappService.getWhatsAppConfig()

  const whatsappUrl = computed(() => {
    return `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.defaultMessage)}`
  })

  return {
    whatsappUrl,
    ariaLabel: config.ariaLabel
  }
}