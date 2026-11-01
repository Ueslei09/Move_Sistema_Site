// src/modules/home/services/moverNewsService.js
export const moverNewsService = {
  getNewsData() {
    return {
      title: "Conteúdos sobre gestão, automação e varejo",
      buttonText: "Acesse o blog da Mover",
      buttonUrl: "/blog",
      ariaLabelButton: "Acessar o blog oficial da Mover Sistemas",
      
      newsCards: [
        {
          category: "Salão de beleza",
          title: "Como atrair clientes para salão de beleza: estratégias eficazes para crescer em 2026",
          date: "02/02/2026",
          image: "mover24_imagem.jpg",
          imageAlt: "Profissional em salão de beleza sorrindo",
          url: "/blog/como-atrair-clientes-salao-de-beleza"
        },
        {
          category: "Revenda de software",
          title: "Torne-se uma revenda de software de automação comercial",
          date: "02/03/2026",
          image: "mover25_imagem.jpg",
          imageAlt: "Parceiros em reunião de negócios sobre software",
          url: "/blog/torne-se-revenda-software"
        },
        {
          category: "Automação comercial, Revenda de software",
          title: "Saiba como vender software de automação comercial",
          date: "26/11/2025",
          image: "mover26_imagem.jpg",
          imageAlt: "Equipe trabalhando em software de automação comercial",
          url: "/blog/como-vender-software-automacao"
        },
        {
          category: "Automação comercial, Reforma tributária",
          title: "Seu sistema está pronto para a transição tributária?",
          date: "06/06/2025",
          image: "mover27_imagem.jpg",
          imageAlt: "Atendimento no balcão com automação comercial",
          url: "/blog/sistema-transicao-tributaria"
        }
      ]
    }
  }
}