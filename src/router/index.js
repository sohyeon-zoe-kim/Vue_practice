import { createRouter, createWebHistory } from 'vue-router'
import DataBindingList from '../views/DataBindingList2.vue'
import DataBinding from '../views/DataBinding.vue'
import SlotModal from '../views/SlotUseModalLayout.vue'
import NestedComponent from '../views/NestedComponent.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/slotModal',
    name: 'SlotModal',
    component: SlotModal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
