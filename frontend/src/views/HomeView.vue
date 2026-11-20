
<script setup>
import Header from '../components/layouts/Header.vue'
</script>

<template>
  <Header />

  <main class="min-h-[240vh]">
    <section
      class="min-h-screen flex items-end px-8 pb-12"
    >
      <span class="text-sm text-muted">
        Scroll to explore ↓
      </span>
    </section>

    <section
      id="work"
      class="min-h-screen flex items-center justify-center"
    >
      <h2 class="text-4xl font-medium">
        Selected Work
      </h2>
    </section>
  </main>
</template>
