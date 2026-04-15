import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Must match your GitHub repository name exactly.
  // Repo: github.com/joshuamlpereira/sentinel_website
  base: "/",
});
