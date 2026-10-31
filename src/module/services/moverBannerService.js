// src/modules/home/services/moverBannerService.js
export const moverBannerService = {
  getBannerData() {
    return {
      titlePart1: "Portfólio completo",
      titlePart2: " para diferentes necessidades de gestão",
      subtitle: "Soluções desenvolvidas para atender desde operações simplificadas até modelos mais robustos de gestão.",
      buttonText: "Conheça nossas soluções",
      buttonUrl: "/solucoes",
      bannerImage: "/move6_imagem.jpg", // Ajuste para o caminho da sua imagem de mockup
      imageAlt: "Mockup de sistemas Mover exibindo painel administrativo em desktop, tablet e aplicativo mobile",
      ariaLabelButton: "Ir para a página de soluções da Mover Sistemas"
    }
  }
}