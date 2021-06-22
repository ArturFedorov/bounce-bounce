import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { mergeConfigObjects } from './src/shared/utils/config.util'
const getCommonConfig = () => import(`./config/vite.common.config`)
const getVueConfig = () => import('./config/vite.vue.config')

Promise.all([getCommonConfig(), getVueConfig()]).then((res) => {
  const config = mergeConfigObjects(res[1].vueConfig, res[0].config);
  console.log(config)
})

export enum ViteCommands {
  BUILD = 'build',
  PREVIEW = 'preview',
  SERVE = 'serve'
}

// https://vitejs.dev/config/
const config = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${path.resolve(__dirname, 'src/styles/base/variables.scss')}';`
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
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
}

export default ({ command, mode }: { command: string; mode?: string }) => {
  if (command === ViteCommands.SERVE) {
    return defineConfig(config)
  } else {
    return defineConfig(config)
  }
}
