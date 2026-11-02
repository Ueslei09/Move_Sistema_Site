<!-- src/modules/mpro/components/MproTourVideo.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-tour-video-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Tour rápido em vídeo pelo Mpro"
  >
    <div class="container py-4 z-2 position-relative text-center">
      
      <!-- TÍTULO DA SEÇÃO -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 header-box">
          <h2 class="section-title fw-bold">
            <span class="text-highlight">{{ tourData.titleHighlight }}</span>
            <span class="text-main">{{ tourData.titleRest }}</span>
          </h2>
        </div>
      </div>

      <!-- VÍDEO HORIZONTAL CENTRALIZADO COM SUPORTE A CONTOLOS -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 col-xl-9 video-box">
          <div class="video-frame-wrapper shadow-lg rounded-4 overflow-hidden position-relative bg-white p-2">
            
            <!-- Se for um link do YouTube (Adicionado controles nativos na URL) -->
            <iframe 
              v-if="tourData.videoSource.includes('youtube') || tourData.videoSource.includes('embed')"
              :src="tourData.videoSource" 
              :title="tourData.videoTitle"
              class="w-100 h-100 border-0 rounded-3 horizontal-video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>

            <!-- Se for um ficheiro de vídeo MP4 local (Com controles ativados) -->
            <video 
              v-else
              controls 
              playsinline
              class="w-100 h-100 rounded-3 object-fit-cover horizontal-video-iframe"
            >
              <source :src="tourData.videoSource" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

          </div>
        </div>
      </div>

      <!-- BOTÃO DE CTA PADRÃO DO PROJETO -->
      <div class="row justify-content-center cta-box">
        <div class="col-12">
          <button 
            @click="handleActionClick"
            class="btn mpro-cta-btn fw-semibold px-5 py-3 rounded-pill shadow-sm text-uppercase"
            :aria-label="tourData.buttonAriaLabel"
          >
            {{ tourData.buttonText }}
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMproTourVideo } from '../composables/useMproTourVideo'
import { useParallax } from '@/shared/composables/useParallax'

const { tourData, handleActionClick } = useMproTourVideo()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-tour-video-section {
  background-color:  #e8e9eb !important; /* Fundo branco limpo */
  color: #0b2545 !important;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Efeito Parallax de entrada */
.header-box,
.video-box,
.cta-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-tour-video-section.parallax-active .header-box {
  opacity: 1;
  transform: translateY(0);
}

.mpro-tour-video-section.parallax-active .video-box {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.mpro-tour-video-section.parallax-active .cta-box {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.4s;
}

/* Título */
.section-title {
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  letter-spacing: -1px;
  line-height: 1.25;
}

.text-highlight {
  color: #8bc34a !important; /* Início da frase na cor #8bc34a */
}

.text-main {
  color: #0b2545 !important; /* Resto da frase na cor #0b2545 */
}

/* Container do Vídeo Horizontal (Proporção 16:9) */
.video-frame-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(11, 37, 69, 0.1);
  box-shadow: 0 20px 40px rgba(11, 37, 69, 0.12);
}

.horizontal-video-iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
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
  .mpro-tour-video-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .horizontal-video-iframe {
    min-height: 220px;
  }
}
</style>