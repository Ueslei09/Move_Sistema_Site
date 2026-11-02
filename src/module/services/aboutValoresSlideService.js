// src/modules/home/services/aboutValoresSlideService.js
export const aboutValoresSlideService = {
  getValoresData() {
    return [
      {
        id: 1,
        title: "Missão",
        description: "Desenvolver produtos de qualidade com confiabilidade e praticidade, que atendam às necessidades dos nossos clientes. Primamos pela parceria e lucratividade, oferecendo oportunidades e buscando o desenvolvimento mútuo com os colaboradores.",
        bgStyle: { backgroundColor: "#0b2545" },
        bgImage: "/moovelogo1_imagem.png", // Substitua pelo caminho da sua imagem do Slide 1
        titleStyle: { color: "#8bc34a" },
        descStyle: { color: "#ffffff" }
      },
      {
        id: 2,
        title: "Visão",
        description: "Ser referência nacional em sistema de automação comercial, oferecendo parceria segura e lucratividade aos revendedores.",
        bgStyle: { backgroundColor: "#a6b9c7" },
        bgImage: "/moovelogo1_imagem.png", // Substitua pelo caminho da sua imagem do Slide 1
        titleStyle: { color: "#61b329" },
        descStyle: { color: "#0b2545" }
      },
      {
        id: 3,
        title: "Valores",
        description: "Integridade, dedicação, comprometimento, honestidade, parceria, respeito, ética, profissionalismo, trabalho em equipe, empenho, valorização e seriedade.",
        bgStyle: { backgroundColor: "#0b2545" },
        bgImage: "/moovelogo1_imagem.png", // Substitua pelo caminho da sua imagem do Slide 1
        titleStyle: { color: "#8bc34a" },
        descStyle: { color: "#ffffff" }
      }
    ]
  }
}