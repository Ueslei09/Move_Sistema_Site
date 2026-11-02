// src/modules/home/services/aboutBannerCardService.js
export const aboutBannerCardService = {
  getBannerCardsData() {
    return [
      {
        id: 1,
        image: "/moverAbout5_imagem.png", // Substitua pelo print ou imagem do seu Hub de Integração
        imageAlt: "Hub de integração com marketplaces Mover",
        title: "Hub de integração",
        description: "Infinitas possibilidades para suas vendas. Com o Hub de integração você conecta seus pedidos de marketplaces sem complicação. Sincronize pedidos, estoques e preços em tempo real e tenha uma visão completa do seu negócio.",
        buttonText: "acesse + de 100 integrações",
        buttonUrl: "/integracoes",
        ariaLabelButton: "Acessar mais de 100 integrações do sistema Mover"
      },
      {
        id: 2,
        image: "/mover6About_imagem.jpg", // Substitua pelo print ou imagem do PDV
        imageAlt: "Sistema PDV e frente de caixa Mover",
        title: "Sistema PDV",
        description: "Venda no balcão, controle seu estoque e acompanhe o faturamento da sua loja física com um Sistema PDV que conversa com o digital e leva suas vendas para o online em poucos cliques. Tudo integrado para facilitar sua vida.",
        buttonText: "conheça a ferramenta",
        buttonUrl: "/pdv",
        ariaLabelButton: "Conhecer a ferramenta Sistema PDV Mover"
      }
    ]
  }
}