export interface PluginModule {
  plugins: Plugin[]
}

export const GET_PLUGINS = 'plugins/GET_PLUGINS'

const plugins = {
  state: (): PluginModule => {
    return {
      plugins: []
    }
  },
  getters: {
    [GET_PLUGINS]: (state: PluginModule) => state.plugins
  }
}

export default plugins
