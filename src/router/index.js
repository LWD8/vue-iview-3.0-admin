import Vue from 'vue'
import Router from 'vue-router'
import { constantRoutes } from './routers'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: (to, from, savePosition) => ({ x: 0, y: 0 }),
  routes: constantRoutes
})
