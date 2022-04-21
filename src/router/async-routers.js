export default [
  {
    name: 'systemTwo',
    parentId: 0,
    id: 10000,
    meta: {
      icon: 'ios-albums',
      title: '系统单面'
    },
    component: 'SystemList'
  },
  {
    name: 'error',
    parentId: 0,
    id: 20000,
    meta: {
      icon: 'ios-albums',
      title: '错误管理'
    },
    component: 'PageView',
    redirect: '/error/error401'
  },
  {
    name: 'error401',
    parentId: 20000,
    id: 20001,
    meta: {
      icon: 'ios-albums',
      title: '401页面'
    },
    component: '401'
  },
  {
    name: 'error404',
    parentId: 20000,
    id: 20002,
    meta: {
      icon: 'ios-albums',
      title: '404页面'
    },
    component: '404'
  },
  {
    name: 'error500',
    parentId: 20000,
    id: 20003,
    meta: {
      icon: 'ios-albums',
      title: '500页面'
    },
    component: '500'
  }
]
