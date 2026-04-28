<template>
  <main class="portfolio-page">
    <div class="grain"></div>
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>

    <!-- HEADER -->
    <header class="site-header" :class="{ 'is-dark': isHeaderDark }">
      <div class="header-inner">
        <a href="#home" class="header-logo">Gabriel</a>

        <nav class="header-nav">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="nav-letter-hover"
          >
            <span class="sr-only">{{ item.label }}</span>

            <span aria-hidden="true" class="nav-line">
              <span
                v-for="(char, index) in item.label.split('')"
                :key="`top-${item.label}-${index}`"
                class="nav-letter nav-letter-top"
                :style="{ transitionDelay: `${index * 0.03}s` }"
              >
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </span>

            <span aria-hidden="true" class="nav-line nav-line-bottom">
              <span
                v-for="(char, index) in item.label.split('')"
                :key="`bottom-${item.label}-${index}`"
                class="nav-letter nav-letter-bottom"
                :style="{ transitionDelay: `${index * 0.03}s` }"
              >
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </span>
          </a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section id="home" class="hero-section" data-theme="light">
      <div class="hero-inner">
        <div class="hero-main">
          <h1 class="hero-title">
            <span class="hero-line">
              <span class="hero-word hero-word-full">FULLSTACK</span>

              <span class="hero-inline-text hero-inline-right reveal-up delay-2">
                Interfaces modernas, sistemas escaláveis e experiências digitais
                com clareza, performance e estética refinada.
              </span>
            </span>

            <span class="hero-line hero-line-dev">
              <span class="hero-inline-text hero-inline-left reveal-up delay-3">
                Desenvolvimento de ponta a ponta, unindo produto, design e
                tecnologia para criar soluções consistentes.
              </span>

              <span class="hero-word hero-word-dev">DEVELOPER</span>
            </span>
          </h1>

          <div class="hero-actions reveal-up delay-3">
            <a href="#work">Ver projetos</a>
            <a href="#about">Conhecer mais</a>
          </div>
        </div>
      </div>
    </section>

    <!-- DARK INTRO -->
    <section class="dark-transition page-panel dark-panel" data-theme="dark">
      <div class="transition-orb transition-orb-left"></div>
      <div class="transition-orb transition-orb-right"></div>

      <div class="transition-content reveal-up">
        <span>Design · Code · Product</span>

        <p>
          Um portfólio pensado como uma experiência visual fluida, direta,
          responsiva e profissional.
        </p>
      </div>
    </section>

    <!-- FEATURED WORK + PROFILE INFO -->
    <section id="work" class="featured-section page-panel dark-panel" data-theme="dark">
      <div class="featured-heading reveal-up">
        <span>Selected Work</span>
        <h2>Projetos com estrutura, visual e propósito.</h2>
      </div>

      <div class="profile-strip reveal-up delay-1">
        <div class="profile-info-card">
          <span>Education</span>
          <strong>Senac · EBAC · USP MBA</strong>
        </div>

        <div class="profile-info-card">
          <span>Experience</span>
          <strong>Atualmente atuando na Petrobras com desenvolvimento de sistemas e interfaces digitais.</strong>
        </div>
      </div>

      <div class="featured-grid">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="featured-card reveal-up"
          :class="project.class"
          :style="{ '--delay': `${index * 0.12}s` }"
        >
          <div class="featured-visual" :class="project.visual"></div>

          <div class="featured-info">
            <div>
              <span>{{ project.year }}</span>
              <h3>{{ project.title }}</h3>
            </div>

            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="about-section page-panel light-panel" data-theme="light">
      <div class="about-sticky reveal-up">
        <span>About</span>
        <h2>Desenvolvedor fullstack com olhar de produto.</h2>
      </div>

      <div class="about-content">
        <p class="about-text reveal-up">
          Minha atuação combina engenharia de software, design de interfaces e
          experiência do usuário para transformar ideias em sistemas claros,
          rápidos e bem estruturados.
        </p>

        <div class="about-metrics">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="metric-card reveal-up"
          >
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- STACK -->
    <section class="stack-section page-panel light-solid-panel" data-theme="light">
      <div class="stack-header reveal-up">
        <h2>Do conceito visual à entrega técnica.</h2>

        <p>
          Uma entrega completa exige mais do que código: envolve clareza visual,
          arquitetura bem pensada, experiência de uso e evolução contínua.
        </p>
      </div>

      <div class="stack-layout">
        <div class="stack-column reveal-up">
          <h3>Frontend</h3>

          <div class="stack-tags">
            <span>Vue.js</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>UX/UI</span>
            <span>Responsividade</span>
            <span>Microinterações</span>
          </div>
        </div>

        <div class="stack-column reveal-up delay-1">
          <h3>Backend</h3>

          <div class="stack-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>APIs</span>
            <span>Autenticação</span>
            <span>PostgreSQL</span>
            <span>Integrações</span>
          </div>
        </div>

        <div class="stack-column reveal-up delay-2">
          <h3>Architecture</h3>

          <div class="stack-tags">
            <span>Componentização</span>
            <span>Escalabilidade</span>
            <span>Performance</span>
            <span>Organização</span>
            <span>Design System</span>
            <span>Manutenção</span>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE / PROJECTS -->
    <section class="project-list-section page-panel light-solid-panel" data-theme="light">
      <div class="project-list-heading reveal-up">
        <span>Experience Map</span>

        <p>
          Áreas que formam minha entrega profissional: visual, produto, código,
          integração e evolução contínua.
        </p>
      </div>

      <div class="project-list">
        <article
          v-for="(item, index) in experienceItems"
          :key="item.title"
          class="project-row reveal-up"
          :style="{ '--delay': `${index * 0.08}s` }"
        >
          <span class="project-row-index">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <div class="project-row-main">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>

          <div class="project-row-tags">
            <span v-for="tag in item.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- FOOTER -->
    <footer id="contact" class="footer-section page-panel" data-theme="dark">
      <div class="footer-marquee">
        <div>
          <span>AVAILABLE FOR PROJECTS</span>
          <span>FULLSTACK DEVELOPER</span>
          <span>UX/UI DESIGN</span>
          <span>FRONTEND ENGINEERING</span>
          <span>PRODUCT INTERFACES</span>
          <span>AVAILABLE FOR PROJECTS</span>
          <span>FULLSTACK DEVELOPER</span>
          <span>UX/UI DESIGN</span>
          <span>FRONTEND ENGINEERING</span>
          <span>PRODUCT INTERFACES</span>
        </div>
      </div>

      <div class="footer-content reveal-up">
        <p>Let’s create something useful, clean and memorable.</p>

        <div class="footer-actions">
          <a href="mailto:gabriel@email.com">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Gabriel-Alb" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026</span>
        <span>Gabriel Albuquerque Silva</span>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isHeaderDark = ref(false)

