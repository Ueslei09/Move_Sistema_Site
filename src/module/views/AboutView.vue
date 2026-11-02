<!-- src/views/AboutView.vue -->
<template>
  <main class=" about-view-wrapper w-100">
    <AboutSectionPrincipal />
     <AboutValoresSlide />
    <AboutDemostracao />
   
    <AboutBannerCard />
    
    <AboutConvite />
    <AboutForm />
    
  </main>
</template>

<script setup>
import AboutSectionPrincipal from '../components/AboutSectionPrincipal.vue'
import AboutDemostracao from '../components/AboutDemostracao.vue'
import AboutBannerCard from '../components/AboutBannerCard.vue'
import AboutValoresSlide from '../components/AboutValoresSlide.vue'
import AboutConvite from '../components/AboutConvite.vue'
import AboutForm from '../components/AboutForm.vue'
</script>

<style scoped>
.about-view-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>