<!-- src/modules/mpro/views/MproView.vue -->
<template>
  <div class="mpro-view-container  w-100 overflow-hidden">
    <!-- Hero Section -->
    <MproHero />
   <MproIntegraçoes />
   <MproVideoSolution />
   <MproSegmento />
   <MpromodulosSection />
   <MproTourVideo />
   <MproSolutionVarejo />
   <MproForm />
    
    <!-- Outras seções ou subdivisões do Mpro podem ser adicionadas aqui -->
  </div>
</template>

<script setup>
import MproHero from '../components/MproHero.vue'
import MproIntegraçoes from '../components/MproIntegraçoes.vue'
import MproVideoSolution from '../components/MproVideoSolution.vue'
import MproSegmento from '../components/MproSegmento.vue'
import MpromodulosSection from '../components/MpromodulosSection.vue'
import MproTourVideo from '../components/MproTourVideo.vue'
import MproSolutionVarejo from '../components/MproSolutionVarejo.vue'
import MproForm from '../components/MproForm.vue'
</script>

<style scoped>
.mpro-view-container {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;

}
</style>