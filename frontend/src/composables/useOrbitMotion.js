import { ref, onMounted, onBeforeUnmount } from "vue";
import { createOrbitGeometry } from "../utils/orbitGeometry";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function useOrbitMotion(stage) {
  const isDragging = ref(false);
  let dispose = () => {};

  onMounted(() => {
    const element = stage.value;
    const cards = [...element.querySelectorAll("[data-orbit-card]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const events = new AbortController();

    let geometry = null;
    let phase = 0;
    let velocity = 0;
    let hovered = -1;
    let hoverBlocked = false;
    let coasting = false;
    let pointerId = null;
    let dragSign = 1;
    let startX = 0;
    let lastX = 0;
    let lastTime = 0;
    let samples = [];
    let frameId = 0;
    let lastFrame = 0;
    let inView = true;
    let hoverScale = cards.map(() => 0);

    const cardIndexAt = (x, y) => {
      const card = document
        .elementFromPoint(x, y)
        ?.closest("[data-orbit-card]");
      return card && element.contains(card) && !card.hidden
        ? Number(card.dataset.index)
        : -1;
    };

    function setHovered(index) {
      if (hovered === index) return;
      if (hovered >= 0) cards[hovered]?.classList.remove("is-hovered");
      hovered = index;
      if (hovered >= 0) cards[hovered]?.classList.add("is-hovered");
      start();
    }

    function draw(deltaTime = 1 / 60) {
      if (!geometry) return;
      const { count, length, size, width, height, atDistance } = geometry;
      const blend = 1 - Math.exp(-14 * deltaTime);

      for (let i = 0; i < count; i++) {
        const card = cards[i];
        const point = atDistance(phase + (i * length) / count);
        const highlighted = hovered === i && !isDragging.value && !coasting;
        const targetScale = highlighted ? 1 : 0;
        hoverScale[i] = reduceMotion.matches
          ? targetScale
          : hoverScale[i] + (targetScale - hoverScale[i]) * blend;

        const scale =
          (0.83 + 0.17 * point.near) *
          point.perspective *
          (1 + 0.11 * hoverScale[i]);
        const x = width / 2 + point.x - size / 2;
        const y = height / 2 + point.y - size * 0.375;
        const angleZ = -point.cos * 8;
        const angleY = -point.cos * 9;

        card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateZ(${angleZ.toFixed(2)}deg) rotateY(${angleY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        card.style.zIndex = String(
          Math.round(15 + point.near * 75) + (highlighted ? 105 : 0),
        );
      }

      element.dataset.ready = "true";
    }

    function tick(now) {
      frameId = 0;
      const deltaTime = lastFrame
        ? Math.min((now - lastFrame) / 1000, 0.055)
        : 1 / 60;
      lastFrame = now;

      if (!reduceMotion.matches && !isDragging.value && geometry) {
        if (coasting) {
          phase = (phase + velocity * deltaTime) % geometry.length;
          velocity *= Math.exp(-1.9 * deltaTime);
          if (Math.abs(velocity) < 32) {
            coasting = false;
            velocity = 0;
            hoverBlocked = false;
          }
        } else if (hovered < 0) {
          phase = (phase + geometry.speed * deltaTime) % geometry.length;
        }
      }

      draw(deltaTime);
      const moving =
        !reduceMotion.matches && (isDragging.value || coasting || hovered < 0);
      const easing = hoverScale.some(
        (value, index) =>
          Math.abs(
            value -
              (index === hovered && !isDragging.value && !coasting ? 1 : 0),
          ) > 0.005,
      );
      if (moving || easing) start();
    }

    function start() {
      if (frameId || !geometry || !inView || document.hidden) return;
      frameId = requestAnimationFrame(tick);
    }

    function stop() {
      cancelAnimationFrame(frameId);
      frameId = 0;
      lastFrame = 0;
    }

    function resize() {
      const width = element.clientWidth;
      const height = element.clientHeight;
      if (
        !width ||
        !height ||
        (geometry?.width === width && geometry?.height === height)
      )
        return;

      const progress = geometry
        ? (((phase % geometry.length) + geometry.length) % geometry.length) /
          geometry.length
        : 0;
      geometry = createOrbitGeometry(width, height, cards.length);
      phase = progress * geometry.length;
      setHovered(-1);

      cards.forEach((card, index) => {
        card.hidden = index >= geometry.count;
        if (!card.hidden) card.style.width = `${geometry.size}px`;
      });

      draw();
      start();
    }

    function onPointerDown(event) {
      if ((event.pointerType === "mouse" && event.button !== 0) || !geometry)
        return;
      const index = cardIndexAt(event.clientX, event.clientY);
      const selected = index < 0 ? Math.floor(geometry.count * 0.75) : index;
      const offset = (selected * geometry.length) / geometry.count;
      const before = geometry.atDistance(phase + offset - 8);
      const after = geometry.atDistance(phase + offset + 8);
      const derivative = after.x - before.x;
      const point = geometry.atDistance(phase + offset);

      dragSign =
        Math.abs(derivative) > 1.5
          ? Math.sign(derivative)
          : point.sin >= 0
            ? -1
            : 1;
      pointerId = event.pointerId;
      startX = lastX = event.clientX;
      lastTime = performance.now();
      samples = [];
      velocity = 0;
      coasting = false;
      hoverBlocked = true;
      setHovered(-1);
      isDragging.value = true;
      element.setPointerCapture(pointerId);
      start();
    }

    function onPointerMove(event) {
      if (!isDragging.value) {
        if (!hoverBlocked && event.pointerType === "mouse")
          setHovered(cardIndexAt(event.clientX, event.clientY));
        return;
      }
      if (event.pointerId !== pointerId) return;

      const now = performance.now();
      const deltaX = event.clientX - lastX;
      const elapsed = Math.max(0.006, (now - lastTime) / 1000);
      const distance = deltaX * dragSign * 1.28;

      phase = (phase + distance) % geometry.length;
      samples.push({
        time: now,
        velocity: clamp(distance / elapsed, -2100, 2100),
        weight: Math.abs(deltaX) + 1,
      });
      samples = samples.filter((sample) => now - sample.time < 100);
      lastX = event.clientX;
      lastTime = now;

      if (reduceMotion.matches) draw();
    }

    function release(event) {
      if (!isDragging.value || event.pointerId !== pointerId) return;
      isDragging.value = false;
      pointerId = null;
      if (element.hasPointerCapture(event.pointerId))
        element.releasePointerCapture(event.pointerId);

      const recent = samples.filter(
        (sample) => performance.now() - sample.time < 100,
      );
      const weight = recent.reduce((sum, item) => sum + item.weight, 0);
      const speed = weight
        ? recent.reduce((sum, item) => sum + item.velocity * item.weight, 0) /
          weight
        : 0;
      velocity =
        !reduceMotion.matches && Math.abs(event.clientX - startX) > 4
          ? clamp(speed * 1.1, -2100, 2100)
          : 0;
      coasting = Math.abs(velocity) > 35;
      hoverBlocked = coasting;
      if (!coasting && event.pointerType === "mouse")
        setHovered(cardIndexAt(event.clientX, event.clientY));
      start();
    }

    function onPointerCancel(event) {
      if (event.pointerId !== pointerId) return;
      velocity = 0;
      samples = [];
      release(event);
    }

    function onLostCapture() {
      isDragging.value = false;
      pointerId = null;
    }

    function onVisibilityChange() {
      if (document.hidden) stop();
      else start();
    }

    const options = { signal: events.signal };
    element.addEventListener("pointerdown", onPointerDown, options);
    element.addEventListener("pointermove", onPointerMove, options);
    element.addEventListener("pointerup", release, options);
    element.addEventListener("pointercancel", onPointerCancel, options);
    element.addEventListener("lostpointercapture", onLostCapture, options);
    element.addEventListener(
      "pointerleave",
      (event) => {
        if (!isDragging.value && event.pointerType === "mouse") setHovered(-1);
      },
      options,
    );
    element.addEventListener(
      "pointerover",
      (event) => {
        if (!isDragging.value && !hoverBlocked && event.pointerType === "mouse")
          setHovered(cardIndexAt(event.clientX, event.clientY));
      },
      options,
    );
    document.addEventListener("visibilitychange", onVisibilityChange, options);
    reduceMotion.addEventListener("change", onVisibilityChange, options);

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
        if (inView) start();
        else stop();
      },
      { threshold: 0.01 },
    );

    resizeObserver.observe(element);
    visibilityObserver.observe(element);
    resize();

    dispose = () => {
      events.abort();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      stop();
    };
  });

  onBeforeUnmount(() => dispose());
  return { isDragging };
}
