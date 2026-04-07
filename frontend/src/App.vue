<template>
  <div
    class="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#020202] text-white"
  >
    <!-- background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-[-180px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#B2C8BC]/10 blur-3xl"
      ></div>
      <div
        class="absolute right-[-140px] top-[60px] h-[320px] w-[320px] rounded-full bg-[#B2C2C3]/10 blur-3xl"
      ></div>
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
          <a
            href="#home"
            class="text-lg font-semibold tracking-tight text-white"
          >
            Gabriel
          </a>

          <nav class="ml-auto flex items-center gap-6 md:gap-8">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="nav-letter-hover group relative block h-5 overflow-hidden text-sm font-medium"
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
        class="relative overflow-hidden px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-20 lg:px-16 lg:pb-36 lg:pt-24"
      >
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            class="absolute left-1/2 top-[100%] h-[600px] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(178,200,188,0.22)_0%,rgba(178,200,188,0.14)_28%,rgba(178,194,195,0.08)_48%,rgba(2,2,2,0)_74%)] blur-3xl"
          ></div>
        </div>

        <div class="relative mx-auto max-w-4xl text-center">
          <h1
            class="hero-title hero-fade-up mx-auto max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Full Stack Developer
          </h1>

          <p
            class="hero-fade-up-delay-1 mx-auto mt-7 max-w-2xl text-base leading-8 text-[#B2C2C3] md:mt-8 md:text-lg"
          >
            Desenvolvimento de interfaces modernas, aplicações escaláveis e
            soluções com foco em qualidade visual, organização e performance.
          </p>

          <div
            class="hero-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12"
          >
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-full bg-[#B2C8BC] px-6 py-3 text-sm font-semibold text-[#020202] transition hover:opacity-90"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      <!-- about -->
      <section
        id="about"
        class="relative overflow-hidden bg-[#010101] px-6 py-14 md:px-10 md:py-18 lg:px-16 lg:py-20"
      >
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            class="absolute left-1/2 top-0 h-[180px] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(178,200,188,0.10)_0%,rgba(178,194,195,0.05)_40%,rgba(1,1,1,0)_72%)] blur-3xl"
          ></div>
        </div>

        <div class="relative mx-auto max-w-7xl">
          <div class="max-w-2xl">
            <p
              class="text-sm font-medium uppercase tracking-[0.25em] text-[#B2C8BC]/80"
            >
              About me
            </p>
          </div>

          <div
            class="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8 lg:p-10"
          >
            <div class="max-w-none space-y-6">
              <p class="text-base leading-8 text-white/80 md:text-lg">
                Oi, meu nome é
                <span class="font-semibold text-white">
                  Gabriel Albuquerque Silva</span
                >. Atualmente atuo como
                <span class="font-semibold text-white">
                  Analista de Desenvolvimento de Sistemas Sênior na Petrobras </span
                >, desenvolvendo soluções digitais com foco em qualidade
                técnica, organização e escalabilidade.
              </p>

              <p class="text-base leading-8 text-white/65 md:text-lg">
                Venho construindo uma trajetória sólida, atuando na criação de
                soluções end-to-end desde a concepção até a entrega final para o
                usuário. No dia a dia, trabalho com diferentes linguagens,
                tecnologias e contextos de negócio, sempre buscando unir
                performance, clareza, boa experiência de uso e familiaridade
                para os usuários.
              </p>

              <p class="text-base leading-8 text-white/65 md:text-lg">
                Sou formado em Análise e Desenvolvimento de Sistemas pelo
                <span class="font-semibold text-[#ff8a3d]">Senac</span> e também
                em UX/UI Design pela
                <span class="font-semibold text-[#b38cff]">EBAC</span>, o que
                fortalece ainda mais minha visão técnica e minha capacidade de
                construir interfaces com mais qualidade, clareza, consistência e
                escalabilidade.
              </p>

              <p class="text-base leading-8 text-white/65 md:text-lg">
                Atualmente, estou cursando Engenharia de Software pela
                <span class="font-semibold text-[#f4c95d]">MBA USP/Esalq</span>
                para ampliar ainda mais minha visão estratégica sobre
                desenvolvimento, arquitetura e evolução de produtos digitais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section
        id="skills"
        class="relative overflow-hidden px-6 py-14 md:px-10 md:py-16 lg:px-16"
      >
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(178,200,188,0.24)_0%,rgba(178,194,195,0.12)_35%,rgba(2,2,2,0)_74%)] blur-3xl"
          ></div>
        </div>

        <div class="relative mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p
              class="text-sm font-medium uppercase tracking-[0.25em] text-white/45"
            >
              Skills
            </p>

            <h2
              class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Tecnologias e ferramentas
            </h2>

            <p
              class="mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
            >
              Ferramentas e tecnologias que fazem parte da minha rotina no
              desenvolvimento de interfaces, aplicações e integrações.
            </p>
          </div>

          <div class="relative mt-14 flex justify-center">
            <div class="skills-cluster relative h-[50px] w-full max-w-[1000px]">
              <button
                v-for="(skill, index) in skills"
                :key="skill.name"
                type="button"
                class="skill-orb group absolute"
                :class="skill.motion"
                :style="{
                  left: skill.left,
                  top: skill.top,
                  animationDelay: `${index * 0.22}s`,
                }"
              >
                <span
                  class="skill-orb-core flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.08] text-[11px] font-semibold tracking-[0.04em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[72px] group-hover:w-[72px] group-hover:rounded-[22px] group-hover:bg-white/[0.13] group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] md:h-[64px] md:w-[64px] md:text-xs md:group-hover:h-[82px] md:group-hover:w-[82px]"
                >
                  {{ skill.icon }}
                </span>

                <span
                  class="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-medium whitespace-nowrap text-white/0 opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:text-white/85 group-hover:opacity-100"
                >
                  {{ skill.name }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- projects -->
      <section id="projects" class="px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <div class="mx-auto max-w-7xl">
          <div class="mb-10 max-w-3xl">
            <p
              class="text-sm font-medium uppercase tracking-[0.25em] text-white/45"
            >
              Projetos
            </p>
            <h2
              class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Trabalhos em destaque
            </h2>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article
              v-for="project in projects"
              :key="project.title"
              class="group rounded-[32px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div
                class="mb-5 h-52 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]"
              ></div>

              <span
                class="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50"
              >
                {{ project.category }}
              </span>

              <h3 class="mt-5 text-2xl font-semibold text-white">
                {{ project.title }}
              </h3>

              <p class="mt-4 text-sm leading-7 text-white/60">
                {{ project.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75"
                >
                  {{ tech }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- contact -->
      <section
        id="contact"
        class="px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-16 lg:px-16"
      >
        <div class="mx-auto max-w-7xl">
          <div
            class="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-10 lg:p-12"
          >
            <div
              class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <div class="max-w-3xl">
                <p
                  class="text-sm font-medium uppercase tracking-[0.25em] text-white/45"
                >
                  Contato
                </p>
                <h2
                  class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl"
                >
                  Vamos criar algo visualmente forte e bem estruturado.
                </h2>
                <p class="mt-5 text-base leading-8 text-white/65 md:text-lg">
                  Aqui você pode colocar seu e-mail, LinkedIn, GitHub e uma
                  chamada mais comercial para oportunidades, freelas e projetos.
                </p>
              </div>

              <div class="flex flex-wrap gap-4">
                <a
                  href="mailto:seuemail@exemplo.com"
                  class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Enviar e-mail
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- footer -->
      <footer class="border-t border-white/10 px-6 py-8 md:px-10 lg:px-16">
        <div
          class="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-white/40 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 Gabriel Albuquerque. Todos os direitos reservados.</p>
          <p>Vue + Tailwind • Portfólio</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: "Vue", icon: "VUE", left: "34%", top: "8%", motion: "float-a" },
  {
    name: "JavaScript",
    icon: "JS",
    left: "18%",
    top: "18%",
    motion: "float-b",
  },
  { name: "Node.js", icon: "NODE", left: "50%", top: "15%", motion: "float-c" },
  { name: "Express", icon: "EX", left: "74%", top: "20%", motion: "float-d" },

  { name: ".NET", icon: ".NET", left: "10%", top: "34%", motion: "float-e" },
  { name: "Python", icon: "PY", left: "33%", top: "32%", motion: "float-f" },
  { name: "Java", icon: "JAVA", left: "58%", top: "38%", motion: "float-a" },

  { name: "React", icon: "R", left: "20%", top: "54%", motion: "float-c" },
  { name: "Angular", icon: "NG", left: "46%", top: "50%", motion: "float-d" },
  { name: "Git", icon: "GIT", left: "77%", top: "55%", motion: "float-b" },

  { name: "GitHub", icon: "GH", left: "28%", top: "70%", motion: "float-e" },
  { name: "Figma", icon: "FIG", left: "60%", top: "69%", motion: "float-f" },
  { name: "REST API", icon: "API", left: "46%", top: "84%", motion: "float-a" },
];

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const projects = [
  {
    category: "Sistema web",
    title: "Projeto Portfolio",
    description:
      "Uma landing page premium pensada para apresentar identidade, projetos e presença profissional com visual elegante.",
    techs: ["Vue", "Tailwind", "Responsive"],
  },
  {
    category: "Dashboard",
    title: "Painel moderno",
    description:
      "Interface focada em organização visual, clareza da informação e estética mais refinada.",
    techs: ["UI", "Charts", "UX"],
  },
  {
    category: "Aplicação",
    title: "Sistema escalável",
    description:
      "Projeto com foco em estrutura reutilizável, boa base de código e crescimento sustentável.",
    techs: ["Arquitetura", "Componentes", "Clean UI"],
  },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap");

.portfolio-shell,
.hero-title {
  font-family: "Sora", sans-serif;
}

.hero-title {
  letter-spacing: -0.04em;
}

.hero-fade-up,
.hero-fade-up-delay-1,
.hero-fade-up-delay-2 {
  opacity: 0;
  transform: translateY(22px);
  animation: heroFadeUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-fade-up-delay-1 {
  animation-delay: 0.16s;
}

.hero-fade-up-delay-2 {
  animation-delay: 0.3s;
}

@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(22px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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

.skills-cluster {
  min-height: 420px;
}

.skill-orb {
  transform: translate(-50%, -50%);
}

.skill-orb-core {
  will-change: transform;
}

.float-a {
  animation: floatA 6.6s ease-in-out infinite;
}

.float-b {
  animation: floatB 7.4s ease-in-out infinite;
}

.float-c {
  animation: floatC 6.1s ease-in-out infinite;
}

.float-d {
  animation: floatD 7.9s ease-in-out infinite;
}

.float-e {
  animation: floatE 6.8s ease-in-out infinite;
}

.float-f {
  animation: floatF 7.1s ease-in-out infinite;
}

@keyframes floatA {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(0, -10px, 0);
  }
}

@keyframes floatB {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(6px, -8px, 0);
  }
}

@keyframes floatC {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(-5px, -11px, 0);
  }
}

@keyframes floatD {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(7px, -6px, 0);
  }
}

@keyframes floatE {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(-6px, -7px, 0);
  }
}

@keyframes floatF {
  0%,
  100% {
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
  50% {
    transform: translate(-50%, -50%) translate3d(4px, -9px, 0);
  }
}

@media (max-width: 768px) {
  .skills-cluster {
    min-height: 500px;
  }

  .skill-orb-core {
    height: 56px;
    width: 56px;
    font-size: 10px;
  }
}
</style>
