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
      /*
        放到App.vue用一个容器了，不然浏览器回退loading报错
      */
      // {
      //   path: 'subPageA',
      //   name: 'subPageA',
      //   alias: ['subPageA/:path'],
      //   component: () => import('../views/mirco-container1/index.vue'),
      // },
      // {
      //   path: 'subPageB',
      //   name: 'subPageB',
      //   alias: ['subPageB/:path'],
      //   component: () => import('../views/mirco-container2/index.vue')
      // }
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/about/index.vue')
      }
    ]
  }  
]

const router = new VueRouter({
  routes
})

export default router
