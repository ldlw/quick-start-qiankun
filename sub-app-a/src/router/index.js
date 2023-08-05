export default [
  {
    path: '/',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/subPageA',
    children: [
      {
        path: '/subPageA',
        component: () => import('@/components/layout/index.vue'),
        redirect: '/subPageA/page1',
        children: [
          // 去掉斜杠，使其相对于父路由
          {
            path: 'page1',
            name: 'page1',
            component: () => import('@/views/page1')
          },
          {
            path: 'page2',
            name: 'page2',
            component: () => import('@/views/page2')
          }   
        ]
      }    
    ]
  }  
]

