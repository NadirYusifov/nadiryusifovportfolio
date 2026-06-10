// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      GITHUB_OWNER: envField.string({ context: "client", access: "public" }),
      GITHUB_REPO: envField.string({ context: "client", access: "public" }),
    },
  },

  integrations: [react(), keystatic(), mdx()],
  adapter: netlify(),
});