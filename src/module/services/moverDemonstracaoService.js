// src/modules/home/services/moverDemonstracaoService.js
export const moverDemonstracaoService = {
  getDemonstracaoData() {
    return {
      titlePart1: "Conheça a ",
      titlePart2: "solução",
      titlePart3: " na prática",
      buttonText: "Solicitar demonstração",
      buttonUrl: "/contato",
      demoImage: "/mover7_imagem.png", // Ajuste para o caminho correto do seu projeto se necessário
      imageAlt: "Personagem 3D da Mover Sistemas apontando para o botão de solicitar demonstração",
      ariaLabelButton: "Solicitar uma demonstração prática das soluções da Mover Sistemas"
    }
  }
}