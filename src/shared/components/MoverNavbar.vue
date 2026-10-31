<!-- src/shared/components/MoverNavbar.vue -->
<template>
  <nav 
    class="mover-main-navbar w-100 py-3 px-3 px-md-5 sticky-top" 
    :class="{ 'navbar-scrolled': isScrolled }"
    role="navigation" 
    aria-label="Menu principal"
  >
    <div class="container-fluid d-flex align-items-center justify-content-between position-relative">
      
      <!-- LOGO -->
      <div class="navbar-logo brand-container">
        <router-link to="/" class="d-flex align-items-center text-decoration-none" aria-label="Página inicial Mover Sistemas">
          <img 
            v-if="navbarData.showLogoImage"
            :src="navbarData.logoImage" 
            :alt="navbarData.logoAlt" 
            class="brand-logo img-fluid"
            width="150"
            height="40"
            loading="eager"
          />
          <span v-else class="brand-text-logo fw-bold fs-4 text-uppercase">
            {{ navbarData.brandName }}
          </span>
        </router-link>
      </div>

      <!-- BOTÃO HAMBÚRGUER MOBILE -->
      <button 
        class="navbar-toggler d-lg-none border-0 bg-transparent fs-1" 
        type="button" 
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Abrir menu de navegação"
        style="color: var(--mover-accent-green, #61b329);"
      >
        <i class="bi bi-list" aria-hidden="true"></i>
      </button>

      <!-- LINKS DESKTOP COM DROPDOWNS -->
      <div class="d-none d-lg-flex align-items-center nav-links-wrapper">
        <ul class="nav align-items-center gap-4 m-0 p-0">
          <li 
            v-for="(link, index) in navbarData.mainLinks" 
            :key="index" 
            class="nav-item position-relative dropdown-container"
            @mouseenter="setDropdown(index)"
            @mouseleave="clearDropdown"
          >
            <router-link 
              :to="link.url" 
              class="nav-link text-uppercase fw-semibold px-0 py-1 main-nav-link d-flex align-items-center gap-1"
              :aria-label="link.ariaLabel"
            >
              {{ link.name }}
              <i v-if="link.subItems && link.subItems.length > 0" class="bi bi-chevron-down small-arrow" aria-hidden="true"></i>
            </router-link>

            <!-- SUBMENU / DROPDOWN -->
            <ul 
              v-if="link.subItems && link.subItems.length > 0" 
              class="dropdown-menu-custom shadow-lg list-unstyled m-0 p-2 rounded-3 bg-white"
              :class="{ 'show': activeDropdown === index }"
            >
              <li v-for="(sub, subIdx) in link.subItems" :key="subIdx">
                <router-link 
                  :to="sub.url" 
                  class="dropdown-item-custom d-block px-3 py-2 text-decoration-none rounded-2 fw-medium"
                >
                  {{ sub.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>

    <!-- MENU OFFCANVAS / MOBILE -->
    <div 
      class="mobile-drawer d-lg-none bg-white text-dark position-fixed top-0 end-0 h-100 p-4 shadow-lg border-start overflow-auto" 
      :class="{ 'open': isMobileMenuOpen }"
      role="region"
      aria-label="Menu lateral móvel"
    >
      <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <span class="fw-bold text-uppercase text-secondary">Menu</span>
        <button class="btn text-dark fs-4 p-0 border-0" @click="closeMobileMenu" aria-label="Fechar menu">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>
      </div>

      <ul class="list-unstyled d-flex flex-column gap-3">
        <li v-for="(link, index) in navbarData.mainLinks" :key="index">
          <router-link 
            :to="link.url" 
            class="text-decoration-none fs-5 d-block py-1 mobile-link-item fw-semibold"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </router-link>
          <!-- Subitens Mobile -->
          <ul v-if="link.subItems && link.subItems.length > 0" class="list-unstyled ps-3 mt-2 d-flex flex-column gap-2">
            <li v-for="(sub, sIdx) in link.subItems" :key="sIdx">
              <router-link 
                :to="sub.url" 
                class="text-decoration-none text-muted d-block py-1 mobile-sublink"
                @click="closeMobileMenu"
              >
                - {{ sub.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Backdrop mobile -->
    <div class="mobile-backdrop d-lg-none" :class="{ 'show': isMobileMenuOpen }" @click="closeMobileMenu" aria-hidden="true"></div>
  </nav>
</template>

<script setup>
import { useMoverNavbar } from '../composables/useMoverNavbar'
const { 
  navbarData, 
  isMobileMenuOpen, 
  isScrolled, 
  activeDropdown, 
  toggleMobileMenu, 
  closeMobileMenu, 
  setDropdown, 
  clearDropdown 
} = useMoverNavbar()
</script>

<style scoped>
.mover-main-navbar {
  background: transparent !important;
  border-bottom: none !important;
  transition: all 0.4s ease-in-out;
  z-index: 1039;
}

.brand-container {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links-wrapper {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mover-main-navbar.navbar-scrolled .nav-links-wrapper {
  opacity: 0;
  visibility: hidden;
  transform: translateX(20px);
  width: 0;
  overflow: hidden;
}

@media (min-width: 992px) {
  .mover-main-navbar.navbar-scrolled .brand-container {
    transform: translateX(calc(100vw - 300px));
  }
}

@media (max-width: 991.98px) {
  .mover-main-navbar.navbar-scrolled {
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}

.brand-logo {
  max-height: 75px;
  object-fit: contain;
}

.brand-text-logo {
  color: var(--mover-primary-blue, #0b2545);
  letter-spacing: 1px;
}

/* Links principais com cor #61b329 e animação de linha hr no hover */
.main-nav-link {
  color: var(--mover-accent-green, #61b329) !important;
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: color 0.2s ease-in-out;
}

.small-arrow {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.main-nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--mover-primary-blue, #0b2545);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.main-nav-link:hover {
  color: var(--mover-primary-blue, #0b2545) !important;
}

.main-nav-link:hover::after,
.main-nav-link:focus::after {
  width: 100%;
}

/* Dropdown Customizado */
.dropdown-container {
  position: relative;
}

.dropdown-menu-custom {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 210px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: 8px !important;
  z-index: 1045;
}

.dropdown-menu-custom.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item-custom {
  color: var(--mover-primary-blue, #0b2545);
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.dropdown-item-custom:hover {
  background-color: rgba(139, 195, 74, 0.15);
  color: var(--mover-light-green, #8bc34a);
  padding-left: 14px;
}

/* Mobile Drawer */
.mobile-drawer {
  width: 300px;
  z-index: 1060;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-drawer.open {
  transform: translateX(0);
}

.mobile-link-item {
  color: var(--mover-accent-green, #61b329);
}

.mobile-sublink {
  font-size: 0.9rem;
  color: var(--mover-primary-blue, #0b2545);
}

.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1055;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-backdrop.show {
  opacity: 1;
  visibility: visible;
}

/* --- SOLUÇÃO RADICAL DE POINTER-EVENTS --- */
/* Quando a navbar for rolada no desktop, desativa cliques em toda a área vazia da nav */
.mover-main-navbar.navbar-scrolled {
  pointer-events: none !important;
}

/* Reativa os cliques estritamente na logo para que ela continue funcionando */
.mover-main-navbar.navbar-scrolled .brand-container,
.mover-main-navbar.navbar-scrolled .brand-container * {
  pointer-events: auto !important;
}
</style>