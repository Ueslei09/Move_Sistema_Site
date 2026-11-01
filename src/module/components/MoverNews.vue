<!-- src/modules/home/components/MoverNews.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-news-section position-relative py-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Conteúdos, notícias e artigos sobre gestão e automação"
  >
    <!-- FUNDO DIVIDIDO: PARTE SUPERIOR #0b2545 E PARTE INFERIOR BRANCA -->
    <div class="news-bg-top"></div>
    <div class="news-bg-bottom"></div>

    <div class="container-fluid h-100 py-lg-4 position-relative z-3 px-3 px-md-5">
      
      <!-- TÍTULO DA SEÇÃO -->
      <div class="row justify-content-center text-center mb-5 news-header-col">
        <div class="col-12 col-lg-10">
          <h2 class="news-title fw-bold m-0">
            {{ newsData.title }}
          </h2>
        </div>
      </div>

      <!-- GRID DE 4 CARDS DE NOTÍCIAS -->
      <div class="row g-4 justify-content-center mb-5 news-cards-row">
        <div 
          v-for="(item, index) in newsData.newsCards" 
          :key="index"
          class="col-12 col-md-6 col-lg-3 d-flex"
        >
          <router-link 
            :to="item.url" 
            class="news-card bg-white rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between text-decoration-none overflow-hidden border"
          >
            <div>
              <!-- IMAGEM COM DEGRADÊ NA PARTE INFERIOR -->
              <div class="news-img-container position-relative overflow-hidden">
                <img :src="item.image" :alt="item.imageAlt" class="img-fluid w-100 news-img" loading="lazy" />
                <div class="image-gradient-overlay"></div>
              </div>

              <!-- CONTEÚDO DO CARD -->
              <div class="p-4 pb-2">
                <span class="news-category d-block mb-2">{{ item.category }}</span>
                <h3 class="news-card-title fw-bold mb-3">{{ item.title }}</h3>
              </div>
            </div>

            <!-- DATA E SETA -->
            <div class="p-4 pt-0 d-flex align-items-center justify-content-between">
              <span class="news-date">{{ item.date }}</span>
              <span class="news-arrow d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </span>
            </div>

          </router-link>
        </div>
      </div>

      <!-- BOTÃO CENTRALIZADO NA PARTE INFERIOR -->
      <div class="row justify-content-center news-btn-col">
        <div class="col-12 col-md-auto text-center">
          <router-link 
            :to="newsData.buttonUrl" 
            class="btn news-cta fw-semibold px-5 py-3 rounded-pill text-white text-uppercase shadow-sm"
            :aria-label="newsData.ariaLabelButton"
          >
            {{ newsData.buttonText }}
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverNews } from '../composables/useMoverNews'

const { newsData } = useMoverNews()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-news-section {
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

/* Fundo dividido em duas cores (Acima #0b2545, Abaixo Branco) */
.news-bg-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45%;
  background-color: #0b2545 !important;
  z-index: 1;
}

.news-bg-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55%;
  background-color: #ffffff !important;
  z-index: 1;
}

/* Estado inicial do Parallax */
.news-header-col,
.news-cards-row,
.news-btn-col {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.news-cards-row {
  transition-delay: 0.15s;
}

.news-btn-col {
  transition-delay: 0.3s;
}

.mover-news-section.parallax-active .news-header-col,
.mover-news-section.parallax-active .news-cards-row,
.mover-news-section.parallax-active .news-btn-col {
  opacity: 1;
  transform: translateY(0);
}

/* Título principal na cor #8bc34a */
.news-title {
  font-size: clamp(2rem, 2.8vw, 3.2rem);
  letter-spacing: -0.5px;
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Cards de Notícias */
.news-card {
  background-color: #ffffff !important;
  border-color: rgba(11, 37, 69, 0.08) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.15) !important;
}

/* Imagem e Gradiente inferior */
.news-img-container {
  height: 160px;
  background-color: #f1f3f5;
}

.news-img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-card:hover .news-img {
  transform: scale(1.05);
}

.image-gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent);
  pointer-events: none;
}

/* Tipografia interna dos cards na cor #0b2545 */
.news-category {
  font-size: 0.75rem;
  color: var(--mover-primary-blue, #0b2545) !important;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.news-card-title {
  font-size: 1.05rem;
  color: var(--mover-primary-blue, #0b2545) !important;
  line-height: 1.35;
  letter-spacing: -0.2px;
}

.news-date {
  font-size: 0.82rem;
  color: var(--mover-primary-blue, #0b2545) !important;
}

.news-arrow {
  color: var(--mover-light-green, #8bc34a);
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.news-card:hover .news-arrow {
  transform: translateX(4px);
  color: var(--mover-primary-blue, #0b2545);
}

/* Botão com o padrão de hover do projeto */
.news-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.news-cta:hover,
.news-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11, 37, 69, 0.15) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-news-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
  .news-bg-top {
    height: 30%;
  }
  .news-bg-bottom {
    height: 70%;
  }
}
</style>