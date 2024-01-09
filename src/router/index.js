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
//前台booking
    {
      path: '/FrontSearch',
      name: 'FrontSearch',
      component: () => import('../views/FrontEnd/FrontBooking/FrontSearch.vue')
    },
    {
      path: '/FrontSimpleDouble',
      name: 'FrontSimpleDouble',
      component: () => import('../views/FrontEnd/FrontBooking/FrontSimpleDouble.vue')
    },
    {
      path: '/FrontDouble',
      name: 'FrontDouble',
      component: () => import('../views/FrontEnd/FrontBooking/FrontDouble.vue')
    },
    {
      path: '/FrontFamily',
      name: 'FrontFamily',
      component: () => import('../views/FrontEnd/FrontBooking/FrontFamily.vue')
    },
    {
      path: '/SimpleDoubleBooking',
      name: 'SimpleDoubleBooking',
      component: () => import('../views/FrontEnd/FrontBooking/SimpleDoubleBooking.vue')
    },
    {
      path: '/DoubleBooking',
      name: 'DoubleBooking',
      component: () => import('../views/FrontEnd/FrontBooking/DoubleBooking.vue')
    },
    {
      path: '/FamilyBooking',
      name: 'FamilyBooking',
      component: () => import('../views/FrontEnd/FrontBooking/FamilyBooking.vue')
    },
//前台景點
    {
      path: '/FrontTourist',
      name: 'FrontTourist',
      component: () => import('../views/FrontEnd/FrontTourist.vue')
    },
    {
      path: '/FrontT01',
      name: 'FrontT01',
      component: () => import('../views/FrontEnd/T/T01.vue')
    },
    {
      path: '/FrontT02',
      name: 'FrontT02',
      component: () => import('../views/FrontEnd/T/T02.vue')
    },
    {
      path: '/FrontT03',
      name: 'FrontT03',
      component: () => import('../views/FrontEnd/T/T03.vue')
    },
    {
      path: '/FrontT04',
      name: 'FrontT04',
      component: () => import('../views/FrontEnd/T/T04.vue')
    },
    {
      path: '/FrontT05',
      name: 'FrontT05',
      component: () => import('../views/FrontEnd/T/T05.vue')
    },
    {
      path: '/FrontT06',
      name: 'FrontT06',
      component: () => import('../views/FrontEnd/T/T06.vue')
    },
    {
      path: '/FrontT07',
      name: 'FrontT07',
      component: () => import('../views/FrontEnd/T/T07.vue')
    },
    {
      path: '/FrontT08',
      name: 'FrontT08',
      component: () => import('../views/FrontEnd/T/T08.vue')
    },
    {
      path: '/FrontT10',
      name: 'FrontT10',
      component: () => import('../views/FrontEnd/T/T10.vue')
    },
    {
      path: '/FrontT11',
      name: 'FrontT11',
      component: () => import('../views/FrontEnd/T/T11.vue')
    },
    {
      path: '/FrontT12',
      name: 'FrontT12',
      component: () => import('../views/FrontEnd/T/T12.vue')
    },
    {
      path: '/FrontT14',
      name: 'FrontT14',
      component: () => import('../views/FrontEnd/T/T14.vue')
    },
    {
      path: '/FrontT15',
      name: 'FrontT15',
      component: () => import('../views/FrontEnd/T/T15.vue')
    },
    {
      path: '/FrontT17',
      name: 'FrontT17',
      component: () => import('../views/FrontEnd/T/T17.vue')
    },
//前台交通
    {
      path: '/FrontTraffic',
      name: 'FrontTraffic',
      component: () => import('../views/FrontEnd/FrontTraffic.vue')
    },
//前台美食
    {
      path: '/FrontMeal',
      name: 'FrontMeal',
      component: () => import('../views/FrontEnd/FrontMeal.vue')
    },
//前台活動
    {
      path: '/FrontActivity',
      name: 'FrontActivity',
      component: () => import('../views/FrontEnd/FrontActivity.vue')
    },
//前台關於
    {
      path: '/FrontAbout',
      name: 'FrontAbout',
      component: () => import('../views/FrontEnd/FrontAbout.vue')
    },
//前台留言板
    {
      path: '/FrontMessage',
      name: 'FrontMessage',
      component: () => import('../views/FrontEnd/FrontMessage.vue')
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
//後台套票
    {
      path: '/BackTicket',
      name: 'BackTicket',
      component: () => import('../views/BackEnd/BackTicket.vue')
    },
  ]
})
export default router
