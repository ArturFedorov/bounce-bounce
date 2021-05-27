import { createStore } from 'vuex'
import plugins from '@/store/features/plugins'

const store = createStore({
  modules: {
    plugins
  }
})

export default store
