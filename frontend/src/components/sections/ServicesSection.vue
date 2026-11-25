<script setup>
import { ref } from 'vue'
import { services } from '../../data/services'
import { useServicesMotion } from '../../composables/useServicesMotion'

const sectionRef = ref(null)
const activeIndex = ref(0)

const { selectService } = useServicesMotion({
    sectionRef,
    activeIndex,
})
</script>

<template>
    <section id="services" ref="sectionRef"
        class="services-section relative w-full overflow-clip rounded-t-[20px] px-5 pb-16 pt-14 md:px-6 md:pb-24 md:pt-16">
        <div class="flex flex-col">
            <h2 class="services-heading font-semibold uppercase leading-[0.9] tracking-[-0.065em]">
                What I Do /
            </h2>

            <div class="services-grid mb-16 mt-12 md:mb-20 md:mt-16">
                <div />

                <div class="flex flex-col items-start gap-4 md:flex-row md:gap-10">
                    <span class="services-label shrink-0 pt-1 text-xs uppercase">
                        (Services)
                    </span>

                    <p
                        class="services-intro max-w-[360px] text-[17px] leading-[1.4] tracking-[-0.025em] md:text-[19px]">
                        I build reliable, scalable, and intuitive digital
                        experiences, combining software engineering,
                        modern web technologies, and thoughtful design.
                    </p>
                </div>
            </div>
        </div>

        <div data-services-list class="relative w-full">
            <div data-services-content class="relative w-full">
                <article v-for="(service, index) in services" :key="service.id" :data-service-index="index"
                    class="service-item w-full">
                    <h3>
                        <button type="button" :aria-expanded="activeIndex === index"
                            :aria-controls="`service-panel-${service.id}`"
                            class="services-grid service-trigger w-full cursor-pointer items-start py-4 text-left"
                            @click="selectService(index)">
                            <span class="service-title">
                                ({{ service.id }})
                            </span>

                            <span class="service-title">
                                {{ service.title }}
                            </span>
                        </button>
                    </h3>

                    <div :id="`service-panel-${service.id}`" :class="[
                        'service-panel',
                        { 'is-active': activeIndex === index },
                    ]" :aria-hidden="activeIndex !== index">
                        <div class="service-panel-inner min-h-0 overflow-hidden">
                            <div class="services-grid">
                                <div />

                                <div class="min-w-0 pb-6 md:pl-3">
                                    <p
                                        class="service-description mb-6 mt-4 max-w-[360px] text-[15px] leading-[1.4] tracking-[-0.025em]">
                                        {{ service.description }}
                                    </p>

                                    <ul>
                                        <li v-for="(skill, skillIndex) in service.skills" :key="skill"
                                            class="service-skill flex items-baseline gap-6 py-3">
                                            <span class="service-number shrink-0 font-mono text-xs">
                                                {{ String(skillIndex + 1).padStart(2, '0') }}
                                            </span>

                                            <span
                                                class="service-skill-title text-[19px] font-semibold leading-tight tracking-[-0.045em] md:text-[25px]">
                                                {{ skill }}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-section {
    --services-ink: var(--color-ink, #111111);
    --services-surface: var(--color-surface, #ffffff);
    --services-dark: var(--color-dark, #303030);
    --services-muted: var(--color-muted, #737373);
    --services-border: var(--color-border, #e5e5e5);

    background: var(--services-ink);
    color: var(--services-surface);
}

.services-heading {
    font-size: clamp(3.5rem, 8.2vw, 10rem);
}

.services-grid {
    display: grid;
    grid-template-columns: 41.5% minmax(0, 1fr);
}

.services-intro {
    color: var(--services-surface);
}

.services-label,
.service-number {
    color: color-mix(in srgb,
            var(--services-muted) 65%,
            var(--services-surface));
}

.service-description {
    color: color-mix(in srgb,
            var(--services-surface) 70%,
            var(--services-muted));
}

.service-title {
    font-size: clamp(1.75rem, 3.35vw, 4rem);
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.065em;
}

.service-item {
    background: var(--services-ink);
    border-top: 1px solid color-mix(in srgb,
            var(--services-border) 20%,
            var(--services-ink));
}

.service-skill {
    border-bottom: 1px solid var(--services-dark);
}

.service-skill:last-child {
    border-bottom: 0;
}

.service-skill-title {
    color: var(--services-border);
}

.service-panel {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition:
        grid-template-rows 0.5s ease,
        opacity 0.35s ease;
}

.service-panel.is-active {
    grid-template-rows: 1fr;
    opacity: 1;
}

.service-panel-inner {
    display: flow-root;
}

[data-services-list] {
    overflow-anchor: none;
}

[data-scroll-driven] [data-services-content] {
    position: sticky;
    top: var(--services-top, 64px);
    overflow: clip;
    isolation: isolate;
}

[data-scroll-driven] .service-item {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    will-change: transform;
    backface-visibility: hidden;
}

[data-scroll-driven] .service-panel {
    display: block;
    opacity: 1;
    transition: none;
}

.service-trigger {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
}

.service-trigger:focus-visible {
    outline: 1px solid var(--services-surface);
    outline-offset: -4px;
}

@media (max-width: 767px) {
    .services-grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .service-trigger {
        grid-template-columns: 15% minmax(0, 1fr);
        align-items: baseline;
    }

    .service-panel .services-grid {
        padding-left: 15%;
    }

    .service-trigger>span:first-child {
        font-size: 1.25rem;
    }

    .service-title {
        font-size: clamp(1.5rem, 5.8vw, 2rem);
    }

    .services-heading {
        font-size: clamp(3rem, 11vw, 5rem);
    }
}

@media (prefers-reduced-motion: reduce) {
    .service-panel {
        transition: none;
    }
}
</style>