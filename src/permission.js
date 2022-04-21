import router from '@/router'
import store from '@/store'
import iView from 'iview'
import { getToken, setTitle } from '@/libs/util'
import { notFoundRouter, rootRouter } from '@/router/routers'

import { listToTree, generator } from '@/router/generator-routers'
import asyncRoutersData from '@/router/async-routers'

const allowList = ['login', 'register', 'registerResult']
const loginRoutePath = '/login'
const defaultRoutePath = '/'

async function setRouters({ to, from, next, result }) {
  const menuNav = []
  const childrenNav = []
  const newResult = [...result]
  listToTree(newResult, childrenNav, 0)
  const defaultRootRouter = Object.assign({}, rootRouter)
  defaultRootRouter.children = childrenNav
  defaultRootRouter.redirect = childrenNav[0].redirect || childrenNav[0].path || `/${childrenNav[0].name}`
  menuNav.push(defaultRootRouter)
  const routers = generator(menuNav)
  routers.push(notFoundRouter)
  store.commit('setMenus', [...routers])
  router.addRoutes(routers)

  // 请求带有 redirect 重定向时，登录自动重定向到该地址
  const redirect = decodeURIComponent(from.query.redirect || to.path)
  if (to.path === redirect) {
    // set the replace: true so the navigation will not leave a history record
    next({ ...to, replace: true })
  } else {
    // 跳转到目的路由
    next({ path: redirect })
  }
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (token) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
    } else {
      if (!store.getters.menuList.length) {
        setRouters({
          to,
          from,
          next,
          result: asyncRoutersData
        })
      } else {
        next()
      }
    }
  } else {
    if (allowList.includes(to.name)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      iView.LoadingBar.finish() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
