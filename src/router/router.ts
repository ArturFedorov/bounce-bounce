import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoadersView from '@/pages/plugins/PluginsPage.vue'

export enum Routes {
  LOADERS = 'loaders'
}

const routes: RouteRecordRaw[] = [{ path: '/', name: Routes.LOADERS, component: LoadersView }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
