<!-- src/modules/home/components/AboutValoresSlide.vue -->
<template>
  <section 
    ref="sectionRef"
    class="about-valores-section position-relative w-100"
    role="region"
    aria-label="Seção de Missão, Visão e Valores Mover"
  >
    <div class="valores-sticky-container w-100 h-100 d-flex align-items-center overflow-hidden" :style="currentBgStyle">
      <div class="container-fluid py-5 px-3 px-md-5 w-100">
        <div class="row align-items-center justify-content-center w-100 m-0">
          <div class="col-12 col-lg-10 text-center text-lg-start">
            
            <transition name="stack-fade" mode="out-in">
              <div :key="activeIndex" class="slide-content-box d-flex flex-column flex-lg-row align-items-center gap-4 gap-lg-5">
                
                <h2 class="slide-title fw-bold m-0" :style="slides[activeIndex].titleStyle">
                  {{ slides[activeIndex].title }}
                </h2>

                <p class="slide-desc m-0 lh-base" :style="slides[activeIndex].descStyle">
                  {{ slides[activeIndex].description }}
                </p>

              </div>
            </transition>

            <!-- Indicadores de progresso da narrativa -->
            <div class="narrative-progress d-flex justify-content-center justify-content-lg-start gap-2 mt-5">
              <span 
                v-for="(slide, index) in slides" 
                :key="slide.id"
                class="progress-bar-segment"
                :class="{ active: activeIndex >= index }"
              ></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAboutValoresSlide } from '../composables/useAboutValoresSlide'

const { slides, activeIndex, sectionRef, currentBgStyle } = useAboutValoresSlide()
</script>

<style scoped>
/* Altura exata para o scrollytelling de 3 slides */
.about-valores-section {
  height: 300vh;
  position: relative;
  width: 100%;
}

.valores-sticky-container {
  position: sticky;
  top: 0;
  height: 100vh !important;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.5s ease-in-out;
}

.bg-image-wrapper {
  z-index: 1;
}

.bg-image-wrapper img {
  transition: opacity 0.5s ease-in-out;
}

.bg-overlay {
  background-color: rgba(11, 37, 69, 0.85);
  backdrop-filter: blur(2px);
}

.slide-title {
  font-size: clamp(3rem, 5vw, 4.5rem);
  letter-spacing: -1px;
  min-width: 220px;
}

.slide-desc {
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  max-width: 800px;
}

.stack-fade-enter-active,
.stack-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.stack-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.stack-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.98);
}

.narrative-progress {
  z-index: 10;
}

.progress-bar-segment {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(166, 185, 199, 0.3);
  transition: all 0.4s ease;
}

.progress-bar-segment.active {
  background-color: var(--mover-light-green, #8bc34a);
  width: 70px;
}

@media (max-width: 992px) {
  /* Anula os 300vh no telemóvel para evitar os espaços vazios */
  .about-valores-section {
    height: auto !important;
    min-height: unset !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* O container deixa de ser sticky no mobile e assume o fluxo normal */
  .valores-sticky-container {
    position: relative !important;
    height: auto !important;
    min-height: auto !important;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .slide-content-box {
    text-align: center !important;
  }
}
</style>