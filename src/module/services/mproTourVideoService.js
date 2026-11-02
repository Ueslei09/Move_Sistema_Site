// src/modules/mpro/services/mproTourVideoService.js
export const mproTourVideoService = {
  getData() {
    return {
      // Título dividido para colorir apenas o começo com #8bc34a e o restante com #0b2545
      titleHighlight: "Tour rápido",
      titleRest: " pelo Mpro",
      
      // Configuração do Vídeo (ex: Embed do YouTube horizontal / Tour Geral)
      videoSource: "/mpro1_video.mp4",
      videoTitle: "Tour rápido pelo Mpro Sistemas",

      // Configurações do Botão
      buttonText: "Veja mais vídeos sobre o Mpro",
      buttonAriaLabel: "Assistir a mais vídeos educacionais e demonstrações do Mpro"
    }
  }
}