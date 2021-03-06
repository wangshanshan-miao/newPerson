import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login/header'], resolve)
    },
    {
      path: '/personal',
      name: 'personal',
      component: resolve => require(['../pages/setting/index'], resolve)
    },
    {
      path: '/updatePassword',
      name: 'updatePassword',
      component: resolve => require(['../pages/setting/updatePassword'], resolve)
    }
  ]


})
