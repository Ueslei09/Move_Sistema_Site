// src/modules/about/composables/useAbout.js
import { ref } from 'vue'
import { aboutService } from '../services/aboutService'

export function useAbout() {
  const aboutData = ref(aboutService.getAboutData())

  return {
    aboutData
  }
}