<!-- src/modules/home/components/MoverFAQ.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-faq-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Perguntas frequentes sobre a Mover Sistemas"
  >
    <div class="container py-lg-4">
      
      <!-- TÍTULO DA SEÇÃO (Cor #0b2545) -->
      <div class="row justify-content-center text-center mb-5 faq-header-col">
        <div class="col-12 col-lg-8">
          <h2 class="faq-section-title fw-bold m-0">
            {{ faqData.title }}
          </h2>
        </div>
      </div>

      <!-- LISTA DE 3 FAQS -->
      <div class="row justify-content-center faq-list-row">
        <div class="col-12 col-lg-10">
          <div class="accordion-custom d-flex flex-column gap-3">
            
            <div 
              v-for="(faq, index) in faqData.faqs" 
              :key="index"
              class="faq-item border-bottom pb-4 mb-3"
            >
              <!-- PERGUNTA (Cor #61b329) COM O SÍMBOLO + / - -->
              <button 
                class="faq-question-btn w-100 d-flex align-items-center justify-content-between text-start bg-transparent border-0 py-2"
                @click="toggleFaq(index)"
                :aria-expanded="faq.isOpen"
              >
                <span class="faq-question-text fw-semibold">{{ faq.question }}</span>
                <span class="faq-symbol fw-bold" aria-hidden="true">
                  {{ faq.isOpen ? '-' : '+' }}
                </span>
              </button>

              <!-- RESPOSTA (Cor #0b2545 quando aberta) -->
              <div v-show="faq.isOpen" class="faq-answer-container pt-3">
                <p class="faq-answer-text m-0 lh-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverFaq } from '../composables/useMoverFaq'

const { faqData, toggleFaq } = useMoverFaq()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-faq-section {
  background-color: #ffffff !important;
  min-height: 70vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.faq-header-col,
.faq-list-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-list-row {
  transition-delay: 0.2s;
}

.mover-faq-section.parallax-active .faq-header-col,
.mover-faq-section.parallax-active .faq-list-row {
  opacity: 1;
  transform: translateY(0);
}

/* Título principal FAQ (Cor #0b2545) */
.faq-section-title {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  letter-spacing: -0.5px;
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Pergunta do FAQ (Cor #61b329) */
.faq-question-btn {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.faq-question-btn:hover {
  opacity: 0.85;
}

.faq-question-text {
  font-size: clamp(1.1rem, 1.25vw, 1.35rem);
  color: #61b329 !important;
}

/* Símbolo + / - */
.faq-symbol {
  color: #61b329;
  font-size: 1.4rem;
  line-height: 1;
  min-width: 24px;
  text-align: center;
}

/* Resposta do FAQ (Cor #0b2545) */
.faq-answer-text {
  font-size: 1rem;
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-faq-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>