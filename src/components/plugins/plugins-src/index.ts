import BouncingBalls from '/@/components/plugins/plugins-src/loaders/BouncingBalls.vue'
import DancingSquares from '/@/components/plugins/plugins-src/loaders/DancingSquares.vue'
import HorizontalLine from '/@/components/plugins/plugins-src/loaders/HorizontalLine.vue'
import PluginsPlaceholder from '/@/components/plugins/plugins-src/plugins-placeholder/PluginsPlaceholder.vue'
import { App } from 'vue'

const components: { [key: string]: Record<string, unknown> } = {
  BouncingBalls,
  DancingSquares,
  HorizontalLine,
  PluginsPlaceholder
}

function registerSrcComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]))
}

export default registerSrcComponents
