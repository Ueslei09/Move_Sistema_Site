// src/modules/home/composables/useAboutDemonstracao.js
import { ref } from 'vue'
import { aboutDemonstracaoService } from '../services/aboutDemonstracaoService'

export function useAboutDemostracao() {
  const demonstracaoData = ref(aboutDemonstracaoService.getData())

  function isYoutube(url) {
    if (!url) return false
    return url.includes('youtube.com') || url.includes('youtu.be')
  }

  function getYoutubeEmbed(url) {
    if (!url) return ''
    const separator = url.includes('?') ? '&' : '?'
    if (!url.includes('autoplay=')) {
      return `${url}${separator}autoplay=0&controls=1`
    }
    return url.replace('autoplay=1', 'autoplay=0')
  }

  return {
    demonstracaoData,
    isYoutube,
    getYoutubeEmbed
  }
}