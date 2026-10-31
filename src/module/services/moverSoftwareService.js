// src/modules/home/services/moverSoftwareService.js
export const moverSoftwareService = {
  getSoftwareData() {
    return {
      titlePart1: "O software de gestão que transforma operações ",
      titleHighlight: "manuais em negócios sem limites",
      
      // 3 Cards Superiores (1 de col-6 e 2 de col-3)
      topCards: [
        {
          size: "col-12 col-lg-6",
          title: "Emissão de nota fiscal automática",
          description: "Gere NF-e e NFC-e em segundos e sem erros. Envie o arquivo XML do fornecedor para a Us. Ela cadastra os produtos, atualiza o estoque e lança a conta a pagar.",
          image: "/mover12_imagem.jpg", // Substitua pelo caminho da sua imagem
          imageAlt: "Emissão de nota fiscal automática no ERP Mover"
        },
        {
          size: "col-12 col-lg-3",
          title: "Sistema de gestão de estoque sem furos",
          description: "Sincronize o inventário automaticamente em todos os seus canais de venda. A Lis detalha os 5 produtos com maior valor financeiro sem vendas para você planejar queimas de estoque.",
          image: "/mover13_imagem.jpg",
          imageAlt: "Gestão de estoque sem furos"
        },
        {
          size: "col-12 col-lg-3",
          title: "Gestão financeira completa com DRE",
          description: "Acompanhe a movimentação de caixa, analise o lucro, organize recebimentos e muito mais. A Lis consolida os recebimentos e pagamentos toda sexta-feira e entrega o saldo líquido direto no WhatsApp.",
          image: "/mover_sw_3.png",
          imageAlt: "Gestão financeira completa com DRE"
        }
      ],

      // 4 Cards Inferiores (col-lg-3 / col-4 cada)
      bottomCards: [
        {
          title: "Relatório de margem de contribuição avançado",
          description: "Descubra o lucro real de cada venda, canal e produto.",
          image: "/mover_sw_4.png",
          imageAlt: "Relatório de margem de contribuição"
        },
        {
          title: "Gestão unificada de múltiplos CNPJs",
          description: "Centralize a separação, expedição e estoque em uma única conta-mãe, com faturamento distribuído e automatizado.",
          image: "/mover_sw_5.png",
          imageAlt: "Gestão unificada de múltiplos CNPJs"
        },
        {
          title: "Fluxo de pedidos automatizado",
          description: "Todos os pedidos no mesmo painel e, após a venda, o ERP emite NF, atualiza o estoque e gera o processo de expedição.",
          image: "/mover_sw_6.png",
          imageAlt: "Fluxo de pedidos automatizado"
        },
        {
          title: "Logística agilizada",
          description: "Com impressão automática de etiqueta e DANFE direto no ERP, separação e embalagem em lote, lista de separação de pedidos e conferência via bipagem.",
          image: "/mover11_imagem.jpg",
          imageAlt: "Logística agilizada"
        }
      ]
    }
  }
}