// src/modules/mpro/services/mproService.js
export const mproService = {
  getHeroData() {
    return {
      logoImg: "/logmover1pretoebranco.png", // Substitua pelo caminho da sua logo Mpro branca ou correspondente
      logoAlt: "Logo Mpro Sistemas",
      
      // Subtítulo dividido para aplicar a cor #8bc34a na palavra do meio
      subTitlePart1: "Uma solução ",
      highlightWord: "integrada e sólida",
      subTitlePart2: " para a gestão do varejo",
      
      description: "O Mpro conecta compras, estoque, emissão fiscal e financeiro em um sistema robusto, projetado para dar consistência às operações do varejo.",
      
      buttonText: "Fale com nossos especialistas",
      buttonAriaLabel: "Fale com nossos especialistas sobre o Mpro",
      
      heroImage: "/move6_imagem.png", // Mockup do computador/tablet igual ao print
      heroImageAlt: "Mpro em funcionamento no computador, tablet e celular"
    }
  }
}