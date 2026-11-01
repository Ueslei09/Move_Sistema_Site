<!-- src/modules/home/components/MoverLead.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-lead-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Captura de leads e novidades da Mover Sistemas"
  >
    <div class="container py-lg-4 text-center">
      
      <!-- TÍTULO DA SEÇÃO (Receba em #8bc34a e restante em branco) -->
      <div class="row justify-content-center mb-3 lead-header-col">
        <div class="col-12 col-lg-10">
          <h2 class="lead-title fw-bold m-0">
            <span class="title-green">{{ leadData.titleHighlight }}</span>
            <span class="title-white">{{ leadData.titleRest }}</span>
          </h2>
        </div>
      </div>

      <!-- SUBTÍTULO EM BRANCO -->
      <div class="row justify-content-center mb-5 lead-subtitle-col">
        <div class="col-12 col-lg-8">
          <p class="lead-subtitle m-0">
            {{ leadData.subtitle }}
          </p>
        </div>
      </div>

      <!-- FORMULÁRIO DE CAPTURA -->
      <div class="row justify-content-center lead-form-row">
        <div class="col-12 col-lg-10">
          <form @submit.prevent="handleLeadSubmit" class="row g-3 justify-content-center align-items-center">
            
            <!-- Input Nome -->
            <div class="col-12 col-md-4">
              <input 
                type="text" 
                v-model="formData.name" 
                class="form-control lead-input rounded-pill px-4 py-3" 
                :placeholder="leadData.namePlaceholder" 
                required
                aria-label="Seu nome"
              />
            </div>

            <!-- Input E-mail -->
            <div class="col-12 col-md-4">
              <input 
                type="email" 
                v-model="formData.email" 
                class="form-control lead-input rounded-pill px-4 py-3" 
                :placeholder="leadData.emailPlaceholder" 
                required
                aria-label="Seu e-mail"
              />
            </div>

            <!-- Botão Padrão do Projeto com Hover -->
            <div class="col-12 col-md-auto">
              <button 
                type="submit" 
                class="btn lead-cta fw-semibold px-5 py-3 rounded-pill text-white text-uppercase shadow-sm w-100"
                :aria-label="leadData.ariaLabelButton"
              >
                {{ leadData.buttonText }}
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverLead } from '../composables/useMoverLead'

const { leadData, formData, handleLeadSubmit } = useMoverLead()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-lead-section {
  background-color: var(--mover-primary-blue, #0b2545) !important; /* Fundo solicitado */
  min-height: 55vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.lead-header-col,
.lead-subtitle-col,
.lead-form-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.lead-subtitle-col {
  transition-delay: 0.15s;
}

.lead-form-row {
  transition-delay: 0.3s;
}

.mover-lead-section.parallax-active .lead-header-col,
.mover-lead-section.parallax-active .lead-subtitle-col,
.mover-lead-section.parallax-active .lead-form-row {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia do Título */
.lead-title {
  font-size: clamp(2rem, 2.8vw, 3.2rem);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-green {
  color: var(--mover-light-green, #8bc34a) !important;
}

.title-white {
  color: #ffffff !important;
}

/* Subtítulo em branco */
.lead-subtitle {
  font-size: clamp(1rem, 1.15vw, 1.2rem);
  color: #ffffff !important;
  opacity: 0.9;
}

/* Campos de Input customizados */
.lead-input {
  background-color: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: #ffffff !important;
  font-size: 0.95rem;
}

.lead-input::placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}

.lead-input:focus {
  border-color: var(--mover-light-green, #8bc34a) !important;
  box-shadow: 0 0 0 0.25rem rgba(139, 195, 74, 0.25) !important;
}

/* Botão com o padrão de hover do projeto */
.lead-cta {
  background-color: var(--mover-light-green, #8bc34a) !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.lead-cta:hover,
.lead-cta:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: var(--mover-primary-blue, #0b2545) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11, 37, 69, 0.25) !important;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-lead-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>