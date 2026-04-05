import { defineConfig } from "vite";
import { resolve } from "node:path";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [cloudflare()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        about: resolve(__dirname, "about.html"),
        news: resolve(__dirname, "news.html"),
        enquire: resolve(__dirname, "enquire.html"),
      },
    },
  },
});
