import { nextTick, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToPosition } from "./useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  scrollStep: 0.65,
  initialHold: 0.45,
  perspective: 1200,
  incomingRotation: 7,
  outgoingRotation: 12,
  outgoingScale: 1.22,
  sideScale: 0.78,
};

const clamp = gsap.utils.clamp(0, 1);
const lerp = gsap.utils.interpolate;

function smooth(value) {
  const t = clamp(value);

  return t * t * (3 - 2 * t);
}

function getCardTransform(offset, width, height) {
  const mobile = width < 768;
  const distance = Math.abs(offset);

  const incomingX = width * (mobile ? 0.72 : 0.47);
  const outgoingX = width * (mobile ? 1.05 : 0.94);

  if (offset < 0) {
    const t = Math.min(distance, 1.4);

    return {
      x: -outgoingX * t,
      y: height * 0.22 * t,
      scale: 1 + (CONFIG.outgoingScale - 1) * t,
      rotation:
        -CONFIG.outgoingRotation * Math.sin((Math.min(t, 1) * Math.PI) / 2),
      rotationY: 8 * Math.min(t, 1),
      opacity: 1 - smooth((distance - 1.05) / 0.3),
    };
  }

  if (offset <= 1) {
    const t = distance;
    const arc = Math.sin((t * Math.PI) / 2);

    return {
      x: incomingX * (1 - Math.pow(1 - t, 2)),
      y: -height * 0.14 * arc,
      scale: lerp(1, CONFIG.sideScale, t),
      rotation: CONFIG.incomingRotation * arc,
      rotationY: -9 * arc,
      opacity: 1,
    };
  }

  const t = smooth((distance - 1) / 2);

  return {
    x: incomingX * lerp(1, 0.64, t),
    y: -height * lerp(0.14, 0.2, t),
    scale: lerp(CONFIG.sideScale, 0.3, t),
    rotation: lerp(CONFIG.incomingRotation, -3, t),
    rotationY: lerp(-9, -15, t),
    opacity: 1 - smooth((distance - 2.5) / 1.2),
  };
}

export function useFeaturedProjectsMotion({
  sectionRef,
  activeIndex,
  isAnimated,
}) {
  let media;
  let trigger;

  function goToProject(index) {
    if (!trigger) return;

    const total = trigger.animation.duration();

    const position =
      index === 0
        ? CONFIG.initialHold * 0.75
        : CONFIG.initialHold + index * CONFIG.scrollStep;

    const progress = clamp(position / total);

    scrollToPosition(lerp(trigger.start, trigger.end, progress));
  }

  onMounted(() => {
    const section = sectionRef.value;

    if (!section) return;

    const track = section.querySelector("[data-featured-track]");

    const stage = section.querySelector("[data-featured-stage]");

    const gallery = section.querySelector("[data-featured-gallery]");

    const progressBar = section.querySelector("[data-featured-progress]");

    const cards = Array.from(section.querySelectorAll("[data-featured-card]"));

    if (!track || !stage || !gallery || cards.length < 2) {
      return;
    }

    const captions = cards.map((card) =>
      card.querySelector("[data-featured-caption]"),
    );

    media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const state = { position: 0 };
      const lastIndex = cards.length - 1;

      let viewportWidth = 0;
      let viewportHeight = 0;
      let imageHeight = 0;
      let scrollDistance = 0;
      let previousPosition = NaN;
      let alive = true;

      track.setAttribute("data-animated", "");
      isAnimated.value = true;

      cards.forEach((card, index) => {
        card.style.zIndex = String(cards.length - index);
      });

      const captionSetters = captions.map((caption) =>
        caption ? gsap.quickSetter(caption, "opacity") : null,
      );

      const setProgress = progressBar
        ? gsap.quickSetter(progressBar, "scaleX")
        : null;

      function measure() {
        viewportWidth = gallery.clientWidth;
        viewportHeight = stage.clientHeight;

        imageHeight =
          cards[0].querySelector(".featured-image")?.offsetHeight ||
          (cards[0].offsetWidth * 9) / 16;

        scrollDistance =
          viewportHeight * (CONFIG.initialHold + CONFIG.scrollStep * lastIndex);

        gallery.style.setProperty("--featured-pivot", `${imageHeight / 2}px`);

        track.style.height = `${viewportHeight + scrollDistance}px`;

        previousPosition = NaN;
      }

      function render() {
        const position = gsap.utils.clamp(0, lastIndex, state.position);

        if (position === previousPosition) return;

        previousPosition = position;

        cards.forEach((card, index) => {
          const offset = index - position;
          const distance = Math.abs(offset);

          const transform = getCardTransform(
            offset,
            viewportWidth,
            viewportHeight,
          );

          const { x, y, scale, rotation, rotationY, opacity } = transform;

          const visible = opacity > 0.001 && offset > -1.4 && offset < 3.7;

          const visibility = visible ? "visible" : "hidden";

          if (card.style.visibility !== visibility) {
            card.style.visibility = visibility;
          }

          if (!visible) return;

          card.style.transform = `
            translate3d(-50%, 0, 0)
            translate3d(${x}px, ${y - imageHeight / 2}px, 0)
            perspective(${CONFIG.perspective}px)
            rotateZ(${rotation}deg)
            rotateY(${rotationY}deg)
            scale(${scale})
          `;

          card.style.opacity = opacity;

          const captionOpacity = 1 - smooth(distance / 0.32);

          captionSetters[index]?.(captionOpacity);
        });

        const nextIndex = Math.round(position);

        if (activeIndex.value !== nextIndex) {
          activeIndex.value = nextIndex;
        }

        setProgress?.(position / lastIndex);
      }

      measure();
      render();

      const animation = gsap.timeline({
        paused: true,
        onUpdate: render,
      });

      animation
        .to(state, {
          position: 0,
          duration: CONFIG.initialHold,
          ease: "none",
        })
        .to(state, {
          position: lastIndex,
          duration: CONFIG.scrollStep * lastIndex,
          ease: "none",
        });

      trigger = ScrollTrigger.create({
        trigger: track,
        animation,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        invalidateOnRefresh: true,
        onRefreshInit: measure,
        onRefresh: () => {
          previousPosition = NaN;
          render();
        },
      });

      nextTick(() => {
        if (alive) ScrollTrigger.refresh();
      });

      document.fonts?.ready.then(() => {
        if (alive) ScrollTrigger.refresh();
      });

      return () => {
        alive = false;

        trigger?.kill();
        animation.kill();

        trigger = null;
        isAnimated.value = false;

        track.removeAttribute("data-animated");
        track.style.removeProperty("height");

        gallery.style.removeProperty("--featured-pivot");

        cards.forEach((card) => {
          card.style.removeProperty("transform");
          card.style.removeProperty("opacity");
          card.style.removeProperty("visibility");
          card.style.removeProperty("z-index");
        });

        gsap.set(captions.filter(Boolean), {
          clearProps: "opacity",
        });

        if (progressBar) {
          gsap.set(progressBar, {
            clearProps: "transform",
          });
        }
      };
    });
  });

  onBeforeUnmount(() => {
    media?.revert();
  });

  return {
    goToProject,
  };
}
