<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import FeaturedProjectCard from '../ui/FeaturedProjectCard.vue'
import { featuredProjects } from '../../data/featuredProjects'
import { useFeaturedProjectsMotion } from '../../composables/useFeaturedProjectsMotion'

const sectionRef = ref(null)
const previousButton = ref(null)
const nextButton = ref(null)

const activeIndex = ref(0)
const isAnimated = ref(false)

const magneticAnimations = new Map()

const currentNumber = computed(() =>
  String(activeIndex.value + 1).padStart(2, '0'),
)

const totalNumber = String(
  featuredProjects.length,
).padStart(2, '0')

const { goToProject } = useFeaturedProjectsMotion({
  sectionRef,
  activeIndex,
  isAnimated,
})

function nextProject() {
  if (activeIndex.value < featuredProjects.length - 1) {
    goToProject(activeIndex.value + 1)
  }
}

function previousProject() {
  if (activeIndex.value > 0) {
    goToProject(activeIndex.value - 1)
  }
}

function getMagneticAnimation(arrow) {
  if (!magneticAnimations.has(arrow)) {
    magneticAnimations.set(arrow, {
      x: gsap.quickTo(arrow, 'x', {
        duration: 0.45,
        ease: 'power3.out',
      }),
      y: gsap.quickTo(arrow, 'y', {
        duration: 0.45,
        ease: 'power3.out',
      }),
    })
  }

  return magneticAnimations.get(arrow)
}

