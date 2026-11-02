<!-- src/modules/home/components/AboutDemostracao.vue -->
<template>
  <section 
    ref="elementRef"
    class="about-demostracao-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Demonstração do Sistema ERP Mover"
  >
    <div class="container-fluid h-100 py-lg-4">
      <div class="row align-items-center justify-content-between w-100 m-0 g-4 g-lg-5 content-row">
        
        <!-- LADO ESQUERDO: MÍDIA (IMAGEM / VÍDEO LOCAL / YOUTUBE) -->
        <div class="col-12 col-lg-6 text-center position-relative p-0 d-flex align-items-center justify-content-center media-col">
          <div class="media-container shadow-lg rounded-4 overflow-hidden w-100 bg-white p-3">
            
            <!-- SE FOR YOUTUBE -->
            <div v-if="demonstracaoData.mediaType === 'youtube'" class="ratio ratio-16x9">
              <iframe 
                :src="getYoutubeEmbed(demonstracaoData.mediaUrl)" 
                :title="demonstracaoData.mediaAlt" 
                allowfullscreen
              ></iframe>
            </div>

            <!-- SE FOR VÍDEO LOCAL -->
            <div v-else-if="demonstracaoData.mediaType === 'video'" class="ratio ratio-16x9">
              <video 
                :src="demonstracaoData.mediaUrl" 
                :poster="demonstracaoData.mediaPoster"
                controls 
                preload="metadata"
                playsinline
                class="w-100 h-100 object-fit-cover rounded-3"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>

            <!-- SE FOR IMAGEM -->
            <div v-else class="image-wrapper ratio ratio-16x9">
              <img 
                :src="demonstracaoData.mediaUrl" 
                :alt="demonstracaoData.mediaAlt"
                class="w-100 h-100 object-fit-cover rounded-3"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        <!-- LADO DIREITO: TÍTULO, DESCRIÇÃO, SUBTÍTULO E BOTÃO -->
        <div class="col-12 col-lg-6 text-center text-lg-start text-col p-0 ps-lg-4">
          
          <!-- TÍTULO (Cor #8bc34a) -->
          <h2 class="demo-title fw-bold mb-3" :style="{ color: demonstracaoData.titleColor }">
            {{ demonstracaoData.title }}
          </h2>

          <!-- DESCRIÇÃO (Cor #0b2545) -->
          <p class="demo-description mb-4 lh-base" :style="{ color: demonstracaoData.descriptionColor }">
            {{ demonstracaoData.description }}
          </p>

          <!-- SUBTÍTULO (Cor #0b2545) -->
          <p class="demo-subtitle fw-bold mb-4" :style="{ color: demonstracaoData.subtitleColor }">
            {{ demonstracaoData.subtitle }}
          </p>

          <!-- BOTÃO COM O PADRÃO OFICIAL DO PROJETO -->
          <div class="cta-wrapper">
            <router-link 
              :to="demonstracaoData.buttonUrl" 
              class="btn demo-cta fw-semibold px-4 py-3 rounded-pill text-uppercase shadow-sm d-inline-flex align-items-center gap-2"
              :aria-label="demonstracaoData.ariaLabelButton"
            >
              <span>{{ demonstracaoData.buttonText }}</span>
              <i class="bi bi-arrow-right" aria-hidden="true"></i>
            </router-link>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useAboutDemostracao } from '../composables/useAboutDemonstracao'
import { useParallax } from '@/shared/composables/useParallax'

const { demonstracaoData, getYoutubeEmbed } = useAboutDemostracao()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.about-demostracao-section {
  background-color: #e8e9eb !important; /* Cor de fundo solicitada */
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Animação Parallax inicial */
.content-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-demostracao-section.parallax-active .content-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia */
.demo-title {
  font-size: clamp(2.2rem, 3vw, 3rem);
  letter-spacing: -0.5px;
}

.demo-description {
  font-size: clamp(0.95rem, 1.1vw, 1.1rem);
}

.demo-subtitle {
  font-size: 1.05rem;
}

/* ESTILO DO BOTÃO PADRÃO DO PROJETO */
.demo-cta {
  background-color: var(--mover-light-green, #8bc34a) !important; /* Verde padrão */
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

/* ESTILO DO HOVER DO BOTÃO (Cinza prateado com texto azul escuro) */
.demo-cta:hover,
.demo-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important; /* Cinza prateado */
  color: var(--mover-primary-blue, #0b2545) !important; /* Azul escuro */
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .about-demostracao-section {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>