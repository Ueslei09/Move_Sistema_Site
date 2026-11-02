// src/modules/mpro/services/mpromodulosService.js
export const mpromodulosService = {
  getData() {
    return {
      titleHighlight: "Recursos",
      titleRest: " que sustentam negócios todos os dias",
      
      // Lista de 16 slides/módulos com suporte a Opção de Imagem ou Vídeo no lado direito
      slides: [
        {
          id: 1,
          name: "Cadastros",
          descriptions: [
            "Cadastro de clientes, fornecedores, transportadoras e vendedores",
            "Histórico detalhado financeiro e compras do cliente",
            "Cadastro automático pelo CNPJ",
            "Agenda de contatos",
            "Preenchimento automático do endereço pelo CEP",
            "Campos personalizados para cadastro",
            "Controle de crédito por troca",
            "Tabela de preço",
            "Clube de fidelidade",
            "Convênio",
            "Integração com WhatsApp"
          ],
          // OPÇÃO 1: Imagem (pode alternar para vídeo se preferir)
          mediaType: "image", 
          mediaSrc: "/mpro1_imagem.jpg", 
          mediaAlt: "Tela de Cadastros Mpro"
        },
        {
          id: 2,
          name: "Estoque",
          descriptions: [
            "Controle de múltiplos almoxarifados e filiais",
            "Inventário rotativo e contagem por coletor",
            "Curva ABC de produtos e lucratividade",
            "Gestão de lote, validade e número de série",
            "Sugestão de compra baseada no histórico de vendas"
          ],
          // OPÇÃO 2: Exemplo usando Vídeo em vez de imagem neste slide
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Vídeo explicativo do módulo de Estoque"
        },
        {
          id: 3,
          name: "Financeiro",
          descriptions: [
            "Contas a pagar e a receber integradas ao caixa",
            "Fluxo de caixa diário, mensal e projetado",
            "Conciliação bancária automática via arquivo OFX",
            "Emissão e controle de boletos bancários com remessa/retorno",
            "Gestão de cartões de crédito e recebíveis"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Módulo Financeiro Mpro"
        },
        {
          id: 4,
          name: "NF-e",
          descriptions: [
            "Emissão de Nota Fiscal Eletrônica sem limites mensais",
            "Inutilização, cancelamento e carta de correção eletrônica",
            "Envio automático de XML e PDF para o contador",
            "Cálculo automático de impostos (ICMS, PIS, COFINS, IPI)",
            "Manifestação do destinatário integrada"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Emissão de NF-e Mpro"
        },
        {
          id: 5,
          name: "PDV",
          descriptions: [
            "Frente de caixa rápido, ágil e offline-first",
            "Integração direta com TEF dedicado e PIX na tela",
            "Compatibilidade com balanças leitoras de código de barras",
            "Controle de gaveta, sangria e suprimento",
            "Identificação rápida do cliente no atendimento"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "PDV Frente de Caixa Mpro"
        },
        {
          id: 6,
          name: "NFC-e",
          descriptions: [
            "Emissão de Nota Fiscal de Consumidor Eletrônica ágil",
            "Impressão rápida em bobina térmica (80mm/58mm)",
            "Controle de contingência automática caso caia a internet",
            "Identificação de CPF/CNPJ na nota com um toque"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "NFC-e Mpro"
        },
        {
          id: 7,
          name: "CT-e",
          descriptions: [
            "Emissão de Conhecimento de Transporte Eletrônico",
            "Gestão completa para transportadoras e frotas",
            "Controle de documentos de cargas vinculados",
            "Cálculo automático de frete e impostos associados"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "CT-e Mpro"
        },
        {
          id: 8,
          name: "Orçamento",
          descriptions: [
            "Geração rápida de orçamentos para balcão ou externos",
            "Conversão de orçamento em pedido ou venda com 1 clique",
            "Validade de proposta e controle de status de negociação",
            "Reserva automática de estoque opcional para orçamentos abertos"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Módulo de Orçamento Mpro"
        },
        {
          id: 9,
          name: "Pedido de venda",
          descriptions: [
            "Controle completo do fluxo de pedidos faturados e pendentes",
            "Aprovação de crédito e alçadas de desconto",
            "Separação, conferência e expedição de mercadorias",
            "Integração direta com o setor financeiro e faturamento"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Pedido de Venda Mpro"
        },
        {
          id: 10,
          name: "DAV",
          descriptions: [
            "Documento Auxiliar de Venda customizado",
            "Atendimento ágil em salão ou balcão de atendimento",
            "Lançamento de itens por comanda ou mesa",
            "Totalmente adequado à legislação fiscal vigente"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "DAV Mpro"
        },
        {
          id: 11,
          name: "Ordem de serviço*",
          descriptions: [
            "Controle de entrada de equipamentos para assistência técnica",
            "Checklist de entrada, laudo técnico e peças utilizadas",
            "Histórico de atendimento por cliente e aparelho",
            "Controle de garantia e status de reparo em tempo real"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Ordem de Serviço Mpro"
        },
        {
          id: 12,
          name: "Compras",
          descriptions: [
            "Gestão de cotações e pedidos de compra junto a fornecedores",
            "Importação de XML de notas de compra para entrada automática",
            "Controle de itens entregues versus pendentes",
            "Atualização automática de custo de reposição e margem"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Módulo de Compras Mpro"
        },
        {
          id: 13,
          name: "Relatórios",
          descriptions: [
            "Mais de 400 relatórios gerenciais e estratégicos",
            "Filtros avançados por período, vendedor, região e produto",
            "Exportação rápida para Excel, PDF e CSV",
            "Painéis de indicadores executivos (Dashboards)"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Relatórios Gerenciais Mpro"
        },
        {
          id: 14,
          name: "Fiscal",
          descriptions: [
            "Apuração de impostos e geração de arquivos obrigatórios",
            "SPED Fiscal e SPED Contribuições validados",
            "Controle de substituição tributária e regras por estado",
            "Redução de riscos com o fisco e conformidade total"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Módulo Fiscal Mpro"
        },
        {
          id: 15,
          name: "Usuários",
          descriptions: [
            "Controle de acesso por perfil e permissões granulares",
            "Auditoria de ações realizadas no sistema por operador",
            "Segurança de dados com criptografia avançada",
            "Bloqueio de funções sensíveis por senha de supervisor"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Gestão de Usuários Mpro"
        },
        {
          id: 16,
          name: "Backup",
          descriptions: [
            "Rotina de backup automático e seguro na nuvem",
            "Proteção completa contra perda de dados operacionais",
            "Restauração rápida de pontos de salvamento",
            "Tranquilidade e segurança para o seu negócio 24 horas por dia"
          ],
          mediaType: "image",
          mediaSrc: "/mpro1_imagem.jpg",
          mediaAlt: "Rotina de Backup Mpro"
        }
      ]
    }
  }
}