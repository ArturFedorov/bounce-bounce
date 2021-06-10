// components
import TabBar from '/@/components/plugins/plugins-src/components/TabBar.vue'
import TabNavigation from '/@/components/plugins/plugins-src/components/TabNavigation.vue'

// loaders
import BouncingBalls from '/@/components/plugins/plugins-src/loaders/BouncingBalls.vue'
import DancingSquares from '/@/components/plugins/plugins-src/loaders/DancingSquares.vue'
import HorizontalBalls from '/@/components/plugins/plugins-src/loaders/HorizontalBalls.vue'
import HorizontalLine from '/@/components/plugins/plugins-src/loaders/HorizontalLine.vue'

// placeholder
import PluginsEmpty from '/@/components/plugins/plugins-src/plugins-placeholder/PluginsEmpty.vue'
import PluginsPlaceholder from '/@/components/plugins/plugins-src/plugins-placeholder/PluginsPlaceholder.vue'
import { App } from 'vue'

// illustration
import WeatherRainCard from '/@/components/plugins/plugins-src/illustration/WeatherRainCard.vue'
import WeatherSunCard from '/@/components/plugins/plugins-src/illustration/WeatherSunCard.vue'

const components: { [key: string]: Record<string, unknown> } = {
  // components
  TabBar,
  TabNavigation,
  WeatherRainCard,
  WeatherSunCard,

  // loaders
  BouncingBalls,
  DancingSquares,
  HorizontalBalls,
  HorizontalLine,

  // placeholder
  PluginsEmpty,
  PluginsPlaceholder
}

function registerSrcComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]))
}

export default registerSrcComponents
