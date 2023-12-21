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
    {
      path: '/BackManagement',
      name: 'BackManagement',
      component: () => import('../views/BackEnd/BackManagement.vue')
    },
    {
      path: '/BackSingle',
      name: 'BackSingle',
      component: () => import('../views/BackEnd/BackRoom/BackSingle.vue')
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
    {
      path: '/BackTourist',
      name: 'BackTourist',
      component: () => import('../views/BackEnd/BackTourist.vue')
    },
    {
      path: '/BackActivity',
      name: 'BackActivity',
      component: () => import('../views/BackEnd/BackActivity.vue')
    },
    {
      path: '/BackAbout',
      name: 'BackAbout',
      component: () => import('../views/BackEnd/BackAbout.vue')
    },
  ]
})
export default router
