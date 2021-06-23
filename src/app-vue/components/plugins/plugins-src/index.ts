// components
import TabBar from '/@/app-vue/components/plugins/plugins-src/components/TabBar.vue'
import TabNavigation from '/@/app-vue/components/plugins/plugins-src/components/TabNavigation.vue'

// loaders
import BouncingBalls from '/@/app-vue/components/plugins/plugins-src/loaders/BouncingBalls.vue'
import DancingSquares from '/@/app-vue/components/plugins/plugins-src/loaders/DancingSquares.vue'
import HorizontalBalls from '/@/app-vue/components/plugins/plugins-src/loaders/HorizontalBalls.vue'
import HorizontalLine from '/@/app-vue/components/plugins/plugins-src/loaders/HorizontalLine.vue'

// placeholder
import PluginsEmpty from '/@/app-vue/components/plugins/plugins-src/plugins-placeholder/PluginsEmpty.vue'
import PluginsPlaceholder from '/@/app-vue/components/plugins/plugins-src/plugins-placeholder/PluginsPlaceholder.vue'

// illustration
import WeatherRainCard from '/@/app-vue/components/plugins/plugins-src/illustration/WeatherRainCard.vue'
import WeatherSunCard from '/@/app-vue/components/plugins/plugins-src/illustration/WeatherSunCard.vue'

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

export default components
