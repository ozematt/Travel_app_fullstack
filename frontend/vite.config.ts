/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5005",
    },
  },
  test: {
    coverage: {
      reporter: ["cobertura", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{spec,test}.{ts,tsx}"],
    setupFiles: ["/setupTests.mjs"],
  },
  optimizeDeps: {
    include: ["zod"],
  },
});
