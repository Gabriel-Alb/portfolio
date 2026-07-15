<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const menuOpen = ref(false)
const activeExperience = ref(0)
const year = new Date().getFullYear()

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

const metrics = [
  { value: '4+', label: 'anos criando produtos digitais' },
  { value: '25+', label: 'projetos entregues com impacto' },
  { value: '100%', label: 'compromisso com qualidade' },
]

const stack = [
  { title: 'Frontend', index: '01', items: ['Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Pinia', 'Vite'] },
  { title: 'Backend', index: '02', items: ['Python', 'Flask', 'Node.js', 'APIs REST', 'WebSockets', 'Testes'] },
  { title: 'Dados', index: '03', items: ['PostgreSQL', 'Redis', 'SQL', 'Modelagem', 'ETL', 'Analytics'] },
  { title: 'DevOps', index: '04', items: ['Docker', 'CI/CD', 'Linux', 'GitHub Actions', 'Nginx', 'Cloud'] },
  { title: 'Produto & UX', index: '05', items: ['UX/UI', 'Figma', 'Acessibilidade', 'Design System', 'Prototipação', 'Pesquisa'] },
  { title: 'Ferramentas', index: '06', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira', 'Scrum'] },
]

const projects = [
  {
    number: '01', category: 'Dashboard analítico', title: 'Nexus Analytics',
    description: 'Plataforma orientada a dados para transformar métricas complexas em decisões claras, com visualizações em tempo real e uma experiência fluida.',
    tech: ['Vue 3', 'TypeScript', 'Tailwind', 'PostgreSQL'], variant: 'analytics',
  },
  {
    number: '02', category: 'Sistema corporativo', title: 'Atlas ERP',
    description: 'Ecossistema modular que integra financeiro, operações e pessoas em uma interface coerente, segura e preparada para escala.',
    tech: ['Vue 3', 'Pinia', 'Flask', 'PostgreSQL'], variant: 'erp',
  },
  {
    number: '03', category: 'Integração & automação', title: 'Fluxo API',
    description: 'Hub de integrações com orquestração visual de workflows, logs inteligentes e monitoramento de processos em tempo real.',
    tech: ['Python', 'Flask', 'Redis', 'Docker'], variant: 'api',
  },
]

const experiences = [
  { period: '2022 — Atual', role: 'Desenvolvedor Full Stack Pleno', company: 'Tecnologia & Produto', text: 'Arquitetura e desenvolvimento de plataformas corporativas com Vue, Python e PostgreSQL. Liderança técnica de módulos, integrações e decisões de experiência.', highlights: ['Arquitetura modular', 'APIs e integrações', 'Performance e UX'] },
  { period: '2020 — 2022', role: 'Desenvolvedor Full Stack', company: 'Soluções digitais', text: 'Construção de sistemas internos e dashboards orientados a dados, automatizando fluxos críticos e aproximando tecnologia das necessidades do negócio.', highlights: ['Dashboards operacionais', 'Automação de processos', 'Testes e observabilidade'] },
  { period: '2018 — 2020', role: 'Desenvolvedor Front-end', company: 'Produtos digitais', text: 'Interfaces responsivas e componentes reutilizáveis para produtos digitais, trabalhando em colaboração próxima com design e back-end.', highlights: ['Vue.js e JavaScript', 'Design systems', 'Acessibilidade'] },
]

const process = [
  ['01', 'Descoberta', 'Entendo o problema, as pessoas e o contexto antes de propor qualquer solução.'],
  ['02', 'Planejamento', 'Transformo objetivos em escopo, arquitetura e um plano de entrega realista.'],
  ['03', 'Design', 'Prototipo fluxos claros e interfaces que equilibram forma, função e acessibilidade.'],
  ['04', 'Desenvolvimento', 'Construo em ciclos curtos, com código legível, testável e preparado para evoluir.'],
  ['05', 'Validação', 'Meço, testo e refino com dados e feedback contínuo de usuários e stakeholders.'],
  ['06', 'Entrega', 'Documento, implanto e acompanho para garantir uma transição segura e sustentável.'],
]

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="portfolio-shell">
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Ir para o início"><span>GA</span><i></i>Gabriel Albuquerque</a>
      <button class="menu-button" :aria-expanded="menuOpen" aria-label="Abrir menu" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav :class="{ open: menuOpen }" aria-label="Navegação principal">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      </nav>
      <a class="availability" href="mailto:gabriel.alves.dev@email.com"><span></span>Disponível para projetos</a>
    </header>

    <main>
      <section id="inicio" class="hero section-pad">
        <div class="hero-copy">
          <p class="hero-name">Gabriel Albuquerque</p>
          <h1>Desenvolvedor<br><em>Full Stack.</em></h1>
          <p class="hero-intro">Transformo problemas complexos em produtos digitais claros, escaláveis e feitos para gerar resultado.</p>
          <div class="hero-actions">
            <a class="button primary" href="#projetos">Ver projetos <span>↗</span></a>
            <a class="button secondary" href="#contato">Entrar em contato <span>→</span></a>
          </div>
          <div class="social-row"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="orb"></div><div class="visual-window">
            <div class="window-bar"><span></span><span></span><span></span><b>system/portfolio.vue</b></div>
            <div class="window-body"><div class="code-lines"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="signal"><span></span><span></span><span></span><span></span></div></div>
            <div class="window-foot"><span>STATUS</span><b>BUILDING BETTER PRODUCTS</b><i>● ONLINE</i></div>
          </div>
        </div>
        <div class="hero-index"><span>PORTFÓLIO / {{ year }}</span><span>SCROLL PARA EXPLORAR ↓</span></div>
      </section>

      <section id="sobre" class="about section-pad reveal">
        <div class="section-label"><span>01</span> Sobre mim</div>
        <div class="about-grid">
          <h2>Engenharia com visão de <em>produto.</em></h2>
          <div class="about-copy"><p>Sou desenvolvedor Full Stack com experiência em criar aplicações corporativas, dashboards e plataformas orientadas a dados.</p><p>Atuo da estratégia à entrega — conectando design, tecnologia e negócio para construir experiências que funcionam tão bem quanto parecem.</p></div>
        </div>
        <div class="metrics"><article v-for="metric in metrics" :key="metric.value"><strong>{{ metric.value }}</strong><span>{{ metric.label }}</span></article></div>
      </section>

      <section id="stack" class="stack-section section-pad">
        <div class="section-head reveal"><div class="section-label"><span>02</span> Competências</div><h2>Tecnologia é ferramenta.<br><em>Impacto é o objetivo.</em></h2></div>
        <div class="stack-grid">
          <article v-for="group in stack" :key="group.title" class="stack-item reveal"><span>{{ group.index }}</span><h3>{{ group.title }}</h3><div><b v-for="item in group.items" :key="item">{{ item }}</b></div></article>
        </div>
      </section>

      <section id="projetos" class="projects section-pad">
        <div class="section-head reveal"><div class="section-label"><span>03</span> Projetos selecionados</div><h2>Trabalhos que unem<br><em>clareza e complexidade.</em></h2></div>
        <article v-for="project in projects" :key="project.title" class="project reveal">
          <div class="project-copy"><div class="project-meta"><span>{{ project.number }}</span><b>{{ project.category }}</b></div><h3>{{ project.title }}</h3><p>{{ project.description }}</p><div class="project-tags"><span v-for="tech in project.tech" :key="tech">{{ tech }}</span></div><div class="project-links"><a href="#contato">Ver projeto ↗</a><a href="https://github.com" target="_blank" rel="noreferrer">Código ↗</a></div></div>
          <div class="project-visual" :class="project.variant" aria-hidden="true"><div class="mock-browser"><header><i></i><i></i><i></i><span>{{ project.title }}</span></header><div class="mock-layout"><aside><b v-for="n in 6" :key="n"></b></aside><div class="mock-content"><div class="mock-stats"><i v-for="n in 3" :key="n"></i></div><div class="mock-chart"><svg viewBox="0 0 600 180" preserveAspectRatio="none"><path d="M0 150 C75 140 80 65 160 88 S260 160 330 90 S430 25 600 58" /></svg></div><div class="mock-rows"><i v-for="n in 4" :key="n"></i></div></div></div></div></div>
        </article>
      </section>

      <section id="experiencia" class="experience section-pad">
        <div class="section-head reveal"><div class="section-label"><span>04</span> Experiência</div><h2>Uma trajetória construída<br><em>com intenção.</em></h2></div>
        <div class="experience-layout reveal"><div class="experience-tabs" role="tablist"><button v-for="(item, index) in experiences" :key="item.period" :class="{ active: activeExperience === index }" role="tab" :aria-selected="activeExperience === index" @click="activeExperience = index"><span>{{ item.period }}</span><b>{{ item.role }}</b><i>{{ item.company }}</i></button></div><div class="experience-detail"><span>{{ experiences[activeExperience].period }}</span><h3>{{ experiences[activeExperience].role }}</h3><b>{{ experiences[activeExperience].company }}</b><p>{{ experiences[activeExperience].text }}</p><ul><li v-for="item in experiences[activeExperience].highlights" :key="item">{{ item }}</li></ul></div></div>
      </section>

      <section id="processo" class="process section-pad">
        <div class="section-head reveal"><div class="section-label"><span>05</span> Processo</div><h2>Do problema ao produto,<br><em>sem perder o essencial.</em></h2></div>
        <div class="process-grid"><article v-for="step in process" :key="step[0]" class="reveal"><span>{{ step[0] }}</span><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></article></div>
      </section>

      <section id="contato" class="contact section-pad reveal">
        <div class="contact-glow" aria-hidden="true"></div><div><h2>Vamos construir<br>algo <em>relevante?</em></h2><p>Se você tem um desafio, uma ideia ou um produto que precisa evoluir, vamos conversar sobre o próximo passo.</p><a class="button primary" href="mailto:gabriel.alves.dev@email.com">Enviar uma mensagem <span>↗</span></a></div>
        <aside><span>E-MAIL</span><a href="mailto:gabriel.alves.dev@email.com">gabriel.alves.dev@email.com</a><span>CONECTE-SE</span><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></aside>
      </section>
    </main>
    <footer><a class="brand" href="#inicio"><span>GA</span><i></i>Gabriel Albuquerque</a><p>Full Stack Developer · São Paulo, Brasil</p><p>© {{ year }} Todos os direitos reservados.</p></footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');
:global(*){box-sizing:border-box}:global(html){scroll-behavior:smooth}:global(body){margin:0;background:#050607;color:#f4f2f1;font-family:'Manrope',sans-serif}:global(a){color:inherit}.portfolio-shell{--bg:#050607;--panel:#0a0b0d;--text:#f4f2f1;--muted:#929297;--red:#b5122b;--bright:#e42c45;--line:rgba(255,255,255,.12);min-width:0;overflow:hidden;background:var(--bg)}
.section-pad{padding-left:max(24px,calc((100vw - 1320px)/2));padding-right:max(24px,calc((100vw - 1320px)/2))}.site-header{position:fixed;z-index:50;top:0;left:0;right:0;height:76px;padding:0 max(24px,calc((100vw - 1320px)/2));display:flex;align-items:center;border-bottom:1px solid var(--line);background:rgba(5,6,7,.76);backdrop-filter:blur(18px)}.brand{display:flex;align-items:center;gap:12px;text-decoration:none;font-size:13px;font-weight:600}.brand span{font-size:20px;font-weight:700;letter-spacing:-.1em;color:var(--bright)}.brand i{width:1px;height:18px;background:var(--bright);transform:rotate(18deg)}nav{display:flex;gap:36px;margin:auto}nav a,.availability{font-size:12px;text-decoration:none;color:#c7c7cb;transition:.25s}nav a:hover,nav a:focus-visible{color:white}.availability{display:flex;align-items:center;gap:8px}.availability span{width:7px;height:7px;border-radius:50%;background:#53c68c;box-shadow:0 0 14px #53c68c}.menu-button{display:none}
.hero{position:relative;min-height:100vh;padding-top:148px;padding-bottom:70px;display:grid;grid-template-columns:minmax(0,.92fr) minmax(480px,1.08fr);align-items:center;gap:70px}.hero-copy{position:relative;z-index:2}.hero-name{font-family:'DM Mono';font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--bright)}h1,h2,h3,p{margin-top:0}.hero h1{margin:24px 0 30px;font-size:clamp(64px,7.3vw,112px);line-height:.85;letter-spacing:-.075em;font-weight:500}.hero h1 em,.section-head h2 em,.about h2 em,.contact h2 em{font-family:'Playfair Display',serif;font-weight:500;color:var(--bright)}.hero-intro{max-width:570px;font-size:clamp(17px,1.6vw,22px);line-height:1.55;color:#aaaab0}.hero-actions{display:flex;gap:12px;margin-top:38px}.button{min-height:54px;padding:0 22px;display:inline-flex;align-items:center;justify-content:space-between;gap:36px;border:1px solid var(--line);text-decoration:none;font-size:13px;font-weight:600;transition:.3s}.button.primary{background:var(--red);border-color:var(--red)}.button:hover,.button:focus-visible{transform:translateY(-3px);border-color:var(--bright);box-shadow:0 14px 30px rgba(181,18,43,.2)}.button.secondary:hover{background:#111216}.social-row{display:flex;gap:28px;margin-top:32px}.social-row a{font:11px 'DM Mono';text-decoration:none;color:#8e8e94}.hero-visual{position:relative;height:min(620px,66vh);perspective:1200px}.orb{position:absolute;width:70%;aspect-ratio:1;left:18%;top:8%;border-radius:50%;background:radial-gradient(circle,rgba(181,18,43,.35),transparent 65%);filter:blur(45px)}.visual-window{position:absolute;inset:8% 2% 4% 5%;border:1px solid rgba(255,255,255,.26);background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(5,6,7,.9));box-shadow:0 45px 100px #000,0 0 55px rgba(181,18,43,.14),inset 0 0 50px rgba(255,255,255,.03);transform:rotateY(-10deg) rotateX(3deg);backdrop-filter:blur(20px)}.window-bar{height:50px;padding:0 18px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--line)}.window-bar span{width:7px;height:7px;border:1px solid #777;border-radius:50%}.window-bar b{margin-left:auto;font:9px 'DM Mono';color:#67676d}.window-body{height:calc(100% - 90px);display:grid;grid-template-columns:.8fr 1.2fr;padding:12%;gap:12%}.code-lines{display:flex;flex-direction:column;gap:18px}.code-lines i{height:3px;background:linear-gradient(90deg,var(--bright),transparent)}.code-lines i:nth-child(2n){width:65%}.signal{display:flex;align-items:flex-end;gap:12px;border-left:1px solid rgba(228,44,69,.6);border-bottom:1px solid rgba(228,44,69,.6);padding:20px}.signal span{width:18%;height:30%;background:linear-gradient(var(--bright),rgba(181,18,43,.12))}.signal span:nth-child(2){height:65%}.signal span:nth-child(3){height:44%}.signal span:nth-child(4){height:90%}.window-foot{height:40px;border-top:1px solid var(--line);padding:0 18px;display:flex;align-items:center;justify-content:space-between;font:8px 'DM Mono';color:#777}.window-foot b{color:#ddd}.window-foot i{font-style:normal;color:#53c68c}.hero-index{position:absolute;bottom:26px;left:max(24px,calc((100vw - 1320px)/2));right:max(24px,calc((100vw - 1320px)/2));display:flex;justify-content:space-between;font:9px 'DM Mono';letter-spacing:.14em;color:#626268}
.section-label{display:flex;align-items:center;gap:14px;font:11px 'DM Mono';letter-spacing:.16em;text-transform:uppercase;color:#8d8d93}.section-label span{color:var(--bright)}.about{padding-top:140px;padding-bottom:140px;background:#090a0c}.about-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:12%;margin-top:54px}.about h2,.section-head h2{font-size:clamp(46px,5.4vw,78px);line-height:1.02;letter-spacing:-.06em;font-weight:500}.about-copy p{font-size:17px;line-height:1.7;color:#a0a0a6}.metrics{display:grid;grid-template-columns:repeat(3,1fr);margin-top:90px;border-top:1px solid var(--line)}.metrics article{padding:32px 36px 0 0;border-right:1px solid var(--line);display:flex;align-items:flex-end;gap:22px}.metrics article:last-child{border-right:0;padding-left:36px}.metrics strong{font-size:clamp(48px,5vw,74px);line-height:1;color:var(--bright);letter-spacing:-.07em}.metrics span{max-width:160px;font-size:11px;line-height:1.45;text-transform:uppercase;color:#85858b}
.stack-section,.projects,.experience,.process{padding-top:130px;padding-bottom:130px}.section-head{display:grid;grid-template-columns:280px 1fr;align-items:start;margin-bottom:90px}.section-head h2{margin:0}.stack-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.stack-item{min-height:300px;padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:.3s}.stack-item:hover{background:linear-gradient(145deg,rgba(181,18,43,.1),transparent)}.stack-item>span{font:10px 'DM Mono';color:var(--bright)}.stack-item h3{margin:50px 0 44px;font-size:28px;font-weight:500}.stack-item div{display:flex;flex-wrap:wrap;gap:8px}.stack-item b,.project-tags span{border:1px solid var(--line);padding:8px 10px;font:9px 'DM Mono';font-weight:400;color:#9b9ba1}
.projects{background:#090a0c}.project{display:grid;grid-template-columns:.72fr 1.28fr;min-height:590px;border-top:1px solid var(--line);padding:70px 0;gap:8%;align-items:center}.project:nth-of-type(odd){grid-template-columns:1.28fr .72fr}.project:nth-of-type(odd) .project-copy{order:2}.project-meta{display:flex;align-items:center;gap:22px;font:10px 'DM Mono';text-transform:uppercase;letter-spacing:.12em;color:var(--bright)}.project-copy h3{font-size:clamp(44px,5vw,72px);font-weight:500;letter-spacing:-.06em;margin:24px 0}.project-copy>p{font-size:15px;line-height:1.7;color:#96969c;max-width:500px}.project-tags{display:flex;flex-wrap:wrap;gap:7px;margin:28px 0}.project-links{display:flex;gap:28px}.project-links a{font-size:12px;text-underline-offset:6px}.project-visual{position:relative;min-height:440px;background:radial-gradient(circle at 80% 20%,rgba(181,18,43,.22),transparent 42%),#07080a;display:flex;align-items:center;padding:7%;overflow:hidden}.project-visual::before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 45%,rgba(255,255,255,.04));pointer-events:none}.mock-browser{width:100%;border:1px solid rgba(255,255,255,.2);background:#0b0c0f;box-shadow:0 35px 70px #000;transform:perspective(900px) rotateY(-7deg)}.erp .mock-browser{transform:perspective(900px) rotateY(7deg)}.mock-browser header{height:36px;display:flex;align-items:center;gap:6px;padding:0 12px;border-bottom:1px solid var(--line)}.mock-browser header i{width:5px;height:5px;border-radius:50%;background:#444}.mock-browser header span{margin-left:auto;font:7px 'DM Mono';color:#666}.mock-layout{display:grid;grid-template-columns:70px 1fr;min-height:300px}.mock-layout aside{border-right:1px solid var(--line);padding:24px 12px}.mock-layout aside b{display:block;height:4px;background:#2a2b30;margin-bottom:18px}.mock-content{padding:22px}.mock-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.mock-stats i{height:45px;border:1px solid var(--line);background:linear-gradient(145deg,rgba(181,18,43,.14),transparent)}.mock-chart{height:130px;margin:15px 0;border:1px solid var(--line);padding:15px}.mock-chart svg{width:100%;height:100%;overflow:visible}.mock-chart path{fill:none;stroke:var(--bright);stroke-width:3;filter:drop-shadow(0 0 6px var(--red))}.mock-rows{display:grid;grid-template-columns:1fr 1fr;gap:8px}.mock-rows i{height:25px;background:#14151a}
.experience-layout{display:grid;grid-template-columns:.9fr 1.1fr;border-top:1px solid var(--line)}.experience-tabs button{width:100%;min-height:140px;padding:28px 24px;text-align:left;color:inherit;background:transparent;border:0;border-bottom:1px solid var(--line);cursor:pointer;display:grid;grid-template-columns:130px 1fr;gap:8px;transition:.25s}.experience-tabs button:hover,.experience-tabs button.active{background:linear-gradient(90deg,rgba(181,18,43,.15),transparent);padding-left:34px}.experience-tabs span{grid-row:span 2;font:10px 'DM Mono';color:#777}.experience-tabs b{font-size:16px}.experience-tabs i{font-size:12px;font-style:normal;color:var(--bright)}.experience-detail{padding:58px 8%;border-left:1px solid var(--line)}.experience-detail>span{font:10px 'DM Mono';color:var(--bright)}.experience-detail h3{font-size:clamp(36px,4vw,58px);letter-spacing:-.055em;margin:25px 0 8px}.experience-detail>b{color:var(--bright)}.experience-detail p{margin:45px 0;color:#9d9da3;line-height:1.7;font-size:16px}.experience-detail ul{list-style:none;padding:0}.experience-detail li{padding:12px 0;border-bottom:1px solid var(--line);font-size:13px}.experience-detail li::before{content:'↳';color:var(--bright);margin-right:12px}
.process{background:#090a0c}.process-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}.process-grid article{min-height:260px;padding:32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.process-grid article:nth-child(3n){border-right:0}.process-grid span{font:11px 'DM Mono';color:var(--bright)}.process-grid h3{margin:58px 0 18px;font-size:25px}.process-grid p{font-size:13px;line-height:1.65;color:#8f8f95;max-width:300px}
.contact{position:relative;min-height:760px;padding-top:150px;padding-bottom:130px;display:grid;grid-template-columns:1.25fr .75fr;align-items:center;gap:12%;border-bottom:1px solid var(--line)}.contact-glow{position:absolute;left:15%;bottom:-30%;width:55%;height:70%;background:radial-gradient(ellipse,rgba(181,18,43,.4),transparent 66%);filter:blur(70px);pointer-events:none}.contact>div:not(.contact-glow),.contact aside{position:relative}.contact h2{font-size:clamp(64px,7.5vw,112px);line-height:.92;letter-spacing:-.07em;font-weight:500}.contact>div>p{max-width:620px;color:#aaaab0;line-height:1.7;font-size:17px;margin:35px 0}.contact aside{display:flex;flex-direction:column;border-left:1px solid var(--line);padding-left:46px}.contact aside span{font:9px 'DM Mono';letter-spacing:.15em;color:#666;margin:28px 0 12px}.contact aside a{width:max-content;margin:6px 0;text-decoration:none;font-size:15px}.contact aside a:first-of-type{font-size:18px;color:var(--bright)}footer{min-height:110px;padding:0 max(24px,calc((100vw - 1320px)/2));display:flex;align-items:center;gap:50px}footer p{margin:0;font:9px 'DM Mono';color:#666;text-transform:uppercase;letter-spacing:.1em}footer p:last-child{margin-left:auto}
.reveal{opacity:0;transform:translateY(36px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1)}.reveal.is-visible{opacity:1;transform:none}
@media(max-width:980px){.availability{display:none}.hero{grid-template-columns:1fr;padding-top:140px}.hero-visual{height:460px}.about-grid,.section-head{grid-template-columns:1fr;gap:40px}.stack-grid{grid-template-columns:repeat(2,1fr)}.project,.project:nth-of-type(odd){grid-template-columns:1fr}.project:nth-of-type(odd) .project-copy{order:0}.experience-layout,.contact{grid-template-columns:1fr}.contact aside{margin-top:60px}.process-grid{grid-template-columns:repeat(2,1fr)}.process-grid article:nth-child(3n){border-right:1px solid var(--line)}.process-grid article:nth-child(2n){border-right:0}}
@media(max-width:700px){.section-pad{padding-left:20px;padding-right:20px}.site-header{height:68px;padding:0 20px}.site-header nav{position:absolute;top:68px;left:0;right:0;display:none;flex-direction:column;gap:0;background:#090a0c;border-bottom:1px solid var(--line);padding:14px 20px}.site-header nav.open{display:flex}.site-header nav a{padding:15px 0;border-bottom:1px solid var(--line)}.menu-button{margin-left:auto;display:flex;width:42px;height:42px;flex-direction:column;justify-content:center;gap:6px;background:none;border:0}.menu-button span{width:22px;height:1px;background:white}.hero{min-height:auto;padding-top:120px;padding-bottom:80px;gap:50px}.hero h1{font-size:clamp(54px,16vw,78px)}.hero-intro{font-size:16px}.hero-actions{flex-direction:column}.button{width:100%}.hero-visual{height:330px}.visual-window{inset:2%;transform:rotateY(-5deg)}.window-body{padding:9%;gap:6%}.hero-index{display:none}.about,.stack-section,.projects,.experience,.process{padding-top:90px;padding-bottom:90px}.about-grid{margin-top:38px}.about h2,.section-head h2{font-size:42px}.metrics{grid-template-columns:1fr;margin-top:55px}.metrics article,.metrics article:last-child{padding:26px 0;border-right:0;border-bottom:1px solid var(--line)}.section-head{margin-bottom:55px}.stack-grid{grid-template-columns:1fr}.stack-item{min-height:260px}.project{padding:55px 0;gap:45px}.project-copy h3{font-size:44px}.project-visual{min-height:330px;padding:5%}.mock-layout{min-height:230px;grid-template-columns:45px 1fr}.mock-content{padding:12px}.mock-chart{height:95px}.experience-tabs button{grid-template-columns:1fr}.experience-tabs span{grid-row:auto}.experience-detail{border-left:0;padding:50px 0}.process-grid{grid-template-columns:1fr}.process-grid article,.process-grid article:nth-child(3n){border-right:0}.contact{min-height:auto;padding-top:100px;padding-bottom:90px}.contact h2{font-size:54px}.contact aside{padding-left:0;border-left:0;border-top:1px solid var(--line);padding-top:25px;overflow-wrap:anywhere}.contact aside a:first-of-type{font-size:15px}footer{padding:30px 20px;align-items:flex-start;flex-direction:column;gap:14px}footer p:last-child{margin-left:0}}
@media(prefers-reduced-motion:reduce){:global(html){scroll-behavior:auto}.reveal{opacity:1;transform:none;transition:none}.button,.stack-item{transition:none}}
@keyframes hero-enter{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes visual-enter{from{opacity:0;transform:rotateY(-10deg) rotateX(3deg) translateX(35px)}to{opacity:1;transform:rotateY(-10deg) rotateX(3deg)}}
@keyframes section-enter{from{opacity:.55;transform:translateY(18px)}to{opacity:1;transform:none}}
.hero-copy{animation:hero-enter .9s cubic-bezier(.2,.8,.2,1) both}
.visual-window{animation:visual-enter 1.1s .12s cubic-bezier(.2,.8,.2,1) both}
.reveal{opacity:1;transform:none;transition:none}.reveal.is-visible{animation:section-enter .75s cubic-bezier(.2,.8,.2,1) both}
@media(prefers-reduced-motion:reduce){.hero-copy,.visual-window,.reveal.is-visible{animation:none}}
</style>
