<!-- src/modules/home/components/MoverFootContatos.vue -->
<template>
  <footer 
    ref="elementRef"
    class="mover-footer-section position-relative py-5 px-3 px-md-5 w-100"
    :class="{ 'parallax-active': isVisible }"
    role="contentinfo"
    aria-label="Rodapé e contatos da Mover Sistemas"
  >
    <div class="container py-lg-4 footer-content-wrapper">
      
      <!-- PRIMEIRA LINHA: 4 COLUNAS (LOGO, MENU, PARCEIRO, REVENDA) -->
      <div class="row g-4 mb-5 footer-row-1">
        
        <!-- Coluna 1: Logo -->
        <div class="col-12 col-md-3">
          <div class="footer-logo-container mb-4">
            <img :src="footData.logo" :alt="footData.logoAlt" class="img-fluid footer-logo" loading="lazy" />
          </div>
        </div>

        <!-- Coluna 2: Menu -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.menuCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(link, idx) in footData.menuCol.links" :key="idx">
              <router-link :to="link.url" class="footer-link text-decoration-none">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Seja Nosso Parceiro -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.parceiroCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(link, idx) in footData.parceiroCol.links" :key="idx">
              <router-link :to="link.url" class="footer-link text-decoration-none">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Coluna 4: Revenda Autorizada -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.revendaCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(link, idx) in footData.revendaCol.links" :key="idx">
              <router-link :to="link.url" class="footer-link text-decoration-none">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

      </div>

      <!-- SEGUNDA LINHA: 1ª COLUNA VAZIA, SEGUIDA DE CONTATOS, ENDEREÇO E REDES SOCIAIS -->
      <div class="row g-4 pt-4 border-top footer-row-2">
        
        <!-- Coluna 1 (Abaixo da Logo): Em branco -->
        <div class="col-12 col-md-3 d-none d-md-block" aria-hidden="true"></div>

        <!-- Coluna 2 (Abaixo do Menu): Contatos -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.contatosCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(item, idx) in footData.contatosCol.info" :key="idx" class="footer-text">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Coluna 3 (Abaixo de Seja Nosso Parceiro): Endereço -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.enderecoCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(line, idx) in footData.enderecoCol.lines" :key="idx" class="footer-text">
              {{ line }}
            </li>
          </ul>
        </div>

        <!-- Coluna 4 (Abaixo de Revenda Autorizada): Redes Sociais -->
        <div class="col-12 col-md-3">
          <h3 class="footer-col-title fw-bold mb-3">{{ footData.redesCol.title }}</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 m-0">
            <li v-for="(social, idx) in footData.redesCol.socials" :key="idx">
              <a :href="social.url" target="_blank" rel="noopener noreferrer" class="footer-link d-inline-flex align-items-center gap-2 text-decoration-none">
                <i :class="['bi', social.icon]" aria-hidden="true"></i>
                <span>{{ social.name }}</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { useParallax } from '@/shared/composables/useParallax'
import { useMoverFootContatos } from '@/shared/composables/useMoverFootContatos'

const { footData } = useMoverFootContatos()
const { isVisible, elementRef } = useParallax(0.05)
</script>

<style scoped>
.mover-footer-section {
  background-color: #e8e9eb !important;
  min-height: 50vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Estado inicial do Parallax */
.footer-row-1,
.footer-row-2 {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-row-2 {
  transition-delay: 0.2s;
}

.mover-footer-section.parallax-active .footer-row-1,
.mover-footer-section.parallax-active .footer-row-2 {
  opacity: 1;
  transform: translateY(0);
}

/* Títulos na cor #8bc34a */
.footer-col-title {
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: var(--mover-light-green, #8bc34a) !important;
}

/* Logo vinda do service */
.footer-logo {
  max-height: 150px;
  object-fit: contain;
}

/* Links na cor --mover-primary-blue (#0b2545) com hover padrão do projeto */
.footer-link {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.9rem;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.footer-link:hover {
  color: var(--mover-light-green, #8bc34a) !important;
  padding-left: 4px;
}

/* Textos informativos de endereço e contatos */
.footer-text {
  color: var(--mover-primary-blue, #0b2545) !important;
  font-size: 0.9rem;
  opacity: 0.85;
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .mover-footer-section {
    min-height: auto;
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
</style>