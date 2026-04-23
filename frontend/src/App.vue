<template>
  <div
    class="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#020202] text-white"
  >
    <!-- background geral -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <!-- faixa colorida principal -->
      <div
        class="absolute left-1/2 top-[260px] h-[1180px] w-[160%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(178,200,188,0.22)_0%,rgba(178,200,188,0.14)_28%,rgba(178,194,195,0.08)_48%,rgba(2,2,2,0.04)_70%,rgba(2,2,2,0)_82%)] blur-3xl"
      ></div>

      <!-- reforço no about -->
      <div
        class="absolute left-1/2 top-[980px] h-[760px] w-[140%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(178,200,188,0.12)_0%,rgba(178,194,195,0.07)_36%,rgba(2,2,2,0)_74%)] blur-3xl"
      ></div>

      <!-- transição para escurecer após o about -->
      <div
        class="absolute inset-x-0 top-[1380px] h-[1200px] bg-[linear-gradient(to_bottom,rgba(2,2,2,0)_0%,rgba(2,2,2,0.35)_18%,rgba(2,2,2,0.72)_42%,rgba(2,2,2,0.94)_68%,rgba(2,2,2,1)_100%)]"
      ></div>

      <!-- orb inferior -->
      <div
        class="absolute bottom-[-220px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      ></div>
    </div>

    <div class="relative z-10">
      <Header :nav-items="navItems" />

      <!-- hero -->
      <section
        id="home"
        class="relative px-6 pb-24 pt-1 md:px-10 md:pb-32 md:pt-2 lg:px-16 lg:pb-5 lg:pt-3"
      >
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

      <!-- about -->
      <section
        id="about"
        ref="aboutSection"
        class="relative px-6 py-20 md:px-10 lg:px-16"
      >
        <div class="mx-auto max-w-6xl">
          <div class="grid items-stretch gap-6 lg:grid-cols-12">
            <article
              class="portfolio-card about-animated-card lg:col-span-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 md:p-6"
              :style="photoCardStyle"
            >
              <div
                class="flex min-h-[320px] flex-col items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.03] p-6"
              >
                <span class="text-sm text-white/35">Sua foto aqui</span>
              </div>
            </article>

            <div class="grid gap-6 self-center lg:col-span-8">
              <article
                class="portfolio-card about-animated-card rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-7"
                :style="rightTopCardStyle"
              >
                <h3 class="text-xl font-semibold text-white">
                  Perfil profissional
                </h3>

                <p class="mt-4 text-sm leading-7 text-white/65">
                  Sou desenvolvedor com experiência na criação de aplicações
                  modernas, componentização de interfaces e construção de
                  soluções completas do frontend ao backend, sempre priorizando
                  clareza, escalabilidade e boa usabilidade.
                </p>
              </article>

              <article
                class="portfolio-card about-animated-card rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-7"
                :style="rightBottomCardStyle"
              >
                <span class="text-xs uppercase tracking-[0.24em] text-white/45">
                  Formação
                </span>

                <div class="mt-6 grid gap-4 sm:grid-cols-3">
                  <div
                    class="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p class="text-sm font-medium text-white">Senac</p>
                    <p class="mt-2 text-sm leading-6 text-white/55">
                      Análise e Desenvolvimento de Sistemas
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p class="text-sm font-medium text-white">EBAC</p>
                    <p class="mt-2 text-sm leading-6 text-white/55">Design</p>
                  </div>

                  <div
                    class="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p class="text-sm font-medium text-white">USP MBA</p>
                    <p class="mt-2 text-sm leading-6 text-white/55">
                      Engenharia de Software
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section
        id="skills"
        class="relative px-6 pb-24 pt-14 md:px-10 md:pb-28 md:pt-20 lg:px-16 lg:pb-32"
      >
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">

            <h2
              class="mt-6 text-3xl font-light leading-[1.02] tracking-[-0.05em] text-white md:text-5xl"
            >
              Tecnologias e competências principais
            </h2>

            <p class="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Ferramentas e áreas que utilizo para construir aplicações
              modernas, organizadas e com foco em experiência, performance e
              manutenção.
            </p>
          </div>

          <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Frontend</span>
                <span class="skill-level">Avançado</span>
              </div>
              <h3 class="skill-title">Vue.js</h3>
              <p class="skill-description">
                Criação de interfaces componentizadas, escaláveis e com foco em
                organização, reaproveitamento e boa experiência do usuário.
              </p>
            </article>

            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Linguagem</span>
                <span class="skill-level">Avançado</span>
              </div>
              <h3 class="skill-title">JavaScript</h3>
              <p class="skill-description">
                Base para lógica, interações, manipulação de dados e construção
                de aplicações modernas no frontend e backend.
              </p>
            </article>

            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Estilo</span>
                <span class="skill-level">Avançado</span>
              </div>
              <h3 class="skill-title">Tailwind CSS</h3>
              <p class="skill-description">
                Estruturação visual rápida e consistente, com foco em layouts
                limpos, responsivos e visual refinado.
              </p>
            </article>

            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Backend</span>
                <span class="skill-level">Avançado</span>
              </div>
              <h3 class="skill-title">Node.js</h3>
              <p class="skill-description">
                Desenvolvimento de APIs, regras de negócio, integrações e
                estrutura de aplicação ponta a ponta.
              </p>
            </article>

            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Backend</span>
                <span class="skill-level">Intermediário</span>
              </div>
              <h3 class="skill-title">Express</h3>
              <p class="skill-description">
                Organização de rotas, middlewares, autenticação e exposição de
                serviços de forma clara e escalável.
              </p>
            </article>

            <article class="skill-card">
              <div class="skill-card-top">
                <span class="skill-badge">Design</span>
                <span class="skill-level">Avançado</span>
              </div>
              <h3 class="skill-title">UX/UI</h3>
              <p class="skill-description">
                Aplicação de princípios de usabilidade, hierarquia visual e
                consistência para interfaces mais intuitivas e agradáveis.
              </p>
            </article>
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <span class="tech-pill">HTML</span>
            <span class="tech-pill">CSS</span>
            <span class="tech-pill">Responsividade</span>
            <span class="tech-pill">Componentização</span>
            <span class="tech-pill">APIs</span>
            <span class="tech-pill">Autenticação</span>
            <span class="tech-pill">Integrações</span>
            <span class="tech-pill">Arquitetura</span>
            <span class="tech-pill">Performance</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Header from "./components/layouts/Header.vue";
