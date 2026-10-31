<!-- src/modules/home/components/MoverDepoimento.vue -->
<template>
  <section 
    id="mover-depoimento-section"
    class="mover-depoimento-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'section-visible': isVisible }"
    role="region" 
    aria-label="Depoimento e Apresentação Mover Sistemas"
  >
    <div class="container-fluid h-100 d-flex align-items-center py-lg-4">
      <div class="row align-items-center justify-content-between w-100 m-0 g-4 g-lg-5">
        
        <!-- LADO ESQUERDO: VÍDEO (YouTube ou Pasta Public) -->
        <div class="col-12 col-lg-6 video-column">
          <div class="video-wrapper shadow-lg rounded-4 overflow-hidden position-relative">
            
            <!-- Opção 1: Vídeo do YouTube -->
            <template v-if="depoimentoData.videoType === 'youtube'">
              <div class="ratio ratio-16x9">
                <iframe 
                  :src="depoimentoData.youtubeUrl" 
                  :title="depoimentoData.videoTitle"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                ></iframe>
              </div>
            </template>

            <!-- Opção 2: Vídeo Local da Pasta Public -->
            <template v-else>
              <video 
                controls 
                class="w-100 h-100 object-fit-cover"
                :poster="depoimentoData.posterImage"
                preload="metadata"
              >
                <source :src="depoimentoData.localVideoUrl" type="video/mp4">
                Seu navegador não suporta a tag de vídeo.
              </video>
            </template>

          </div>
        </div>

        <!-- LADO DIREITO: TEXTO COM FUNDO BEGE TRANSPARENTE -->
        <div class="col-12 col-lg-6 text-column">
          <div class="content-box p-4 p-md-5 rounded-4 shadow-sm">
            <h2 class="depoimento-title fw-bold mb-4">
              {{ depoimentoData.title }}
            </h2>
            <p class="depoimento-desc mb-3 lh-base">
              {{ depoimentoData.description1 }}
            </p>
            <p class="depoimento-desc mb-0 lh-base">
              {{ depoimentoData.description2 }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <hr class="banner-bottom-divider m-0 border-0" aria-hidden="true" />
</template>

<script setup>
import { useMoverDepoimento } from '../composables/useMoverDepoimento'

const { depoimentoData, isVisible } = useMoverDepoimento()
</script>

<style scoped>
.mover-depoimento-section {
  background-color: #f1efe8; /* Fundo geral suave */
  min-height: 80vh;
  display: flex;
  align-items: center;
  /* Efeito Parallax inicial (invisível antes de rolar para a seção) */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Estado ativado ao rolar a página */
.mover-depoimento-section.section-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Título na cor padrão #8bc34a */
.depoimento-title {
  color: var(--mover-light-green, #8bc34a) !important;
  font-size: clamp(2rem, 2.5vw, 2.8rem);
  letter-spacing: -0.5px;
}

/* Subtítulo/Texto na cor #0b2545 */
.depoimento-desc {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(0.95rem, 1.1vw, 1.15rem);
}

/* Linha HR de 5px com a cor principal do projeto (#0b2545) */
.banner-bottom-divider {
  height: 2px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
  width: 100%;
}

/* Caixa de texto com fundo bege transparente (Estilo Glassmorphism / Bege Suave) 
.content-box {
  background-color: rgba(245, 242, 235, 0.65) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(230, 222, 208, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}*/

.content-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(11, 37, 69, 0.08) !important;
}

/* Estilização do container do vídeo com efeito moderno */
.video-wrapper {
  background-color: #000;
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.video-wrapper:hover {
  transform: scale(1.01);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.15) !important;
}

/* Responsividade mobile */
@media (max-width: 992px) {
  .mover-depoimento-section {
    min-height: auto;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>