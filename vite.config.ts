import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { componentTagger } from "lovable-tagger";

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/react-gh-pages/",
  server: {
    open: true,
    host: "::",
    port: 3001
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
