// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [
    icon({
      include: {
        carbon: ['*'], // (Default) Loads entire Material Design Icon set
      },
    }),
    react(),
  ],
});
