import { createRouter, createWebHistory } from 'vue-router'
import AgroAllied from '../views/AgroAllied.vue'
import Water from '../views/Hotel.vue'
import EnginVue from '../views/EnginnerVue.vue'
import Home from '../views/Home.vue'
import FedasWater from '../views/FedasWater.vue'
import Stores from '../views/Stores.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Home
    },
   {
    path: '/AgroAllied',
    component: AgroAllied
   },
   {
    path:'/hotel',
    component: Water
   },
   {
    path:'/Engineering',
    component :EnginVue
   },
   {
    path: '/FedasWater',
    component: FedasWater
   },
   {
    path:'/Stores',
    component: Stores
   }
    
  ]
})

export default router
