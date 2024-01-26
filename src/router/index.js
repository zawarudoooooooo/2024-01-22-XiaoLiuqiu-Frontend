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
//前台房型相關
    {
      path: '/FrontSearch',
      name: 'FrontSearch',
      component: () => import('../views/FrontEnd/FrontSearch.vue')
    },
    {
      path: '/FrontRoom',
      name: 'FrontRoom',
      component: () => import('../views/FrontEnd/FrontRoom.vue')
    },
    {
      path: '/FrontBooking',
      name: 'FrontBooking',
      component: () => import('../views/FrontEnd/FrontBooking.vue')
    },
//前台景點
    {
      path: '/FrontTourist',
      name: 'FrontTourist',
      component: () => import('../views/FrontEnd/Other/FrontTourist.vue')
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
      component: () => import('../views/FrontEnd/Other/FrontTraffic.vue')
    },
//前台美食
    {
      path: '/FrontMeal',
      name: 'FrontMeal',
      component: () => import('../views/FrontEnd/Other/FrontMeal.vue')
    },
//前台加購套票
    {
      path: '/FrontTicket',
      name: 'FrontTicket',
      component: () => import('../views/FrontEnd/Other/FrontTicket.vue')
    },
//前台關於
    {
      path: '/FrontAbout',
      name: 'FrontAbout',
      component: () => import('../views/FrontEnd/Other/FrontAbout.vue')
    },
//前台體驗活動
    {
      path: '/FrontActivity',
      name: 'FrontActivity',
      component: () => import('../views/FrontEnd/Other/FrontActivity.vue')
    },
//前台推薦行程
    {
      path: '/FrontRecommand',
      name: 'FrontRecommand',
      component: () => import('../views/FrontEnd/Other/FrontRecommand.vue')
    },
//前台留言板
    {
      path: '/FrontMessage',
      name: 'FrontMessage',
      component: () => import('../views/FrontEnd/FrontMessage.vue')
    },
//前台登錄
    {
      path: '/FrontLogin',
      name: 'FrontLogin',
      component: () => import('../views/FrontEnd/FrontLogin.vue')
    },
//前台註冊
    {
      path: '/FrontSignUp',
      name: 'FrontSignUp',
      component: () => import('../views/FrontEnd/FrontSignUp.vue')
    },
//前台忘記密碼
    {
      path: '/member/reset_password',
      name: 'PwdReset',
      component: () => import('../views/FrontEnd/PwdReset.vue'),
      props: (route) => ({
        account: route.query.account,
        verificationCode: route.query.verificationCode,
      })
    },
//前台使用者頁面
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
  //後台訂單
    {
      path: '/BackOrder',
      name: 'BackOrder',
      component: () => import('../views/BackEnd/BackOrder.vue')
    },
//後台房間
    {
      path: '/BackRoom',
      name: 'BackSRoom',
      component: () => import('../views/BackEnd/BackRoom.vue')
    },
//後台員工
    {
      path: '/BackStaff',
      name: 'BackStaff',
      component: () => import('../views/BackEnd/BackStaff.vue')
    },
    {
      path: '/member/verify',
      name: 'verifyAccount',
      component: () => import('@/components/verifyAccount.vue'),
      props: (route) => ({
        memberEmail: route.query.memberEmail,
        verificationCode: route.query.verificationCode,
      })
    },
  ]
})
export default router
