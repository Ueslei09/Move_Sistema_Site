// src/modules/home/composables/useMoverProvaSocial.js
import { ref } from 'vue'
import { moverProvaSocialService } from '../services/moverProvaSocialService'

export function useMoverProvaSocial() {
  const provaSocialData = ref(moverProvaSocialService.getProvaSocialData())

  return {
    provaSocialData
  }
}