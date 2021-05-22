import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${path.resolve(__dirname, 'src/styles/base/variables.scss')}';`
      }
    }
  },
  plugins: [
    // eslint({
    //   include: '**/*.+(vue|js|jsx|ts|tsx)'
    // }),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
