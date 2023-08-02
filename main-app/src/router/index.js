import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/layout/index.vue'),
    children: [
      // 去掉斜杠，使其相对于父路由
      {
        path: 'subPageA',
        name: 'subPageA',
        alias: ['subPageA/:path'],
        component: () => import('../views/mirco-container1/index.vue'),
      },
      {
        path: 'subPageB',
        name: 'subPageB',
        alias: ['subPageB/:path'],
        component: () => import('../views/mirco-container2/index.vue')
      }
    ]
  }  
]

const router = new VueRouter({
  routes
})

export default router
