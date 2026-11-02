// src/modules/mpro/composables/useMproTourVideo.js
import { ref } from 'vue'
import { mproTourVideoService } from '../services/mproTourVideoService'

export function useMproTourVideo() {
  const tourData = ref(mproTourVideoService.getData())

  const handleActionClick = () => {
    // Ação do botão (ex: redirecionar para playlist, modal ou canal)
    const target = document.getElementById('contato') || document.body
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    tourData,
    handleActionClick
  }
}