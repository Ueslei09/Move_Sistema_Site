// src/modules/home/services/moverSegmentService.js
export const moverSegmentService = {
  getSegmentData() {
    return {
      titlePart1: "Soluções adaptadas a diferentes ",
      titleHighlight: "segmentos",
      titlePart2: " e modelos de operação",
      subtitle: "As soluções Mover atendem diferentes segmentos do mercado, adaptando-se à realidade operacional e às necessidades de cada negócio.",
      buttonText: "Fale com nossos especialistas",
      buttonUrl: "/contato",
      ariaLabelButton: "Entrar em contato com especialistas da Mover Sistemas",
      
      segments: [
        { name: "Mercados", icon: "bi-cart3", url: "/segmentos/mercados", ariaLabel: "Segmento de Mercados e Supermercados" },
        { name: "Autopeças", icon: "bi-tools", url: "/segmentos/auto-pecas", ariaLabel: "Segmento de Autopeças e Oficinas" },
        { name: "Lanchonetes", icon: "bi-cup-hot", url: "/segmentos/lanchonetes", ariaLabel: "Segmento de Lanchonetes e Fast Food" },
        { name: "Restaurantes", icon: "bi-shop", url: "/segmentos/restaurantes", ariaLabel: "Segmento de Restaurantes e Alimentação" },
        { name: "Roupas", icon: "bi-tag", url: "/segmentos/roupas", ariaLabel: "Segmento de Lojas de Roupas e Vestuário" },
        { name: "Calçados", icon: "bi-bag", url: "/segmentos/calcados", ariaLabel: "Segmento de Lojas de Calçados" },
        { name: "Açougue", icon: "bi-basket", url: "/segmentos/acougue", ariaLabel: "Segmento de Açougues e Casas de Carnes" },
        { name: "Mecânicas", icon: "bi-gear", url: "/segmentos/mecanicas", ariaLabel: "Segmento de Oficinas Mecânicas" },
        { name: "Transportes", icon: "bi-truck", url: "/segmentos/transportes", ariaLabel: "Segmento de Transportadoras e Logística" },
        { name: "Óticas", icon: "bi-eyeglasses", url: "/segmentos/oticas", ariaLabel: "Segmento de Óticas" },
        { name: "Vendas externas", icon: "bi-briefcase", url: "/segmentos/vendas-externas", ariaLabel: "Segmento de Vendas Externas e Representantes" },
        { name: "Materiais de construção", icon: "bi-building", url: "/segmentos/materiais-construcao", ariaLabel: "Segmento de Lojas de Materiais de Construção" }
      ]
    }
  }
}