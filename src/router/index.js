import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBindingList from '../views/DataBindingList2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: () => import('../views/NestedComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
