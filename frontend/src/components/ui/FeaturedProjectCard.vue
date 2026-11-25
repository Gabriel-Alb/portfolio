<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  interactive: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <article class="featured-card">
    <component
      :is="project.href ? 'a' : 'div'"
      :href="project.href"
      :tabindex="project.href && !interactive ? -1 : undefined"
      class="block"
    >
      <div class="featured-image overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          draggable="false"
          decoding="async"
          class="h-full w-full select-none object-cover"
        />
      </div>

      <div data-featured-caption class="pt-4 md:pt-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="featured-title">
            {{ project.title }}
          </h3>

          <span
            v-if="project.href"
            class="text-2xl md:text-3xl"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div class="featured-meta mt-3 flex items-center gap-4 font-mono text-[10px] md:mt-4">
          <span>{{ project.category }}</span>

          <span class="meta-divider" />

          <span>{{ project.subtitle }}</span>
        </div>
      </div>
    </component>
  </article>
</template>

<style scoped>
.featured-image {
  aspect-ratio: 16 / 9;
  background: var(--color-border, #e5e5e5);
}

.featured-title {
  font-size: clamp(1.5rem, 2.6vw, 3.5rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.055em;
}

.featured-meta {
  color: var(--color-muted, #737373);
}

.meta-divider {
  width: 1px;
  height: 12px;
  background: var(--color-border, #e5e5e5);
}
</style>