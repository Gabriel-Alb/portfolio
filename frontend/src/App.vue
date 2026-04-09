<template>
  <div class="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#020202] text-white">
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div class="ambient ambient-a"></div>
      <div class="ambient ambient-b"></div>
      <div class="ambient ambient-c"></div>

      <div class="fluid-shape fluid-shape-a"></div>
      <div class="fluid-shape fluid-shape-b"></div>
      <div class="fluid-shape fluid-shape-c"></div>

      <div class="grid-overlay"></div>
      <div class="vignette-overlay"></div>
    </div>

    <div class="scroll-rail hidden lg:flex">
      <div class="scroll-rail-line"></div>
      <div class="scroll-rail-progress" :style="{ height: `${pageProgress * 100}%` }"></div>
      <div class="scroll-rail-dot" :style="{ top: `calc(${pageProgress * 100}% - 8px)` }"></div>
    </div>

    <div class="relative z-10">
      <header class="sticky top-0 z-50 border-b border-white/10 bg-[#020202]/58 backdrop-blur-2xl">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <a href="#home" class="text-lg font-semibold tracking-tight text-white">
            Gabriel
          </a>

          <nav class="ml-auto hidden items-center gap-6 md:flex lg:gap-8">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="nav-link"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          :ref="(el) => setSectionRef(el, 'home')"
          class="hero-section relative flex min-h-[calc(100vh-73px)] items-center px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:px-16"
          :class="{ 'is-visible': visibleSections.home }"
        >
          <div class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-8">
            <div class="hero-copy-wrap">
              <div class="hero-kicker reveal-fade">
                Fullstack developer · frontend · backend · design-driven
              </div>

              <div class="hero-title-wrap mt-6 md:mt-8">
                <div class="overflow-hidden">
                  <h1 class="hero-title hero-title-main">
                    FULLSTACK
                  </h1>
                </div>

                <div class="hero-divider"></div>

                <div class="overflow-hidden">
                  <h2 class="hero-title hero-title-sub">
                    DEVELOPER
                  </h2>
                </div>
              </div>

              <div class="reveal-fade mt-8 max-w-2xl md:mt-10">
                <p class="hero-description">
                  Desenvolvimento de interfaces modernas, aplicações escaláveis e
                  experiências digitais com foco em design, performance e arquitetura bem pensada.
                </p>
              </div>

              <div class="reveal-fade mt-9 flex flex-wrap items-center gap-4 md:mt-11">
                <a href="#projects" class="cta-primary">
                  Ver projetos
                </a>

                <a href="#contact" class="cta-secondary">
                  Entrar em contato
                </a>
              </div>
            </div>

            <div class="relative hidden min-h-[560px] lg:block">
              <div class="artifact-sticky">
                <div class="artifact-scene" :style="artifactSceneStyle">
                  <div class="artifact-halo"></div>
                  <div class="artifact-ring artifact-ring-a"></div>
                  <div class="artifact-ring artifact-ring-b"></div>
                  <div class="artifact-ring artifact-ring-c"></div>

                  <div class="artifact-core">
                    <div class="artifact-plane artifact-plane-a"></div>
                    <div class="artifact-plane artifact-plane-b"></div>
                    <div class="artifact-plane artifact-plane-c"></div>
                    <div class="artifact-sphere"></div>
                  </div>
                </div>

                <div class="artifact-label">
                  Scroll para revelar a composição
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          :ref="(el) => setSectionRef(el, 'about')"
          class="content-section px-6 py-20 md:px-10 md:py-28 lg:px-16"
          :class="{ 'is-visible': visibleSections.about }"
        >
          <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <div class="section-intro">
              <div class="section-index">01</div>
              <h3 class="section-title">Sobre</h3>
            </div>

            <div class="section-panel">
              <div class="section-divider"></div>

              <div class="grid gap-6 md:grid-cols-2">
                <div class="glass-card">
                  <p class="section-text">
                    Sou desenvolvedor fullstack com foco em criar produtos digitais
                    visualmente fortes, tecnicamente organizados e com acabamento profissional.
                  </p>
                </div>

                <div class="glass-card">
                  <p class="section-text">
                    Trabalho unindo interface, estrutura e experiência para transformar
                    ideias em páginas e sistemas modernos, elegantes e funcionais.
                  </p>
                </div>
              </div>

              <div class="grid gap-4 pt-6 md:grid-cols-3">
                <div class="metric-card">
                  <span class="metric-label">Foco</span>
                  <strong class="metric-value">UI moderna</strong>
                </div>

                <div class="metric-card">
                  <span class="metric-label">Estrutura</span>
                  <strong class="metric-value">Código limpo</strong>
                </div>

                <div class="metric-card">
                  <span class="metric-label">Entrega</span>
                  <strong class="metric-value">Experiência premium</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          :ref="(el) => setSectionRef(el, 'skills')"
          class="content-section px-6 py-20 md:px-10 md:py-28 lg:px-16"
          :class="{ 'is-visible': visibleSections.skills }"
        >
          <div class="mx-auto max-w-7xl">
            <div class="section-intro-inline">
              <div class="section-index">02</div>
              <h3 class="section-title">Skills</h3>
            </div>

            <div class="section-divider mt-5"></div>

            <div class="grid gap-5 pt-8 md:grid-cols-2 xl:grid-cols-4">
              <article
                v-for="group in skillGroups"
                :key="group.title"
                class="skill-card"
              >
                <div class="skill-card-top">
                  <span class="skill-card-title">{{ group.title }}</span>
                </div>

                <ul class="skill-list">
                  <li v-for="item in group.items" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="projects"
          :ref="(el) => setSectionRef(el, 'projects')"
          class="content-section px-6 py-20 md:px-10 md:py-28 lg:px-16"
          :class="{ 'is-visible': visibleSections.projects }"
        >
          <div class="mx-auto max-w-7xl">
            <div class="section-intro-inline">
              <div class="section-index">03</div>
              <h3 class="section-title">Projetos</h3>
            </div>

            <div class="section-divider mt-5"></div>

            <div class="mt-8 grid gap-5 xl:grid-cols-3">
              <article
                v-for="project in projects"
                :key="project.title"
                class="project-card"
              >
                <div class="project-card-glow"></div>

                <div class="relative z-10">
                  <div class="project-meta">{{ project.meta }}</div>
                  <h4 class="project-title">{{ project.title }}</h4>
                  <p class="project-description">{{ project.description }}</p>

                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          :ref="(el) => setSectionRef(el, 'contact')"
          class="content-section px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-28 lg:px-16"
          :class="{ 'is-visible': visibleSections.contact }"
        >
          <div class="mx-auto max-w-7xl">
            <div class="contact-panel">
              <div class="contact-orb"></div>

              <div class="relative z-10 max-w-3xl">
                <div class="section-index">04</div>
                <h3 class="contact-title">Vamos construir algo forte visualmente e sólido tecnicamente.</h3>
                <p class="contact-text">
                  Projetos com identidade, clareza, organização e uma presença visual mais marcante.
                </p>

                <div class="mt-8 flex flex-wrap gap-4">
                  <a href="mailto:gabrielalbu432@gmail.com" class="cta-primary">
                    Enviar e-mail
                  </a>

                  <a href="#home" class="cta-secondary">
                    Voltar ao topo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["Vue.js", "JavaScript", "Tailwind", "HTML", "CSS", "UX/UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "APIs", "Express", "Autenticação", "Integrações", "Banco de dados"],
  },
  {
    title: "Arquitetura",
    items: ["Componentização", "Organização", "Escalabilidade", "Responsividade", "Performance"],
  },
  {
    title: "Entrega",
    items: ["Design refinado", "Experiência", "Qualidade visual", "Manutenção", "Evolução contínua"],
  },
];

