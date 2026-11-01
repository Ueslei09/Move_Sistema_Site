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
    <MoverIntegracoes />
    <MoverEscalavel />
    <MoverNews />
    <MoverProvaSocial />
    <MoverFAQ />
    <MoverLead />
   

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
import MoverIntegracoes from '../components/MoverIntegracoes.vue'
import MoverEscalavel from '../components/MoverEscalavel.vue'
import MoverNews from '../components/MoverNews.vue'
import MoverProvaSocial from '../components/MoverProvaSocial.vue'
import MoverFAQ from '../components/MoverFAQ.vue'
import MoverLead from '../components/MoverLead.vue'



</script>