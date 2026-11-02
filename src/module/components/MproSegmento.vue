<!-- src/modules/mpro/components/MproSegmento.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-segmento-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Segmentos atendidos pelo Mpro"
  >
    <div class="container py-4 z-2 position-relative text-center">
      
      <!-- CABEÇALHO DA SEÇÃO (TÍTULO E SUBTÍTULO) -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 header-box">
          <h2 class="section-title fw-bold mb-3">
            <span>{{ segmentData.titlePrefix }}</span>
            <span class="text-highlight">{{ segmentData.titleHighlight }}</span>
            <span>{{ segmentData.titleRest }}</span>
          </h2>
          <p class="section-subtitle mb-0">
            {{ segmentData.subtitle }}
          </p>
        </div>
      </div>

      <!-- GRID DE SEGMENTOS -->
      <div class="row g-4 justify-content-center align-items-center mb-5 segments-grid">
        <div 
          v-for="(item, index) in segmentData.segments" 
          :key="index"
          class="col-6 col-sm-4 col-md-3 col-lg-2 segment-item"
        >
          <div class="segment-card d-flex flex-column align-items-center justify-content-center p-3 cursor-pointer">
            <div class="icon-circle rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm">
              <i :class="['bi', item.icon]" aria-hidden="true"></i>
            </div>
            <span class="segment-name fw-medium">{{ item.name }}</span>
          </div>
        </div>
      </div>

      <!-- BOTÃO DE CTA -->
      <div class="row justify-content-center cta-box">
        <div class="col-12">
          <button 
            @click="handleActionClick"
            class="btn mpro-cta-btn fw-semibold px-5 py-3 rounded-pill shadow-sm text-uppercase"
            :aria-label="segmentData.buttonAriaLabel"
          >
            {{ segmentData.buttonText }}
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMproSegmento } from '../composables/useMproSegmento'
import { useParallax } from '@/shared/composables/useParallax'

const { segmentData, handleActionClick } = useMproSegmento()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-segmento-section {
  background-color: #e8e9eb !important;
  color: #0b2545 !important;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Efeito Parallax de entrada */
.header-box,
.segments-grid,
.cta-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-segmento-section.parallax-active .header-box {
  opacity: 1;
  transform: translateY(0);
}

.mpro-segmento-section.parallax-active .segments-grid {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.mpro-segmento-section.parallax-active .cta-box {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.4s;
}

/* Títulos */
.section-title {
  font-size: clamp(2rem, 3.2vw, 3rem);
  color: #0b2545 !important;
  letter-spacing: -1px;
  line-height: 1.25;
}

.text-highlight {
  color: #8bc34a !important; /* MPRO em verde */
}

.section-subtitle {
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  color: #0b2545 !important;
  opacity: 0.85;
}

/* --- PADRÃO DOS ÍCONES E HOVER (EXATO DO PRINT) --- */
.segment-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Estado Normal (Padrão) */
.icon-circle {
  width: 90px;
  height: 90px;
  background-color: #ffffff; /* Fundo branco */
  border: 1px solid rgba(11, 37, 69, 0.1); /* Borda suave */
  color: #0b2545; /* Ícone em azul escuro */
  font-size: 2.2rem;
  transition: all 0.3s ease;
}

.segment-name {
  font-size: 0.95rem;
  color: #0b2545 !important; /* Texto em azul escuro */
  transition: color 0.3s ease;
}

/* Estado Hover (Quando o rato passa por cima) */
.segment-card:hover .icon-circle {
  background-color: #0b2545 !important; /* Fundo passa a azul escuro */
  color: #8bc34a !important; /* Ícone passa a verde */
  box-shadow: 0 10px 25px rgba(11, 37, 69, 0.2) !important;
  transform: translateY(-4px);
}

.segment-card:hover .segment-name {
  color: #8bc34a !important; /* Texto passa a verde no hover */
}
/* -------------------------------------------------- */

/* Botão padrão com cores do projeto e hover */
.mpro-cta-btn {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.mpro-cta-btn:hover,
.mpro-cta-btn:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: #0b2545 !important;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mpro-segmento-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .icon-circle {
    width: 75px;
    height: 75px;
    font-size: 1.8rem;
  }
}
</style>