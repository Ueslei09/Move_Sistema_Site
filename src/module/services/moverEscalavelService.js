// src/modules/home/services/moverEscalavelService.js
export const moverEscalavelService = {
  getEscalavelData() {
    return {
      title: "Presença nacional e escala comprovada",
      stats: [
        { value: 1600, prefix: "+", suffix: "", label: "Revendas faturando" },
        { value: 45000, prefix: "+", suffix: "", label: "Clientes utilizando" },
        { value: 99, prefix: "+", suffix: "%", label: "Satisfeito com o suporte" }
      ],
      bottomHighlight: "+140 milhões",
      bottomText: " de notas fiscais emitidas anualmente por meio das soluções Mover"
    }
  }
}