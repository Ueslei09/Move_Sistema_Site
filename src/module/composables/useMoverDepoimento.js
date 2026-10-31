// src/modules/home/composables/useMoverDepoimento.js
import { ref, onMounted } from 'vue'
import { moverDepoimentoService } from '../services/moverDepoimentoService'

export function useMoverDepoimento() {
  const depoimentoData = ref(moverDepoimentoService.getDepoimentoData())
  const isVisible = ref(false)

  // Efeito de rolagem moderna (Intersection Observer para animação de entrada)
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    }, { threshold: 0.2 })

    const sectionElement = document.getElementById('mover-depoimento-section')
    if (sectionElement) observer.observe(sectionElement)
  })

  return {
    depoimentoData,
    isVisible
  }
}