// src/modules/mpro/services/mproSolutionVarejoService.js
export const mproSolutionVarejoService = {
  getData() {
    return {
      // Título dividido para colorir "Mpro na prática" com #8bc34a e o restante em branco
      titleHighlight: "Mpro na prática:",
      titleRest: " uma solução consolidada para a gestão do varejo",
      
      subtitle: "Estruturado para operações reais que exigem organização, agilidade e precisão no dia a dia.",
      
      features: [
        "Estrutura preparada para diferentes modelos de operação",
        "Recursos desenvolvidos com foco na realidade operacional",
        "Plataforma estável e em constante evolução"
      ],

      // Opção flexível no service para vídeo (vertical) ou imagem
      mediaType: "video", // Pode alterar para "image" se desejar usar uma foto estática
      mediaSrc: "/mover2_video.mp4", // Link do embed ou arquivo de vídeo/imagem
      mediaAlt: "Demonstração prática do Mpro Varejo"
    }
  }
}