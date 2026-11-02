// src/modules/mpro/composables/useMproVideoSolution.js
import { ref } from 'vue'
import { mproVideoSolutionService } from '../services/mproVideoSolutionService'

export function useMproVideoSolution() {
  const content = ref(mproVideoSolutionService.getData())

  const handleActionClick = () => {
    // Ação do botão (ex: abrir modal, scroll para contato, etc.)
    const target = document.getElementById('contato') || document.body
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    content,
    handleActionClick
  }
}