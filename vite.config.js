import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensures the build folder is named 'build'
    assetsDir: 'assets', // Puts JS/CSS/Images in an 'assets' directory
    rollupOptions: {
      output: {
        manualChunks: {
          // Optional: Split large libraries like React into separate chunks
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
