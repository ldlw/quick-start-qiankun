import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/subPageA/page1',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      }
    ]
  }  
]

const router = new VueRouter({
  routes
})

export default router
