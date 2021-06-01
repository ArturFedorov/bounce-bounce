import { Plugin } from '/@/shared/types/models/Plugin'
import pluginsList from '/@/shared/data/plugins'

export interface PluginModule {
  plugins: Plugin[]
}

export const GET_PLUGINS = 'plugins/GET_PLUGINS'

const plugins = {
  state: (): PluginModule => {
    return {
      plugins: pluginsList
    }
  },
  getters: {
    [GET_PLUGINS]: (state: PluginModule) => state.plugins
  }
}

export default plugins
