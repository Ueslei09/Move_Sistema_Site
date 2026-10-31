<!-- src/modules/home/components/MoverSectionBanner.vue -->
<template>
  <section class="mover-section-banner position-relative py-4 py-md-5 px-3 px-md-5 w-100" role="region" aria-label="Apresentação principal da Mover Sistemas">
    <div class="container-fluid h-100 d-flex align-items-center">
      <div class="row align-items-center justify-content-between w-100 m-0">
        
        <!-- LADO ESQUERDO: TEXTOS E BOTÃO -->
        <div class="col-12 col-lg-6 py-3 py-lg-0 text-center text-lg-start">
          <h1 class="banner-title fw-bold mb-4">
            {{ bannerData.title }}
          </h1>
          <p class="banner-subtitle mb-4 lh-base mx-auto mx-lg-0">
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

        <!-- LADO DIREITO: IMAGEM PROPORCIONAL -->
        <div class="col-12 col-lg-6 text-center position-relative p-0 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
          <img 
            :src="bannerData.bannerImage" 
            :alt="bannerData.imageAlt" 
            class="img-fluid banner-img-proportional"
            loading="lazy"
          />
        </div>

      </div>
    </div>

    <!-- LINHA HR INFERIOR -->
    <hr class="banner-bottom-hr m-0 p-0 border-0" aria-hidden="true" />
  </section>
</template>

<script setup>
import { useMoverSectionBanner } from '../composables/useMoverSectionBanner'

const { bannerData } = useMoverSectionBanner()
</script>

<style scoped>
.mover-section-banner {
  background-color: transparent;
  width: 100%;
  position: relative;
  padding-bottom: 4rem; /* Espaço seguro para o hr inferior */
}

.banner-title {
  color: var(--mover-light-green, #8bc34a) !important;
  font-size: clamp(4rem, 2.8vw, 3rem); /* Escala proporcional fluida */
  letter-spacing: -0.5px;
}

.banner-subtitle {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(0.9rem, 1vw, 1.1rem);
  max-width: 32rem;
}

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

/* Imagem fluida que acompanha o zoom sem travar em pixels rígidos */
.banner-img-proportional {
  max-height: 480px;
  width: 100%;
  object-fit: contain;
}

.banner-bottom-hr {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
}

/* Ajustes mobile */
@media (max-width: 992px) {
  .mover-section-banner {
    padding-bottom: 3rem;
  }
  .banner-img-proportional {
    max-height: 320px;
  }
}
</style>