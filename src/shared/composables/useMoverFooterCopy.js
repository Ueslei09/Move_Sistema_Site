// src/modules/home/composables/useMoverFooterCopy.js
import { ref } from 'vue'
import { moverFooterCopyService } from '../services/moverFooterCopyService'

export function useMoverFooterCopy() {
  const footerCopyData = ref(moverFooterCopyService.getFooterCopyData())

  return {
    footerCopyData
  }
}