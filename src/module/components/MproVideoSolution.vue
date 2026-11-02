<!-- src/modules/mpro/components/MproVideoSolution.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-video-solution-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Solução em vídeo e recursos do Mpro"
  >
    <div class="container py-4 z-2 position-relative">
      <div class="row align-items-center justify-content-between g-5">
        
        <!-- COLUNA ESQUERDA: VÍDEO VERTICAL (FORMATO INSTAGRAM / REELS) -->
        <div class="col-12 col-lg-5 video-col text-center">
          <div class="video-container-wrapper shadow-lg rounded-4 overflow-hidden position-relative mx-auto">
            
            <!-- Se for um iframe (YouTube Shorts / Embed) -->
            <iframe 
              v-if="content.videoSource.includes('embed')"
              :src="content.videoSource" 
              title="Mpro Vídeo Demonstração"
              class="vertical-video-frame w-100 h-100 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>

            <!-- Ou se for um vídeo nativo MP4 -->
            <video 
              v-else
              autoplay 
              loop 
              muted 
              playsinline 
              controls
              class="vertical-video-native w-100 h-100 object-fit-cover"
            >
              <source :src="content.videoSource" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

          </div>
        </div>

        <!-- COLUNA DIREITA: TEXTO, LISTA E BOTÃO -->
        <div class="col-12 col-lg-7 text-col text-center text-lg-start">
          
          <!-- TÍTULO -->
          <h2 class="section-title fw-bold mb-4">
            <span class="text-highlight">{{ content.titleHighlight }}</span>
            <span class="text-main">{{ content.titleRest }}</span>
          </h2>

          <!-- LISTA DE RECURSOS COM ÍCONES/MARCADORES -->
          <ul class="feature-list list-unstyled mb-5">
            <li 
              v-for="(feature, index) in content.features" 
              :key="index"
              class="d-flex align-items-start align-items-lg-center mb-3 text-start"
            >
              <span class="feature-bullet me-3 mt-1 mt-lg-0 flex-shrink-0"></span>
              <span class="feature-text fw-medium">{{ feature }}</span>
            </li>
          </ul>

          <!-- BOTÃO COM AS CORES DO PROJETO E HOVER PADRÃO -->
          <div class="d-flex justify-content-center justify-content-lg-start">
            <button 
              @click="handleActionClick"
              class="btn mpro-cta-btn fw-semibold px-5 py-3 rounded-pill shadow-sm"
              :aria-label="content.buttonAriaLabel"
            >
              {{ content.buttonText }}
            </button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useMproVideoSolution } from '../composables/useMproVideoSolution'
import { useParallax } from '@/shared/composables/useParallax'

const { content, handleActionClick } = useMproVideoSolution()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-video-solution-section {
  background-color: #e8e9eb !important; /* Fundo branco solicitado */
  color: #0b2545 !important;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Efeito Parallax de entrada */
.video-col,
.text-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-video-solution-section.parallax-active .video-col {
  opacity: 1;
  transform: translateY(0);
}

.mpro-video-solution-section.parallax-active .text-col {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

/* Dimensões de Vídeo Vertical (Estilo Feed/Reels do Instagram: Proporção 9:16) */
.video-container-wrapper {
  width: 100%;
  max-width: 340px;
  aspect-ratio: 9 / 16;
  background-color: #000;
  border: 4px solid #ffffff;
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.12);
}

.vertical-video-frame,
.vertical-video-native {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Título */
.section-title {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.25;
  letter-spacing: -1px;
}

.text-highlight {
  color: #8bc34a !important; /* Somente o começo da frase com a cor #8bc34a */
}

.text-main {
  color: #0b2545 !important; /* Resto da frase na cor #0b2545 */
}

/* Lista de Recursos */
.feature-list li {
  font-size: 1.1rem;
}

.feature-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #8bc34a;
  background-color: transparent;
  display: inline-block;
}

.feature-text {
  color: #0b2545 !important; /* Lista na cor #0b2545 */
}

/* Botão padrão com as cores do projeto e efeito hover */
.mpro-cta-btn {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.mpro-cta-btn:hover,
.mpro-cta-btn:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: #0b2545 !important;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mpro-video-solution-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .video-container-wrapper {
    max-width: 280px;
    margin-bottom: 1rem;
  }

  .text-col {
    text-align: center !important;
  }

  .feature-list li {
    justify-content: center !important;
    text-align: left;
  }
}
</style>