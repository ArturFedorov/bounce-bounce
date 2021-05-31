import BouncingBalls from '/@/components/plugins/plugins-src/loaders/BouncingBalls.vue'
import PluginsPlaceholder from '/@/components/plugins/plugins-src/plugins-placeholder/PluginsPlaceholder.vue'
import { App } from 'vue'

const components: { [key: string]: Record<string, unknown> } = {
  BouncingBalls,
  PluginsPlaceholder
}

function registerSrcComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]))
}

export default registerSrcComponents
