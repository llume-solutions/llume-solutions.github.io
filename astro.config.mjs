// @ts-check
import tailwind from '@astrojs/tailwind';
import lottie from "astro-integration-lottie";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lottie()]
});