import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/databindingList',
    name: 'dataBindingList',
    component: () => import('../views/DataBindingList.vue')
  },
  {
    path: '/compositionAPI',
    name: 'compositionAPI',
    component: () => import('../views/CompositionAPI.vue')
  },
  {
    path: '/plugins',
    name: 'plugins',
    components: () => import('../views/Plugins.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
