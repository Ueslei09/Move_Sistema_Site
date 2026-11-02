// src/modules/mpro/services/mproFormService.js
export const mproFormService = {
  getData() {
    return {
      // Título dividido para colorir "Seja um revendedor" com #8bc34a e o restante em #0b2545
      titleHighlight: "Seja ser nosso parceiro ",
      titleRest: " Mover Sistemas",
      
      subtitle: "Parceria que aproxima!",
      description: "Uma estrutura preparada para apoiar revendedores com soluções consolidadas, suporte contínuo e foco na gestão do varejo brasileiro. Seja nosso parceiro revendedor!",

      // Configuração dos campos do formulário
      fields: [
        { name: "nome", type: "text", placeholder: "Nome", required: true },
        { name: "email", type: "email", placeholder: "E-mail", required: true },
        { name: "telefone", type: "tel", placeholder: "Telefone", required: true },
        { name: "cidadeEstado", type: "text", placeholder: "Cidade/Estado", required: true }
      ],

      buttonText: "Solicitar contato",
      buttonAriaLabel: "Enviar dados para solicitar contato de parceria de revenda"
    }
  }
}