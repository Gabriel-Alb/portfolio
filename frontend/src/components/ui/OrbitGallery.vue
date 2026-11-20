<script setup>
import { ref } from 'vue'
import { useOrbitMotion } from '../../composables/useOrbitMotion'

const props = defineProps({
  projects: { type: Array, required: true }
})

const stage = ref(null)
const { isDragging } = useOrbitMotion(stage)
</script>

<template>
  <div ref="stage" class="orbit-stage absolute inset-0 cursor-grab touch-pan-y" :class="{ 'is-dragging': isDragging }"
    role="group" aria-label="Galeria de projetos em órbita 3D. Arraste para girar.">
    <div v-for="(project, index) in props.projects" :key="project.src" class="orbit-card" :data-index="index"
      data-orbit-card role="img" :aria-label="project.title">
      <img :src="project.src" :alt="project.title" draggable="false" decoding="async" />
    </div>
  </div>
</template>

<style scoped>
.orbit-stage {
  perspective: 1500px;
}

.orbit-stage.is-dragging,
.orbit-stage.is-dragging .orbit-card {
  cursor: grabbing;
}

.orbit-stage:not([data-ready]) .orbit-card,
.orbit-card[hidden] {
  display: none;
}

.orbit-card {
  position: absolute;
  inset: 0 auto auto 0;
  width: 104px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 3px;
  background: #e4e3e0;
  box-shadow: 0 8px 20px rgb(0 0 0 / 11%);
  backface-visibility: hidden;
  transform-origin: center;
  will-change: transform;
  cursor: grab;
  transition: box-shadow 200ms ease;
}

.orbit-card.is-hovered {
  box-shadow: 0 18px 36px rgb(0 0 0 / 22%);
}

.orbit-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

@media (prefers-reduced-motion: reduce) {
  .orbit-card {
    transition: none;
    will-change: auto;
  }
}
</style>