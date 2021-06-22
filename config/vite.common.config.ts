import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

export const config = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${path.resolve(__dirname, '../src/styles/base/variables.scss')}';`
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.sass', '.vue'],
    alias: {
      '/@': path.resolve(__dirname, 'src')
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
