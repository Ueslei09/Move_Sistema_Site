// src/modules/home/composables/useMoverDemonstracao.js
import { ref } from 'vue'
import { moverDemonstracaoService } from '../services/moverDemonstracaoService'

export function useMoverDemonstracao() {
  const demonstracaoData = ref(moverDemonstracaoService.getDemonstracaoData())

  return {
    demonstracaoData
  }
}