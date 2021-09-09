/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '数据驾驶舱',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'TOP排行榜', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: '服务项目', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '服务时间', noCache: true }
    },
    {
      path: 'know-rate',
      component: () => import('@/views/charts/mix-chart'),
      name: 'know-rate',
      meta: { title: '知晓率', noCache: true }
    },
    {
      path: 'sign-status',
      component: () => import('@/views/charts/mix-chart'),
      name: 'sign-status',
      meta: { title: '签约状态', noCache: true }
    }
  ]
}

export default chartsRouter
