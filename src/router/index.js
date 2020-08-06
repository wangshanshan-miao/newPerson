import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login/index'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../pages/register/index'], resolve)
    },
    {
      path: '/setting',
      name: 'setting',
      component: resolve => require(['../pages/setting/porsonal'], resolve),
      children: [{
        path: '/setting/porsonal', //第二层路由
        name: 'porsonal',
        component: resolve => require(['../pages/setting/porsonal'], resolve),
      },],
    }
  ]
})
