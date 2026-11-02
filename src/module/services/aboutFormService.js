// src/modules/home/services/aboutFormService.js
export const aboutFormService = {
  getData() {
    return {
      titlePart1: "Saiba tudo que estamos fazendo para ficar mais ",
      highlightWord: "próximo",
      titlePart2: " de você!",
      
      namePlaceholder: "seu nome",
      emailPlaceholder: "seu@email.com",
      buttonText: "Quero receber!",
      
      // Acessibilidade e SEO
      ariaLabelName: "Digite seu nome",
      ariaLabelEmail: "Digite seu e-mail",
      ariaLabelButton: "Enviar formulário para receber novidades Mover"
    }
  }
}