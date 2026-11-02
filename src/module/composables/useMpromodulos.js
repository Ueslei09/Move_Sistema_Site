// src/modules/mpro/composables/useMpromodulos.js
import { ref, computed } from 'vue'
import { mpromodulosService } from '../services/mpromodulosService'

export function useMpromodulos() {
  const data = ref(mpromodulosService.getData())
  const activeIndex = ref(0) // Controla qual dos 16 slides está ativo

  const currentSlide = computed(() => {
    return data.value.slides[activeIndex.value] || data.value.slides[0]
  })

  const setActiveSlide = (index) => {
    activeIndex.value = index
  }

  return {
    data,
    activeIndex,
    currentSlide,
    setActiveSlide
  }
}