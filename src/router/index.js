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
      path: '/register',
      name: 'register',
      component: resolve => require(['../pages/register/index'], resolve)
    },
    {
      path: '/porsonal',
      name: 'porsonal',
      component: resolve => require(['../pages/setting/porsonal'], resolve)
    },
    {
      path: '/updatePassword',
      name: 'updatePassword',
      component: resolve => require(['../pages/setting/updatePassword'], resolve)
    }
  ]


})
