import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/hooks": path.resolve(__dirname, "./src/common/hooks"),
      "@/components": path.resolve(__dirname, "./src/common/components"),
      "@/styles": path.resolve(__dirname, "./src/common/styles"),
      "@/images": path.resolve(__dirname, "./src/assets/images"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
