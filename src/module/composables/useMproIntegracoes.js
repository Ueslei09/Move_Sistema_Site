// src/modules/mpro/composables/useMproIntegracoes.js
import { ref } from 'vue'
import { mproIntegracoesService } from '../services/mproIntegracoesService'

export function useMproIntegracoes() {
  const data = ref(mproIntegracoesService.getIntegracoesData())

  return {
    data
  }
}