<!-- src/modules/home/components/MoverProvaSocial.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-prova-social-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Depoimentos e prova social de clientes Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4">
      
      <!-- CABEÇALHO COM TÍTULO E SETAS DO CARROSSEL -->
      <div class="row align-items-center justify-content-between mb-5 prova-header-row">
        <div class="col-12 col-lg-8 text-center text-lg-start">
          <h2 class="prova-title fw-bold m-0">
            <span class="title-green">{{ provaSocialData.titlePart1 }}</span>
            <span class="title-dark">{{ provaSocialData.titlePart2 }}</span>
          </h2>
        </div>
        <div class="col-12 col-lg-4 d-none d-lg-flex justify-content-end gap-2">
          <button class="carousel-nav-btn rounded-circle d-flex align-items-center justify-content-center border" aria-label="Slide anterior">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
          </button>
          <button class="carousel-nav-btn rounded-circle d-flex align-items-center justify-content-center border" aria-label="Próximo slide">
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <!-- CARROSSEL DE 4 SLIDES (CARDS) -->
      <div class="row g-4 prova-cards-row">
        <div 
          v-for="(item, index) in provaSocialData.testimonials" 
          :key="index"
          class="col-12 col-md-6 col-lg-3 d-flex"
        >
          <div class="prova-card bg-white rounded-4 shadow-sm p-4 w-100 d-flex flex-column justify-content-between border">
            
            <div>
              <!-- FOTO DO CLIENTE -->
              <div class="avatar-container mb-3">
                <img :src="item.avatar" :alt="item.name" class="rounded-circle client-avatar" loading="lazy" />
              </div>

              <!-- NOME E CARGO -->
              <h3 class="client-name fw-bold mb-1">{{ item.name }}</h3>
              <p class="client-role mb-4">{{ item.role }}</p>

              <!-- DEPOIMENTO (COR #8bc34a) -->
              <p class="client-quote mb-4 lh-base">"{{ item.quote }}"</p>
            </div>

            <!-- LINK "LER HISTÓRIA COMPLETA" COM HOVER -->
            <div class="pt-3 border-top">
              <router-link :to="item.url" class="story-link d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold">
                <span>Ler história completa</span>
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
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverProvaSocial } from '../composables/useMoverProvaSocial'

const { provaSocialData } = useMoverProvaSocial()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-prova-social-section {
  background-color: #e8e9eb !important; /* Cor de fundo solicitada */
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.prova-header-row,
.prova-cards-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.prova-cards-row {
  transition-delay: 0.2s;
}

.mover-prova-social-section.parallax-active .prova-header-row,
.mover-prova-social-section.parallax-active .prova-cards-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.prova-title {
  font-size: clamp(2rem, 2.5vw, 2.8rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.title-dark {
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Botões de navegação do carrossel */
.carousel-nav-btn {
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-color: rgba(11, 37, 69, 0.15) !important;
  color: var(--mover-primary-blue, #0b2545);
  transition: all 0.3s ease;
}

.carousel-nav-btn:hover {
  background-color: var(--mover-primary-blue, #0b2545);
  color: #ffffff;
  border-color: var(--mover-primary-blue, #0b2545) !important;
}

/* Estilização dos Cards */
.prova-card {
  border-color: rgba(11, 37, 69, 0.08) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.prova-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.12) !important;
}

/* Avatar do Cliente */
.client-avatar {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.client-name {
  font-size: 1.1rem;
  color: var(--mover-primary-blue, #0b2545) !important;
  letter-spacing: -0.2px;
}

.client-role {
  font-size: 0.85rem;
  color: #6c757d;
}

/* Depoimento na cor #8bc34a */
.client-quote {
  font-size: 0.9rem;
  color: var(--mover-light-green, #8bc34a) !important;
  font-style: italic;
}

/* Link com hover padrão do projeto */
.story-link {
  color: var(--mover-primary-blue, #0b2545);
  font-size: 0.88rem;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.story-link:hover {
  color: var(--mover-light-green, #8bc34a) !important;
  padding-left: 4px;
}

.story-link i {
  transition: transform 0.2s ease;
}

.story-link:hover i {
  transform: translateX(3px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-prova-social-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
    text-align: center;
  }
}
</style>