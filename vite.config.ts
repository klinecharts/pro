/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'klinecharts-pro',
      fileName: 'klinecharts-pro'
    }
  }
})
