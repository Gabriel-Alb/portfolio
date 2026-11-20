<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const header = ref(null)
const headerSurface = ref(null)
const isHeaderVisible = ref(true)

const brandViewport = ref(null)
const brandName = ref(null)
const brandRole = ref(null)

const navigation = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
]

const revealAfter = 160
const scrollTolerance = 6

const magneticConfig = {
    strength: 0.25,
    radius: 75,
    maxMovement: 14
}

let lastScrollY = 0
let reducedMotion = false
let floatingMode = false
let brandTimeline = null

function showRole() {
    if (reducedMotion) {
        gsap.set(brandName.value, {
            autoAlpha: 0
        })

        gsap.set(brandRole.value, {
            x: 0,
            autoAlpha: 1
        })

        return
    }

    brandTimeline?.play()
}

function showName() {
    if (reducedMotion) {
        gsap.set(brandName.value, {
            x: 0,
            autoAlpha: 1
        })

        gsap.set(brandRole.value, {
            x: brandViewport.value.offsetWidth + 12,
            autoAlpha: 0
        })

        return
    }

    brandTimeline?.reverse()
}

function setupBrandAnimation() {
    const width = brandViewport.value.offsetWidth

    gsap.set(brandName.value, {
        x: 0,
        autoAlpha: 1
    })

    gsap.set(brandRole.value, {
        x: width + 12,
        autoAlpha: 1
    })

    brandTimeline = gsap.timeline({
        paused: true,
        defaults: {
            duration: 0.55,
            ease: 'power3.inOut'
        }
    })

    brandTimeline.to(
        brandName.value,
        {
            x: () => -(brandViewport.value.offsetWidth + 12)
        },
        0
    )

    brandTimeline.to(
        brandRole.value,
        {
            x: 0
        },
        0
    )
}

function setHeaderVisibility(visible) {
    if (isHeaderVisible.value === visible) return

    isHeaderVisible.value = visible

    gsap.to(header.value, {
        yPercent: visible ? 0 : -150,
        autoAlpha: visible ? 1 : 0,
        duration: reducedMotion ? 0 : visible ? 0.55 : 0.3,
        ease: visible ? 'power3.out' : 'power2.in',
        overwrite: 'auto'
    })
}

function updateHeaderSurface(progress) {
    if (!headerSurface.value) return

    gsap.set(headerSurface.value, {
        opacity: gsap.utils.clamp(0, 1, progress)
    })
}

function handleScroll() {
    const currentY = Math.max(0, window.scrollY)
    const difference = currentY - lastScrollY

    if (currentY <= 0) {
        floatingMode = false

        setHeaderVisibility(true)
        updateHeaderSurface(0)

        lastScrollY = currentY
        return
    }

    if (currentY <= revealAfter) {
        setHeaderVisibility(true)

        if (floatingMode) {
            updateHeaderSurface(currentY / revealAfter)
        } else {
            updateHeaderSurface(0)
        }

        lastScrollY = currentY
        return
    }

    updateHeaderSurface(1)

    if (Math.abs(difference) < scrollTolerance) {
        return
    }

    if (difference < 0) {
        floatingMode = true
        setHeaderVisibility(true)
    } else {
        setHeaderVisibility(false)
    }

    lastScrollY = currentY
}

