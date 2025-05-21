import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';


export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ExpoErrorUniversal',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-native', 'expo-clipboard', /^@expo\/vector-icons($|\/)/],
    },
  }
});