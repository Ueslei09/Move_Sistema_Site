// src/modules/home/services/moverProvaSocialService.js
export const moverProvaSocialService = {
  getProvaSocialData() {
    return {
      titlePart1: "Milhares de lojistas ",
      titlePart2: "já aceleram com a Mover. Veja quem está crescendo com a gente.",
      testimonials: [
        {
          name: "Diego Costa",
          role: "proprietário da Tudo para Moto",
          quote: "A gente tem um software parrudo, que se você é pequenininho ele é parrudo. Se você é médio, ele é parrudo e se você é grande, ele também é parrudo.",
          avatar: "moverprovasocial1_imagem.jpg",
          url: "/historias/diego-costa"
        },
        {
          name: "Alexandre Sarti",
          role: "sócio da Sunset Cosméticos",
          quote: "Um pedido que entra no marketplace, imediatamente vai para o ERP da Mover, a NF é emitida, o atualizado e logo a gente imprime a etiqueta e tá pronto para envio. Minha equipe não trabalha para o sistema, o sistema trabalha pra gente.",
          avatar: "/moverprovasocial2_imagem.jpg",
          url: "/historias/alexandre-sarti"
        },
        {
          name: "Juliana Dias",
          role: "dona da Jeff Sportswear",
          quote: "A Mover é uma plataforma fácil que toda a empresa utiliza e se beneficia das informações. E essa organização é essencial para a empresa rodar.",
          avatar: "moverprovasocial3_imagem.jpg",
          url: "/historias/juliana-dias"
        },
        {
          name: "Fernanda Bernardini",
          role: "sócia-fundadora da Birden Clothing",
          quote: "Com o ERP da Mover, a gente conseguiu ficar muito mais profissional, e crescer de forma estruturada.",
          avatar: "moverprovasocial4_imagem.jpg",
          url: "/historias/felipe-bernardini"
        }
      ]
    }
  }
}