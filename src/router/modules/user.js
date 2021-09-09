/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/user',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '用户管理',
    icon: 'peoples'
  },
  children: [
    {
      path: 'user-group',
      component: () => import('@/views/nested/menu1/menu1-2'),
      name: 'Menu1-2',
      redirect: '/nested/menu1/menu1-2/menu1-2-1',
      meta: { title: '用户组管理' },
      children: [
        {
          path: 'menu1-2-1',
          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
          name: 'Menu1-2-1',
          meta: { title: '管理员' }
        },
        {
          path: 'menu1-2-2',
          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
          name: 'Menu1-2-2',
          meta: { title: '客服' }
        },
        {
          path: 'menu1-2-3',
          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
          name: 'Menu1-2-2',
          meta: { title: '医院' }
        },
        {
          path: 'menu1-2-4',
          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
          name: 'Menu1-2-2',
          meta: { title: '企业' }
        }
      ]
    },
    {
      path: 'user-permission',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: '用户权限管理' }
    },
    {
      path: 'user-system',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: '用户系统对接' }
    }
  ]
}
export default tableRouter
