<!-- src/shared/components/FloatingWhatsApp.vue -->
<template>
  <div class="whatsapp-float-container">
    <a 
      :href="whatsappUrl" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="whatsapp-float-btn d-flex align-items-center justify-content-center shadow-lg"
      :aria-label="ariaLabel"
    >
      <i class="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script setup>
import { useWhatsApp } from '../composables/useWhatsApp'

const { whatsappUrl, ariaLabel } = useWhatsApp()
</script>

<style scoped>
.whatsapp-float-container {
  position: fixed !important;
  bottom: 25px !important;
  right: 25px !important;
  z-index: 9999 !important;
}

.whatsapp-float-btn {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #ffffff;
  border-radius: 50%;
  font-size: 32px;
  text-decoration: none;
  position: relative;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s ease;
}

/* Efeito de Onda Magnética (Radar Waves) */
.whatsapp-float-btn::before,
.whatsapp-float-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: magnetic-wave 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  z-index: -1;
}

.whatsapp-float-btn::after {
  animation-delay: 1s; /* Cria a segunda onda sequencial */
}

@keyframes magnetic-wave {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.8); /* Expande a onda para fora */
    opacity: 0; /* Desaparece suavemente */
  }
}

.whatsapp-float-btn:hover {
  background-color: #20ba5a;
  color: #ffffff;
  transform: scale(1.1);
}

.whatsapp-float-btn:hover::before,
.whatsapp-float-btn:hover::after {
  animation: none; /* Pausa as ondas ao passar o mouse para dar foco */
}

@media (max-width: 768px) {
  .whatsapp-float-container {
    bottom: 20px !important;
    right: 20px !important;
  }
  .whatsapp-float-btn {
    width: 52px;
    height: 52px;
    font-size: 28px;
  }
}
</style>