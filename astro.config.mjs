import { defineConfig } from 'astro/config';

// Set `site` to the live address, and `base` too when the site is served under a path
export default defineConfig({
  // The theme's markup ships as written, whitespace and all
  compressHTML: false,
});
