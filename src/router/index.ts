import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../module/views/HomeView.vue'
import AboutView from '../module/views/AboutView.vue'

import MproView from '../module/views/MproView.vue'


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
   },
   {
    path: '/mpro',
    name: 'mpro',
    component: MproView,
    meta: {
      transparentNavbar: true // Flag útil caso queira controlar a navbar dinamicamente por rota
    }
  }
    
  ],
})

export default router
