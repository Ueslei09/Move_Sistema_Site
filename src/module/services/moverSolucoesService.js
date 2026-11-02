// src/modules/home/services/moverSolucoesService.js
export const moverSolucoesService = {
  getSolucoesData() {
    return {
      titlePart1: "O ERP que pensa ",
      titleHighlight: "junto com você",
      subtitle: "Nossas soluções automatizam análises, integram rotinas e otimizam a gestão e as tarefas operacionais do seu negócio.",
      buttonText: "Teste gratuitamente",
      buttonUrl: "/contato",
      ariaLabelButton: "Solicitar teste gratuito das soluções Mover Sistemas",
      //videoUrl: "https://www.youtube.com/embed/0vjQTsEZDIE"
      // Configuração do vídeo/mockup à direita
      videoUrl: "/mover3_video.mp4", // Substitua pelo link do vídeo se houver
      videoPoster: "/moovelogo1_imagem.png",
      
      cards: [
        {
          title: "Estoque",
          icon: "bi-box-seam",
          description: "Monitoramento em tempo real do estoque, alertando quando os produtos atingem o limite mínimo.",
          subLinks: [
            { name: "Gestão de estoque", url: "/solucoes/estoque" },
            { name: "Separação e expedição de pedidos", url: "/solucoes/expedicao" }
          ]
        },
        {
          title: "Fiscal",
          icon: "bi-file-earmark-text",
          description: "Monitoramento de notas fiscais com avisos imediatos sobre rejeições ou erros de processamento.",
          subLinks: [
            { name: "Emissor de NF-e", url: "/solucoes/nfe" },
            { name: "Controle de GNRE interestaduais", url: "/solucoes/gnre" }
          ]
        },
        {
          title: "Financeiro",
          icon: "bi-wallet2",
          description: "Comparação de informações do ERP com recebimentos de gateway de pagamento para identificar divergências.",
          subLinks: [
            { name: "Conciliação bancária automática", url: "/solucoes/conciliacao" },
            { name: "Controle financeiro completo", url: "/solucoes/financeiro" }
          ]
        },
        {
          title: "Clientes",
          icon: "bi-people",
          description: "Análise avançada da porcentagem de clientes recorrentes e cálculo do intervalo médio entre pedidos.",
          subLinks: [
            { name: "Controle de Vendas", url: "/solucoes/vendas" },
            { name: "Relatórios Gerenciais", url: "/solucoes/relatorios" }
          ]
        }
      ]
    }
  }
}