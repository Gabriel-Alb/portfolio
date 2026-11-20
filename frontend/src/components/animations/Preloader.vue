<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['complete'])

const preloader = ref(null)
const greeting = ref(null)
const greetingText = ref(null)
const wave = ref(null)
const wavePath = ref(null)

const greetings = [
    'Olá',
    'Hello',
    'Bonjour',
    'أهلا',
    'Hola',
    '你好',
    'Hallo',
    'こんにちは',
    'হ্যালো',
    'Ciao',
]

let timeline
let previousOverflow = ''
let scrollLocked = false

const curve = {
    depth: 0
}

function updateCurve() {
    const depth = curve.depth

    wavePath.value?.setAttribute(
        'd',
        `M 0 0 H 1000 Q 500 ${depth * 2} 0 0 Z`
    )
}

function unlockScroll() {
    if (!scrollLocked) return

    document.body.style.overflow = previousOverflow
    scrollLocked = false
}

function finish() {
    unlockScroll()
    emit('complete')
}

onMounted(() => {
    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) {
        finish()
        return
    }

    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    scrollLocked = true

    timeline = gsap.timeline({
        onComplete: finish
    })

    timeline.set(greeting.value, {
        autoAlpha: 0,
        y: 14
    })



    timeline.set(greeting.value, {
        autoAlpha: 1,
        y: 0
    })

    greetings.forEach((word, index) => {
        timeline.call(() => {
            greetingText.value.textContent = word
        })

        timeline.to({}, {
            duration: index === 0 ? 0.8 : 0.13
        })
    })


    greetings.forEach((word) => {
        timeline.call(() => {
            greetingText.value.textContent = word
        })

        timeline.to({}, {
            duration: 0.13
        })
    })


    timeline.addLabel('reveal')

    timeline.to(
        preloader.value,
        {
            y: () =>
                -(
                    window.innerHeight +
                    wave.value.getBoundingClientRect().height +
                    2
                ),
            duration: 1.3,
            ease: 'power3.inOut',
            force3D: true
        },
        'reveal'
    )

    timeline.to(
        curve,
        {
            depth: 72,
            duration: 0.55,
            ease: 'power2.out',
            onUpdate: updateCurve
        },
        'reveal'
    )

    timeline.to(
        curve,
        {
            depth: 0,
            duration: 0.75,
            ease: 'power2.inOut',
            onUpdate: updateCurve
        },
        'reveal+=0.55'
    )
})

onBeforeUnmount(() => {
    timeline?.kill()
    unlockScroll()
})
</script>

<template>
    <div ref="preloader" class="preloader" role="status" aria-label="Carregando portfólio">
        <div ref="greeting" class="preloader-greeting" aria-hidden="true">
            <span class="preloader-dot"></span>
            <span ref="greetingText">Olá</span>
        </div>

        <svg ref="wave" class="preloader-wave" viewBox="0 0 1000 160" preserveAspectRatio="none" aria-hidden="true">
            <path ref="wavePath" d="M 0 0 H 1000 Q 500 0 0 0 Z" fill="#141414" />
        </svg>
    </div>
</template>

<style scoped>
.preloader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
}

.preloader-greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: #fff;
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 400;
    letter-spacing: -0.045em;
    white-space: nowrap;
}

.preloader-dot {
    width: 9px;
    height: 9px;
    background: #fff;
    border-radius: 50%;
    flex-shrink: 0;
}

.preloader-wave {
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    width: 100%;
    height: clamp(80px, 12vw, 160px);
    display: block;
    pointer-events: none;
}
</style>
