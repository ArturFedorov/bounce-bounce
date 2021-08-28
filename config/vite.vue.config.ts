import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'

export const pathToSrcVue = '/src/app-vue/main.ts'

export const vueConfig: UserConfig = {
  plugins: [vue()]
}
