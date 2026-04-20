import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          en: path.resolve(__dirname, 'en/index.html'),
          ru: path.resolve(__dirname, 'ru/index.html'),
          nl: path.resolve(__dirname, 'nl/index.html'),
          es: path.resolve(__dirname, 'es/index.html'),
          fr: path.resolve(__dirname, 'fr/index.html'),
          de: path.resolve(__dirname, 'de/index.html'),
          pl: path.resolve(__dirname, 'pl/index.html'),
        },
      },
    },
  };
});
