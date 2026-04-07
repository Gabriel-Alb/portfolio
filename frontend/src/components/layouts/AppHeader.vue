<template>
  <div class="fixed left-0 top-0 z-50 w-full">
    <header
      :class="[
        'relative border-b border-white/10 backdrop-blur-2xl transition-all duration-300',
        isScrolled
          ? 'bg-black/55 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
          : 'bg-black/20',
      ]"
    >
      <div
        :class="[
          'mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16 transition-all duration-300',
          isScrolled ? 'py-3' : 'py-4',
        ]"
      >
        <a
          href="#home"
          class="text-lg font-semibold tracking-tight text-white transition-all duration-300"
          :class="isScrolled ? 'scale-[0.98]' : 'scale-100'"
        >
          Gabriel
        </a>

        <nav class="hidden items-center gap-8 md:flex">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-sm text-white/65 transition hover:text-white"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 active:scale-95 md:hidden"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          aria-label="Abrir menu"
          @click="toggleMobileMenu"
        >
          <i
            class="mdi text-[22px] leading-none transition-all duration-300"
            :class="
              isMobileMenuOpen ? 'mdi-close rotate-90 scale-110' : 'mdi-menu'
            "
          ></i>
        </button>
      </div>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="absolute left-0 top-full w-full md:hidden"
        >
          <div
            class="w-full border-t border-white/10 bg-[#111214]/98 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <nav class="flex flex-col px-4 py-3">
              <a
                v-for="item in navItems"
                :key="item.label"
                :href="item.href"
                class="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.99]"
                @click="closeMobileMenu"
              >
                <span>{{ item.label }}</span>
                <i
                  class="mdi mdi-arrow-top-right text-base text-white/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70"
                ></i>
              </a>
            </nav>
          </div>
        </div>
      </transition>
    </header>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
});

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

function handleResize() {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
}

onMounted(() => {
  handleScroll();
  handleResize();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>
