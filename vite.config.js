import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        logger: {
          warn(message, options) {
            if (options?.deprecation && message.includes("legacy JS API")) return;
            console.warn(message);
          },
        },
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  base: mode === "production" ? "/divyansh-portfolio/" : "/",
}))
