// src/modules/home/services/moverDepoimentoService.js
export const moverDepoimentoService = {
  getDepoimentoData() {
    return {
      title: "Foco em gestão e proximidade",
      description1: "Desenvolvemos soluções de software voltadas à gestão empresarial, atendendo negócios de diferentes segmentos com tecnologia consolidada, suporte estruturado e uma rede nacional de parceiros.",
      description2: "Fazemos parte do grupo Move Sistema, um dos maiores ecossistemas globais de software, combinando solidez internacional com conhecimento da realidade brasileira.",
      
      // Tipo de vídeo: 'youtube' ou 'local'
      videoType: "local", 
      youtubeUrl: "", // Substitua pelo link embed do YouTube
      localVideoUrl: "/mover2_video.mp4", // Caminho caso queira usar vídeo da pasta public
      videoTitle: "Depoimento Maeterlink - Gdoor Zucchetti",
      posterImage: "" // Opcional: imagem de capa para o vídeo local
    }
  }
}