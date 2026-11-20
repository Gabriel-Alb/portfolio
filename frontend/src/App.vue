
<script setup>
import { ref } from 'vue'
import Preloader from './components/animations/Preloader.vue'

const showPreloader = ref(true)
</script>

<template>
  <RouterView />

  <Preloader
    v-if="showPreloader"
    @complete="showPreloader = false"
  />
</template>
