<!-- src/modules/home/components/MoverSolucoes.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-solucoes-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Soluções e inteligência do ERP Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4">
      
      <!-- PARTE SUPERIOR: TEXTO (ESQ) E VÍDEO/MOCKUP (DIR) -->
      <div class="row align-items-center justify-content-between w-100 m-0 g-4 g-lg-5 top-content-row">
        
        <!-- LADO ESQUERDO: TÍTULO, SUBTÍTULO E BOTÃO -->
        <div class="col-12 col-lg-6 text-center text-lg-start solucoes-text-col p-0">
          <h2 class="solucoes-title fw-bold mb-4">
            <span class="title-dark">O ERP que pensa </span>
            <span class="title-green">{{ solucoesData.titleHighlight }}</span>
          </h2>

          <p class="solucoes-subtitle mb-5 lh-base mx-auto mx-lg-0">
            {{ solucoesData.subtitle }}
          </p>

          <div class="cta-wrapper">
            <router-link 
              :to="solucoesData.buttonUrl" 
              class="btn solucoes-cta fw-semibold px-4 py-3 rounded-pill text-white text-uppercase shadow-sm"
              :aria-label="solucoesData.ariaLabelButton"
            >
              {{ solucoesData.buttonText }}
            </router-link>
          </div>
        </div>

        <!-- LADO DIREITO: VÍDEO / MOCKUP DE APRESENTAÇÃO -->
        <div class="col-12 col-lg-6 text-center position-relative p-0 d-flex align-items-center justify-content-center solucoes-video-col">
          <div class="video-container shadow-lg rounded-4 overflow-hidden w-100">
            <div class="ratio ratio-16x9">
              <iframe 
                :src="solucoesData.videoUrl" 
                title="Apresentação da solução ERP Mover" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      <!-- LINHA HR SEPARADORA (2px, cor #0b2545) -->
      <hr class="solucoes-divider my-5 border-0" aria-hidden="true" />

      <!-- PARTE INFERIOR: 4 CARDS DE SOLUÇÕES -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 solucoes-cards-row">
        <div 
          v-for="(card, index) in solucoesData.cards" 
          :key="index"
          class="col d-flex"
        >
          <div class="solution-card p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between bg-white border">
            
            <!-- TOPO DO CARD: ÍCONE E TEXTOS -->
            <div>
              <div class="card-icon-wrapper mb-3 d-flex align-items-center justify-content-center">
                <i :class="['bi', card.icon, 'card-main-icon']" aria-hidden="true"></i>
              </div>
              <h3 class="card-title fw-bold mb-2">{{ card.title }}</h3>
              <p class="card-desc mb-4 lh-base">{{ card.description }}</p>
            </div>

            <!-- LINKS INTERNOS DO CARD -->
            <div class="card-links-wrapper pt-3 border-top">
              <ul class="list-unstyled m-0 d-flex flex-column gap-2">
                <li v-for="(sub, sIdx) in card.subLinks" :key="sIdx">
                  <router-link 
                    :to="sub.url" 
                    class="sublink-item d-flex align-items-center justify-content-between text-decoration-none py-1"
                  >
                    <span class="sublink-text">{{ sub.name }}</span>
                    <i class="bi bi-arrow-right sublink-arrow" aria-hidden="true"></i>
                  </router-link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
  
</template>

<script setup>
import { useMoverSolucoes } from '../composables/useMoverSolucoes'
import { useParallax } from '@/shared/composables/useParallax'

const { solucoesData } = useMoverSolucoes()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-solucoes-section {
  background-color: #ffffff !important;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.top-content-row,
.solucoes-cards-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.solucoes-cards-row {
  transition-delay: 0.2s;
}

.mover-solucoes-section.parallax-active .top-content-row,
.mover-solucoes-section.parallax-active .solucoes-cards-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia Superior */
.solucoes-title {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-dark {
  color: var(--mover-primary-blue, #0b2545) !important;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.solucoes-subtitle {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(0.95rem, 1.1vw, 1.15rem);
  max-width: 34rem;
}

/* Botão Padrão com Hover */
.solucoes-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.solucoes-cta:hover,
.solucoes-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
}

/* Linha HR Divisória (2px, cor #0b2545) */
.solucoes-divider {
  width: 100%;
  height: 2px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
}

/* Cards de Soluções */
.solution-card {
  border-color: rgba(11, 37, 69, 0.1) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(11, 37, 69, 0.1) !important;
}

/* Linha HR de 5px com a cor principal do projeto (#0b2545) */
.banner-bottom-divider {
  height: 5px !important;
  background-color: var(--mover-primary-blue, #0b2545) !important;
  opacity: 1 !important;
  width: 100%;
}

.card-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: rgba(139, 195, 74, 0.12);
}

.card-main-icon {
  font-size: 1.5rem;
  color: var(--mover-primary-blue, #0b2545) !important;
}

.card-title {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 1.25rem;
}

.card-desc {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.9rem;
}

/* Sublinks dos Cards */
.sublink-item {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.88rem;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.sublink-item:hover {
  color: var(--mover-light-green, #8bc34a) !important;
  padding-left: 4px;
}

.sublink-arrow {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.sublink-item:hover .sublink-arrow {
  transform: translateX(3px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-solucoes-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
  .solucoes-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>