import { onMounted, onBeforeUnmount } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

export function scrollToPosition(target) {
  if (lenis) {
    lenis.scrollTo(target, {
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    return
  }

  window.scrollTo({
    top: target,
    behavior: 'auto',
  })
}

export function useSmoothScroll() {
  let media

  onMounted(() => {
    media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const instance = new Lenis({
        autoRaf: false,
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: false,
      })

      lenis = instance

      const update = () => ScrollTrigger.update()

      const tick = (time) => {
        instance.raf(time * 1000)
      }

      instance.on('scroll', update)

      gsap.ticker.add(tick)

      ScrollTrigger.refresh()

      return () => {
        gsap.ticker.remove(tick)

        instance.off('scroll', update)
        instance.destroy()

        if (lenis === instance) {
          lenis = null
        }
      }
    })
  })

  onBeforeUnmount(() => {
    media?.revert()
  })
}