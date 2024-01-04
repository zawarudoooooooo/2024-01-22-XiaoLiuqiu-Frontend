import { createRouter, createWebHistory } from 'vue-router'
import FrontEntry from '../views/FrontEnd/FrontEntry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
// 前台連結
    {
      path: '/',
      name: 'FrontEntry',
      component: FrontEntry
    },
    {
      path: '/FrontSearch',
      name: 'FrontSearch',
      component: () => import('../views/FrontEnd/FrontSearch.vue')
    },
    {
      path: '/FrontTourist',
      name: 'FrontTourist',
      component: () => import('../views/FrontEnd/FrontTourist.vue')
    },
    {
      path: '/FrontActivity',
      name: 'FrontActivity',
      component: () => import('../views/FrontEnd/FrontActivity.vue')
    },
    {
      path: '/FrontAbout',
      name: 'FrontAbout',
      component: () => import('../views/FrontEnd/FrontAbout.vue')
    },
    {
      path: '/FrontLogin',
      name: 'FrontLogin',
      component: () => import('../views/FrontEnd/FrontLogin.vue')
    },
    {
      path: '/FrontSignUp',
      name: 'FrontSignUp',
      component: () => import('../views/FrontEnd/FrontSignUp.vue')
    },
    {
      path: '/FrontPersonInfo',
      name: 'FrontPersonInfo',
      component: () => import('../views/FrontEnd/FrontPersonInfo.vue')
    },
//後台連結
    {
      path: '/BackLogin',
      name: 'BackLogin',
      component: () => import('../views/BackEnd/BackLogin.vue')
    },
//後台房間
    {
      path: '/BackSimpleDouble',
      name: 'BackSimpleDouble',
      component: () => import('../views/BackEnd/BackRoom/BackSimpleDouble.vue')
    },
    {
      path: '/BackDouble',
      name: 'BackDouble',
      component: () => import('../views/BackEnd/BackRoom/BackDouble.vue')
    },
    {
      path: '/BackFamily',
      name: 'BackFamily',
      component: () => import('../views/BackEnd/BackRoom/BackFamily.vue')
    },
//後台觀光
    {
      path: '/BackTourist',
      name: 'BackTourist',
      component: () => import('../views/BackEnd/BackTourist.vue')
    },
//後台租車
    {
      path: '/BackBicycle',
      name: 'BackBicycle',
      component: () => import('../views/BackEnd/BackRent/BackBicycle.vue')
    },
    {
      path: '/BackScooter',
      name: 'BackScooter',
      component: () => import('../views/BackEnd/BackRent/BackScooter.vue')
    },
    {
      path: '/BackCar',
      name: 'BackCar',
      component: () => import('../views/BackEnd/BackRent/BackCar.vue')
    },
//後台套票
    {
      path: '/BackTicket',
      name: 'BackTicket',
      component: () => import('../views/BackEnd/BackTicket.vue')
    },
  ]
})
export default router
