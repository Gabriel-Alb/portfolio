<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#0a0a0b] text-white">
    <!-- background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl"
      ></div>
      <div
        class="absolute right-[-100px] top-[80px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl"
      ></div>
      <div
        class="absolute bottom-[-140px] left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]"
      ></div>
    </div>

    <div class="relative z-10">
      <!-- header -->
      <header class="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16"
        >
          <a href="#home" class="text-lg font-semibold tracking-tight text-white">
            Gabriel<span class="text-white/50">.</span>
          </a>

          <nav class="hidden items-center gap-8 md:flex">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="text-sm text-white/65 transition hover:text-white"
            >
              {{ item.label }}
            </a>
          </nav>

          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15"
          >
            Contato
          </a>
        </div>
      </header>

      <!-- hero -->
      <section id="home" class="px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:px-16 lg:pt-24">
        <div
          class="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>


            <h1
              class="mt-6 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Desenvolvedor focado em criar experiências digitais
              <span class="text-white/55">modernas, elegantes e funcionais.</span>
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Portfólio com foco em interfaces premium, aplicações bem estruturadas e soluções
              pensadas para unir design, performance e escalabilidade.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Ver projetos
              </a>

              <a
                href="#about"
                class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Sobre mim
              </a>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-2xl"
              >
                <p class="text-2xl font-semibold text-white">{{ stat.value }}</p>
                <p class="mt-2 text-sm text-white/55">{{ stat.label }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
              class="overflow-hidden rounded-[32px] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            >
              <div
                class="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5"
              >
                <div class="mb-5 flex items-center gap-2">
                  <span class="h-3 w-3 rounded-full bg-red-400/90"></span>
                  <span class="h-3 w-3 rounded-full bg-yellow-400/90"></span>
                  <span class="h-3 w-3 rounded-full bg-green-400/90"></span>
                </div>

                <div class="space-y-4">
                  <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p class="text-sm text-white/45">Especialidade</p>
                    <h2 class="mt-2 text-2xl font-semibold text-white">
                      Frontend premium
                    </h2>
                    <p class="mt-3 text-sm leading-7 text-white/60">
                      Interfaces modernas, componentização, responsividade e experiência visual
                      refinada.
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p class="text-sm text-white/45">Stack</p>
                      <p class="mt-2 font-medium text-white">Vue • Tailwind</p>
                    </div>

                    <div class="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p class="text-sm text-white/45">Foco</p>
                      <p class="mt-2 font-medium text-white">UI + estrutura</p>
                    </div>
                  </div>

                  <div
                    class="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-5"
                  >
                    <p class="text-sm text-white/45">Visão</p>
                    <p class="mt-2 text-sm leading-7 text-white/70">
                      Criar produtos que transmitam sofisticação, clareza e confiança logo no
                      primeiro contato.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- about -->
      <section id="about" class="px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div class="mx-auto max-w-7xl">
          <div class="mb-10 max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Sobre</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Um portfólio pensado para transmitir
              <span class="text-white/55">qualidade, clareza e sofisticação.</span>
            </h2>
          </div>

          <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div class="rounded-[32px] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl">
              <p class="text-base leading-8 text-white/70 md:text-lg">
                Sou desenvolvedor com foco em criar interfaces bem resolvidas, componentes
                reutilizáveis e aplicações com estrutura sólida. Gosto de unir estética moderna com
                organização real de projeto, para que o resultado não seja só bonito, mas também
                sustentável no dia a dia.
              </p>

              <p class="mt-6 text-base leading-8 text-white/55 md:text-lg">
                Este portfólio foi pensado como uma apresentação premium, minimalista e elegante,
                seguindo uma linguagem visual inspirada em vidro, profundidade suave e acabamento
                clean.
              </p>
            </div>

            <div class="grid gap-6">
              <div
                v-for="item in highlights"
                :key="item.title"
                class="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl"
              >
                <p class="text-sm text-white/45">{{ item.eyebrow }}</p>
                <h3 class="mt-2 text-xl font-semibold text-white">{{ item.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-white/60">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section id="skills" class="px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div class="mx-auto max-w-7xl">
          <div class="mb-10 max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Skills</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tecnologias e áreas em que eu atuo
            </h2>
          </div>

          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="group in skillGroups"
              :key="group.title"
              class="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl"
            >
              <h3 class="text-lg font-semibold text-white">{{ group.title }}</h3>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="item in group.items"
                  :key="item"
                  class="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/75"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- projects -->
      <section id="projects" class="px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div class="mx-auto max-w-7xl">
          <div class="mb-10 max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Projetos</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Trabalhos em destaque
            </h2>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article
              v-for="project in projects"
              :key="project.title"
              class="group rounded-[32px] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]"
            >
              <div
                class="mb-5 h-52 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]"
              ></div>

              <div class="flex items-center justify-between gap-4">
                <span
                  class="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50"
                >
                  {{ project.category }}
                </span>
              </div>

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
                  class="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-sm text-white/75"
                >
                  {{ tech }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- contact -->
      <section id="contact" class="px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16 lg:px-16">
        <div class="mx-auto max-w-7xl">
          <div
            class="rounded-[36px] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl md:p-10 lg:p-12"
          >
            <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div class="max-w-3xl">
                <p class="text-sm font-medium uppercase tracking-[0.25em] text-white/45">
                  Contato
                </p>
                <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Vamos criar algo visualmente forte e bem estruturado.
                </h2>
                <p class="mt-5 text-base leading-8 text-white/65 md:text-lg">
                  Aqui você pode colocar seu e-mail, LinkedIn, GitHub e uma chamada mais comercial
                  para oportunidades, freelas e projetos.
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
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15"
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
const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

const stats = [
  { value: '+3', label: 'Projetos em destaque' },
  { value: '100%', label: 'Layout responsivo' },
  { value: 'UI', label: 'Foco em experiência visual' },
]

const highlights = [
  {
    eyebrow: 'Design',
    title: 'Visual premium',
    description:
      'Linguagem moderna com transparência, profundidade sutil e aparência elegante.',
  },
  {
    eyebrow: 'Código',
    title: 'Estrutura organizada',
    description:
      'Base pensada para crescer com facilidade, sem virar um projeto confuso.',
  },
  {
    eyebrow: 'Experiência',
    title: 'Responsividade real',
    description:
      'Boa leitura e boa apresentação tanto no desktop quanto no mobile.',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Componentização'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', '.NET', 'APIs REST'],
  },
  {
    title: 'UI / UX',
    items: ['Interfaces modernas', 'Glass UI', 'Responsividade', 'Escalabilidade'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'Vite', 'Figma'],
  },
]

const projects = [
  {
    category: 'Sistema web',
    title: 'Projeto Portfolio',
    description:
      'Uma landing page premium pensada para apresentar identidade, projetos e presença profissional com visual elegante.',
    techs: ['Vue', 'Tailwind', 'Responsive'],
  },
  {
    category: 'Dashboard',
    title: 'Painel moderno',
    description:
      'Interface focada em organização visual, clareza da informação e estética mais refinada.',
    techs: ['UI', 'Charts', 'UX'],
  },
  {
    category: 'Aplicação',
    title: 'Sistema escalável',
    description:
      'Projeto com foco em estrutura reutilizável, boa base de código e crescimento sustentável.',
    techs: ['Arquitetura', 'Componentes', 'Clean UI'],
  },
]
</script>