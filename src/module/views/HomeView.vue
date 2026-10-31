<!-- src/modules/home/views/HomeView.vue -->
<template>
  <div class="home-view-container min-vh-100 d-flex flex-column bg-white text-dark">
    
    <!-- Seção do Banner Principal -->
    <MoverSectionBanner />

    <MoverDepoimento /> 

    <MoverBanner />

    <MoverSegment />

    <MoverDemonstracao />

    <MoverSolucoes />
    <MoverSoftware />

  </div>
</template>

<script setup>
import MoverSectionBanner from '../components/MoverSectionBanner.vue'
import MoverDepoimento from '../components/MoverDepoimento.vue'
import MoverBanner from '../components/MoverBanner.vue'
import MoverSegment from '../components/MoverSegment.vue'
import MoverDemonstracao from '../components/MoverDemonstracao.vue'
import MoverSolucoes from '../components/MoverSolucoes.vue'
import MoverSoftware from '../components/MoverSoftware.vue'
</script>