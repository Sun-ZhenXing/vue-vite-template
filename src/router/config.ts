import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: true,
      requiresAuth: false
    }
  }
]
