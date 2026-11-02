<!-- src/modules/home/components/AboutBannerCard.vue -->
<template>
  <section 
    ref="elementRef"
    class="about-banner-card-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Seção de soluções e integrações Mover"
  >
    <div class="container-fluid h-100 py-lg-4">
      
      <div class="row g-4 g-lg-5 cards-row">
        
        <!-- CARD 1 E CARD 2 (Ocupam 50% cada no desktop: col-lg-6) -->
        <div 
          v-for="card in cardsData" 
          :key="card.id"
          class="col-12 col-lg-6 d-flex"
        >
          <div class="banner-card-item p-4 p-lg-5 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between bg-white border">
            
            <!-- IMAGEM / MOCKUP DO CARD -->
            <div class="card-image-wrapper mb-4 rounded-4 overflow-hidden shadow-sm ratio ratio-16x9 bg-light">
              <img 
                :src="card.image" 
                :alt="card.imageAlt"
                class="w-100 h-100 object-fit-cover"
                loading="lazy"
              />
            </div>

            <!-- CONTEÚDO DE TEXTO -->
            <div class="card-text-content">
              <h3 class="banner-card-title fw-bold mb-3">
                {{ card.title }}
              </h3>
              <p class="banner-card-desc mb-4 lh-base">
                {{ card.description }}
              </p>
            </div>

            <!-- BOTÃO COM O PADRÃO DO PROJETO E HOVER -->
            <div class="card-cta-wrapper pt-2">
              <router-link 
                :to="card.buttonUrl" 
                class="btn banner-card-cta fw-semibold px-4 py-3 rounded-pill text-white text-uppercase shadow-sm d-inline-flex align-items-center gap-2"
                :aria-label="card.ariaLabelButton"
              >
                <span>{{ card.buttonText }}</span>
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </router-link>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useAboutBannerCard } from '../composables/useAboutBannerCard'
import { useParallax } from '@/shared/composables/useParallax'

const { cardsData } = useAboutBannerCard()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.about-banner-card-section {
  min-height: 85vh;
  display: flex;
  align-items: center;
  background-color: #e8e9eb !important;
  overflow: hidden;
}

/* Animação Parallax inicial */
.cards-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-banner-card-section.parallax-active .cards-row {
  opacity: 1;
  transform: translateY(0);
}

/* Estilo do Card Individual */
.banner-card-item {
  border-color: rgba(11, 37, 69, 0.08) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-card-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(11, 37, 69, 0.1) !important;
}

/* Título e Descrição na cor solicitada (#0b2545) */
.banner-card-title {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: clamp(1.5rem, 2vw, 1.8rem);
}

.banner-card-desc {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.95rem;
}

/* Botão padrão do sistema com as cores oficiais e efeito hover */
.banner-card-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.banner-card-cta:hover,
.banner-card-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
}

/* Responsividade para telas menores */
@media (max-width: 992px) {
  .about-banner-card-section {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>