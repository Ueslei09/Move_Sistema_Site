<!-- src/modules/home/components/MoverBanner.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-banner-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Apresentação do portfólio de soluções de gestão da Mover Sistemas"
  >
    <div class="container-fluid h-100 d-flex align-items-center py-lg-4">
      <div class="row align-items-center justify-content-between w-100 m-0 g-4 g-lg-5">
        
        <!-- LADO ESQUERDO: TEXTOS E BOTÃO (Com animação Parallax) -->
        <div class="col-12 col-lg-6 text-center text-lg-start p-0 banner-text-col">
          <h1 class="banner-title fw-bold mb-4">
            <!-- Primeira parte na cor padrão #8bc34a -->
            <span class="title-green">{{ bannerData.titlePart1 }}</span>
            <!-- Segunda parte na cor #0b2545 -->
            <span class="title-blue">{{ bannerData.titlePart2 }}</span>
          </h1>

          <p class="banner-subtitle mb-5 lh-base mx-auto mx-lg-0">
            {{ bannerData.subtitle }}
          </p>

          <div class="cta-wrapper">
            <router-link 
              :to="bannerData.buttonUrl" 
              class="btn banner-cta fw-semibold px-4 py-3 rounded-pill text-white text-uppercase shadow-sm"
              :aria-label="bannerData.ariaLabelButton"
            >
              {{ bannerData.buttonText }}
            </router-link>
          </div>
        </div>

        <!-- LADO DIREITO: IMAGEM DE MOCKUP (Com animação Parallax e profundidade) -->
        <div class="col-12 col-lg-6 text-center position-relative p-0 d-flex align-items-center justify-content-center banner-img-col">
          <img 
            :src="bannerData.bannerImage" 
            :alt="bannerData.imageAlt" 
            class="img-fluid banner-img-mockup"
            loading="lazy"
          />
        </div>

      </div>
    </div>
    
  </section>
   <hr class="banner-bottom-divider m-0 border-0" aria-hidden="true" />
 
</template>

<script setup>
import { useMoverBanner } from '../composables/useMoverBanner'
import { useParallax } from '@/shared/composables/useParallax'

const { bannerData } = useMoverBanner()
const { isVisible, elementRef } = useParallax(0.05) // Dispara assim que a seção entra na tela
</script>

<style scoped>
.mover-banner-section {
  background-color: #ffffff !important;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden; /* Garante contenção fluida da animação */
}

/* Estado inicial do Parallax (elementos deslocados para baixo e invisíveis) */
.banner-text-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.banner-img-col {
  opacity: 0;
  transform: translateY(60px); /* Profundidade 3D diferenciada para a imagem */
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.2s; /* Atraso sutil na imagem */
}


/* Linha HR de 5px com a cor principal do projeto (#0b2545) */
.banner-bottom-divider {
  height: 2px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
  width: 100%;
}

/* Quando o IntersectionObserver ativá-lo ao rolar a página */
.mover-banner-section.parallax-active .banner-text-col,
.mover-banner-section.parallax-active .banner-img-col {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.banner-title {
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.title-blue {
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Subtítulo na cor #0b2545 */
.banner-subtitle {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(1rem, 1.15vw, 1.2rem);
  max-width: 34rem;
}

/* Botão com a cor #8bc34a e padrão de hover do projeto */
.banner-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.banner-cta:hover,
.banner-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
}

/* Imagem de Mockup proporcional e fluida */
.banner-img-mockup {
  max-height: 500px;
  width: 100%;
  object-fit: contain;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-banner-section {
    min-height: auto;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .banner-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .banner-img-mockup {
    max-height: 320px;
    margin-top: 2rem;
  }
}
</style>