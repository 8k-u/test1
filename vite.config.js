import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        sample: resolve(root, "sample", "index.html"),
        sample2: resolve(__dirname, "src/sample2/index.html"),
      },

    },
  },
  base: process.env.BASE_PATH ? "/test1/" : "/",
});
