// src/modules/mpro/services/mproVideoSolutionService.js
export const mproVideoSolutionService = {
  getData() {
    return {
      // Título dividido para colorir apenas o começo com #8bc34a e o resto com #0b2545
      titleHighlight: "Recursos que integram",
      titleRest: " diferentes áreas da operação, promovendo consistência e eficiência na gestão",
      
      // Lista de tópicos ao estilo da imagem de referência
      features: [
        "Sem limites de emissão de notas",
        "Integração com TEF, PIX e balanças",
        "Importação de XML para acelerar compras",
        "Mais de 400 relatórios estratégicos",
        "Envio automático de XML para contabilidade",
        "Geração de arquivos fiscais"
      ],

      // Configurações do Botão
      buttonText: "Veja como o Mpro funciona na prática",
      buttonAriaLabel: "Saiba mais sobre o funcionamento prático do Mpro",
      
      // Vídeo (pode ser o link do embed, arquivo mp4 ou source do vídeo vertical)
      videoSource: "/mpro1_video.mp4", // Substitua pelo link ou path do vídeo vertical
      videoPoster: "", // Imagem de capa opcional
    }
  }
}