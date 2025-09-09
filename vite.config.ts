import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tanstackRouter from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
      react(),
  ],
  define: {
    global: 'window',
  },
})
