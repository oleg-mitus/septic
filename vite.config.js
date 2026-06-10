import { defineConfig } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/",
  root: 'src', 
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    rollupOptions: {
      outDir: resolve(__dirname, "dist"),
      emptyOutDir: true,
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
