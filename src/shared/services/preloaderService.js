// src/shared/services/preloaderService.js
export const preloaderService = {
  getConfig() {
    return {
      duration: 1500, // Duração da animação em milissegundos (1.5 segundos)
      logoImage: "/moovelogo1_imagem.png", // Ajuste o caminho se necessário ou use a mesma logo da navbar
      altText: "Mover Sistemas Carregando"
    }
  }
}