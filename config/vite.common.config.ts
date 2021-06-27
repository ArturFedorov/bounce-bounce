import path from 'path'
import { UserConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'

export const commonConfig: UserConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${path.resolve(__dirname, '../src/styles/base/variables.scss')}';`
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.scss', '.sass', '.vue'],
    alias: {
      '/@': path.resolve(__dirname, '../src')
    }
  },
  assetsInclude: 'woff',
  plugins: [
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), '../src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
}
