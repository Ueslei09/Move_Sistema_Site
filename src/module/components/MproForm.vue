<!-- src/modules/mpro/components/MproForm.vue -->
<template>
 <section 
    ref="elementRef"
    class="mpro-form-section position-relative w-100 py-5 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="region"
    aria-label="Seja um revendedor Mpro Sistemas"
  >
    <div class="container py-4 z-2 position-relative">
      
      <!-- TÍTULO CENTRALIZADO DA SEÇÃO -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 text-center header-box">
          <h2 class="section-title fw-bold">
            <span class="text-highlight d-block">{{ formData.titleHighlight }}</span>
            <span class="text-main d-block">{{ formData.titleRest }}</span>
          </h2>
        </div>
      </div>

      <!-- CONTEÚDO: TEXTO À ESQUERDA E FORMULÁRIO À DIREITA -->
      <div class="row align-items-center justify-content-between g-5 content-box">
        
        <!-- COLUNA ESQUERDA: TEXTOS E DESCRIÇÃO -->
        <div class="col-12 col-lg-6 text-center text-lg-start info-col">
          <h3 class="sub-title fw-bold mb-3">
            {{ formData.subtitle }}
          </h3>
          <p class="desc-text mb-4 lh-base">
            {{ formData.description }}
          </p>
        </div>

        <!-- COLUNA DIREITA: FORMULÁRIO -->
        <div class="col-12 col-lg-6 form-col">
          <div class="form-wrapper p-4 p-md-5 rounded-4 shadow-lg bg-white">
            <form @submit="handleSubmit">
              
              <!-- Campo Nome -->
              <div class="mb-3">
                <input 
                  type="text" 
                  v-model="formState.nome" 
                  placeholder="Nome" 
                  class="form-control mpro-input" 
                  required
                />
              </div>

              <!-- Campo E-mail -->
              <div class="mb-3">
                <input 
                  type="email" 
                  v-model="formState.email" 
                  placeholder="E-mail" 
                  class="form-control mpro-input" 
                  required
                />
              </div>

              <!-- Campo Telefone -->
              <div class="mb-3">
                <input 
                  type="tel" 
                  v-model="formState.telefone" 
                  placeholder="Telefone" 
                  class="form-control mpro-input" 
                  required
                />
              </div>

              <!-- Campo Cidade/Estado -->
              <div class="mb-4">
                <input 
                  type="text" 
                  v-model="formState.cidadeEstado" 
                  placeholder="Cidade/Estado" 
                  class="form-control mpro-input" 
                  required
                />
              </div>

              <!-- Botão de Envio Padrão do Projeto com Hover -->
              <div class="d-grid">
                <button 
                  type="submit" 
                  class="btn mpro-cta-btn fw-semibold py-3 rounded-pill shadow-sm text-uppercase"
                  :aria-label="formData.buttonAriaLabel"
                >
                  {{ formData.buttonText }}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useMproForm } from '../composables/useMproForm'
import { useParallax } from '@/shared/composables/useParallax'

const { formData, formState, handleSubmit } = useMproForm()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mpro-form-section {
  background-color:  #e8e9eb !important; /* Fundo branco solicitado */
  color: #0b2545 !important;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* Efeito Parallax de entrada */
.header-box,
.content-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.mpro-form-section.parallax-active .header-box,
.mpro-form-section.parallax-active .content-box {
  opacity: 1;
  transform: translateY(0);
}

/* Títulos e Cores */
.section-title {
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  letter-spacing: -1px;
  line-height: 1.25;
}

.text-highlight {
  color: #8bc34a !important; /* "Seja um revendedor" na cor #8bc34a */
}

.text-main {
  color: #0b2545 !important; /* Resto do título em #0b2545 */
}

.sub-title {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  color: #0b2545 !important; /* Subtítulo em #0b2545 */
  letter-spacing: -0.5px;
}

.desc-text {
  font-size: 1.1rem;
  color: #0b2545 !important; /* Descrição em #0b2545 */
  opacity: 0.85;
  max-width: 520px;
}

/* Caixa do Formulário */
.form-wrapper {
  border: 1px solid rgba(11, 37, 69, 0.08);
  box-shadow: 0 15px 35px rgba(11, 37, 69, 0.08);
}

/* Inputs personalizados no padrão do projeto */
.mpro-input {
  background-color: #f8f9fa;
  border: 1px solid rgba(11, 37, 69, 0.15);
  color: #0b2545;
  padding: 0.85rem 1.2rem;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.mpro-input::placeholder {
  color: #a6b9c7;
}

.mpro-input:focus {
  background-color: #ffffff;
  border-color: #8bc34a;
  box-shadow: 0 0 0 0.25rem rgba(139, 195, 74, 0.15);
  color: #0b2545;
}

/* Botão padrão com as cores do projeto e efeito hover */
.mpro-cta-btn {
  background-color: var(--mover-light-green, #8bc34a) !important;
  color: #ffffff !important;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.mpro-cta-btn:hover,
.mpro-cta-btn:focus {
  background-color: var(--mover-silver-gray, #a6b9c7) !important;
  color: #0b2545 !important;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mpro-form-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .info-col {
    margin-bottom: 2rem;
  }
  
  .desc-text {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>