<!-- src/modules/home/components/MoverSegment.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-segment-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Segmentos de atuação das soluções Mover Sistemas"
  >
    <div class="container-fluid h-100 d-flex align-items-center py-lg-4">
      <div class="row align-items-center justify-content-between w-100 m-0 g-4 g-lg-5">
        
        <!-- LADO ESQUERDO: GRADE DE 12 ÍCONES DE SEGMENTOS -->
        <div class="col-12 col-lg-7 segments-grid-col">
          <div class="row row-cols-2 row-cols-md-4 g-4 text-center">
            <div 
              v-for="(seg, index) in segmentData.segments" 
              :key="index"
              class="col d-flex justify-content-center"
            >
              <router-link 
                :to="seg.url" 
                class="segment-card text-decoration-none d-flex flex-column align-items-center p-3 rounded-4"
                :aria-label="seg.ariaLabel"
              >
                <div class="icon-circle mb-2 d-flex align-items-center justify-content-center shadow-sm">
                  <i :class="['bi', seg.icon, 'segment-icon']" aria-hidden="true"></i>
                </div>
                <span class="segment-name fw-medium">{{ seg.name }}</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- LADO DIREITO: TÍTULO, SUBTÍTULO E BOTÃO -->
        <div class="col-12 col-lg-5 text-center text-lg-start segments-text-col">
          <h2 class="segment-title fw-bold mb-4">
            <span class="title-dark">{{ segmentData.titlePart1 }}</span>
            <span class="title-green">{{ segmentData.titleHighlight }}</span>
            <span class="title-dark">{{ segmentData.titlePart2 }}</span>
          </h2>

          <p class="segment-subtitle mb-5 lh-base mx-auto mx-lg-0">
            {{ segmentData.subtitle }}
          </p>

          <div class="cta-wrapper">
            <router-link 
              :to="segmentData.buttonUrl" 
              class="btn segment-cta fw-semibold px-4 py-3 rounded-pill text-white text-uppercase shadow-sm"
              :aria-label="segmentData.ariaLabelButton"
            >
              {{ segmentData.buttonText }}
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
      
</template>

<script setup>
import { useMoverSegment } from '../composables/useMoverSegment'
import { useParallax } from '@/shared/composables/useParallax'

const { segmentData } = useMoverSegment()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-segment-section {
  background-color: #e8e9eb !important;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10; /* Garante prioridade absoluta na tela */
  padding-top: 7rem !important;
  padding-bottom: 7rem !important;
  margin-top: 2rem; /* Afasta da seção anterior evitando sobreposições invisíveis */
}

/* Estado inicial do Parallax */
.segments-grid-col {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 12;
}


/* Linha HR de 5px com a cor principal do projeto (#0b2545) */
.banner-bottom-divider {
  height: 2px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
  width: 100%;
}

.segments-text-col {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.2s;
  position: relative;
  z-index: 12;
}

/* Ativação do Parallax ao rolar a página */
.mover-segment-section.parallax-active .segments-grid-col,
.mover-segment-section.parallax-active .segments-text-col {
  opacity: 1;
  transform: translateY(0);
}

/* Cartões de Segmentos e Ícones */
.segment-card {
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 130px;
  pointer-events: auto !important; /* Garante que o clique e o hover funcionem 100% */
}

.segment-card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid rgba(11, 37, 69, 0.15);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.segment-icon {
  font-size: 1.8rem;
  color: var(--mover-primary-blue, #0b2545) !important;
  transition: color 0.3s ease;
}

.segment-name {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

/* Hover garantido em absolutamente todos os ícones */
.segment-card:hover .icon-circle {
  background-color: var(--mover-primary-blue, #0b2545) !important;
  border-color: var(--mover-primary-blue, #0b2545) !important;
  box-shadow: 0 8px 20px rgba(11, 37, 69, 0.2) !important;
}

.segment-card:hover .segment-icon {
  color: var(--mover-light-green, #8bc34a) !important;
}

.segment-card:hover .segment-name {
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Tipografia */
.segment-title {
  font-size: clamp(2rem, 2.8vw, 3rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-dark {
  color: var(--mover-primary-blue, #0b2545) !important;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.segment-subtitle {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(0.95rem, 1.1vw, 1.15rem);
  max-width: 34rem;
}

/* Botão Padrão com Hover */
.segment-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.segment-cta:hover,
.segment-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-segment-section {
    min-height: auto;
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
    margin-top: 1rem;
  }
  .segment-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>