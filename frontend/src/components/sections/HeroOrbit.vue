<script setup>
import { orbitProjects } from '../../data/orbitProjects'
import OrbitGallery from '../ui/OrbitGallery.vue'
import AnimatedHeroTitle from '../ui/AnimatedHeroTitle.vue'
</script>

<template>
  <section
    class="relative isolate h-[min(820px,100svh)] min-h-[540px] w-full select-none overflow-hidden bg-[#faf9f7] max-[620px]:h-[75svh] max-[620px]:max-h-[740px] max-[620px]:min-h-[460px]"
    aria-label="Apresentação do portfólio">
    <OrbitGallery :projects="orbitProjects" />
    <AnimatedHeroTitle title="GABRIEL" subtitle="Full Stack Developer" />

  </section>
</template>