import gsap from "gsap";

const elements = new Map();

let active = null;
let listening = false;

const clamp = gsap.utils.clamp;

function getMetrics(el) {
  const rect = el.getBoundingClientRect();

  const offsetX = Number(gsap.getProperty(el, "x")) || 0;
  const offsetY = Number(gsap.getProperty(el, "y")) || 0;

  const left = rect.left - offsetX;
  const top = rect.top - offsetY;

  return {
    left,
    top,
    right: left + rect.width,
    bottom: top + rect.height,
    centerX: left + rect.width / 2,
    centerY: top + rect.height / 2,
  };
}

function getDistance(x, y, rect) {
  const dx = Math.max(rect.left - x, 0, x - rect.right);

  const dy = Math.max(rect.top - y, 0, y - rect.bottom);

  return Math.hypot(dx, dy);
}

function reset(entry) {
  if (!entry) return;

  entry.xTo(0);
  entry.yTo(0);
}

function resetActive() {
  reset(active);
  active = null;
}

function handlePointerMove(event) {
  const allowed = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!allowed || reducedMotion || event.pointerType === "touch") {
    resetActive();
    return;
  }

  let closest = null;
  let closestDistance = Infinity;

  for (const entry of elements.values()) {
    if (
      entry.el.closest("[inert]") ||
      getComputedStyle(entry.el).visibility === "hidden"
    ) {
      continue;
    }

    const rect = getMetrics(entry.el);

    const distance = getDistance(event.clientX, event.clientY, rect);

    if (distance <= entry.radius && distance < closestDistance) {
      closest = { ...entry, rect, distance };
      closestDistance = distance;
    }
  }

  if (active?.el !== closest?.el) {
    resetActive();
  }

  if (!closest) return;

  active = elements.get(closest.el);

  const influence = Math.pow(1 - closest.distance / active.radius, 1.5);

  const x =
    (event.clientX - closest.rect.centerX) * active.strength * influence;

  const y =
    (event.clientY - closest.rect.centerY) * active.strength * influence;

  active.xTo(clamp(-active.maxMovement, active.maxMovement, x));

  active.yTo(clamp(-active.maxMovement, active.maxMovement, y));
}

function startListening() {
  if (listening) return;

  listening = true;

  window.addEventListener("pointermove", handlePointerMove, { passive: true });

  window.addEventListener("scroll", resetActive, {
    passive: true,
  });

  window.addEventListener("blur", resetActive);
}

function stopListening() {
  if (!listening) return;

  listening = false;

  window.removeEventListener("pointermove", handlePointerMove);

  window.removeEventListener("scroll", resetActive);
  window.removeEventListener("blur", resetActive);
}

export default {
  mounted(el, binding) {
    const options = binding.value || {};

    elements.set(el, {
      el,
      radius: options.radius ?? 100,
      strength: options.strength ?? 0.35,
      maxMovement: options.maxMovement ?? 20,

      xTo: gsap.quickTo(el, "x", {
        duration: 0.45,
        ease: "power3.out",
      }),

      yTo: gsap.quickTo(el, "y", {
        duration: 0.45,
        ease: "power3.out",
      }),
    });

    startListening();
  },

  unmounted(el) {
    if (active?.el === el) {
      resetActive();
    }

    gsap.killTweensOf(el);
    elements.delete(el);

    if (elements.size === 0) {
      stopListening();
    }
  },
};
