<!-- src/modules/home/components/AboutConvite.vue -->
<template>
  <section 
    ref="elementRef"
    class="about-convite-section position-relative w-100 overflow-hidden d-flex align-items-center justify-content-center text-center"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Convite para conhecer as soluções Mover Sistemas"
  >
    <!-- IMAGEM DE FUNDO 100% -->
    <div class="bg-image-wrapper position-absolute top-0 start-0 w-100 h-100">
      <img 
        :src="conviteData.bgImage" 
        :alt="conviteData.imageAlt"
        class="w-100 h-100 bg-contain-custom"
      />
      <!-- OVERLAY DE TRANSPARÊNCIA (Cor #0b2545 com 50% de opacidade) -->
      <div class="bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <!-- CONTEÚDO CENTRALIZADO -->
    <div class="container-fluid position-relative z-2 py-5 px-3 px-md-5">
      <div class="row justify-content-center w-100 m-0">
        <div class="col-12 col-lg-10 convite-content-box">
          
          <h2 class="convite-title fw-bold m-0">
            <span :style="{ color: conviteData.highlightColor }">{{ conviteData.highlightText }}</span>
            <span :style="{ color: conviteData.remainingColor }">{{ conviteData.remainingText }}</span>
          </h2>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAboutConvite } from '../composables/useAboutConvite'
import { useParallax } from '@/shared/composables/useParallax'

const { conviteData } = useAboutConvite()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.about-convite-section {
  min-height: 70vh;
  position: relative;
}
.bg-contain-custom {
  object-fit: contain !important; /* Mostra a imagem inteira sem cortes */
  object-position: center center;
  background-color: #0b2545; /* Preenche eventuais espaços vazios laterais com a cor do overlay */
}

/* Animação Parallax inicial */
.convite-content-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-convite-section.parallax-active .convite-content-box {
  opacity: 1;
  transform: translateY(0);
}

.bg-image-wrapper {
  z-index: 1;
}

/* Overlay na cor #0b2545 com transparência de 0.50 (50%) */
.bg-overlay {
  background-color: rgba(11, 37, 69, 0.50);
  backdrop-filter: blur(1px);
}

.convite-title {
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  letter-spacing: -1px;
  line-height: 1.2;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .about-convite-section {
    min-height: 50vh;
    padding: 3rem 1rem;
  }
}
</style>