let observer = null
let scrollRaf = null

const navItems = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

const featuredProjects = [
  {
    title: 'SITOP Platform',
    year: '2026',
    description:
      'Interface operacional com navegação lateral, filtros, dados dinâmicos e visualização modular.',
    visual: 'visual-one',
    class: 'featured-large',
  },
  {
    title: 'Workflow OS',
    year: '2026',
    description:
      'Sistema de ordens de serviço com clientes, imagens, valores e fluxo de operação.',
    visual: 'visual-two',
    class: 'featured-small',
  },
  {
    title: 'Portfolio Experience',
    year: '2026',
    description:
      'Experiência visual moderna com animações, tipografia forte e apresentação profissional.',
    visual: 'visual-three',
    class: 'featured-small',
  },
]

const metrics = [
  {
    value: '7+',
    label: 'anos de experiência',
  },
  {
    value: 'Full',
    label: 'entrega de ponta a ponta',
  },
  {
    value: 'UX',
    label: 'foco em experiência',
  },
]

const experienceItems = [
  {
    title: 'Interface Design',
    description:
      'Criação de telas modernas, responsivas e bem distribuídas, com foco em clareza visual e usabilidade.',
    tags: ['UI', 'UX', 'Visual'],
  },
  {
    title: 'Frontend Engineering',
    description:
      'Componentização, organização de código, integração com APIs e construção de fluxos escaláveis.',
    tags: ['Vue', 'Tailwind', 'Vite'],
  },
  {
    title: 'Backend Integration',
    description:
      'Estruturação de endpoints, autenticação, conexão com banco de dados e regras de negócio.',
    tags: ['Node', 'APIs', 'Database'],
  },
  {
    title: 'Product Experience',
    description:
      'Pensamento de produto aplicado à jornada do usuário, reduzindo atrito e melhorando a navegação.',
    tags: ['Product', 'Flow', 'Strategy'],
  },
]

