import { getToken, setToken, removeToken } from '@/util/auth'
import { setStore, getStore, removeStore } from '@/util/store'
import { validatenull } from '@/util/validate'
import { encryption } from '@/util/util'
import { GetUserMenu } from '@/api/admin/menu'
import { getUserInfo, logout } from '@/api/admin/login'
const user = {
  state: {
    userInfo: getStore({ name: 'userInfo' }) || {},
    permissions: getStore({ name: 'permissions' }) || {},
    roles: getStore({ name: 'roles' }) || [],
    menu: getStore({ name: 'menu' }) || [],
    isInitMenu: getStore({ name: 'isInitMenu' }) || false,
    token: getStore({ name: 'token' }) || ''
  },
  actions: {
    //根据用户名登录
    // LoginByUsername({ commit, state, dispatch }, userInfo) {
    //   const user = encryption({
    //     data: userInfo,
    //     key: '1234567887654321',
    //     param: ['password']
    //   });
    //     return new Promise((resolve, reject) => {
    //         loginByUsername(user.username, user.password, userInfo.code, userInfo.redomStr).then(res => {
    //             const data = res.data;
    //             setToken(data.data.access_token);
    //             commit('SET_TOKEN', data.data.access_token);
    //             commit('DEL_ALL_TAG');
    //             commit('CLEAR_LOCK');
    //             resolve();
    //         })
    //     })
    // },
    GetUserInfo({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          if (res.data && res.data.suc) {
            const data = res.data.data
            commit('SET_USERIFNO', data.sysUser)
            commit('SET_ROLES', data.roles)
            commit('SET_PERMISSION', data.permissions)
            resolve(data)
          } else {
            console.log(res.data)
            reject(new Error(res.data))
          }
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            // 清除菜单
            commit('SET_MENU', [])
            // 清除权限
            commit('SET_PERMISSION', [])
            commit('SET_USERINFO', {})
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('DEL_ALL_TAG')
            commit('CLEAR_LOCK')
            removeToken()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    //注销session
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        // 清除菜单
        commit('SET_MENU', [])
        // 清除权限
        commit('SET_PERMISSION', [])
        commit('SET_USERINFO', {})
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG')
        commit('CLEAR_LOCK')
        removeToken()
        resolve()
      })
    },
    //获取系统菜单
    GetMenu({ commit }) {
      return new Promise(resolve => {
        GetUserMenu().then(res => {
          const data = res.data
          commit('SET_MENU', data)
          resolve(data)
        })
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setStore({ name: 'token', content: state.token, type: 'session' })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo
      setStore({ name: 'userInfo', content: state.userInfo, type: 'session' })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({ name: 'menu', content: state.menu, type: 'session' })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSION: (state, permissions) => {
      const list = {}
      for (let i = 0; i < permissions.length; i++) {
        list[permissions[i]] = true
      }
      state.permissions = list
      setStore({
        name: 'permissions',
        content: state.permissions,
        type: 'session'
      })
    }
  }
}
export default user
