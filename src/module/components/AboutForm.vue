<!-- src/modules/home/components/AboutForm.vue -->
<template>
  <section 
    ref="elementRef"
    class="about-form-section position-relative py-5 px-3 px-md-5 w-100 bg-white"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Formulário de cadastro e novidades Mover Sistemas"
  >
    <div class="container-fluid h-100 py-lg-4">
      <div class="row justify-content-center w-100 m-0">
        <div class="col-12 col-lg-10 text-center form-content-box">
          
          <!-- TÍTULO DA SEÇÃO COM A PALAVRA DESTAQUE -->
          <h2 class="form-title fw-bold mb-5">
            <span class="text-main">{{ formData.titlePart1 }}</span>
            <span class="text-highlight">{{ formData.highlightWord }}</span>
            <span class="text-main">{{ formData.titlePart2 }}</span>
          </h2>

          <!-- FORMULÁRIO -->
          <form @submit.prevent="handleSubmit" class="row justify-content-center align-items-center g-3">
            
            <!-- INPUT NOME -->
            <div class="col-12 col-md-4">
              <div class="form-floating-custom">
                <input 
                  type="text" 
                  v-model="formState.name"
                  class="form-control custom-input px-4 py-3 rounded-pill w-100" 
                  :placeholder="formData.namePlaceholder"
                  :aria-label="formData.ariaLabelName"
                  required
                />
              </div>
            </div>

            <!-- INPUT EMAIL -->
            <div class="col-12 col-md-4">
              <div class="form-floating-custom position-relative">
                <input 
                  type="email" 
                  v-model="formState.email"
                  class="form-control custom-input px-4 py-3 rounded-pill w-100" 
                  :placeholder="formData.emailPlaceholder"
                  :aria-label="formData.ariaLabelEmail"
                  required
                />
                <!--<i class="bi bi-envelope input-icon position-absolute top-50 translate-middle-y end-0 me-4 text-muted" aria-hidden="true"></i>-->
              </div>
            </div>

            <!-- BOTÃO DE ENVIO (PADRÃO DO PROJETO COM HOVER) -->
            <div class="col-12 col-md-auto">
              <button 
                type="submit" 
                class="btn form-submit-btn fw-semibold px-5 py-3 rounded-pill text-uppercase shadow-sm w-100"
                :aria-label="formData.ariaLabelButton"
              >
                {{ formData.buttonText }}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAboutForm } from '../composables/useAboutForm'
import { useParallax } from '@/shared/composables/useParallax'

const { formData, formState, handleSubmit } = useAboutForm()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.about-form-section {
  background-color: #ffffff !important;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Animação Parallax inicial */
.form-content-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-form-section.parallax-active .form-content-box {
  opacity: 1;
  transform: translateY(0);
}

/* Tipografia e Cores solicitadas */
.form-title {
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  letter-spacing: -0.5px;
}

.text-main {
  color: #0b2545 !important; /* Cor principal solicitada */
}

.text-highlight {
  color: #8bc34a !important; /* Cor solicitada para a palavra "próximo" */
}

/* Inputs personalizados */
.custom-input {
  background-color: #ffffff;
  border: 1px solid rgba(11, 37, 69, 0.2);
  color: #0b2545;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.custom-input::placeholder {
  color: #6c757d;
}

.custom-input:focus {
  border-color: #8bc34a;
  box-shadow: 0 0 0 0.25rem rgba(139, 195, 74, 0.15);
  outline: none;
}

/* Botão padrão do projeto com hover oficial */
.form-submit-btn {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.form-submit-btn:hover,
.form-submit-btn:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: #0b2545 !important;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .about-form-section {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>