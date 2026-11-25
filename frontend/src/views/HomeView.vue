<script setup>
import { ref } from 'vue'
import Header from '../components/layouts/Header.vue'
import HeroOrbit from '../components/sections/HeroOrbit.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import { useHeroScroll } from '../composables/useHeroScroll'

const heroRef = ref(null)
const servicesRef = ref(null)

useHeroScroll({
  heroRef,
  servicesRef,
})
</script>

<template>
  <Header />

  <main class="relative isolate">
    <div class="sticky top-0 z-0">
      <div ref="heroRef">
        <HeroOrbit />
      </div>
    </div>

    <div ref="servicesRef" class="relative z-10">
      <ServicesSection />
    </div>
  </main>
</template>