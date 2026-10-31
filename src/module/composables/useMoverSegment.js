// src/modules/home/composables/useMoverSegment.js
import { ref } from 'vue'
import { moverSegmentService } from '../services/moverSegmentService'

export function useMoverSegment() {
  const segmentData = ref(moverSegmentService.getSegmentData())

  return {
    segmentData
  }
}