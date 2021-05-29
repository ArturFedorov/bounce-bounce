import { createStore } from 'vuex'
import plugins from './features/plugins'

const store = createStore({
  modules: {
    plugins
  }
})

export default store
