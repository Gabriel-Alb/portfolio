import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroScroll({ heroRef, servicesRef }) {
  let media

  onMounted(() => {
    const hero = heroRef.value
    const services = servicesRef.value

    if (!hero || !services) return

    media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        hero,
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        {
          opacity: 0,
          scale: 0.96,
          y: -40,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: services,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      )
    })
  })

  onBeforeUnmount(() => {
    media?.revert()
  })
}