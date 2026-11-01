// src/modules/home/services/moverIntegracoesService.js
export const moverIntegracoesService = {
  getIntegracoesData() {
    return {
      titlePart1: "Integrações e parcerias ",
      titlePart2: "que ampliam o ecossistema de gestão",
      buttonText: "Conheça nossos parceiros",
      buttonUrl: "/parceiros",
      ariaLabelButton: "Conhecer todos os parceiros e integrações da Mover Sistemas",
      
      partners: [
        { name: "iFood", logo: "/mover19_imagem.jpg" },
        { name: "Scanntech", logo: "/mover20_imagem.jpg" },
        { name: "Imendes", logo: "/mover21_imagem.jpg" },
        { name: "GetCard", logo: "/mover22_imagem.png" },
        { name: "Parceiro 5", logo: "/mover23_imagem.jpg" },
        //{ name: "Parceiro 6", logo: "/logos/parceiro6.png" },
        //{ name: "Parceiro 7", logo: "/logos/parceiro7.png" },
       // { name: "Parceiro 8", logo: "/logos/parceiro8.png" },
       // { name: "Parceiro 9", logo: "/logos/parceiro9.png" },
       // { name: "Parceiro 10", logo: "/logos/parceiro10.png" }
      ]
    }
  }
}