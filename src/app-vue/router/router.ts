import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const HomePage = () =>
  import(/* webpackChunkName: "home page" */ '/@/app-vue/pages/home/HomePage.vue')
const LoadersPage = () =>
  import(/* webpackChunkName: "plugins page" */ '/@/app-vue/pages/plugins/PluginsPage.vue')

export enum Routes {
  HOME = 'home',
  PLUGINS = 'plugins'
}

const routes: RouteRecordRaw[] = [
  { path: '/', name: Routes.HOME, component: HomePage },
  { path: '/:type?', name: Routes.PLUGINS, component: LoadersPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
