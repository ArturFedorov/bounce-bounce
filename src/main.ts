import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import router from './router/router'
import registerGlobalComponents from './components/common'
import 'virtual:svg-icons-register'
import store from './store'
import registerSrcComponents from '/@/components/plugins/plugins-src';

const app = createApp(App)
registerGlobalComponents(app)
registerSrcComponents(app)

app.use(router).use(store).mount('#app')
