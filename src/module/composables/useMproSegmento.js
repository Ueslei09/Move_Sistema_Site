// src/modules/mpro/composables/useMproSegmento.js
import { ref } from 'vue'
import { mproSegmentoService } from '../services/mproSegmentoService'

export function useMproSegmento() {
  const segmentData = ref(mproSegmentoService.getData())

  const handleActionClick = () => {
    const target = document.getElementById('contato') || document.body
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    segmentData,
    handleActionClick
  }
}