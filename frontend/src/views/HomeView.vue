<script setup>
import { ref } from 'vue'
import Header from '../components/layouts/Header.vue'
import HeroOrbit from '../components/sections/HeroOrbit.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import SelectedWorkSection from '../components/sections/SelectedWorkSection.vue'
import { useHeroScroll } from '../composables/useHeroScroll'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const heroRef = ref(null)
const servicesRef = ref(null)

useSmoothScroll()

useHeroScroll({
  heroRef,
  servicesRef,
})
</script>

<template>
  <Header />

  <main data-home-flow class="relative isolate">
    <div class="sticky top-0 z-0">
      <div ref="heroRef">
        <HeroOrbit />
      </div>
    </div>

    <div ref="servicesRef" class="relative z-10">
      <ServicesSection />
    </div>

    <div class="next-section relative z-20">
      <SelectedWorkSection />
    </div>
  </main>
</template>

<style scoped>
.next-section {
  margin-top: calc(-1 * var(--services-exit-overlap, 0px));
}
</style>