function handleMagneticMove(event) {
  const button = event.currentTarget

  if (
    button.disabled ||
    event.pointerType !== 'mouse' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return

  const arrow = button.querySelector('.navigation-arrow')

  if (!arrow) return

  const bounds = button.getBoundingClientRect()

  const x = event.clientX - bounds.left - bounds.width / 2
  const y = event.clientY - bounds.top - bounds.height / 2

  const animation = getMagneticAnimation(arrow)

  animation.x(x * 0.55)
  animation.y(y * 0.55)
}

function resetMagnetic(button) {
  const arrow = button?.querySelector('.navigation-arrow')

  if (!arrow) return

  const animation = magneticAnimations.get(arrow)

  if (!animation) return

  animation.x(0)
  animation.y(0)
}

watch(activeIndex, (index) => {
  if (index === 0) {
    resetMagnetic(previousButton.value)
  }

  if (index === featuredProjects.length - 1) {
    resetMagnetic(nextButton.value)
  }
})

onBeforeUnmount(() => {
  magneticAnimations.forEach(({ x, y }) => {
    x.tween.kill()
    y.tween.kill()
  })

  magneticAnimations.clear()
})
</script>

<template>
  <section id="work" ref="sectionRef" class="work-section relative w-full overflow-clip rounded-t-[20px]">
    <div data-featured-track class="relative">
      <div data-featured-stage class="featured-stage">
        <header class="featured-header relative z-20 flex items-center justify-between gap-4 px-5 pt-7 md:px-7 md:pt-8">
          <h2 class="featured-heading">
            Selected Work
          </h2>
        </header>

        <div data-featured-gallery class="featured-gallery">
          <FeaturedProjectCard v-for="(project, index) in featuredProjects" :key="project.id" :project="project"
            :interactive="!isAnimated || activeIndex === index" :aria-hidden="isAnimated && activeIndex !== index"
            :class="{
              'is-active': activeIndex === index,
            }" data-featured-card />
        </div>

        <footer v-show="isAnimated" class="featured-footer relative z-20 px-5 pb-5 md:px-7">
          <div class="flex items-center gap-4">
            <span class="current-number">
              {{ currentNumber }}
            </span>

            <div class="progress-track">
              <div data-featured-progress class="progress-fill" />
            </div>

            <span class="total-number">
              {{ totalNumber }}
            </span>
          </div>

          <div class="flex items-center justify-end gap-3 md:gap-5">
            <button ref="previousButton" type="button" :disabled="activeIndex === 0" class="navigation-button"
              aria-label="Previous project" @click="previousProject" @pointermove="handleMagneticMove"
              @pointerleave="resetMagnetic($event.currentTarget)" @pointercancel="resetMagnetic($event.currentTarget)"
              @blur="resetMagnetic($event.currentTarget)">
              <span class="navigation-arrow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M19 12H5M12 19L5 12L12 5" />
                </svg>
              </span>
            </button>

            <button ref="nextButton" type="button" :disabled="activeIndex === featuredProjects.length - 1"
              class="navigation-button" aria-label="Next project" @click="nextProject" @pointermove="handleMagneticMove"
              @pointerleave="resetMagnetic($event.currentTarget)" @pointercancel="resetMagnetic($event.currentTarget)"
              @blur="resetMagnetic($event.currentTarget)">
              <span class="navigation-arrow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-section {
  background: var(--color-surface, #ffffff);
  color: var(--color-ink, #111111);
}

.featured-stage {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
}

.featured-header,
.featured-footer {
  flex-shrink: 0;
}

.featured-heading {
  font-size: clamp(1.5rem, 2.3vw, 2.5rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.055em;
}

.featured-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  padding: 48px 28px;
}

.featured-footer {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
}

.current-number,
.total-number {
  font-family: inherit;
  font-variant-numeric: lining-nums tabular-nums;
  font-feature-settings: 'zero' 0;
  font-weight: 500;
  line-height: 1;
}

.current-number {
  font-size: 20px;
  letter-spacing: -0.055em;
}

.total-number {
  font-size: 10px;
  letter-spacing: -0.025em;
  color: var(--color-muted, #737373);
}

.navigation-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-ink, #111111);
  cursor: pointer;
  transition: opacity 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.navigation-button:disabled {
  opacity: 0.25;
  cursor: default;
}

.navigation-button:focus-visible {
  outline: 1px solid currentColor;
  outline-offset: 2px;
}

.navigation-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: transform;
}

.navigation-arrow svg {
  transition: scale 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) and (pointer: fine) {
  .navigation-button:not(:disabled):hover .navigation-arrow svg {
    scale: 1.12;
  }
}

.navigation-button:not(:disabled):active .navigation-arrow svg {
  scale: 0.88;
}

.progress-track {
  position: relative;
  width: clamp(45px, 10vw, 150px);
  height: 2px;
  background: var(--color-border, #e5e5e5);
}

.progress-fill {
  position: absolute;
  inset: 0;
  background: var(--color-ink, #111111);
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
}

[data-featured-track] {
  overflow-anchor: none;
}

[data-animated] [data-featured-stage] {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 0;
  overflow: clip;
  isolation: isolate;
}

[data-animated] .featured-gallery {
  position: relative;
  display: block;
  flex: 1;
  min-height: 0;
  padding: 0;
}

[data-animated] .featured-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(46vw,
      860px,
      max(180px, calc((100svh - 200px) * 1.65)));
  transform-origin: 50% var(--featured-pivot, 50%);
  will-change: transform, opacity;
  backface-visibility: hidden;
  pointer-events: none;
  transition: none;
}

[data-animated] .featured-card.is-active {
  pointer-events: auto;
}

[data-animated] :deep([data-featured-caption]) {
  will-change: opacity;
  transition: none;
}

@media (max-width: 767px) {
  .featured-gallery {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding: 40px 20px;
  }

  [data-animated] .featured-card {
    width: min(82vw,
        max(160px, calc((100svh - 180px) * 1.55)));
  }

  .current-number {
    font-size: 18px;
  }

  .navigation-arrow svg {
    width: 18px;
    height: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {

  .navigation-button,
  .navigation-arrow svg {
    transition: none;
  }

  .navigation-button .navigation-arrow svg {
    scale: 1 !important;
  }
}
</style>