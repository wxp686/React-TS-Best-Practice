export default [
  {
    path: '/',
    redirect: '/optimizer-manage/optimizer-pool',
  },
  {
    path: '/home',
    name: '首页',
    component: './Home',
    icon: 'home',
  },
  {
    name: '优化器管理',
    icon: 'interaction',
    routes: [
      {
        path: '/optimizer-manage/optimizer-pool',
        name: '优化器池',
        component: './OptimizerManage/OptimizerPool',
      },
    ],
  },
  { component: './404' },
];
