<!-- src/modules/home/components/MoverSoftware.vue 
<template>
  <section 
    ref="elementRef"
    class="mover-software-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Software de gestão Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4">
    
      <div class="row justify-content-center text-center mb-5 software-header-col">
        <div class="col-12 col-lg-8">
          <h2 class="software-title fw-bold">
            <span class="title-dark">O software de gestão que transforma operações </span>
            <span class="title-green">{{ softwareData.titleHighlight }}</span>
          </h2>
        </div>
      </div>

     
      <div class="row g-4 mb-4 software-top-row">
        <div 
          v-for="(card, index) in softwareData.topCards" 
          :key="index"
          :class="[card.size, 'd-flex']"
        >
          <div class="software-card p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between">
            
          
            <div class="image-container position-relative rounded-3 overflow-hidden mb-4">
              <img :src="card.image" :alt="card.imageAlt" class="img-fluid w-100 card-img" loading="lazy" />
              <div class="image-gradient-overlay"></div>
            </div>

           
            <div class="card-content">
              <h3 class="card-title fw-bold mb-3">{{ card.title }}</h3>
              <p class="card-desc m-0 lh-base">{{ card.description }}</p>
            </div>

          </div>
        </div>
      </div>

      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 software-bottom-row">
        <div 
          v-for="(card, index) in softwareData.bottomCards" 
          :key="index"
          class="col d-flex"
        >
          <div class="software-card p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between">
            
          
            <div class="image-container position-relative rounded-3 overflow-hidden mb-4">
              <img :src="card.image" :alt="card.imageAlt" class="img-fluid w-100 card-img" loading="lazy" />
              <div class="image-gradient-overlay"></div>
            </div>

           
            <div class="card-content">
              <h3 class="card-title fw-bold mb-3">{{ card.title }}</h3>
              <p class="card-desc m-0 lh-base">{{ card.description }}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMoverSoftware } from '../composables/useMoverSoftware'
import { useParallax } from '@/shared/composables/useParallax'

const { softwareData } = useMoverSoftware()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-software-section {
  background-color: #f8f9fa !important; /* Fundo cinza claro solicitado */
  min-height: 95vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.software-header-col,
.software-top-row,
.software-bottom-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.software-top-row {
  transition-delay: 0.15s;
}

.software-bottom-row {
  transition-delay: 0.3s;
}

.mover-software-section.parallax-active .software-header-col,
.mover-software-section.parallax-active .software-top-row,
.mover-software-section.parallax-active .software-bottom-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.software-title {
  font-size: clamp(2rem, 2.8vw, 3rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-dark {
  color: var(--mover-primary-blue, #0b2545) !important;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Estilização dos Cards (Fundo #0b2545 e letras brancas) */
.software-card {
  background-color: #0b2545 !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.software-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.25) !important;
}

/* Imagem e Gradiente na parte inferior */
.image-container {
  background-color: #051429;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img {
  object-fit: cover;
  max-height: 200px;
  transition: transform 0.4s ease;
}

.software-card:hover .card-img {
  transform: scale(1.03);
}

/* Gradiente na parte inferior da imagem */
.image-gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to top, rgba(11, 37, 69, 0.95), transparent);
  pointer-events: none;
}

/* Tipografia interna dos cards */
.card-title {
  font-size: 1.15rem;
  color: #ffffff !important;
  letter-spacing: -0.3px;
}

.card-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-software-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>-->
<!-- src/modules/home/components/MoverSoftware.vue-->
<template>
  <section 
    ref="elementRef"
    class="mover-software-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Software de gestão Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4">
      
    
      <div class="row justify-content-center text-center mb-5 software-header-col">
        <div class="col-12 col-lg-8">
          <h2 class="software-title fw-bold">
            <span class="title-dark">O software de gestão que transforma operações </span>
            <span class="title-green">{{ softwareData.titleHighlight }}</span>
          </h2>
        </div>
      </div>

      <div class="row g-4 mb-4 software-top-row">
        <div 
          v-for="(card, index) in softwareData.topCards" 
          :key="index"
          :class="[card.size, 'd-flex']"
        >
          <div class="software-card p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between bg-white">
            
           
            <div class="image-container position-relative rounded-3 overflow-hidden mb-4">
              <img :src="card.image" :alt="card.imageAlt" class="img-fluid w-100 card-img" loading="lazy" />
              <div class="image-gradient-overlay"></div>
            </div>

            <div class="card-content">
              <h3 class="card-title fw-bold mb-3">{{ card.title }}</h3>
              <p class="card-desc m-0 lh-base">{{ card.description }}</p>
            </div>

          </div>
        </div>
      </div>

   
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 software-bottom-row">
        <div 
          v-for="(card, index) in softwareData.bottomCards" 
          :key="index"
          class="col d-flex"
        >
          <div class="software-card p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between bg-white">
            
            
            <div class="image-container position-relative rounded-3 overflow-hidden mb-4">
              <img :src="card.image" :alt="card.imageAlt" class="img-fluid w-100 card-img" loading="lazy" />
              <div class="image-gradient-overlay"></div>
            </div>

            <div class="card-content">
              <h3 class="card-title fw-bold mb-3">{{ card.title }}</h3>
              <p class="card-desc m-0 lh-base">{{ card.description }}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMoverSoftware } from '../composables/useMoverSoftware'
import { useParallax } from '@/shared/composables/useParallax'

const { softwareData } = useMoverSoftware()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-software-section {
  background-color: #f8f9fa !important; /* Fundo cinza claro da seção */
  min-height: 95vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.software-header-col,
.software-top-row,
.software-bottom-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.software-top-row {
  transition-delay: 0.15s;
}

.software-bottom-row {
  transition-delay: 0.3s;
}

.mover-software-section.parallax-active .software-header-col,
.mover-software-section.parallax-active .software-top-row,
.mover-software-section.parallax-active .software-bottom-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.software-title {
  font-size: clamp(2rem, 2.8vw, 3rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-dark {
  color: var(--mover-primary-blue, #0b2545) !important;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Estilização dos Cards (Fundo Branco e letras #0b2545) */
.software-card {
  background-color: #ffffff !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  border: 1px solid rgba(11, 37, 69, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.software-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.1) !important;
}

/* Imagem e Gradiente na parte inferior */
.image-container {
  background-color: #f1f3f5;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img {
  object-fit: cover;
  max-height: 200px;
  transition: transform 0.4s ease;
}

.software-card:hover .card-img {
  transform: scale(1.03);
}

/* Gradiente suave na parte inferior da imagem adaptado para fundo branco */
.image-gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
  pointer-events: none;
}

/* Tipografia interna dos cards */
.card-title {
  font-size: 1.15rem;
    
  color:  var(--mover-primary-blue, #0b2545) !important;
  letter-spacing: -0.3px;
}

.card-desc {
  font-size: 0.88rem;
  color: #4a5568 !important; /* Tom escuro legível sobre o fundo branco */
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-software-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>