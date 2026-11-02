import { ref, onMounted } from 'vue'
import { moverSolucoesService } from '../services/moverSolucoesService'

export function useMoverSolucoes() {
  const solucoesData = ref(moverSolucoesService.getSolucoesData())
  const localVideoRef = ref(null)

  // Função para identificar se é um link do YouTube
  function isYoutubeVideo(url) {
    if (!url) return false
    return url.includes('youtube.com') || url.includes('youtu.be')
  }

  // Função para garantir que o YouTube venha com autoplay desligado
  function getYoutubeEmbedUrl(url) {
    if (!url) return ''
    const separator = url.includes('?') ? '&' : '?'
    if (!url.includes('autoplay=')) {
      return `${url}${separator}autoplay=0&controls=1`
    }
    return url.replace('autoplay=1', 'autoplay=0')
  }

  // Garante que o vídeo local comece pausado quando montado
  onMounted(() => {
    if (localVideoRef.value) {
      localVideoRef.value.pause()
      localVideoRef.value.currentTime = 0
    }
  })

  return {
    solucoesData,
    localVideoRef,
    isYoutubeVideo,
    getYoutubeEmbedUrl
  }
}