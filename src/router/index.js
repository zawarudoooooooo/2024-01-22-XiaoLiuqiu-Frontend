import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FrontEnd/FrontEntry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FrontEntry',
      component: FrontEntry
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
