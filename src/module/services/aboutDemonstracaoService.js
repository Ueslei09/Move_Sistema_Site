// src/modules/home/services/aboutDemonstracaoService.js
export const aboutDemonstracaoService = {
  getData() {
    return {
      // Configuração da Mídia à Esquerda (Pode ser imagem, vídeo local ou YouTube)
      mediaType: "video", // Opções: "image", "video" ou "youtube"
      mediaUrl: "/move1_video.mp4", // URL da imagem, vídeo local (.mp4) ou embed do YouTube
      mediaPoster: "/paginavideoabout_imagem.png", // Poster caso seja vídeo local
      mediaAlt: "Demonstração do Sistema ERP Mover",

      // Textos à Direita
      title: "Sistema ERP",
      titleColor: "#8bc34a", // Cor solicitada para o título
      
      description: "Com o Sistema ERP você tem controle de estoque, pedidos, notas fiscais e muito mais! Nosso sistema automatiza e centraliza toda a sua operação loja física, virtual e nos principais marketplaces do mercado.",
      descriptionColor: "#0b2545", // Cor da descrição

      subtitle: "Mais controle, menos trabalho.",
      subtitleColor: "#0b2545", // Cor do subtítulo

      // Botão
      buttonText: "teste grátis por 30 dias",
      buttonUrl: "/contato",
      ariaLabelButton: "Solicitar teste gratuito do sistema ERP Mover por 30 dias"
    }
  }
}