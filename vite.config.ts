import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { copyFileSync, rmSync } from 'fs';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        css: 'injected' // Inject CSS into the component
      }
    }),
    {
      name: 'copy-svelte-component',
      writeBundle() {
        // Copy the Svelte component to dist
        copyFileSync(
          resolve(__dirname, 'src/Flag.svelte'),
          resolve(__dirname, 'dist/Flag.svelte')
        );
        // Copy type definitions
        copyFileSync(
          resolve(__dirname, 'src/index.d.ts'),
          resolve(__dirname, 'dist/index.d.ts')
        );
        // Remove CSS file if it was generated
        try {
          rmSync(resolve(__dirname, 'dist/svelte-flagpack.css'));
        } catch (e) {
          // Ignore if file doesn't exist
        }
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SvelteFlagpack',
      fileName: () => 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: false // Don't empty because we need the flags folder
  },
  assetsInclude: ['**/*.svg']
});