function updateHeaderTheme() {
  const samplePoint = 74
  const sections = [...document.querySelectorAll('[data-theme]')]

  const activeSection = sections.find(section => {
    const rect = section.getBoundingClientRect()

    return rect.top <= samplePoint && rect.bottom >= samplePoint
  })

  isHeaderDark.value = activeSection?.dataset.theme === 'dark'
}

function onScroll() {
  if (scrollRaf) {
    cancelAnimationFrame(scrollRaf)
  }

  scrollRaf = requestAnimationFrame(updateHeaderTheme)
}

onMounted(() => {
  updateHeaderTheme()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateHeaderTheme)

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -40px 0px',
    },
  )

  document.querySelectorAll('.reveal-up').forEach(element => {
    observer.observe(element)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateHeaderTheme)

  if (scrollRaf) {
    cancelAnimationFrame(scrollRaf)
  }

  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.portfolio-page {
  --cream: #f2eee4;
  --sand: #d4c8b3;
  --black: #0d0d0c;
  --black-soft: #151514;
  --muted: rgba(13, 13, 12, 0.58);
  --accent: #c7b7a3;
  --accent-soft: rgba(199, 183, 163, 0.24);

  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 18% 8%, rgba(255, 255, 255, 0.28), transparent 24%),
    radial-gradient(circle at 82% 18%, rgba(13, 13, 12, 0.08), transparent 28%),
    linear-gradient(180deg, #f2eee4 0%, #e4dccb 48%, #d4c8b3 100%);
  color: var(--black);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

.grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 90;
  opacity: 0.14;
  mix-blend-mode: multiply;
  background-image:
    linear-gradient(rgba(13, 13, 12, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(13, 13, 12, 0.05) 1px, transparent 1px);
  background-size: 4px 4px;
}

.ambient {
  pointer-events: none;
  position: fixed;
  z-index: 0;
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.28;
  animation: ambientFloat 14s ease-in-out infinite alternate;
}

.ambient-one {
  top: 12%;
  left: -10%;
  width: 440px;
  height: 440px;
  background: rgba(255, 255, 255, 0.44);
}

.ambient-two {
  right: -12%;
  bottom: 18%;
  width: 520px;
  height: 520px;
  background: rgba(13, 13, 12, 0.22);
  animation-delay: 2s;
}

/* HEADER */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background: rgba(242, 238, 228, 0.58);
  backdrop-filter: blur(28px);
  border-bottom: 1px solid rgba(13, 13, 12, 0.08);
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    color 0.35s ease;
}

.site-header.is-dark {
  background: rgba(13, 13, 12, 0.58);
  border-bottom-color: rgba(242, 238, 228, 0.08);
}

.header-inner {
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  color: var(--black);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.04em;
  text-decoration: none;
  transition: color 0.35s ease;
}

.site-header.is-dark .header-logo {
  color: var(--cream);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-letter-hover {
  position: relative;
  display: block;
  height: 20px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 450;
  line-height: 20px;
  text-decoration: none;
}

.nav-line {
  display: flex;
}

.nav-line-bottom {
  position: absolute;
  top: 100%;
  left: 0;
}

.nav-letter {
  display: inline-block;
  transform: translateY(0);
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.32s ease;
  will-change: transform;
}

.nav-letter-top {
  color: rgba(13, 13, 12, 0.68);
}

.nav-letter-bottom {
  color: var(--black);
}

.site-header.is-dark .nav-letter-top {
  color: rgba(242, 238, 228, 0.68);
}

.site-header.is-dark .nav-letter-bottom {
  color: var(--accent);
}

.nav-letter-hover:hover .nav-letter,
.nav-letter-hover:focus-visible .nav-letter {
  transform: translateY(-100%);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

/* PAGE */

.page-panel {
  position: relative;
  z-index: 4;
}

/* HERO */

.hero-section {
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 100vh;
  padding: 86px 28px 34px;
  display: grid;
  align-items: stretch;
}

.hero-inner {
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
  display: grid;
  align-items: center;
}

.hero-main {
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.hero-title {
  width: min(1280px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: clamp(52px, 10vw, 164px);
  line-height: 0.84;
  letter-spacing: -0.085em;
  font-weight: 950;
}

.hero-line {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  gap: 28px;
  align-items: center;
}

.hero-line-dev {
  grid-template-columns: 310px minmax(0, 1fr);
}

.hero-word {
  display: block;
  will-change: transform, opacity;
}

.hero-word-full {
  text-align: left;
  animation: heroFromLeft 1.15s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-word-dev {
  text-align: right;
  font-style: italic;
  animation: heroFromRight 1.15s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.12s;
}

.hero-inline-text {
  max-width: 310px;
  color: rgba(13, 13, 12, 0.62);
  font-size: clamp(12px, 0.95vw, 15px);
  line-height: 1.35;
  letter-spacing: -0.015em;
  font-weight: 650;
}

.hero-inline-right {
  text-align: left;
}

.hero-inline-left {
  text-align: right;
  justify-self: end;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 38px;
}

.hero-actions a {
  border: 1px solid rgba(13, 13, 12, 0.14);
  border-radius: 999px;
  padding: 13px 18px;
  color: var(--black);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(18px);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.hero-actions a:hover {
  color: var(--cream);
  background: var(--black);
  transform: translateY(-2px);
}

/* DARK INTRO */

.dark-transition {
  overflow: hidden;
  min-height: 62vh;
  margin-top: -1px;
  border-radius: 44px 44px 0 0;
  background:
    radial-gradient(circle at 24% 24%, rgba(199, 183, 163, 0.16), transparent 26%),
    radial-gradient(circle at 82% 52%, rgba(242, 238, 228, 0.1), transparent 28%),
    var(--black);
  color: var(--cream);
  display: grid;
  place-items: center;
  padding: 96px 28px 72px;
}

.dark-transition::before {
  content: '';
  position: absolute;
  inset: -1px;
  background:
    linear-gradient(180deg, rgba(242, 238, 228, 0.08), transparent 22%),
    linear-gradient(90deg, transparent, rgba(242, 238, 228, 0.04), transparent);
}

.transition-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(38px);
  opacity: 0.46;
  animation: organicFloat 9s ease-in-out infinite;
}

.transition-orb-left {
  left: 8%;
  bottom: 18%;
  width: 210px;
  height: 210px;
  background: rgba(199, 183, 163, 0.24);
}

.transition-orb-right {
  top: 18%;
  right: 10%;
  width: 270px;
  height: 270px;
  background: rgba(242, 238, 228, 0.1);
  animation-delay: 1.4s;
}

.transition-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  text-align: center;
}

.transition-content span {
  display: inline-flex;
  margin-bottom: 22px;
  border: 1px solid rgba(242, 238, 228, 0.16);
  border-radius: 999px;
  padding: 9px 15px;
  color: rgba(242, 238, 228, 0.62);
  font-size: 10px;
  font-weight: 950;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.transition-content p {
  margin: 0;
  font-size: clamp(28px, 4.2vw, 68px);
  line-height: 1;
  letter-spacing: -0.064em;
  font-weight: 880;
}

/* FEATURED */

.featured-section {
  overflow: hidden;
  margin-top: -1px;
  border-radius: 0;
  background: var(--black);
  color: var(--cream);
  padding: 80px 28px 120px;
}

.featured-heading {
  max-width: 1680px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: 220px minmax(0, 760px);
  gap: 34px;
  align-items: end;
}

.featured-heading span {
  color: rgba(242, 238, 228, 0.46);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.featured-heading h2 {
  margin: 0;
  font-size: clamp(30px, 4vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.068em;
  font-weight: 880;
}

.profile-strip {
  max-width: 1680px;
  margin: 0 auto 26px;
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 18px;
}

.profile-info-card {
  min-height: 128px;
  border: 1px solid rgba(242, 238, 228, 0.12);
  border-radius: 30px;
  padding: 22px;
  background: rgba(242, 238, 228, 0.055);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-info-card span {
  color: rgba(242, 238, 228, 0.48);
  font-size: 10px;
  font-weight: 950;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.profile-info-card strong {
  max-width: 780px;
  color: var(--cream);
  font-size: clamp(22px, 2.1vw, 34px);
  line-height: 1.04;
  letter-spacing: -0.052em;
}

.featured-grid {
  max-width: 1680px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  grid-template-rows: repeat(2, minmax(310px, auto));
  gap: 20px;
}

.featured-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(242, 238, 228, 0.12);
  border-radius: 34px;
  background: rgba(242, 238, 228, 0.05);
  min-height: 310px;
  transition:
    border-color 0.35s ease,
    background 0.35s ease;
}

.featured-card:hover {
  border-color: rgba(199, 183, 163, 0.34);
  background: rgba(242, 238, 228, 0.075);
}

.featured-large {
  grid-row: 1 / span 2;
  min-height: 640px;
}

.featured-small {
  min-height: 310px;
}

.featured-visual {
  position: absolute;
  inset: 0;
}

.featured-visual::before {
  content: '';
  position: absolute;
  inset: 26px;
  border: 1px solid rgba(242, 238, 228, 0.1);
  border-radius: 28px;
}

.visual-one {
  background:
    radial-gradient(circle at 25% 22%, rgba(199, 183, 163, 0.22), transparent 24%),
    radial-gradient(circle at 70% 68%, rgba(242, 238, 228, 0.13), transparent 30%),
    linear-gradient(135deg, #151514, #0d0d0c);
}

.visual-two {
  background:
    radial-gradient(circle at 74% 28%, rgba(199, 183, 163, 0.18), transparent 24%),
    linear-gradient(135deg, #24241f, #0d0d0c);
}

.visual-three {
  background:
    radial-gradient(circle at 78% 22%, rgba(199, 183, 163, 0.18), transparent 24%),
    radial-gradient(circle at 24% 74%, rgba(242, 238, 228, 0.16), transparent 30%),
    linear-gradient(135deg, #0d0d0c, #22221d);
}

.featured-info {
  position: absolute;
  inset: auto 0 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  padding: 26px;
}

.featured-small .featured-info {
  grid-template-columns: 1fr;
}

.featured-info span {
  color: rgba(242, 238, 228, 0.48);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.22em;
}

.featured-info h3 {
  margin: 9px 0 0;
  font-size: clamp(28px, 3.25vw, 54px);
  line-height: 0.98;
  letter-spacing: -0.068em;
}

.featured-info p {
  align-self: end;
  margin: 0;
  color: rgba(242, 238, 228, 0.62);
  font-size: 14px;
  line-height: 1.48;
  font-weight: 650;
}

/* ABOUT */

.light-panel {
  margin-top: -42px;
  border-radius: 44px 44px 0 0;
  background:
    radial-gradient(circle at 15% 12%, rgba(255, 255, 255, 0.26), transparent 25%),
    linear-gradient(180deg, #f2eee4 0%, #e4dccb 100%);
  box-shadow: 0 -34px 90px rgba(13, 13, 12, 0.18);
}

.about-section {
  max-width: 1680px;
  margin-left: auto;
  margin-right: auto;
  padding: 112px 28px;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 66px;
}

.about-sticky {
  position: sticky;
  top: 130px;
  align-self: start;
}

.about-sticky span {
  display: block;
  margin-bottom: 18px;
  color: rgba(13, 13, 12, 0.5);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.about-sticky h2 {
  margin: 0;
  font-size: clamp(28px, 2.9vw, 48px);
  line-height: 1.02;
  letter-spacing: -0.058em;
}

.about-text {
  margin: 0 0 28px;
  font-size: clamp(28px, 3.6vw, 62px);
  line-height: 1;
  letter-spacing: -0.068em;
  font-weight: 840;
}

.about-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.metric-card {
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(13, 13, 12, 0.12);
  border-radius: 28px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(20px);
}

.metric-card strong {
  font-size: clamp(34px, 4vw, 62px);
  line-height: 0.94;
  letter-spacing: -0.07em;
}

.metric-card span {
  max-width: 150px;
  color: rgba(13, 13, 12, 0.58);
  font-size: 12px;
  line-height: 1.35;
  font-weight: 850;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* STACK */

.light-solid-panel {
  background:
    radial-gradient(circle at 18% 15%, rgba(255, 255, 255, 0.24), transparent 24%),
    radial-gradient(circle at 86% 76%, rgba(13, 13, 12, 0.07), transparent 26%),
    #e4dccb;
  color: var(--black);
}

.stack-section {
  margin-top: -1px;
  padding: 104px 28px 72px;
}

.stack-header,
.stack-layout,
.project-list-heading,
.project-list {
  max-width: 1680px;
  margin-left: auto;
  margin-right: auto;
}

.stack-header {
  margin-bottom: 62px;
  display: grid;
  grid-template-columns: minmax(0, 780px) minmax(260px, 420px);
  gap: 70px;
  align-items: end;
}

.stack-header h2 {
  margin: 0;
  font-size: clamp(34px, 4.8vw, 82px);
  line-height: 0.95;
  letter-spacing: -0.078em;
}

.stack-header p {
  margin: 0;
  color: rgba(13, 13, 12, 0.58);
  font-size: 17px;
  line-height: 1.42;
  font-weight: 700;
}

.stack-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.stack-column {
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(13, 13, 12, 0.16);
  padding: 24px 0 0;
}

.stack-column h3 {
  margin: 0;
  font-size: clamp(26px, 2.8vw, 46px);
  line-height: 1;
  letter-spacing: -0.062em;
}

.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stack-tags span {
  border: 1px solid rgba(13, 13, 12, 0.14);
  border-radius: 999px;
  padding: 10px 13px;
  color: rgba(13, 13, 12, 0.7);
  font-size: 10px;
  font-weight: 950;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* EXPERIENCE */

.project-list-section {
  margin-top: -1px;
  padding: 80px 28px 112px;
}

.project-list-heading {
  display: grid;
  grid-template-columns: 220px minmax(0, 620px);
  gap: 34px;
  margin-bottom: 36px;
  border-top: 1px solid rgba(13, 13, 12, 0.14);
  padding-top: 24px;
}

.project-list-heading span {
  color: rgba(13, 13, 12, 0.5);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.project-list-heading p {
  margin: 0;
  color: rgba(13, 13, 12, 0.62);
  font-size: 17px;
  line-height: 1.35;
  font-weight: 700;
}

.project-list {
  display: flex;
  flex-direction: column;
}

.project-row {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr) 320px;
  gap: 28px;
  align-items: center;
  min-height: 128px;
  border-top: 1px solid rgba(13, 13, 12, 0.14);
  padding: 25px 0;
}

.project-row:last-child {
  border-bottom: 1px solid rgba(13, 13, 12, 0.14);
}

.project-row-index {
  color: rgba(13, 13, 12, 0.42);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.18em;
}

.project-row-main h3 {
  margin: 0;
  font-size: clamp(28px, 3.2vw, 54px);
  line-height: 1;
  letter-spacing: -0.068em;
}

.project-row-main p {
  max-width: 620px;
  margin: 11px 0 0;
  color: rgba(13, 13, 12, 0.58);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 700;
}

.project-row-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.project-row-tags span {
  border: 1px solid rgba(13, 13, 12, 0.14);
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 10px;
  font-weight: 950;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* FOOTER */

.footer-section {
  overflow: hidden;
  margin-top: -42px;
  border-radius: 44px 44px 0 0;
  background: var(--black);
  color: var(--cream);
  box-shadow: 0 -34px 90px rgba(13, 13, 12, 0.24);
}

.footer-marquee {
  overflow: hidden;
  border-bottom: 1px solid rgba(242, 238, 228, 0.12);
  padding: 22px 0;
}

.footer-marquee div {
  display: flex;
  width: max-content;
  gap: 48px;
  animation: marquee 24s linear infinite;
}

.footer-marquee span {
  color: rgba(242, 238, 228, 0.56);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.28em;
  white-space: nowrap;
}

.footer-content {
  max-width: 1680px;
  margin: 0 auto;
  padding: 88px 28px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 54px;
  align-items: end;
}

.footer-content p {
  max-width: 900px;
  margin: 0;
  font-size: clamp(36px, 5.8vw, 92px);
  line-height: 0.92;
  letter-spacing: -0.08em;
  font-weight: 900;
}

.footer-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-actions a {
  border: 1px solid rgba(242, 238, 228, 0.18);
  border-radius: 999px;
  padding: 14px 20px;
  color: var(--cream);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.14em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.footer-actions a:hover {
  color: var(--black);
  border-color: var(--accent);
  background: var(--accent);
}

.footer-bottom {
  max-width: 1680px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 0 28px 28px;
  color: rgba(242, 238, 228, 0.42);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* REVEAL */

.reveal-up {
  opacity: 0;
  transform: translateY(72px) scale(0.985);
  filter: blur(8px);
  transition:
    opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.delay-1 {
  transition-delay: 0.12s;
}

.delay-2 {
  transition-delay: 0.22s;
}

.delay-3 {
  transition-delay: 0.32s;
}

/* ANIMATIONS */

@keyframes heroFromLeft {
  from {
    opacity: 0;
    transform: translateX(-16vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes heroFromRight {
  from {
    opacity: 0;
    transform: translateX(16vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes organicFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  35% {
    transform: translate3d(0, -14px, 0) rotate(-1deg);
  }

  70% {
    transform: translate3d(0, 8px, 0) rotate(1deg);
  }
}

@keyframes ambientFloat {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(36px, -26px, 0) scale(1.08);
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* RESPONSIVE */

@media (max-width: 1180px) {
  .hero-title {
    width: 100%;
  }

  .hero-line,
  .hero-line-dev {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .hero-inline-text {
    max-width: 520px;
  }

  .hero-inline-right,
  .hero-inline-left {
    justify-self: center;
    text-align: center;
  }

  .hero-word-full,
  .hero-word-dev {
    text-align: center;
  }

  .featured-heading,
  .stack-header {
    grid-template-columns: 1fr;
  }

  .profile-strip {
    grid-template-columns: 1fr;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .featured-large,
  .featured-small {
    grid-row: auto;
    min-height: 420px;
  }

  .featured-info {
    grid-template-columns: 1fr;
  }

  .about-section {
    grid-template-columns: 1fr;
  }

  .about-sticky {
    position: relative;
    top: auto;
  }

  .stack-layout {
    grid-template-columns: 1fr;
  }

  .stack-column {
    min-height: 250px;
  }

  .project-row {
    grid-template-columns: 70px minmax(0, 1fr);
  }

  .project-row-tags {
    grid-column: 2;
    justify-content: flex-start;
  }
}

@media (max-width: 780px) {
  .site-header {
    background: rgba(242, 238, 228, 0.72);
  }

  .site-header.is-dark {
    background: rgba(13, 13, 12, 0.78);
  }

  .header-inner {
    padding: 16px 18px;
  }

  .header-logo {
    font-size: 16px;
  }

  .header-nav {
    gap: 18px;
  }

  .nav-letter-hover {
    font-size: 12px;
  }

  .hero-section {
    position: relative;
    padding: 94px 18px 28px;
  }

  .hero-inner {
    min-height: calc(100vh - 122px);
  }

  .hero-title {
    font-size: clamp(48px, 16vw, 94px);
    letter-spacing: -0.074em;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .hero-actions a {
    width: 100%;
  }

  .dark-transition {
    min-height: 56vh;
    border-radius: 32px 32px 0 0;
    padding: 74px 18px 56px;
  }

  .transition-content p {
    font-size: clamp(30px, 10vw, 52px);
  }

  .featured-section,
  .about-section,
  .stack-section,
  .project-list-section {
    padding-left: 18px;
    padding-right: 18px;
  }

  .featured-section {
    padding-top: 72px;
    padding-bottom: 88px;
  }

  .featured-heading h2 {
    font-size: clamp(30px, 9vw, 48px);
  }

  .profile-info-card {
    min-height: 150px;
    border-radius: 28px;
  }

  .profile-info-card strong {
    font-size: clamp(24px, 8vw, 38px);
  }

  .featured-card {
    min-height: 390px;
    border-radius: 28px;
  }

  .featured-info {
    padding: 22px;
  }

  .featured-info h3,
  .project-row-main h3 {
    font-size: clamp(28px, 9vw, 46px);
  }

  .light-panel {
    margin-top: -28px;
    border-radius: 32px 32px 0 0;
  }

  .about-section {
    padding-top: 86px;
    padding-bottom: 86px;
    gap: 40px;
  }

  .about-text {
    font-size: clamp(30px, 9.5vw, 52px);
  }

  .about-metrics {
    grid-template-columns: 1fr;
  }

  .metric-card {
    min-height: 150px;
  }

  .stack-section {
    padding-top: 82px;
    padding-bottom: 54px;
  }

  .stack-header {
    margin-bottom: 44px;
  }

  .stack-header h2 {
    font-size: clamp(32px, 10vw, 54px);
  }

  .stack-header p {
    font-size: 15px;
  }

  .project-list-section {
    padding-top: 68px;
    padding-bottom: 88px;
  }

  .project-list-heading {
    grid-template-columns: 1fr;
  }

  .project-row {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .project-row-tags {
    grid-column: auto;
  }

  .footer-section {
    margin-top: -28px;
    border-radius: 32px 32px 0 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    padding: 82px 18px;
  }

  .footer-content p {
    font-size: clamp(36px, 11vw, 62px);
  }

  .footer-bottom {
    flex-direction: column;
    padding: 0 18px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-up,
  .hero-word-full,
  .hero-word-dev,
  .ambient,
  .transition-orb,
  .footer-marquee div {
    animation: none;
    transition: none;
  }

  .reveal-up {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
</style>