import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollToPosition } from './useSmoothScroll'

gsap.registerPlugin(ScrollTrigger)

const HOLD = 0.15
const TRANSITION = 0.75
const TOP_OFFSET = 64

const clamp = gsap.utils.clamp(0, 1)
const ease = gsap.parseEase('power1.out')
const interpolate = gsap.utils.interpolate

export function useServicesMotion({ sectionRef, activeIndex }) {
  let media
  let trigger
  let stages = []

  function selectService(index) {
    if (!trigger || !stages[index]) {
      activeIndex.value = activeIndex.value === index ? -1 : index
      return
    }

    scrollToPosition(trigger.start + stages[index].start)
  }

  onMounted(() => {
    const section = sectionRef.value

    if (!section) return

    const homeFlow = section.closest('[data-home-flow]')
    const nextSection = homeFlow?.querySelector('.next-section')

    const track = section.querySelector('[data-services-list]')
    const content = section.querySelector('[data-services-content]')

    const items = Array.from(
      section.querySelectorAll('[data-service-index]'),
    )

    const panels = items.map((item) =>
      item.querySelector('.service-panel'),
    )

    const headers = items.map((item) =>
      item.querySelector('h3'),
    )

    if (!track || !content || items.length < 2) return
    if (panels.some((panel) => !panel)) return
    if (headers.some((header) => !header)) return

    media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      let panelHeights = []
      let headerHeights = []
      let headerPositions = []
      let viewportHeight = 0
      let contentHeight = 0
      let scrollDistance = 0
      let alive = true

      track.setAttribute('data-scroll-driven', '')

      gsap.set(items, {
        force3D: true,
        clearProps: 'clipPath',
        zIndex: (index) => index + 1,
      })

      const setters = items.map((item) =>
        gsap.quickSetter(item, 'y', 'px'),
      )

      const visibility = items.map(() => null)

      function setVisibility(index, visible) {
        if (visibility[index] === visible) return

        visibility[index] = visible

        items[index].style.visibility =
          visible ? 'visible' : 'hidden'

        items[index].style.pointerEvents =
          visible ? 'auto' : 'none'
      }

      function measure() {
        viewportHeight = window.innerHeight

        contentHeight = Math.max(
          1,
          viewportHeight - TOP_OFFSET,
        )

        panelHeights = panels.map(
          (panel) => panel.offsetHeight,
        )

        headerHeights = headers.map(
          (header, index) =>
            header.offsetHeight + items[index].clientTop,
        )

        let headerOffset = 0

        headerPositions = headerHeights.map((height) => {
          const position = headerOffset

          headerOffset += height

          return position
        })

        let start = 0

        stages = items.map((item, index) => {
          const naturalHeight =
            headerPositions[index] +
            headerHeights[index] +
            panelHeights[index]

          const panDistance = Math.max(
            0,
            naturalHeight - contentHeight + 16,
          )

          const holdDistance = Math.max(
            viewportHeight * HOLD,
            panDistance,
          )

          const transitionDistance =
            index === items.length - 1
              ? 0
              : viewportHeight * TRANSITION

          const stage = {
            index,
            start,
            naturalHeight,
            panDistance,
            holdDistance,
            transitionDistance,
            end: start + holdDistance + transitionDistance,
          }

          start = stage.end

          return stage
        })

        scrollDistance = start

        const exitDistance = nextSection
          ? viewportHeight
          : 0

        const bottomPadding =
          parseFloat(
            window.getComputedStyle(section).paddingBottom,
          ) || 0

        track.style.setProperty(
          '--services-top',
          `${TOP_OFFSET}px`,
        )

        content.style.height = `${contentHeight}px`

        track.style.height = `${
          contentHeight + scrollDistance + exitDistance
        }px`

        homeFlow?.style.setProperty(
          '--services-exit-overlap',
          `${nextSection ? exitDistance + bottomPadding : 0}px`,
        )
      }

      function render(progress) {
        if (!stages.length) return

        const distance = clamp(progress) * scrollDistance

        const stage =
          stages.find((stage) => distance < stage.end) ||
          stages[stages.length - 1]

        const index = stage.index
        const localDistance = distance - stage.start

        const readingProgress = clamp(
          localDistance / stage.holdDistance,
        )

        const transition = stage.transitionDistance
          ? ease(
              clamp(
                (localDistance - stage.holdDistance) /
                  stage.transitionDistance,
              ),
            )
          : 0

        const pan =
          stage.panDistance *
          readingProgress *
          (1 - transition)

        items.forEach((item, itemIndex) => {
          if (itemIndex <= index) {
            setVisibility(itemIndex, true)

            setters[itemIndex](
              headerPositions[itemIndex] - pan,
            )

            return
          }

          if (itemIndex === index + 1) {
            const entryPosition = Math.max(
              contentHeight + stage.panDistance,
              stage.naturalHeight + 16,
            )

            const targetPosition =
              headerPositions[itemIndex]

            const position = interpolate(
              entryPosition,
              targetPosition,
              transition,
            )

            setVisibility(itemIndex, transition > 0)

            setters[itemIndex](position - pan)

            return
          }

          setVisibility(itemIndex, false)

          setters[itemIndex](contentHeight)
        })

        const currentIndex = Math.min(
          transition >= 0.5 ? index + 1 : index,
          items.length - 1,
        )

        if (activeIndex.value !== currentIndex) {
          activeIndex.value = currentIndex
        }
      }

      measure()
      render(0)

      trigger = ScrollTrigger.create({
        trigger: track,
        start: () => `top ${TOP_OFFSET}px`,
        end: () => `+=${scrollDistance}`,
        invalidateOnRefresh: true,

        onRefreshInit: measure,

        onRefresh: (self) => {
          render(self.progress)
        },

        onUpdate: (self) => {
          render(self.progress)
        },
      })

      document.fonts?.ready.then(() => {
        if (alive) ScrollTrigger.refresh()
      })

      return () => {
        alive = false

        trigger?.kill()

        trigger = null
        stages = []

        track.removeAttribute('data-scroll-driven')
        track.style.removeProperty('height')
        track.style.removeProperty('--services-top')
        content.style.removeProperty('height')

        homeFlow?.style.removeProperty(
          '--services-exit-overlap',
        )

        gsap.set(items, {
          clearProps: 'transform,clipPath,zIndex',
        })

        items.forEach((item) => {
          item.style.removeProperty('visibility')
          item.style.removeProperty('pointer-events')
        })
      }
    })
  })

  onBeforeUnmount(() => {
    media?.revert()
  })

  return {
    selectService,
  }
}