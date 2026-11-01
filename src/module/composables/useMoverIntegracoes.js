// src/modules/home/composables/useMoverIntegracoes.js
import { ref } from 'vue'
import { moverIntegracoesService } from '../services/moverIntegracoesService'

export function useMoverIntegracoes() {
  const integracoesData = ref(moverIntegracoesService.getIntegracoesData())

  return {
    integracoesData
  }
}