<template>
  <header
    class="relative z-50 bg-[#020202]/55 backdrop-blur-2xl transition-all duration-300"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16"
    >
      <a href="#home" class="text-lg font-medium tracking-tight text-white">
        Gabriel
      </a>

      <nav class="ml-auto flex items-center gap-6 md:gap-8">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-letter-hover group relative block h-5 overflow-hidden text-sm font-normal"
        >
          <span class="sr-only">{{ item.label }}</span>

          <span aria-hidden="true" class="flex">
            <span
              v-for="(char, index) in item.label.split('')"
              :key="`top-${item.label}-${index}`"
              class="nav-letter inline-block text-[#B2C2C3]"
              :style="{ transitionDelay: `${index * 0.03}s` }"
            >
              {{ char === " " ? "\u00A0" : char }}
            </span>
          </span>

          <span aria-hidden="true" class="absolute left-0 top-full flex">
            <span
              v-for="(char, index) in item.label.split('')"
              :key="`bottom-${item.label}-${index}`"
              class="nav-letter inline-block text-white"
              :style="{ transitionDelay: `${index * 0.03}s` }"
            >
              {{ char === " " ? "\u00A0" : char }}
            </span>
          </span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.nav-letter {
  transform: translateY(0);
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.32s ease;
  will-change: transform;
}

.nav-letter-hover:hover .nav-letter,
.nav-letter-hover:focus-visible .nav-letter {
  transform: translateY(-100%);
}
</style>