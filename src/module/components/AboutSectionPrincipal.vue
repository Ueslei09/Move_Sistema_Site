<!-- src/modules/about/components/AboutSectionPrincipal.vue -->
<template>
  <section 
    ref="elementRef"
    class="about-section-principal position-relative py-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Seção principal Quem Somos da Mover Sistemas"
  >
    <!-- CONTAINER DO BOOTSTRAP PARA ENCAPSULAR A SEÇÃO -->
    <div class="container h-100 d-flex flex-column justify-content-center py-5">
      
      <!-- CABEÇALHO INSTITUCIONAL -->
      <div class="row justify-content-center text-center mb-5 about-header-row">
        <div class="col-12 col-lg-10">
          <h1 class="about-main-title fw-bold mb-4">
            {{ aboutData.title }}
          </h1>
          <p class="about-main-subtitle mb-4 lh-base">
            {{ aboutData.subtitle }}
          </p>
          <h2 class="about-highlight-title fw-semibold mt-4">
            {{ aboutData.sectionHighlight }}
          </h2>
        </div>
      </div>

      <!-- CARROSSEL / GRID DE 4 SLIDES -->
      <div class="row g-4 justify-content-center align-items-center about-slides-row">
        <div 
          v-for="slide in aboutData.slides" 
          :key="slide.id"
          class="col-12 col-sm-6 col-lg-3 text-center"
        >
          <!-- CARD COM A IMAGEM PREENCHENDO 100% -->
          <div class="about-slide-card rounded-4 position-relative overflow-hidden d-flex flex-column justify-content-end p-4">
            
            <!-- IMAGEM DE FUNDO PREENCHENDO TUDO -->
            <img 
              :src="slide.image" 
              :alt="slide.alt" 
              class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover slide-bg-image"
              loading="lazy"
            />
            
            <!-- CAMADA DE DEGRADÊ ESCURO PARA MELHOR LEITURA DO TEXTO -->
            <div class="position-absolute top-0 start-0 w-100 h-100 card-overlay"></div>

            <!-- TÍTULO NA PARTE INFERIOR -->
            <h3 class="slide-title fw-bold m-0 position-relative z-1">
              {{ slide.title }}
            </h3>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useAbout } from '../composables/useAbout'
import { useParallax } from '@/shared/composables/useParallax'

const { aboutData } = useAbout()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.about-section-principal {
  background-color: #0b2545 !important;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.about-header-row,
.about-slides-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-slides-row {
  transition-delay: 0.2s;
}

.about-section-principal.parallax-active .about-header-row,
.about-section-principal.parallax-active .about-slides-row {
  opacity: 1;
  transform: translateY(0);
}

/* Título principal na cor #8bc34a */
.about-main-title {
  font-size: clamp(2.2rem, 3.5vw, 3.8rem);
  letter-spacing: -0.5px;
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Subtítulos em branco */
.about-main-subtitle {
  font-size: clamp(1.05rem, 1.3vw, 1.25rem);
  color: #ffffff !important;
  opacity: 0.95;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}

.about-highlight-title {
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  color: #ffffff !important;
}

/* Cards com tamanho fixo e imagem preenchendo 100% */
.about-slide-card {
  height: 320px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.about-slide-card:hover {
  transform: translateY(-6px);
  border-color: var(--mover-light-green, #8bc34a);
}

/* Imagem de fundo preenchendo todo o card */
.slide-bg-image {
  object-fit: cover;
  transition: transform 0.5s ease;
}

.about-slide-card:hover .slide-bg-image {
  transform: scale(1.05);
}

/* Overlay escuro em degradê para destacar o texto na base */
.card-overlay {
  background: linear-gradient(to top, rgba(11, 37, 69, 0.95) 0%, rgba(11, 37, 69, 0.4) 60%, rgba(11, 37, 69, 0.1) 100%);
}

/* Títulos dos Slides em branco */
.slide-title {
  font-size: 1.1rem;
  color: #ffffff !important;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .about-section-principal {
    min-height: auto;
    padding-top: 4rem !important;
    padding-bottom: 4.5rem !important;
  }
}
</style>