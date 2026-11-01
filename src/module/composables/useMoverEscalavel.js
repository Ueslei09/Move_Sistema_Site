// src/modules/home/composables/useMoverEscalavel.js
import { ref, watch } from 'vue'
import { moverEscalavelService } from '../services/moverEscalavelService'

export function useMoverEscalavel(isVisibleRef) {
  const escalavelData = ref(moverEscalavelService.getEscalavelData())
  
  // Valores reativos exibidos na contagem
  const displayValues = ref(escalavelData.value.stats.map(() => 0))
  let hasAnimated = false

  // Função para animar os números quando a seção estiver visível
  watch(isVisibleRef, (newValue) => {
    if (newValue && !hasAnimated) {
      hasAnimated = true
      escalavelData.value.stats.forEach((stat, index) => {
        let startTimestamp = null
        const duration = 2000 // 2 segundos de animação
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp
          const progress = Math.min((timestamp - startTimestamp) / duration, 1)
          
          // Efeito de easing suave
          const easeProgress = 1 - Math.pow(1 - progress, 3)
          displayValues.value[index] = Math.floor(easeProgress * stat.value)
          
          if (progress < 1) {
            window.requestAnimationFrame(step)
          } else {
            displayValues.value[index] = stat.value
          }
        }
        window.requestAnimationFrame(step)
      })
    }
  })

  return {
    escalavelData,
    displayValues
  }
}