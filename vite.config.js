import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import frappeui from "frappe-ui/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    frappeui({
      lucideIcons: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: [
      "frappe-ui > feather-icons",
      "showdown",
      "engine.io-client",
      "highlight.js/lib/core",
      "interactjs", // ✅ add this line
    ],
  },
});
