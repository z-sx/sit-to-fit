import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync } from 'node:fs'




// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const https = mode === 'development' ? {
    key: readFileSync('./keys/key.pem'),
    cert: readFileSync('./keys/cert.pem'),
  }: {}
  return {
    plugins: [
      vue(),
      VitePWA({
        base: "/",
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.ts',
        devOptions: {
          enabled: true
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      https
    }
  }})
