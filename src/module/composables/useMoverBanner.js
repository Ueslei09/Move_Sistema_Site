// src/modules/home/composables/useMoverBanner.js
import { ref } from 'vue'
import { moverBannerService } from '../services/moverBannerService'

export function useMoverBanner() {
  const bannerData = ref(moverBannerService.getBannerData())

  return {
    bannerData
  }
}