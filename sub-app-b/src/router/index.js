export default [
  {
    path: '/subPageB',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/subPageB/page1',
    children: [
      // 去掉斜杠，使其相对于父路由
      {
        path: 'page1',
        name: 'page1',
        component: () => import('@/views/page1')
      }
    ]
  }
]
