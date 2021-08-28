import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import { mergeConfigObjects } from './src/shared/utils/config.util'
import { commonConfig } from './config/vite.common.config'
import { pathToSrcVue, vueConfig } from './config/vite.vue.config'
import { pathToSrcReact, reactConfig } from './config/vite.react.config'
import { Frameworks } from './src/shared/enums/system/frameworks'
import { parse } from 'node-html-parser';

const targetFramework = process.env.TARGET_FRAMEWORK || Frameworks.VUE
const srcAttribute = targetFramework === Frameworks.VUE ? pathToSrcVue : pathToSrcReact
const configs =
  targetFramework === Frameworks.VUE
    ? mergeConfigObjects(vueConfig, commonConfig)
    : mergeConfigObjects(reactConfig, commonConfig)

export enum ViteCommands {
  BUILD = 'build',
  PREVIEW = 'preview',
  SERVE = 'serve'
}

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'))

const root = parse(html.toString())

const script = root.querySelector('script')

script.setAttribute('src', srcAttribute)

fs.writeFileSync(path.resolve(__dirname, 'index.html'), root.toString())

export default ({ command, mode }: { command: string; mode?: string }) => {
  if (command === ViteCommands.SERVE) {
    return defineConfig(configs)
  } else {
    return defineConfig(configs)
  }
}
