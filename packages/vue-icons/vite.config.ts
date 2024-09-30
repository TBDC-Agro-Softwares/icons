import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join, resolve } from 'path';
import { readdirSync } from 'fs';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const files = readdirSync(join(__dirname, 'src', 'components'));

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.vue'],
    dedupe: ['vue']
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        ...files.map((fileName) => join(__dirname, 'src', 'components', fileName)),
        join(__dirname, 'src', 'scss', '_main.scss'),
        join(__dirname, 'src', 'index.ts')
      ]
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === '_main.css') return 'css/index.css';
          return assetInfo.name || '';
        },
        globals: { vue: 'Vue' }
      }
    }
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [{ src: normalizePath(resolve(__dirname, './src/scss')), dest: './' }]
    })
  ]
});
