import Layout from '@/page/index/'
const base = [
  {
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/page/wel')
      }
    ]
  }
]
const hireBus = [
  {
    path: '/hireBus',
    component: Layout,
    name: '包车旅游',
    children: [
      {
        path: '/',
        component: () => import('@/views/hirebus/index')
      }
    ]
  }
]
const customBus = [
  {
    path: '/customBus',
    component: Layout,
    name: '定制公交',
    children: [
      {
        path: '/',
        name: '已开通线路',
        component: () => import('@/views/custombus/custbus/index')
      },
      {
        path: 'custbusdetail',
        name: '站点详情',
        component: () => import('@/views/custombus/custbusdetail/index')
      },
      {
        path: 'stock',
        name: '余票详情',
        component: () => import('@/views/custombus/stock/index')
      },
      {
        path: 'sample',
        name: '未开通列表',
        component: () => import('@/views/custombus/sample/index')
      },
      {
        path: 'map',
        name: '绘制线路',
        component: () => import('@/views/custombus/map/index')
      },
      {
        path: 'report',
        name: '公交订单',
        component: () => import('@/views/custombus/report/index')
      }
    ]
  }
]
// 重新组织后导出
export default [...base, ...hireBus, ...customBus]
