/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/info',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '基础资料',
    icon: 'documentation'
  },
  children: [
    {
      path: 'hospital',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: '企业信息' }
    },
    {
      path: 'company',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: '医院信息' }
    },
    {
      path: 'location',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: '地理信息' }
    }
  ]
}
export default tableRouter
