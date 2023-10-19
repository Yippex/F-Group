import { createRouter, createWebHistory } from 'vue-router'
import AgroAllied from '../views/AgroAllied.vue'
import Water from '../views/WaterVue.vue'
import EnginVue from '../views/EnginnerVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/AgroAllied',
    component: AgroAllied
   },
   {
    path:'/Fedas water service',
    component: Water
   },
   {
    path:'/Fedas Engineering',
    component :EnginVue
   }
    
  ]
})

export default router
