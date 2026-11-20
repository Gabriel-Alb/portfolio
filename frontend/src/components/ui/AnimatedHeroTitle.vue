<script setup>
import { useId } from 'vue'

defineProps({
  title: { type: String, default: 'GABRIEL' },
  subtitle: { type: String, default: 'Full Stack Developer' }
})

const filterId = `${useId()}-orbit-rough`
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-[100] flex flex-col items-center justify-center text-center">
    <h1 class="hero-title">
      {{ title }}
      <span class="hero-texture" :style="{ filter: `url(#${filterId})` }" aria-hidden="true">{{ title }}</span>
    </h1>
    <p class="hero-subtitle">{{ subtitle }}</p>

    <svg class="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
      <filter :id="filterId" x="-5%" y="-20%" width="110%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency=".12 .3" numOctaves="3" seed="2" result="noise">
          <animate attributeName="seed" dur=".4s" values="2;11;4;18;7;23;3" calcMode="discrete"
            repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
      </filter>
    </svg>
  </div>
</template>

<style scoped>
.hero-title {
  position: relative;
  display: inline-block;
  margin: 0;
  color: #101010;
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(56px, 11.5vw, 130px);
  font-weight: 900;
  line-height: .92;
  letter-spacing: -.084em;
  white-space: nowrap;
}

.hero-texture {
  position: absolute;
  inset: 0;
  opacity: 0;
  animation: orbit-grain 10s steps(1, end) infinite;
}

.hero-subtitle {
  margin: 14px 0 0;
  color: #4f4e4b;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: clamp(13px, 1.2vw, 18px);
  letter-spacing: .03em;
}

@keyframes orbit-grain {

  0%,
  79.99%,
  94%,
  100% {
    opacity: 0;
  }

  80%,
  93.99% {
    opacity: 1;
  }
}

@media (max-width: 620px) {
  .hero-title {
    font-size: clamp(48px, 15vw, 96px);
  }

  .hero-subtitle {
    margin-top: 12px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-texture {
    animation: none;
    opacity: 0;
  }
}
</style>