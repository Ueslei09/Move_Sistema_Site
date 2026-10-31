<!-- src/shared/components/TopHeader.vue -->
<template>
  <div class="top-header-bar w-100 py-2 px-3 px-md-5" role="region" aria-label="Barra superior de navegação">
    <div class="container-fluid d-flex justify-content-end align-items-center">
      <nav aria-label="Links secundários">
        <ul class="nav align-items-center gap-4 m-0 p-0">
          <li v-for="(link, index) in topHeaderData.links" :key="index" class="nav-item position-relative">
            <router-link 
              :to="link.url" 
              class="top-link text-white text-uppercase text-decoration-none fw-medium py-1"
              :aria-label="link.ariaLabel"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useTopHeader } from '../composables/useTopHeader'
const { topHeaderData } = useTopHeader()
</script>

<style scoped>
.top-header-bar {
  background-color: var(--mover-primary-blue, #0b2545);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.85rem;
}

.top-link {
  position: relative;
  letter-spacing: 0.5px;
  transition: color 0.2s ease-in-out;
}

/* Efeito Hover com linha hr de 2px na cor #8bc34a */
.top-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--mover-accent-green, #8bc34a);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.top-link:hover {
  color: var(--mover-accent-green, #8bc34a) !important;
}

.top-link:hover::after,
.top-link:focus::after {
  width: 100%;
}
</style>