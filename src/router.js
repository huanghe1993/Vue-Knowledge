import Vue from 'vue'
import Router from 'vue-router'

const index = () =>import("@/pages/index")
// 布局
const baseView = () =>import("@/layout/base-view")
const rigthContent = () =>import("@/layout/right-content")


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: baseView,
      redirect:'/index',
      children:[
        {
            path:'/index',
            component:index
        },{
            path:'/content',
            component:rigthContent
        }
      ]
    },
  ]
})
