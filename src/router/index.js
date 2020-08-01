import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@views/login/login'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    redirect: '/login',
    children: [
      {
        path: 'table',
        component: () => import('@/views/table')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

//前置全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
//后置全局守卫
router.afterEach( route => { 
  
  
})

export default router
