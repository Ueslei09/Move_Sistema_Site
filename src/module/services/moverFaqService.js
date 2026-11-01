// src/modules/home/services/moverFaqService.js
export const moverFaqService = {
  getFaqData() {
    return {
      title: "FAQ",
      faqs: [
        {
          question: "Como faço para ser revendedor Mover Sistemas?",
          answer: "Basta entrar em contato conosco por meio deste formulário. E o melhor: não é preciso fazer nenhum investimento inicial para revender nossas soluções.",
          isOpen: false
        },
        {
          question: "Quais os requisitos para ser parceiro?",
          answer: "É muito importante ter conhecimento na área de informática ou software de gestão, habilidade em vendas, ser comunicativo e gostar de trabalhar com pessoas. Nossos parceiros atuam na comercialização, implantação do sistema e no suporte técnico.",
          isOpen: false
        },
        {
          question: "Quais integrações o sistema Mover possui?",
          answer: "Possuímos diversas integrações estratégicas para o seu negócio, como iFood (sistema de pedidos delivery), Imendes (ajuste tributário do cadastro de produtos), Scanntech (clube de promoções integrado), Tecnospeed (componente para emissão de notas) e Backup na nuvem.",
          isOpen: false
        }
      ]
    }
  }
}