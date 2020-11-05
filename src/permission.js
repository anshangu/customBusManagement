import router from './router/router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/util/auth'
import { vaildUtil } from '@/util/yun'
import { setTitle } from '@/util/util'
import { validatenull } from '@/util/validate'
import { asyncRouterMap } from '@/router/router'
import { loginUrl } from '@/config/env'
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
function hasPermission(roles, permissionRoles) {
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
const lockPage = store.getters.website.lockPage
router.addRoutes(asyncRouterMap) // 动态添加可访问路由表
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  const token = getToken()
  if (token && token !== 'undefined') {
    // determine if there has token
    /* has token*/
    if (store.getters.isLock && to.path != lockPage) {
      next({
        path: lockPage
      })
      NProgress.done()
    } else {
      if (JSON.stringify(store.getters.userInfo) == '{}') {
        store
          .dispatch('GetUserInfo')
          .then(res => {
            next({
              ...to,
              replace: true
            })
          })
          .catch(() => {
            window.top.location.href = loginUrl
          })
      } else {
        let flag = true
        const whiteList = store.getters.website.whiteList
        for (let i = 0; i < whiteList.length; i++) {
          if (
            new RegExp('^' + whiteList[i].toString() + '.*', 'g').test(to.path)
          ) {
            flag = false
            break
          }
        }
        next()
      }
    }
  } else {
    /* has no token*/
    let flag = true
    const whiteList = store.getters.website.whiteList
    for (let i = 0; i < whiteList.length; i++) {
      if (new RegExp('^' + whiteList[i].toString() + '.*', 'g').test(to.path)) {
        flag = false
        break
      }
    }
    if (!flag) {
      next()
    } else {
      window.top.location.href = loginUrl
    }
  }
})

//寻找子菜单的父类
function findMenuParent(tag) {
  let tagCurrent = []
  const menu = store.getters.menu
  tagCurrent.push(tag)
  return tagCurrent
}
router.afterEach((to, from) => {
  NProgress.done()
})
