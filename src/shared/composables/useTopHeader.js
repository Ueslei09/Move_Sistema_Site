// src/shared/composables/useTopHeader.js
import { topHeaderService } from '../services/topHeaderService'

export function useTopHeader() {
  const topHeaderData = topHeaderService.getTopHeaderData()
  return { topHeaderData }
}