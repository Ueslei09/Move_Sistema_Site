// src/shared/composables/usePreloader.js
import { ref, onMounted } from 'vue'
import { preloaderService } from '../services/preloaderService'

export function usePreloader() {
  const config = preloaderService.getConfig()
  const isLoading = ref(true)
  const isFadingOut = ref(false)

  onMounted(() => {
    // Controla o tempo do preloader na entrada da página (F5)
    setTimeout(() => {
      isFadingOut.value = true
      setTimeout(() => {
        isLoading.value = false
      }, 500) // Tempo da animação de fade-out do CSS
    }, config.duration)
  })

  return {
    isLoading,
    isFadingOut,
    config
  }
}