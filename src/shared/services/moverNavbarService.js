// src/shared/services/moverNavbarService.js
export const moverNavbarService = {
  getNavbarData() {
    return {
      brandName: "Mover Sistemas",
      showLogoImage: true,
      logoImage: "/moovelogo1_imagem.png",
      logoAlt: "Logotipo da Mover Sistemas, exibindo o nome em azul e um arco verde com seta indicativa.",
      mainLinks: [
        { 
          name: "Quem somos", 
          url: "/quem-somos", 
          ariaLabel: "Página Quem somos",
          subItems: [
            { name: "O que é Mover Sistemas ?", url: "/quem-somos/quem-e-mover-sistemas" }
          ]
        },
        { 
          name: "Soluções", 
          url: "/solucoes", 
          ariaLabel: "Página de Soluções",
          subItems: [
            { name: "MPro", url: "/solucoes/mpro" },
            { name: "MSlim", url: "/solucoes/mslim" },
            { name: "Mweb", url: "/solucoes/mweb" },
            { name: "MMicro", url: "/solucoes/mmicro" },
            { name: "Mct-e", url: "/solucoes/mct-e" },
            { name: "Ajatus", url: "/solucoes/ajatus" },
            { name: "Adicionais", url: "/solucoes/adicionais" },
            { name: "Parcerias", url: "/solucoes/parcerias" }
          ]
        },
        { 
          name: "Outras ferramentas", 
          url: "/ferramentas", 
          ariaLabel: "Outras ferramentas",
          subItems: [
            { name: "ZWeb", url: "/ferramentas/zweb" }
          ]
        },
        { 
          name: "Segmentos", 
          url: "/segmentos", 
          ariaLabel: "Página de Segmentos",
          subItems: [
            { name: "Açougue", url: "/segmentos/acougue" },
            { name: "Auto peças", url: "/segmentos/auto-pecas" },
            { name: "Calçados", url: "/segmentos/calcados" },
            { name: "Materiais de construção", url: "/segmentos/materiais-construcao" },
            { name: "Mecânicas", url: "/segmentos/mecanicas" },
            { name: "Mercados", url: "/segmentos/mercados" },
            { name: "Lanchonetes", url: "/segmentos/lanchonetes" },
            { name: "Restaurantes", url: "/segmentos/restaurantes" },
            { name: "Roupas", url: "/segmentos/roupas" },
            { name: "Transportadoras", url: "/segmentos/transportadoras" },
            { name: "Vendas externas", url: "/segmentos/vendas-externas" }
          ]
        },
        //{ 
         // name: "Seja revendedor", 
         // url: "/revendedor", 
         // ariaLabel: "Página Seja um revendedor",
        //  subItems: []
       // },
        { 
          name: "Venda autorizada", 
          url: "/revenda-autorizada", 
          ariaLabel: "Página Revenda autorizada",
          subItems: [
            { name: "Painel da venda", url: "/revenda/painel" },
            { name: "Painel de suporte", url: "/revenda/suporte" },
            { name: "Documentação", url: "/revenda/documentacao" },
            { name: "BDC", url: "/revenda/bdc" },
            { name: "Comparativo de produtos", url: "/revenda/comparativo" },
            //{ name: "Biblioteca infantil", url: "/revenda/biblioteca" }
          ]
        }
      ]
    }
  }
}