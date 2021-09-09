/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/sign',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '签约管理',
    icon: 'edit'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/complex-table'),
      name: 'DynamicTable',
      meta: { title: '家庭医生签约表' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/complex-table'),
      name: 'DragTable',
      meta: { title: '居民健康档案信息表' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: '签约评价' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'ComplexTable',
      meta: { title: '工作统计' }
    }
  ]
}
export default tableRouter
