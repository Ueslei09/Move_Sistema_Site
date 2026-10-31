// src/modules/home/composables/useMoverSolucoes.js
import { ref } from 'vue'
import { moverSolucoesService } from '../services/moverSolucoesService'

export function useMoverSolucoes() {
  const solucoesData = ref(moverSolucoesService.getSolucoesData())

  return {
    solucoesData
  }
}