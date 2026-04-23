<template>
  <div class="prism-coin-mask">
    <div ref="viewerWrap" class="prism-coin-stage" @wheel.capture.prevent>
      <spline-viewer
        v-if="ready"
        ref="viewerEl"
        class="spline-viewer"
        :url="sceneUrl"
        loading-anim-type="none"
      ></spline-viewer>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const ready = ref(false);
const viewerWrap = ref(null);
const viewerEl = ref(null);

const sceneUrl = "https://prod.spline.design/MZby0EO7RaIvGQ5l/scene.splinecode";

const blockWheel = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const blockGesture = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const blockPinchTouch = (event) => {
  if (event.touches && event.touches.length > 1) {
    event.preventDefault();
    event.stopPropagation();
  }
};

onMounted(async () => {
  await import("https://unpkg.com/@splinetool/viewer@1.12.81/build/spline-viewer.js");
  ready.value = true;

  await nextTick();

  const target = viewerEl.value || viewerWrap.value;

  if (target) {
    target.addEventListener("wheel", blockWheel, {
      passive: false,
      capture: true,
    });
    target.addEventListener("mousewheel", blockWheel, {
      passive: false,
      capture: true,
    });
    target.addEventListener("DOMMouseScroll", blockWheel, {
      passive: false,
      capture: true,
    });

    target.addEventListener("gesturestart", blockGesture, {
      passive: false,
      capture: true,
    });
    target.addEventListener("gesturechange", blockGesture, {
      passive: false,
      capture: true,
    });
    target.addEventListener("gestureend", blockGesture, {
      passive: false,
      capture: true,
    });

    target.addEventListener("touchmove", blockPinchTouch, {
      passive: false,
      capture: true,
    });
  }
});

onBeforeUnmount(() => {
  const target = viewerEl.value || viewerWrap.value;

  if (target) {
    target.removeEventListener("wheel", blockWheel, { capture: true });
    target.removeEventListener("mousewheel", blockWheel, { capture: true });
    target.removeEventListener("DOMMouseScroll", blockWheel, {
      capture: true,
    });

    target.removeEventListener("gesturestart", blockGesture, {
      capture: true,
    });
    target.removeEventListener("gesturechange", blockGesture, {
      capture: true,
    });
    target.removeEventListener("gestureend", blockGesture, {
      capture: true,
    });

    target.removeEventListener("touchmove", blockPinchTouch, {
      capture: true,
    });
  }
});
</script>

<style scoped>
.prism-coin-mask {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;

  /* topo | direita | baixo | esquerda */
  clip-path: inset(0 0 10% 0 round 50px);
}

.prism-coin-stage {
  position: absolute;
  inset: -5% -7% -8% -12%;
  touch-action: pan-x pan-y;
  overscroll-behavior: contain;
}

.spline-viewer {
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  transform: scale(0.9) translateX(2%) translateY(-2%);
  transform-origin: center;
}
</style>
