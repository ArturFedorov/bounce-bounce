import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import router from './router/router'
import components from './components/common'
import 'virtual:svg-icons-register'

const app = createApp(App)
Object.keys(components).forEach((key) => app.component(key, components[key]))

app.use(router).mount('#app')
