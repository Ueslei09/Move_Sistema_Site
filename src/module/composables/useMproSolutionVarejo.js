// src/modules/mpro/composables/useMproSolutionVarejo.js
import { ref } from 'vue'
import { mproSolutionVarejoService } from '../services/mproSolutionVarejoService'

export function useMproSolutionVarejo() {
  const content = ref(mproSolutionVarejoService.getData())

  return {
    content
  }
}