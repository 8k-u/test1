import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

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
  base: process.env.NODE_ENV === "production" ? "/test1/" : "/",
});
