<!-- src/App.vue -->
<template>
  <div id="app" class="min-vh-100 d-flex flex-column bg-white text-dark">

    <!-- Preloader de Entrada (F5) -->
    <PagePreloader />

    <TopHeader />
    <MoverNavbar />
    <router-view class="flex-grow-1" />

    <!-- Ícone Flutuante do WhatsApp (Inferior Esquerdo) -->
    <FloatingWhatsApp />
  </div>
</template>

<script setup>
import PagePreloader from '@/shared/components/PagePreloader.vue'
import TopHeader from '@/shared/components/TopHeader.vue'
import MoverNavbar from '@/shared/components/MoverNavbar.vue'
import FloatingWhatsApp from '@/shared/components/FloatingWhatsApp.vue'
</script>