onMounted(() => {
    reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches

    setupBrandAnimation()

    lastScrollY = Math.max(0, window.scrollY)

    if (lastScrollY > revealAfter) {
        floatingMode = true
        isHeaderVisible.value = false

        gsap.set(header.value, {
            yPercent: -150,
            autoAlpha: 0
        })

        updateHeaderSurface(1)
    } else {
        gsap.set(header.value, {
            yPercent: 0,
            autoAlpha: 1
        })

        updateHeaderSurface(0)
    }

    window.addEventListener('scroll', handleScroll, {
        passive: true
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)

    brandTimeline?.kill()

    if (header.value) {
        gsap.killTweensOf(header.value)
    }

    if (headerSurface.value) {
        gsap.killTweensOf(headerSurface.value)
    }

    if (brandName.value) {
        gsap.killTweensOf(brandName.value)
    }

    if (brandRole.value) {
        gsap.killTweensOf(brandRole.value)
    }
})
</script>

<template>
    <header ref="header" class="header-shell" :aria-hidden="!isHeaderVisible" :inert="!isHeaderVisible">
        <div ref="headerSurface" class="header-surface" aria-hidden="true"></div>

        <a href="/" class="header-brand" aria-label="Gabriel Albuquerque — Full Stack Developer" @mouseenter="showRole"
            @mouseleave="showName" @focus="showRole" @blur="showName">
            <span class="brand-copyright" aria-hidden="true">
                ©
            </span>

            <span ref="brandViewport" class="brand-viewport" aria-hidden="true">
                <span ref="brandName" class="brand-word brand-name">
                    Gabriel Albuquerque
                </span>

                <span ref="brandRole" class="brand-word brand-role">
                    Full Stack Developer
                </span>
            </span>
        </a>

        <nav class="header-links" aria-label="Navegação principal">
            <a v-for="item in navigation" :key="item.label" v-magnetic="magneticConfig" :href="item.href"
                class="header-link">
                {{ item.label }}
            </a>
        </nav>
    </header>
</template>

<style scoped>
.header-shell {
    position: fixed;
    top: 8px;
    left: calc(var(--page-gutter) - 14px);
    right: calc(var(--page-gutter) - 14px);
    z-index: 100;

    min-height: 72px;
    padding: 0 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    border-radius: 999px;
    color: var(--color-ink);

    isolation: isolate;
    will-change: transform, opacity;
}

.header-surface {
    position: absolute;
    inset: 0;
    z-index: 0;

    border-radius: inherit;

    background: rgba(245, 245, 245, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.65);

    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    opacity: 0;
    pointer-events: none;
}

.header-brand {
    position: relative;
    z-index: 1;

    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    flex-shrink: 0;

    color: inherit;
    text-decoration: none;

    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.35;
    white-space: nowrap;

    cursor: pointer;
}

.brand-copyright {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    font-family: inherit;
    font-size: 1em;
    font-weight: inherit;
    line-height: 1.35;

    white-space: nowrap;
}

.brand-viewport {
    display: grid;
    grid-template-columns: max-content;
    align-items: center;

    height: 1.35em;
    line-height: 1.35;

    overflow: hidden;
}

.brand-word {
    grid-area: 1 / 1;

    display: block;
    width: max-content;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    white-space: nowrap;
    will-change: transform;
}

.brand-name {
    transform: translateX(0);
}

.brand-role {
    visibility: hidden;
}

.header-links {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    gap: clamp(18px, 2.5vw, 42px);
}

.header-link {
    position: relative;

    display: inline-flex;
    align-items: center;

    font-size: 0.95rem;
    font-weight: 500;

    text-decoration: none;
    color: inherit;

    transition: opacity 0.25s ease;
    will-change: transform;
}

.header-link:hover {
    opacity: 0.55;
}

@media (max-width: 768px) {
    .header-shell {
        min-height: 60px;
    }

    .header-brand,
    .header-link {
        font-size: 0.85rem;
    }

    .header-links {
        gap: 16px;
    }
}

@media (max-width: 480px) {
    .header-shell {
        left: calc(var(--page-gutter) - 10px);
        right: calc(var(--page-gutter) - 10px);
        padding: 0 10px;

        min-height: 56px;
        gap: 8px;
    }

    .header-brand,
    .header-link {
        font-size: 0.75rem;
    }

    .header-links {
        gap: 12px;
    }
}

@media (max-width: 380px) {

    .header-brand,
    .header-link {
        font-size: 0.66rem;
    }

    .header-links {
        gap: 7px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .header-link {
        transition: none;
    }

    .brand-word {
        will-change: auto;
    }
}
</style>
