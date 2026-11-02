// src/modules/home/composables/useAboutValoresSlide.js
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { aboutValoresSlideService } from '../services/aboutValoresSlideService'

export function useAboutValoresSlide() {
  const slides = ref(aboutValoresSlideService.getValoresData())
  const activeIndex = ref(0)
  const sectionRef = ref(null)

  // Computa o fundo dinâmico do slide ativo
  const currentBgStyle = computed(() => {
    return slides.value[activeIndex.value]?.bgStyle || { backgroundColor: '#0b2545' }
  })

  // Lógica de avanço/recuo de slides baseada no movimento do scroll (efeito narrativa)
  function handleScroll() {
    if (!sectionRef.value) return

    const rect = sectionRef.value.getBoundingClientRect()
    const sectionHeight = sectionRef.value.offsetHeight
    const windowHeight = window.innerHeight

    const scrolled = windowHeight - rect.top

    if (scrolled >= 0 && scrolled <= sectionHeight) {
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
      
      if (progress < 0.35) {
        activeIndex.value = 0
      } else if (progress >= 0.35 && progress < 0.7) {
        activeIndex.value = 1
      } else {
        activeIndex.value = 2
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    slides,
    activeIndex,
    sectionRef,
    currentBgStyle
  }
}