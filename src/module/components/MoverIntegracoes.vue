<!-- src/modules/home/components/MoverIntegracoes.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-integracoes-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Integrações e parcerias da Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4 text-center">
      
      <!-- TÍTULO DA SEÇÃO COM CORES SEPARADAS -->
      <div class="row justify-content-center mb-5 integracoes-header-col">
        <div class="col-12 col-lg-10">
          <h2 class="integracoes-title fw-bold m-0">
            <span class="title-green">{{ integracoesData.titlePart1 }}</span>
            <span class="title-blue">{{ integracoesData.titlePart2 }}</span>
          </h2>
        </div>
      </div>

      <!-- CARROSSEL DE 10 SLIDES / LOGOS -->
      <div class="row mb-5 integracoes-carousel-row">
        <div class="col-12">
          <div class="logos-carousel-container overflow-hidden position-relative py-3">
            <div class="logos-track d-flex align-items-center gap-4">
              
              <div 
                v-for="(partner, index) in integracoesData.partners" 
                :key="index"
                class="logo-item-card bg-white rounded-4 shadow-sm p-4 d-flex align-items-center justify-content-center flex-shrink-0"
              >
                <img 
                  :src="partner.logo" 
                  :alt="partner.name" 
                  class="img-fluid partner-logo"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- BOTÃO CENTRALIZADO COM HOVER PADRÃO -->
      <div class="row justify-content-center integracoes-btn-col">
        <div class="col-12 col-md-auto">
          <router-link 
            :to="integracoesData.buttonUrl" 
            class="btn integracoes-cta fw-semibold px-5 py-3 rounded-pill text-white text-uppercase shadow-sm"
            :aria-label="integracoesData.ariaLabelButton"
          >
            {{ integracoesData.buttonText }}
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMoverIntegracoes } from '../composables/useMoverIntegracoes'
import { useParallax } from '@/shared/composables/useParallax'

const { integracoesData } = useMoverIntegracoes()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-integracoes-section {
  background-color: #ffffff !important;
  min-height: 70vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.integracoes-header-col,
.integracoes-carousel-row,
.integracoes-btn-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.integracoes-carousel-row {
  transition-delay: 0.15s;
}

.integracoes-btn-col {
  transition-delay: 0.3s;
}

.mover-integracoes-section.parallax-active .integracoes-header-col,
.mover-integracoes-section.parallax-active .integracoes-carousel-row,
.mover-integracoes-section.parallax-active .integracoes-btn-col {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.integracoes-title {
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.title-blue {
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Container do Carrossel */
.logos-carousel-container {
  width: 100%;
  display: flex;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logos-track {
  display: flex;
  animation: scrollLogos 35s linear infinite;
  width: max-content;
}

.logos-track:hover {
  animation-play-state: paused;
}

@keyframes scrollLogos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Cards individuais de Logos */
.logo-item-card {
  width: 200px;
  height: 110px;
  border: 1px solid rgba(11, 37, 69, 0.08);
  background-color: #ffffff !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(11, 37, 69, 0.1) !important;
}

.partner-logo {
  max-height: 55px;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.logo-item-card:hover .partner-logo {
  filter: grayscale(0%);
}

/* Botão com o padrão de hover do projeto */
.integracoes-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.integracoes-cta:hover,
.integracoes-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11, 37, 69, 0.15) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-integracoes-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
  .logo-item-card {
    width: 160px;
    height: 95px;
    padding: 1rem;
  }
}
</style>