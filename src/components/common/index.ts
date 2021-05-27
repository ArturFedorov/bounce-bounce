import SvgIcon from './svg-icon/SvgIcon.vue'
import { App } from 'vue'

const components: { [key: string]: Record<string, unknown> } = {
  SvgIcon
}

function registerGlobalComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]))
}

export default registerGlobalComponents
