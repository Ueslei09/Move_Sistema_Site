<!-- src/modules/mpro/components/MpromodulosSection.vue -->
<template>
  <section 
    ref="elementRef"
    class="mpro-modulos-section position-relative w-100 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Recursos e módulos do Mpro"
  >
    <!-- PARTE SUPERIOR: FUNDO AZUL ESCURO (#0b2545) -->
    <div class="modulos-header-bg py-5 text-center">
      <div class="container py-4 z-2 position-relative">
        
        <!-- TÍTULO -->
        <h2 class="section-title fw-bold mb-5">
          <span class="text-highlight">{{ data.titleHighlight }}</span>
          <span class="text-white">{{ data.titleRest }}</span>
        </h2>

        <!-- CARROSSEL / BOTÕES DE NAVEGAÇÃO (ABAS) -->
        <div class="modulos-nav-container overflow-x-auto pb-3 mb-2" ref="navContainerRef">
          <div class="d-inline-flex flex-nowrap gap-2 px-2">
            <button 
              v-for="(slide, index) in data.slides"
              :key="index"
              @click="handleTabClick(index)"
              class="btn modulo-tab-btn fw-semibold px-4 py-2 rounded-pill text-nowrap"
              :class="{ 'active-tab': activeIndex === index }"
              :aria-label="'Selecionar módulo ' + slide.name"
            >
              {{ slide.name }}
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- PARTE INFERIOR: FUNDO BRANCO COM O CONTEÚDO DO SLIDE ATIVO -->
    <div class="modulos-content-bg py-5">
      <div class="container py-4 z-2 position-relative">
        
        <transition name="fade-slide" mode="out-in">
          <div class="row align-items-center justify-content-between g-5" :key="activeIndex">
            
            <!-- LADO ESQUERDO: LISTA DE DESCRIÇÕES DO PRODUTO (COR #0b2545) -->
            <div class="col-12 col-lg-6 text-start content-left-col">
              <ul class="feature-list list-unstyled mb-0">
                <li 
                  v-for="(desc, idx) in currentSlide.descriptions" 
                  :key="idx"
                  class="d-flex align-items-start mb-3"
                >
                  <span class="feature-bullet me-3 mt-1 flex-shrink-0"></span>
                  <span class="feature-text fw-medium">{{ desc }}</span>
                </li>
              </ul>
            </div>

            <!-- LADO DIREITO: IMAGEM OU VÍDEO -->
            <div class="col-12 col-lg-6 text-center content-right-col">
              <div class="media-display-wrapper shadow-lg rounded-4 overflow-hidden position-relative bg-white p-3">
                
                <!-- Vídeo -->
                <iframe 
                  v-if="currentSlide.mediaType === 'video'"
                  :src="currentSlide.mediaSrc" 
                  :title="currentSlide.mediaAlt"
                  class="w-100 h-100 border-0 rounded-3"
                  style="min-height: 380px;"
                  allowfullscreen
                ></iframe>

                <!-- Imagem -->
                <img 
                  v-else
                  :src="currentSlide.mediaSrc" 
                  :alt="currentSlide.mediaAlt"
                  class="img-fluid rounded-3 w-100 object-fit-contain"
                />

              </div>
            </div>

          </div>
        </transition>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useMpromodulos } from '../composables/useMpromodulos'
import { useParallax } from '@/shared/composables/useParallax'

const { data, activeIndex, currentSlide, setActiveSlide } = useMpromodulos()
const { isVisible, elementRef } = useParallax(0.05)

const navContainerRef = ref(null)

// Função para mudar de aba e centralizar o botão ativo no mobile automaticamente
const handleTabClick = (index) => {
  setActiveSlide(index)
  
  if (navContainerRef.value) {
    const container = navContainerRef.value
    const buttons = container.querySelectorAll('button')
    const targetButton = buttons[index]
    
    if (targetButton) {
      const scrollLeftPos = targetButton.offsetLeft - (container.offsetWidth / 2) + (targetButton.offsetWidth / 2)
      container.scrollTo({
        left: scrollLeftPos,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.mpro-modulos-section {
  width: 100%;
}

/* Parte superior com fundo #0b2545 */
.modulos-header-bg {
  background-color: #0b2545 !important;
  color: #ffffff;
}

/* Parte inferior com fundo branco #ffffff */
.modulos-content-bg {
  background-color: #ffffff !important;
  color: #0b2545 !important;
}

/* Efeito Parallax de entrada */
.modulos-header-bg,
.modulos-content-bg {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-modulos-section.parallax-active .modulos-header-bg {
  opacity: 1;
  transform: translateY(0);
}

.mpro-modulos-section.parallax-active .modulos-content-bg {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

/* Título */
.section-title {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  letter-spacing: -1px;
  line-height: 1.25;
}

.text-highlight {
  color: #8bc34a !important;
}

/* Barra de rolagem customizada para as abas */
.modulos-nav-container {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #8bc34a rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}

.modulos-nav-container::-webkit-scrollbar {
  height: 6px;
}

.modulos-nav-container::-webkit-scrollbar-thumb {
  background-color: #8bc34a;
  border-radius: 10px;
}

/* Botões/Abas */
.modulo-tab-btn {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.modulo-tab-btn:hover {
  background-color: rgba(139, 195, 74, 0.2);
  border-color: #8bc34a;
  color: #8bc34a;
}

.modulo-tab-btn.active-tab {
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
  color: #ffffff !important;
  box-shadow: 0 4px 15px rgba(139, 195, 74, 0.4);
}

/* Lista de descrições */
.feature-list li {
  font-size: 1.05rem;
  line-height: 1.5;
}

.feature-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #8bc34a;
  background-color: transparent;
  display: inline-block;
}

.feature-text {
  color: #0b2545 !important;
}

/* Display de Mídia */
.media-display-wrapper {
  border: 1px solid rgba(11, 37, 69, 0.1);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.08);
  background-color: #ffffff;
}

/* Transição suave ao trocar de aba */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .modulos-header-bg {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  
  .modulos-content-bg {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>