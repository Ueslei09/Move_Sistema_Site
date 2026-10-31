<!-- src/modules/home/views/HomeView.vue -->
<template>
  <div class="home-view-container min-vh-100 d-flex flex-column bg-white text-dark">
    
    <!-- Seção do Banner Principal -->
    <MoverSectionBanner />

    <MoverDepoimento /> <!-- Seção de depoimento adicionada com sucesso -->

    <MoverBanner />

  </div>
</template>

<script setup>
import MoverSectionBanner from '../components/MoverSectionBanner.vue'
import MoverDepoimento from '../components/MoverDepoimento.vue'
import MoverBanner from '../components/MoverBanner.vue'
</script>