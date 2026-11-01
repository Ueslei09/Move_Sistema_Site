// src/modules/home/composables/useMoverFootContatos.js
import { ref } from 'vue'
import { moverFootContatosService } from '../services/moverFootContatosService'

export function useMoverFootContatos() {
  const footData = ref(moverFootContatosService.getFootContatosData())

  return {
    footData
  }
}