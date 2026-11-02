// src/modules/mpro/services/mproSegmentoService.js
export const mproSegmentoService = {
  getData() {
    return {
      titlePrefix: "O ",
      titleHighlight: "MPRO",
      titleRest: " atende às necessidades de diferentes segmentos do varejo",
      subtitle: "Uma solução flexível, preparada para diferentes segmentos do varejo e modelos de gestão:",
      
      segments: [
        { name: "Mercados", icon: "bi-cart3" },
        { name: "Autopeças", icon: "bi-tools" },
        { name: "Lanchonetes", icon: "bi-cup-straw" },
        { name: "Restaurantes", icon: "bi-shop" },
        { name: "Roupas", icon: "bi-tag" },
        { name: "Calçados", icon: "bi-bag" },
        { name: "Materiais de construção", icon: "bi-bricks" },
        { name: "Transportadoras", icon: "bi-truck" },
        { name: "Mecânicas", icon: "bi-wrench" },
        { name: "Açougue", icon: "bi-segmented-nav" },
        { name: "Óticas", icon: "bi-eyeglasses" },
        { name: "Vendas externas", icon: "bi-briefcase" }
      ],

      buttonText: "Solicite uma demonstração gratuita",
      buttonAriaLabel: "Solicitar demonstração gratuita do Mpro"
    }
  }
}