// src/modules/home/services/moverFootContatosService.js
export const moverFootContatosService = {
  getFootContatosData() {
    return {
      logo: "/mover2_logo.png",
      logoAlt: "Logotipo Mover Sistemas",
      
      menuCol: {
        title: "MENU",
        links: [
          { name: "Contatos", url: "/contatos" },
          { name: "Parcerias", url: "/parcerias" },
          { name: "Blog", url: "/blog" }
        ]
      },

      parceiroCol: {
        title: "SEJA NOSSO PARCEIRO",
        links: [
          { name: "Fale com um consultor", url: "/consultor" },
          { name: "Saiba mais sobre a parceria", url: "/sobre-parceria" }
        ]
      },

      revendaCol: {
        title: "REVENDA AUTORIZADA",
        links: [
          { name: "Painel da revenda", url: "/painel-revenda" },
          { name: "Painel de suporte", url: "/suporte" },
          { name: "Documentação", url: "/documentacao" }
        ]
      },

      contatosCol: {
        title: "CONTATOS",
        info: [
          "Comercial: 0800 645 0442",
          "vendas@moversistemas.com.br",
          "Suporte técnico: (62) 3441 3120",
          "Documentação: (62) 3441 3105"
        ]
      },

      enderecoCol: {
        title: "ENDEREÇO",
        lines: [
          "Rua av. Fernao Dias, 1280",
          "Sala 402 — Ed. Golden Office",
          "Centro, Goiania — GO",
          "CEP 89700-055"
        ]
      },

      redesCol: {
        title: "SIGA-NOS",
        socials: [
          { name: "Instagram", icon: "bi-instagram", url: "https://instagram.com" },
          { name: "Facebook", icon: "bi-facebook", url: "https://facebook.com" },
          { name: "YouTube", icon: "bi-youtube", url: "https://youtube.com" },
          { name: "LinkedIn", icon: "bi-linkedin", url: "https://linkedin.com" }
        ]
      }
    }
  }
}