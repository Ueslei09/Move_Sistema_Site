<!-- src/modules/home/components/MoverFooterCopy.vue -->
<template>
  <section 
    ref="elementRef"
    class="mover-footer-copy-section position-relative pt-5 bg-white w-100 overflow-hidden"
    :class="{ 'parallax-active': isVisible }"
    role="contentinfo"
    aria-label="Informações legais e rodapé final da Mover Sistemas"
  >
    <div class="container py-4 text-center copy-text-row">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <p class="footer-legal-phrase m-0 fw-medium">
            <span class="copy-green">{{ footerCopyData.copyrightText }}</span>
            <span class="copy-blue">{{ footerCopyData.legalText }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- IMAGEM DE 100% DE LARGURA ABAIXO DOS TEXTOS -->
    <div class="w-100 mt-4 copy-img-row">
      <img 
        :src="footerCopyData.footerImage" 
        :alt="footerCopyData.footerImageAlt" 
        class="w-100 img-fluid footer-brand-img d-block"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverFooterCopy } from '@/shared/composables/useMoverFooterCopy'

const { footerCopyData } = useMoverFooterCopy()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-footer-copy-section {
  background-color: #ffffff !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Estado inicial do Parallax */
.copy-text-row,
.copy-img-row {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.copy-img-row {
  transition-delay: 0.2s;
}

.mover-footer-copy-section.parallax-active .copy-text-row,
.mover-footer-copy-section.parallax-active .copy-img-row {
  opacity: 1;
  transform: translateY(0);
}

/* Frase legal / Copyright */
.footer-legal-phrase {
  font-size: clamp(0.8rem, 0.95vw, 0.95rem);
  letter-spacing: -0.2px;
  line-height: 1.5;
}

.copy-green {
  color: var(--mover-light-green, #8bc34a) !important;
  font-weight: 600;
}

.copy-blue {
  color: var(--mover-primary-blue, #0b2545) !important;
}

/* Imagem de 100% de largura */
.footer-brand-img {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .footer-brand-img {
    max-height: 220px;
  }
}
</style>