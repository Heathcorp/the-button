import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3005,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: "index.html",
        embed: "embed.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
