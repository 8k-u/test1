import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    ssetsDir: './',
    publicPath: './',
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        sample: resolve(root, "sample/index.html"),
        sample2: resolve(__dirname, "src/sample2/index.html"),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
    base: "/test1/",
  },
});
