/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

const pathToSrc = fileURLToPath(new URL("./src/", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: [
      {
        find: /~?@\/(.*)/,
        replacement: pathToSrc + "$1",
      },
    ],
  },
  // See: https://vitejs.dev/guide/env-and-mode.html#env-variables & https://github.com/vitejs/vite/issues/1973
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  build: {
    outDir: "./dist",
    sourcemap: false, // build "*.map" files for JS sources
    manifest: false, // create a manifest.json for further processing of generated assets
  },
  test: {
    environment: "jsdom",
  },
});
