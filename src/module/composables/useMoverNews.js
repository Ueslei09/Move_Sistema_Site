// src/modules/home/composables/useMoverNews.js
import { ref } from 'vue'
import { moverNewsService } from '../services/moverNewsService'

export function useMoverNews() {
  const newsData = ref(moverNewsService.getNewsData())

  return {
    newsData
  }
}