import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const LoadersView = () => import('@/pages/plugins/PluginsPage.vue')

export enum Routes {
  PLUGINS = 'plugins'
}

const routes: RouteRecordRaw[] = [{ path: '/:type?', name: Routes.PLUGINS, component: LoadersView }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
