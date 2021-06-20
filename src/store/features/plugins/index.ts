import { Plugin } from '/@/shared/types/models/Plugin'
import pluginsList from '/@/shared/data/plugins'

export interface PluginModule {
  plugins: Plugin[]
}

export const GET_PLUGINS = 'plugins/GET_PLUGINS'
export const GET_PLUGINS_BY_TYPE = 'plugin/GET_PLUGINS_BY_TYPE'

const plugins = {
  state: (): PluginModule => {
    return {
      plugins: pluginsList
    }
  },
  getters: {
    [GET_PLUGINS]: (state: PluginModule) => state.plugins,
    [GET_PLUGINS_BY_TYPE]: (state: PluginModule) => (pluginType: string) =>
      state.plugins.filter(({ type }) => type === pluginType)
  }
}

export default plugins
