import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "spline-viewer",
        },
      },
    }),
    vueDevTools({ launchEditor: "code" }),
    tailwindcss(),
  ],
});