import PrismCoin from "./components/visual/PrismCoin.vue";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const aboutSection = ref(null);
const aboutProgress = ref(0);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateAboutAnimation() {
  if (!aboutSection.value || typeof window === "undefined") return;

  const rect = aboutSection.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;

  const start = viewportHeight * 0.92;
  const end = viewportHeight * 0.18;

  const progress = (start - rect.top) / (start - end);
  aboutProgress.value = clamp(progress, 0, 1);
}

function onScroll() {
  updateAboutAnimation();
}

const photoCardStyle = computed(() => {
  const progress = aboutProgress.value;
  const translateX = -140 * (1 - progress);
  const opacity = 0.2 + progress * 0.8;
  const blur = 10 * (1 - progress);

  return {
    transform: `translate3d(${translateX}px, 0, 0)`,
    opacity,
    filter: `blur(${blur}px)`,
  };
});

const rightTopCardStyle = computed(() => {
  const progress = aboutProgress.value;
  const translateX = 140 * (1 - progress);
  const opacity = 0.2 + progress * 0.8;
  const blur = 10 * (1 - progress);

  return {
    transform: `translate3d(${translateX}px, 0, 0)`,
    opacity,
    filter: `blur(${blur}px)`,
  };
});

const rightBottomCardStyle = computed(() => {
  const progress = aboutProgress.value;
  const translateX = 180 * (1 - progress);
  const opacity = 0.2 + progress * 0.8;
  const blur = 10 * (1 - progress);

  return {
    transform: `translate3d(${translateX}px, 0, 0)`,
    opacity,
    filter: `blur(${blur}px)`,
  };
});

onMounted(() => {
  updateAboutAnimation();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateAboutAnimation);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", updateAboutAnimation);
});
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

.portfolio-card {
  backdrop-filter: blur(18px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.about-animated-card {
  will-change: transform, opacity, filter;
}

.card-label {
  display: inline-flex;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.35rem 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b2c8bc;
}

.skill-card {
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 1.5rem;
  backdrop-filter: blur(16px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.055);
}

.skill-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.skill-badge {
  display: inline-flex;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.32rem 0.72rem;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
}

.skill-level {
  font-size: 0.76rem;
  color: rgba(178, 200, 188, 0.9);
}

.skill-title {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.skill-description {
  margin-top: 0.9rem;
  font-size: 0.92rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.58);
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.62rem 0.95rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.72);
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

@media (max-width: 1023px) {
  .hero-content {
    max-width: 100%;
  }
}
</style>