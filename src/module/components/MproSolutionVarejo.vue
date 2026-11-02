<!-- src/modules/mpro/components/MproSolutionVarejo.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-solution-varejo-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Mpro na prática e soluções para o varejo"
  >
    <div class="container py-4 z-2 position-relative">
      <div class="row align-items-center justify-content-between g-5">
        
        <!-- COLUNA ESQUERDA: TEXTOS, SUBTÍTULO E MARCADORES -->
        <div class="col-12 col-lg-7   text-col text-center text-lg-start">
          
          <!-- TÍTULO -->
          <h2 class="section-title fw-bold mb-4">
            <span class="text-highlight">{{ content.titleHighlight }}</span>
            <span class="text-white">{{ content.titleRest }}</span>
          </h2>

          <!-- SUBTÍTULO -->
          <p class="section-subtitle text-white mb-4 lh-base">
            {{ content.subtitle }}
          </p>

          <!-- LISTA DE MARCADORES (CHECKS EM VERDE #8bc34a E TEXTO BRANCO) -->
          <ul class="feature-list list-unstyled mb-0">
            <li 
              v-for="(feature, index) in content.features" 
              :key="index"
              class="d-flex align-items-start mb-3 text-start justify-content-center justify-content-lg-start"
            >
              <!-- Ícone de Check do Bootstrap Icon -->
              <i class="bi bi-check-lg feature-check me-3 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span class="feature-text text-white fw-medium">{{ feature }}</span>
            </li>
          </ul>

        </div>

        <!-- COLUNA DIREITA: MÍDIA VERTICAL (DIMENSÕES DE INSTAGRAM / REELS) -->
        <div class="col-12 col-lg-5 media-col text-center">
          <div class="media-container-wrapper shadow-lg rounded-4 overflow-hidden position-relative mx-auto bg-black">
            
            <!-- Se for Vídeo (YouTube Embed ou MP4) -->
            <iframe 
              v-if="content.mediaType === 'video' && content.mediaSrc.includes('embed')"
              :src="content.mediaSrc" 
              :title="content.mediaAlt"
              class="vertical-media-frame w-100 h-100 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>

            <video 
              v-else-if="content.mediaType === 'video'"
              autoplay 
              loop 
              muted 
              playsinline 
              controls
              class="vertical-media-native w-100 h-100 object-fit-cover"
            >
              <source :src="content.mediaSrc" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

            <!-- Se for Imagem Estática -->
            <img 
              v-else
              :src="content.mediaSrc" 
              :alt="content.mediaAlt"
              class="img-fluid w-100 h-100 object-fit-cover"
            />

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useMproSolutionVarejo } from '../composables/useMproSolutionVarejo'
import { useParallax } from '@/shared/composables/useParallax'

const { content } = useMproSolutionVarejo()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-solution-varejo-section {
  background-color: #0b2545 !important; /* Background azul escuro solicitado */
  color: #ffffff !important;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Efeito Parallax de entrada */
.text-col,
.media-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-solution-varejo-section.parallax-active .text-col {
  opacity: 1;
  transform: translateY(0);
}

.mpro-solution-varejo-section.parallax-active .media-col {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

/* Título */
.section-title {
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  line-height: 1.25;
  letter-spacing: -1px;
}

.text-highlight {
  color: #8bc34a !important; /* "Mpro na prática" na cor #8bc34a */
}

.section-subtitle {
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.9) !important;
  max-width: 580px;
}

/* Lista e Marcadores (Checks) */
.feature-list li {
  font-size: 1.05rem;
}

.feature-check {
  color: #8bc34a !important; /* Marcadores na cor #8bc34a */
  font-size: 1.3rem;
  font-weight: bold;
}

.feature-text {
  color: #ffffff !important; /* Descrições brancas */
}

/* Dimensões de Mídia Vertical (Formato Instagram / Reels - Proporção 9:16) */
.media-container-wrapper {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 9 / 16;
  border: 3px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.vertical-media-frame,
.vertical-media-native {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mpro-solution-varejo-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .media-container-wrapper {
    max-width: 270px;
    margin-top: 2rem;
  }

  .text-col {
    text-align: center !important;
  }
}
</style>