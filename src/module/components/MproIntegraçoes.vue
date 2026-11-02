<!-- src/modules/mpro/components/MproIntegraçoes.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-integracoes-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Integrações e recursos do Mpro"
  >
    <div class="container py-4 z-2 position-relative">
      
      <!-- TÍTULO DA SEÇÃO -->
      <div class="row justify-content-center text-center mb-5">
        <div class="col-12 col-lg-10 header-box">
          <h2 class="section-title fw-bold">
            <span class="text-highlight">{{ data.titlePart1 }}</span>
            <span>{{ data.titleHighlight }}</span>
            <span>{{ data.titlePart2 }}</span>
          </h2>
        </div>
      </div>

      <!-- GRID DE CARDS / RECURSOS (2x2 Igual ao Exemplo) -->
      <div class="row g-4 justify-content-center align-items-stretch">
        <div 
          v-for="(item, index) in data.items" 
          :key="index"
          class="col-12 col-md-6 col-lg-5 feature-card-col"
        >
          <div class="feature-card h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-start">
            <h3 class="feature-title fw-bold mb-3">
              {{ item.title }}
            </h3>
            <p class="feature-desc lh-base mb-0">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMproIntegracoes } from '../composables/useMproIntegracoes'
import { useParallax } from '@/shared/composables/useParallax'

const { data } = useMproIntegracoes()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-integracoes-section {
  background-color: #e8e9eb !important; /* Fundo branco solicitado */
  color: #0b2545 !important;
  padding-top: 19rem !important;
  padding-bottom: 6rem;
 
}

/* Efeito Parallax de entrada */
.header-box,
.feature-card-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-integracoes-section.parallax-active .header-box {
  opacity: 1;
  transform: translateY(0);
}

.mpro-integracoes-section.parallax-active .feature-card-col:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
.mpro-integracoes-section.parallax-active .feature-card-col:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
.mpro-integracoes-section.parallax-active .feature-card-col:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
.mpro-integracoes-section.parallax-active .feature-card-col:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }

.section-title {
  font-size: clamp(2rem, 3.2vw, 3rem);
  color: #0b2545 !important; /* Título principal cor #0b2545 */
  letter-spacing: -1px;
  line-height: 1.25;
}

.text-highlight {
  color: #8bc34a !important; /* "Integrações" cor #8bc34a */
}

.feature-card {
  background-color: #f8f9fa;
  border: 1px solid rgba(11, 37, 69, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(11, 37, 69, 0.08);
}

.feature-title {
  font-size: 1.35rem;
  color: #0b2545 !important; /* Títulos dos cards em #0b2545 */
  letter-spacing: -0.5px;
}

.feature-desc {
  font-size: 1rem;
  color: #0b2545 !important; /* Descrições dos cards em #0b2545 */
  opacity: 0.85;
}
/* CORREÇÃO DO PADDING NO MOBILE */
@media (max-width: 992px) {
  .mpro-integracoes-section {
    padding-top: 13rem !important; /* Puxa o título para perto do card e remove o espaço em branco */
    padding-bottom: 4rem !important;
  }
}
</style>