<!-- src/modules/home/components/MoverEscalavel.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-escalavel-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Presença nacional e escala comprovada da Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4 text-center">
      
      <!-- TÍTULO DA SEÇÃO -->
      <div class="row justify-content-center mb-5 escalavel-header-col">
        <div class="col-12 col-lg-10">
          <h2 class="escalavel-title fw-bold m-0">
            {{ escalavelData.title }}
          </h2>
        </div>
      </div>

      <!-- BLOCOS DE ESTATÍSTICAS / NÚMEROS -->
      <div class="row justify-content-center g-5 mb-5 escalavel-stats-row">
        <div 
          v-for="(stat, index) in escalavelData.stats" 
          :key="index"
          class="col-12 col-md-4 text-center"
        >
          <div class="stat-item">
            <h3 class="stat-number fw-bold mb-2">
              {{ stat.prefix }}{{ displayValues[index].toLocaleString('pt-BR') }}{{ stat.suffix }}
            </h3>
            <p class="stat-label m-0 fw-medium">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- DESTAQUE INFERIOR -->
      <div class="row justify-content-center escalavel-bottom-col">
        <div class="col-12 col-lg-10">
          <p class="bottom-highlight-text m-0 fw-semibold">
            <span class="highlight-green">{{ escalavelData.bottomHighlight }}</span>
            <span class="highlight-white">{{ escalavelData.bottomText }}</span>
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverEscalavel } from '../composables/useMoverEscalavel'

const { isVisible, elementRef } = useParallax(0.05)
const { escalavelData, displayValues } = useMoverEscalavel(isVisible)
</script>

<style scoped>
.mover-escalavel-section {
  background-color: #0b2545 !important; /* Fundo solicitado */
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.escalavel-header-col,
.escalavel-stats-row,
.escalavel-bottom-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.escalavel-stats-row {
  transition-delay: 0.15s;
}

.escalavel-bottom-col {
  transition-delay: 0.3s;
}

.mover-escalavel-section.parallax-active .escalavel-header-col,
.mover-escalavel-section.parallax-active .escalavel-stats-row,
.mover-escalavel-section.parallax-active .escalavel-bottom-col {
  opacity: 1;
  transform: translateY(0);
}

/* Título e Números na cor #8bc34a */
.escalavel-title {
  font-size: clamp(2rem, 2.8vw, 3.2rem);
  letter-spacing: -0.5px;
  color: var(--mover-light-green, #8bc34a) !important;
}

.stat-number {
  font-size: clamp(2.5rem, 3.5vw, 3.8rem);
  letter-spacing: -1px;
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Subtítulo abaixo dos números em Branco */
.stat-label {
  font-size: 1.05rem;
  color: #ffffff !important;
}

/* Destaque Inferior (#8bc34a no destaque e branco no texto complementar) */
.bottom-highlight-text {
  font-size: clamp(1.1rem, 1.4vw, 1.35rem);
}

.highlight-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.highlight-white {
  color: #ffffff !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-escalavel-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>