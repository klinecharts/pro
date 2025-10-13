/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from "path"


export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "@klinecharts/pro": path.resolve(__dirname, "../pro/src"),
    },
  },
  optimizeDeps: {
    exclude: ["@klinecharts/pro"], // important — prevent prebundling
  },
  server: {
    fs: {
      // allow vite to serve files outside project root
      allow: [".."],
    },
  },
  build: {
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {
      external: ['klinecharts'],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'klinecharts-pro.css'
          }
        },
        globals: {
          klinecharts: 'klinecharts'
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'klinechartspro',
      fileName: (format) => {
        if (format === 'es') {
          return 'klinecharts-pro.js'
        }
        if (format === 'umd') {
          return 'klinecharts-pro.umd.js'
        }
      }
    }
  }
})
