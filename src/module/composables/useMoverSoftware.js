// src/modules/home/composables/useMoverSoftware.js
import { ref } from 'vue'
import { moverSoftwareService } from '../services/moverSoftwareService'

export function useMoverSoftware() {
  const softwareData = ref(moverSoftwareService.getSoftwareData())

  return {
    softwareData
  }
}