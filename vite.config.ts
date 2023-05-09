import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/minesweeper-react/",
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/common/components"),
      "@/hooks": path.resolve(__dirname, "./src/common/hooks"),
      "@/images": path.resolve(__dirname, "./src/assets/images"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
