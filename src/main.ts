import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import router from './router/router'
import registerGlobalComponents from './components/common'
import 'virtual:svg-icons-register'
import store from './store'

const app = createApp(App)
registerGlobalComponents(app)

app.use(router).use(store).mount('#app')
