<template>
  <div
    class="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#020202] text-white"
  >
    <!-- background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute bottom-[-180px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      ></div>
    </div>

    <div class="relative z-10">
      <!-- header -->
      <header
        class="sticky top-0 z-50 border-b border-white/10 bg-[#020202]/55 backdrop-blur-2xl"
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

      <!-- hero -->
      <section
        id="home"
        class="relative overflow-hidden px-6 pb-24 pt-1 md:px-10 md:pb-32 md:pt-2 lg:px-16 lg:pb-46 lg:pt-3"
      >
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            class="absolute left-1/2 top-[100%] h-[600px] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(178,200,188,0.22)_0%,rgba(178,200,188,0.14)_28%,rgba(178,194,195,0.08)_48%,rgba(2,2,2,0)_74%)] blur-3xl"
          ></div>
        </div>

        <div class="relative mx-auto max-w-7xl">
          <div
            class="flex min-h-[62vh] flex-col items-start justify-between gap-14 pt-0 md:min-h-[64vh] md:pt-1 lg:flex-row lg:items-center lg:gap-10"
          >
            <div class="hero-content w-full max-w-[760px] flex-1 text-left">
              <h1
                class="hero-rise hero-rise-title hero-title whitespace-nowrap text-[34px] font-light leading-[0.95] tracking-[-0.05em] text-white sm:text-[42px] md:text-6xl lg:text-7xl xl:text-[88px]"
              >
                Full Stack Developer
              </h1>

              <p
                class="hero-rise hero-rise-text mt-7 max-w-[560px] text-base font-normal leading-8 text-[#B2C2C3] md:mt-8 md:text-lg"
              >
                Desenvolvimento de interfaces modernas, aplicações escaláveis e
                soluções com foco em qualidade visual, organização e
                performance.
              </p>

              <div
                class="hero-rise hero-rise-actions mt-10 flex flex-wrap items-center gap-4 md:mt-12"
              >
                <a
                  href="#projects"
                  class="inline-flex items-center justify-center rounded-full bg-[#B2C8BC] px-6 py-3 text-sm font-medium text-[#020202] transition hover:opacity-90"
                >
                  Ver projetos
                </a>

                <a
                  href="#contact"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-normal text-white transition hover:bg-white/10"
                >
                  Entrar em contato
                </a>
              </div>
            </div>

            <div
              class="hero-drop-coin coin-frame relative h-[360px] w-[360px] overflow-visible sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
            >
              <PrismCoin />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import PrismCoin from "./components/base/PrismCoin.vue";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

.portfolio-shell,
.hero-title {
  font-family: "Inter", sans-serif;
}

.hero-title {
  letter-spacing: -0.05em;
}

.hero-rise {
  opacity: 0;
  filter: blur(10px);
  transform: translate3d(0, 110px, 0);
  animation-name: heroContinuousRise;
  animation-duration: 0.95s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: forwards;
  will-change: transform, opacity, filter;
}

.hero-drop-coin {
  opacity: 0;
  filter: blur(10px);
  transform: translate3d(0, -120px, 0);
  animation-name: heroCoinDrop;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.18s;
  will-change: transform, opacity, filter;
}

.hero-rise-title {
  animation-delay: 0.62s;
}

.hero-rise-text {
  animation-delay: 0.79s;
}

.hero-rise-actions {
  animation-delay: 0.96s;
}

@keyframes heroContinuousRise {
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translate3d(0, 110px, 0);
  }

  to {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes heroCoinDrop {
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translate3d(0, -120px, 0);
  }

  to {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0);
  }
}

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

@media (max-width: 1023px) {
  .hero-content {
    max-width: 100%;
  }
}
</style>