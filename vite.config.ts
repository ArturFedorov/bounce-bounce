import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { mergeConfigObjects } from './src/shared/utils/config.util'
import { commonConfig } from './config/vite.common.config'
import { vueConfig } from './config/vite.vue.config'
import { reactConfig } from './config/vite.react.config'

const targetFramework = process.env.TARGET_FRAMEWORK || 'vue'
const configs =
  targetFramework === 'vue'
    ? mergeConfigObjects(vueConfig, commonConfig)
    : mergeConfigObjects(reactConfig, commonConfig)

console.log(configs)

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
    return defineConfig(configs)
  } else {
    return defineConfig(configs)
  }
}
