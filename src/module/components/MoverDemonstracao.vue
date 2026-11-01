<!-- src/modules/home/components/MoverDemonstracao.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-demonstracao-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Seção de demonstração prática da Mover Sistemas"
  >
    <div class="container-fluid h-100 d-flex align-items-center py-lg-4">
      <div class="row align-items-center justify-content-between w-100 m-0 g-4">
        
        <!-- LADO ESQUERDO: TÍTULO COM CORES PERSONALIZADAS -->
        <div class="col-12 col-lg-5 text-center text-lg-start demo-text-col p-0">
          <h2 class="demo-title fw-bold m-0">
            <span class="color-green">{{ demonstracaoData.titlePart1 }}</span>
            <span class="color-blue">{{ demonstracaoData.titlePart2 }}</span>
            <span class="color-green">{{ demonstracaoData.titlePart3 }}</span>
          </h2>
        </div>

        <!-- CENTRO: PERSONAGEM 3D APONTANDO PARA O BOTÃO -->
        <div class="col-12 col-lg-3 text-center demo-img-col p-0 position-relative">
          <img 
            :src="demonstracaoData.demoImage" 
            :alt="demonstracaoData.imageAlt" 
            class="img-fluid demo-character-img"
            loading="lazy"
          />
        </div>

        <!-- LADO DIREITO: BOTÃO DE SOLICITAR DEMONSTRAÇÃO -->
        <div class="col-12 col-lg-4 text-center text-lg-end demo-btn-col p-0">
          <router-link 
            :to="demonstracaoData.buttonUrl" 
            class="btn demo-cta fw-semibold px-4 px-xl-5 py-3 rounded-pill text-white text-uppercase shadow-sm"
            :aria-label="demonstracaoData.ariaLabelButton"
          >
            {{ demonstracaoData.buttonText }}
          </router-link>
        </div>

      </div>
    </div>
  </section>
      <hr class="banner-bottom-divider m-0 border-0" aria-hidden="true" />
</template>

<script setup>
import { useMoverDemonstracao } from '../composables/useMoverDemonstracao'
import { useParallax } from '@/shared/composables/useParallax'

const { demonstracaoData } = useMoverDemonstracao()
const { isVisible, elementRef } = useParallax(0.1) // Ativa o parallax assim que a seção entra na tela
</script>

<style scoped>
.mover-demonstracao-section {
  background-color: #0b2545 !important;
  min-height: 45vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-bottom: 0 !important;
}

/* Estado inicial do Parallax (deslocados para baixo e invisíveis) */
.demo-text-col,
.demo-img-col,
.demo-btn-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.demo-img-col {
  transition-delay: 0.15s;
}

/* Linha HR de 5px com a cor principal do projeto (#0b2545) */
.banner-bottom-divider {
  height: 2px !important;
  background-color: var(--mover-primary-blue, #0d1a2b) !important;
  opacity: 1 !important;
  width: 100%;
}

.demo-img-col {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: static;
}

.demo-btn-col {
  transition-delay: 0.3s;
}

/* Quando o IntersectionObserver detecta a seção na tela */
.mover-demonstracao-section.parallax-active .demo-text-col,
.mover-demonstracao-section.parallax-active .demo-img-col,
.mover-demonstracao-section.parallax-active .demo-btn-col {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.demo-title {
  font-size: clamp(1.8rem, 2.3vw, 2.6rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.color-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.color-blue {
  color: var(--mover-light-bg, #f8f9fa) !important;
}

/* Imagem do Personagem 3D Central (Aumentada) */
.demo-character-img {
  max-height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 12px 20px rgba(11, 37, 69, 0.18));
  transition: transform 0.3s ease;
  margin-bottom: -55px; /* Puxa o boneco para baixo até sumir o espaço em branco */
  position: relative;
  z-index: 5;
}

.demo-character-img:hover {
  transform: scale(1.03);
}

/* Botão com padrão de hover do projeto */
.demo-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.demo-cta:hover,
.demo-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11, 37, 69, 0.15) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-demonstracao-section {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
    text-align: center !important;
  }
  .demo-character-img {
    max-height: 200px;
    margin: 1.5rem 0;
  }
  .demo-btn-col {
    margin-top: 0.5rem;
  }
}
</style>