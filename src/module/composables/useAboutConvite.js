// src/modules/home/composables/useAboutConvite.js
import { ref } from 'vue'
import { aboutConviteService } from '../services/aboutConviteService'

export function useAboutConvite() {
  const conviteData = ref(aboutConviteService.getData())

  return {
    conviteData
  }
}