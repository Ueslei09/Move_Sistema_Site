import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../module/views/HomeView.vue'
import AboutView from '../module/views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path: '/quem-somos/quem-e-mover-sistemas',
    name: 'quem-somos',
    component: AboutView
   }
    
  ],
})

export default router
