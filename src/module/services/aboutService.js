// src/modules/about/services/aboutService.js
export const aboutService = {
  getAboutData() {
    return {
      title: "O que é a Mover Sistemas",
      subtitle: "A Mover é o ecossistema de soluções para varejo que coloca você no controle total do negócio. Venda onde quiser — loja virtual e física — e gerencie tudo de forma simples e centralizada.",
      sectionHighlight: "Conheça as soluções que impulsionam mais de 50 mil negócios pelo Brasil",
      
      slides: [
        {
          id: 1,
          title: "SERVIÇOS",
          image: "/mover2About_imagem.jpg",
          alt: "Ilustração representando a categoria de Serviços da Mover Sistemas"
        },
        {
          id: 2,
          title: "DISTRIBUIDOR",
          image: "/mover1About_imagem.jpg",
          alt: "Ilustração representando a categoria de Distribuidor e logística da Mover Sistemas"
        },
        {
          id: 3,
          title: "LOJA VIRTUAL",
          image: "/mover3About_imagem.jpg",
          alt: "Ilustração representando a categoria de Loja Virtual e e-commerce da Mover Sistemas"
        },
        {
          id: 4,
          title: "LOJA FÍSICA",
          image: "/mover4About_imagem.jpg",
          alt: "Ilustração representando a categoria de Loja Física e varejo da Mover Sistemas"
        }
      ]
    }
  }
}