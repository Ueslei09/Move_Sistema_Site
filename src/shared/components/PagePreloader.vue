<!-- src/shared/components/PagePreloader.vue -->
<template>
  <transition name="fade">
    <div v-if="isLoading" class="page-loader" :class="{ 'fade-out': isFadingOut }">
      <div class="loader-content text-center">
        <!-- Logo com o efeito de onda eletromagnética -->
        <div class="logo-electromagnetic-wrapper mb-3">
          <img 
            :src="config.logoImage" 
            :alt="config.altText" 
            class="loader-logo img-fluid"
            width="180"
            height="50"
          />
        </div>
        <span class="loader-text text-uppercase fw-semibold">Carregando Mover Sistemas...</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { usePreloader } from '../composables/usePreloader'

const { isLoading, isFadingOut, config } = usePreloader()
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff; /* Fundo branco limpo para a entrada */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.page-loader.fade-out {
  opacity: 0;
  visibility: hidden;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Efeito de Onda Eletromagnética na Logo do Preloader */
.logo-electromagnetic-wrapper {
  position: relative;
  display: inline-block;
  padding: 15px 25px;
  border-radius: 16px;
}

.logo-electromagnetic-wrapper::before,
.logo-electromagnetic-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  border: 2px solid var(--mover-accent-green, #61b329);
  animation: electromagnetic-wave 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  z-index: -1;
}

.logo-electromagnetic-wrapper::after {
  animation-delay: 1s; /* Onda sequencial de radar */
}

@keyframes electromagnetic-wave {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.45); /* Expande a onda magnética para fora */
    opacity: 0;
  }
}

.loader-logo {
  max-height: 60px;
  object-fit: contain;
}

.loader-text {
  color: var(--mover-primary-blue, #0b2545);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-top: 20px;
}
</style>