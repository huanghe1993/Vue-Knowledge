import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


Vue.use(Router)

const index = () => import("@/pages/index")
// 布局
const baseView = () => import("@/layout/base-view")
const rigthView = () => import("@/layout/right-content")

// 槽位
const slotView = () => import("@/pages/slot/slot-test")
const slotDefault = () => import("@/pages/slot/slot-default")

// vue通讯
const basicMessage = () => import("@/pages/message/basic-message")
const eventMessage = () => import("@/pages/message/event-message")
const propsMessage = () => import("@/pages/message/props-message")



export const routes = [
  {
    path: '/',
    component: baseView,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name:'首页',
        icon:'el-icon-s-home',
        component: index
      }, 
      {
        path: '/content',
        name:'插槽',
        icon:'el-icon-tickets',
        component: rigthView,
        children: [
          {
            path: 'slot-test',
            name:'基本插槽',
            icon:'el-icon-edit-outline',
            component: slotView,
          },
          {
            path: 'slot-default',
            name:'默认插槽',
            icon:'el-icon-document',
            component: slotDefault,
          }
        ]
      },
      {
        path: '/message',
        name:'通讯',
        icon:'el-icon-message',
        component: rigthView,
        children: [
          {
            path: 'basic-message',
            name:'基本消息',
            icon:'el-icon-document',
            component: basicMessage,
          },
          {
            path: 'event-message',
            name:'事件消息',
            icon:'el-icon-document',
            component: eventMessage,
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router