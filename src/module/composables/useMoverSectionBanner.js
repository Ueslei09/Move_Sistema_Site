// src/modules/home/composables/useMoverSectionBanner.js
import { moverSectionBannerService } from '../services/moverSectionBannerService'

export function useMoverSectionBanner() {
  const bannerData = moverSectionBannerService.getBannerData()
  return { bannerData }
}