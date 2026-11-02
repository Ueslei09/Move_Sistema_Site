<!-- src/modules/mpro/components/MproHero.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-hero-section position-relative w-100 overflow-visible d-flex align-items-center"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Apresentação Mpro Sistemas"
  >
    <div class="container-fluid px-3 px-md-5 z-2 position-relative w-100">
      <div class="row align-items-center justify-content-between w-100 m-0">
        
        <!-- COLUNA DE TEXTOS E CTA (Lado Esquerdo) -->
        <div class="col-12 col-lg-5 hero-content-box text-center text-lg-start py-5">
          
          <!-- LOGO / TÍTULO EM IMAGEM -->
          <div class="mb-4">
            <img 
              :src="mproData.logoImg" 
              :alt="mproData.logoAlt"
              class="mpro-brand-logo img-fluid"
            />
          </div>

          <!-- SUBTÍTULO PERSONALIZADO -->
          <h1 class="hero-subtitle fw-bold text-white mb-4">
            <span>{{ mproData.subTitlePart1 }}</span>
            <span class="text-highlight">{{ mproData.highlightWord }}</span>
            <span>{{ mproData.subTitlePart2 }}</span>
          </h1>

          <!-- DESCRIÇÃO -->
          <p class="hero-desc text-white mb-4 lh-base">
            {{ mproData.description }}
          </p>

          <!-- BOTÃO COM COR DO PROJETO E HOVER -->
          <div>
            <button 
              @click="handleActionClick"
              class="btn mpro-cta-btn fw-semibold px-5 py-3 rounded-pill text-uppercase shadow-sm"
              :aria-label="mproData.buttonAriaLabel"
            >
              {{ mproData.buttonText }}
            </button>
          </div>

        </div>

        <!-- COLUNA DO CARD BRANCO -->
        <div class="col-12 col-lg-6 hero-image-col text-center position-relative">
          <div class="device-card-wrapper p-4 p-md-5 shadow-lg bg-white">
            <img 
              :src="mproData.heroImage" 
              :alt="mproData.heroImageAlt"
              class="img-fluid devices-mockup"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useMpro } from '../composables/useMpro'
import { useParallax } from '@/shared/composables/useParallax'

const { mproData, handleActionClick } = useMpro()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-hero-section {
  background-color: #0b2545 !important;
  min-height: auto !important;
  padding-top: 6rem; 
  padding-bottom: 2rem !important;
  overflow: visible !important;
}

/* Efeito Parallax de entrada */
.hero-content-box,
.hero-image-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-hero-section.parallax-active .hero-content-box,
.mpro-hero-section.parallax-active .hero-image-box {
  opacity: 1;
  transform: translateY(0);
}

.mpro-brand-logo {
  max-height: 150px;
  object-fit: contain;
  margin-bottom: -40px;
}

.hero-content-box {
  flex: 0 0 58% !important;
  max-width: 58% !important;
 margin-top: -5rem !important;}

.hero-subtitle {
  font-size: clamp(2rem, 3.2vw, 3.2rem) !important;
  white-space: normal !important;
  word-break: normal !important;
}

.hero-subtitle span {
  display: inline !important;
}

.text-highlight {
  color: #8bc34a !important;
}

.hero-desc {
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  max-width: 540px;
  color: rgba(255, 255, 255, 0.9);
}

/* Botão padrão com as cores do projeto e efeito hover */
.mpro-cta-btn {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.mpro-cta-btn:hover,
.mpro-cta-btn:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: #0b2545 !important;
  transform: translateY(-2px);
}

.hero-image-col {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

/* SEU CARD EXATAMENTE COMO VOCÊ DEIXOU */
.device-card-wrapper {
  background-color: transparent !important; /* Remove o fundo branco do cartão */
  border-radius: 0px !important;            /* Remove os cantos arredondados */
  box-shadow: none !important;               /* Remove a sombra da caixa */
  width: 200% !important;
  left: 350px;
  max-width: 150% !important;
  margin-bottom: -400px;
  position: absolute;
  z-index: 10;
}

.devices-mockup {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 992px) {
  .mpro-hero-section {
    padding-top: 4rem;
    text-align: center;
  }
  
  .hero-content-box {
    text-align: center !important;
    margin-bottom: 2rem;
    margin-top: 0 !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  .hero-subtitle {
    font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  /* Reseta o position absolute e o left no telemóvel para encaixar certinho */
  .device-card-wrapper {
    position: relative !important;
    left: 0 !important;
    max-width: 100% !important;
    margin-bottom: -200px !important;
    border-radius: 20px !important;
    padding: 1.5rem 1rem !important;
  }
  
  .hero-image-col {
    width: 100%;
    padding: 0 10px;
  }
}


</style>