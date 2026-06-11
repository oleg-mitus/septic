import { defineConfig } from "vite";
import { resolve } from "path";
import { glob } from 'glob';
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/",
  root: "src",
  publicDir: "../public",
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync(resolve(__dirname, 'src/**/*.html')),
    },
  },
});