const projects = [
  {
    meta: "Sistema · Fullstack",
    title: "Dashboard Operacional",
    description:
      "Estruturação de interface administrativa com foco em leitura rápida, organização visual e navegação limpa.",
    tags: ["Vue", "UI", "Dashboard"],
  },
  {
    meta: "Portal · Frontend",
    title: "Landing Page Premium",
    description:
      "Página institucional com estética forte, hierarquia bem definida e transições modernas para reforçar presença de marca.",
    tags: ["Landing Page", "Motion", "Design"],
  },
  {
    meta: "Produto · Arquitetura",
    title: "Módulo Escalável",
    description:
      "Organização de componentes, separação de responsabilidades e base sólida para crescimento técnico do projeto.",
    tags: ["Arquitetura", "Componentes", "Escalabilidade"],
  },
];

const sectionRefs = {};
const visibleSections = ref({
  home: false,
  about: false,
  skills: false,
  projects: false,
  contact: false,
});

const scrollY = ref(0);
const viewportHeight = ref(1);
let observer;

const setSectionRef = (el, key) => {
  if (el) sectionRefs[key] = el;
};

const updateScrollValues = () => {
  scrollY.value = window.scrollY || window.pageYOffset || 0;
  viewportHeight.value = window.innerHeight || 1;
};

