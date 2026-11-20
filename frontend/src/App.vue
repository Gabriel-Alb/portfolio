<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Preloader from '../src/components/animations/Preloader.vue'

const showPreloader = ref(true)
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :intro-ready="!showPreloader" />
  </RouterView>
  <Preloader v-if="showPreloader" @complete="showPreloader = false" />
</template>
