import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${path.resolve(__dirname, 'src/styles/base/variables.scss')}';`
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '..sass', '.vue'],
    alias: {
      '/@': path.resolve(__dirname, 'src')
    }
  },
  assetsInclude: 'woff',
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
