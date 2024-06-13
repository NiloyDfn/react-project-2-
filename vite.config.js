import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom Rollup Plugin to handle CSS imports
const externalCSSPlugin = {
  name: 'external-css',
  resolveId(source) {
    if (source === 'react-responsive-carousel/lib/styles/Carousel.min.css') {
      // Return a synthetic ID to tell Rollup it's an external CSS import
      return source;
    }
    return null;
  },
  load(id) {
    // For external CSS imports, return an empty module
    if (id === 'react-responsive-carousel/lib/styles/Carousel.min.css') {
      return 'export default "";';
    }
    return null;
  },
};

export default defineConfig({
  plugins: [
    react(),
    externalCSSPlugin, // Add the custom Rollup plugin
  ],
});
