// src/modules/mpro/services/mproIntegracoesService.js
export const mproIntegracoesService = {
  getIntegracoesData() {
    return {
      titlePart1: "Integrações",
      titleHighlight: " e recursos ",
      titlePart2: "que conectam a gestão do varejo e aceleram processos",
      items: [
        {
          title: "Gestão financeira completa",
          description: "Ferramentas que centralizam informações financeiras para suporte à tomada de decisão e operação diária."
        },
        {
          title: "Emissão fiscal rápida e segura",
          description: "Atendendo diferentes modelos de operação, com foco em conformidade e sem limite mensal."
        },
        {
          title: "Vendas ágeis e precisas",
          description: "Integração com TEF, PIX, PDV móvel e balanças — reduzindo erros de caixa e acelerando o atendimento ao PDV."
        },
        {
          title: "Controle total do estoque",
          description: "Recursos que permitem visibilidade e controle sobre os níveis de estoque de forma prática e integrada."
        }
      ]
    }
  }
}