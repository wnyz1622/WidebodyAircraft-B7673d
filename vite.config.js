import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', 
  base: './',
  build: {
    outDir: 'dist',       
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries into separate chunks
          'three': ['three'],
          'postprocessing': ['postprocessing'],
          'three-addons': [
            'three/addons/controls/OrbitControls.js',
            'three/addons/loaders/GLTFLoader.js',
            'three/addons/loaders/DRACOLoader.js',
            'three/addons/loaders/RGBELoader.js'
          ]
        }
      }
    },
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  }
});
