// src/modules/home/composables/useAboutBannerCard.js
import { ref } from 'vue'
import { aboutBannerCardService } from '../services/aboutBannerCardService'

export function useAboutBannerCard() {
  const cardsData = ref(aboutBannerCardService.getBannerCardsData())

  return {
    cardsData
  }
}