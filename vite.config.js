import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Se for publicar no GitHub Pages num repositório de projeto (não em
// <usuario>.github.io), defina VITE_BASE_PATH="/nome-do-repositorio/"
// no ambiente de build. Na Vercel/Netlify isso não é necessário —
// o padrão "/" já funciona porque o app fica na raiz do domínio.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
});