const pageProgress = computed(() => {
  if (typeof document === "undefined") return 0;
  const full = document.documentElement.scrollHeight - viewportHeight.value;
  if (full <= 0) return 0;
  return Math.min(scrollY.value / full, 1);
});

const artifactProgress = computed(() => {
  return Math.min(scrollY.value / (viewportHeight.value * 1.6), 1);
});

const artifactSceneStyle = computed(() => {
  const p = artifactProgress.value;
  const rotateX = 64 - p * 22;
  const rotateY = -34 + p * 48;
  const rotateZ = p * 18;
  const translateY = p * 52;
  const scale = 1 - p * 0.08;

  return {
    transform: `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
  };
});

onMounted(async () => {
  updateScrollValues();
  window.addEventListener("scroll", updateScrollValues, { passive: true });
  window.addEventListener("resize", updateScrollValues);

  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        if (entry.isIntersecting) {
          visibleSections.value = {
            ...visibleSections.value,
            [id]: true,
          };
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  Object.values(sectionRefs).forEach((el) => {
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollValues);
  window.removeEventListener("resize", updateScrollValues);

  if (observer) observer.disconnect();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap");

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

.portfolio-shell {
  font-family: "Inter", sans-serif;
}

.hero-title,
.section-title,
.project-title,
.contact-title,
.cta-primary,
.cta-secondary {
  font-family: "Sora", sans-serif;
}

.ambient,
.fluid-shape {
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
}

.ambient-a {
  left: -10%;
  top: 4%;
  height: 360px;
  width: 360px;
  background: rgba(178, 200, 188, 0.09);
}

.ambient-b {
  right: -8%;
  top: 10%;
  height: 340px;
  width: 340px;
  background: rgba(178, 194, 195, 0.08);
}

.ambient-c {
  left: 50%;
  bottom: -12%;
  height: 420px;
  width: 420px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.04);
}

.fluid-shape {
  opacity: 0.72;
  mix-blend-mode: screen;
}

.fluid-shape-a {
  left: 6%;
  top: 14%;
  width: 58vw;
  max-width: 860px;
  height: 260px;
  background: radial-gradient(
    ellipse at 30% 50%,
    rgba(178, 200, 188, 0.16) 0%,
    rgba(178, 200, 188, 0.05) 40%,
    rgba(178, 200, 188, 0) 78%
  );
  animation: driftA 14s ease-in-out infinite alternate;
}

.fluid-shape-b {
  right: 0;
  top: 42%;
  width: 48vw;
  max-width: 720px;
  height: 220px;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(178, 194, 195, 0.05) 42%,
    rgba(255, 255, 255, 0) 76%
  );
  animation: driftB 18s ease-in-out infinite alternate;
}

.fluid-shape-c {
  left: 18%;
  bottom: 8%;
  width: 46vw;
  max-width: 680px;
  height: 200px;
  background: radial-gradient(
    ellipse at 40% 50%,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(178, 200, 188, 0.04) 46%,
    rgba(255, 255, 255, 0) 80%
  );
  animation: driftC 16s ease-in-out infinite alternate;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at center, black 22%, transparent 86%);
  opacity: 0.45;
}

.vignette-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 34%, rgba(2, 2, 2, 0.18) 62%, rgba(2, 2, 2, 0.7) 100%);
}

.scroll-rail {
  position: fixed;
  right: 32px;
  top: 50%;
  z-index: 30;
  height: 220px;
  width: 16px;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
}

.scroll-rail-line,
.scroll-rail-progress {
  position: absolute;
  width: 1px;
  border-radius: 999px;
}

.scroll-rail-line {
  height: 100%;
  background: rgba(255, 255, 255, 0.12);
}

.scroll-rail-progress {
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(178, 200, 188, 0.85) 52%,
    rgba(178, 194, 195, 0.65) 100%
  );
  box-shadow: 0 0 24px rgba(178, 200, 188, 0.18);
}

.scroll-rail-dot {
  position: absolute;
  left: 50%;
  height: 16px;
  width: 16px;
  transform: translateX(-50%);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(178, 200, 188, 0.24);
}

.nav-link {
  position: relative;
  font-size: 0.92rem;
  font-weight: 500;
  color: #b2c2c3;
  transition: color 0.28s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  height: 1px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(90deg, #ffffff, #b2c8bc);
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.hero-copy-wrap {
  max-width: 960px;
}

.hero-kicker {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(178, 194, 195, 0.85);
}

.hero-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.hero-title {
  margin: 0;
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.085em;
  user-select: none;
}

.hero-title-main {
  font-size: clamp(4.2rem, 12vw, 10rem);
  font-weight: 800;
  opacity: 0;
  transform: translate3d(140px, 0, 0);
}

.hero-section.is-visible .hero-title-main {
  animation: heroSlideFromRight 1.08s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-title-sub {
  padding-left: clamp(0rem, 6vw, 8rem);
  font-size: clamp(2rem, 5vw, 4.4rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  color: #b2c8bc;
  opacity: 0;
  transform: translate3d(-140px, 0, 0);
}

.hero-section.is-visible .hero-title-sub {
  animation: heroSlideFromLeft 1.08s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.08s;
}

.hero-divider {
  margin-top: 0.65rem;
  height: 1px;
  width: min(100%, 860px);
  opacity: 0;
  transform: scaleX(0.72);
  transform-origin: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(178, 200, 188, 0.92) 26%,
    rgba(255, 255, 255, 1) 50%,
    rgba(178, 194, 195, 0.32) 74%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0 0 26px rgba(178, 200, 188, 0.14);
}

.hero-section.is-visible .hero-divider {
  animation: dividerIn 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.14s;
}

.hero-description,
.section-text,
.project-description,
.contact-text {
  color: #b2c2c3;
}

.hero-description {
  max-width: 760px;
  font-size: 1rem;
  line-height: 2rem;
}

.reveal-fade {
  opacity: 0;
  transform: translateY(26px);
}

.hero-section.is-visible .reveal-fade {
  animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.22s;
}

.hero-section.is-visible .hero-actions.reveal-fade {
  animation-delay: 0.32s;
}

.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.95rem 1.5rem;
  font-size: 0.9rem;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.cta-primary {
  position: relative;
  overflow: hidden;
  font-weight: 700;
  color: #020202;
  background: linear-gradient(135deg, #ffffff 0%, #dce8e1 34%, #b2c8bc 100%);
  box-shadow:
    0 14px 40px rgba(178, 200, 188, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
}

.cta-primary::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    112deg,
    transparent 20%,
    rgba(255, 255, 255, 0.7) 42%,
    transparent 60%
  );
  transform: translateX(-140%);
  animation: buttonSweep 4.8s ease-in-out infinite;
}

.cta-primary:hover,
.cta-secondary:hover {
  transform: translateY(-2px);
}

.cta-secondary {
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.cta-secondary:hover {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.08);
}

.artifact-sticky {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.artifact-scene {
  position: relative;
  height: 500px;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.18s linear;
}

.artifact-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 300px;
  width: 300px;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(178, 200, 188, 0.18) 0%, rgba(178, 200, 188, 0.03) 42%, rgba(178, 200, 188, 0) 72%);
  filter: blur(28px);
}

.artifact-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transform-style: preserve-3d;
}

.artifact-ring-a {
  height: 290px;
  width: 290px;
  transform: translate3d(-50%, -50%, 0) rotateX(72deg) rotateY(0deg);
}

.artifact-ring-b {
  height: 240px;
  width: 240px;
  transform: translate3d(-50%, -50%, 0) rotateX(72deg) rotateY(62deg);
}

.artifact-ring-c {
  height: 178px;
  width: 178px;
  transform: translate3d(-50%, -50%, 0) rotateX(72deg) rotateY(120deg);
}

.artifact-core {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 220px;
  width: 220px;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
}

.artifact-plane {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 16px 40px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
}

.artifact-plane-a {
  transform: rotateZ(-8deg) translateZ(0);
}

.artifact-plane-b {
  transform: rotateZ(10deg) translateZ(36px);
}

.artifact-plane-c {
  transform: rotateZ(-18deg) translateZ(72px);
}

.artifact-sphere {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 74px;
  width: 74px;
  transform: translate3d(-50%, -50%, 98px);
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.18) 38%, rgba(255,255,255,0.04) 68%),
    linear-gradient(145deg, rgba(178,200,188,0.34), rgba(255,255,255,0.06));
  box-shadow:
    0 0 40px rgba(178, 200, 188, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.artifact-label {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(178, 194, 195, 0.7);
}

.content-section {
  opacity: 0;
  transform: translateY(44px);
  transition:
    opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.content-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-intro,
.section-intro-inline {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.section-intro-inline {
  gap: 0.55rem;
}

.section-index {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(178, 194, 195, 0.68);
}

.section-title {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.05em;
}

.section-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.02) 0%,
    rgba(178,200,188,0.6) 32%,
    rgba(255,255,255,0.16) 72%,
    rgba(255,255,255,0.02) 100%
  );
}

.glass-card,
.metric-card,
.skill-card,
.project-card,
.contact-panel {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.035);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 18px 60px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(16px);
}

.glass-card {
  border-radius: 24px;
  padding: 1.4rem;
}

.section-text {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.95rem;
}

.metric-card {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  border-radius: 20px;
  padding: 1.2rem 1.15rem;
}

.metric-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(178, 194, 195, 0.65);
}

.metric-value {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

.skill-card {
  border-radius: 24px;
  padding: 1.4rem 1.2rem;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.skill-card:hover,
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.16);
}

.skill-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skill-card-title {
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
}

.skill-list {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.skill-list li {
  position: relative;
  padding: 0.72rem 0 0.72rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #b2c2c3;
  font-size: 0.95rem;
}

.skill-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.1rem;
  height: 6px;
  width: 6px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffffff, #b2c8bc);
}

.project-card {
  border-radius: 28px;
  padding: 1.5rem;
  min-height: 280px;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease;
}

.project-card-glow {
  position: absolute;
  inset: auto auto -10% -8%;
  height: 180px;
  width: 180px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(178, 200, 188, 0.16) 0%, rgba(178, 200, 188, 0) 70%);
  filter: blur(20px);
  opacity: 0.7;
}

.project-meta {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(178, 194, 195, 0.65);
}

.project-title {
  margin: 1rem 0 0;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.project-description {
  margin: 0.9rem 0 0;
  font-size: 0.96rem;
  line-height: 1.8rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.project-tags span {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.55rem 0.85rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d7dfdc;
}

.contact-panel {
  border-radius: 32px;
  padding: 2rem;
}

.contact-orb {
  position: absolute;
  right: -40px;
  top: -40px;
  height: 220px;
  width: 220px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(178, 200, 188, 0.18) 0%, rgba(178, 200, 188, 0.06) 36%, rgba(178, 200, 188, 0) 72%);
  filter: blur(24px);
}

.contact-title {
  margin: 0.9rem 0 0;
  max-width: 860px;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1;
  letter-spacing: -0.06em;
}

.contact-text {
  margin: 1rem 0 0;
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.9rem;
}

@keyframes heroSlideFromRight {
  0% {
    opacity: 0;
    transform: translate3d(140px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes heroSlideFromLeft {
  0% {
    opacity: 0;
    transform: translate3d(-140px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes dividerIn {
  0% {
    opacity: 0;
    transform: scaleX(0.72);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(26px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes buttonSweep {
  0%,
  100% {
    transform: translateX(-140%);
  }
  45%,
  60% {
    transform: translateX(140%);
  }
}

@keyframes driftA {
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(-2deg);
  }
  100% {
    transform: translate3d(26px, -16px, 0) scale(1.08) rotate(2deg);
  }
}

@keyframes driftB {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(-32px, 20px, 0) scale(1.06);
  }
}

@keyframes driftC {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(18px, -12px, 0) scale(1.04);
  }
}

@media (max-width: 1024px) {
  .hero-title-main {
    font-size: clamp(4rem, 14vw, 8.6rem);
  }

  .hero-title-sub {
    padding-left: clamp(0rem, 4vw, 3rem);
    font-size: clamp(1.85rem, 6vw, 3.5rem);
  }
}

@media (max-width: 768px) {
  .hero-title-sub {
    padding-left: 0;
    margin-top: 0.25rem;
  }

  .hero-divider {
    width: 100%;
  }

  .hero-description {
    font-size: 0.96rem;
    line-height: 1.85rem;
  }

  .contact-panel {
    padding: 1.4rem;
    border-radius: 24px;
  }

  .glass-card,
  .skill-card,
  .project-card {
    border-radius: 22px;
  }

  .fluid-shape-a {
    width: 90vw;
    left: -12%;
  }

  .fluid-shape-b {
    width: 86vw;
    right: -20%;
  }

  .fluid-shape-c {
    width: 84vw;
    left: 4%;
  }
}
</style>