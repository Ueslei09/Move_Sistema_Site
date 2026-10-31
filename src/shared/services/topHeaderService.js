// src/shared/services/topHeaderService.js
export const topHeaderService = {
  getTopHeaderData() {
    return {
      links: [
        { name: "Contato", url: "/contato", ariaLabel: "Ir para a página de contato" },
        { name: "Blog", url: "/blog", ariaLabel: "Ir para o blog da Mover Sistemas" }
      ]
    }
  }
}