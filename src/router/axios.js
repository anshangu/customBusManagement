/**
 *
 * http配置
 *
 */

import axios from 'axios'
import { getToken, setToken, removeToken } from '@/util/auth'
import { Message } from 'element-ui'
import errorCode from '@/const/errorCode'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import { baseUrl } from '../config/env'
import store from '../store'
import router from './router'
// progress bar style
// 超时时间
axios.defaults.timeout = 30000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
axios.defaults.baseURL = baseUrl
NProgress.configure({ showSpinner: false }) // NProgress Configuration
let msg = '系统忙，请稍后再试'
// HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    //console.log(config.baseURL, config)
    if (config.url.indexOf(baseUrl) >= 0 || config.url.indexOf('http') == -1) {
      NProgress.start() // start progress bar
      const token = getToken()
      //console.log('getToken', token)
      if (token && token !== 'undefined') {
        config.headers['access_token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      }
    } else {
      //console.log('request ', config.url)
      config.withCredentials = false
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// HTTPresponse拦截
axios.interceptors.response.use(
  data => {
    // console.log(new Date(), data)
    NProgress.done()
    if (data.data.sUc !== 'undefined' && false == data.data.sUc) {
      let code = data.data.code
      Message({
        message: data.data.msg || errorCode['default'],
        type: 'error'
      })
      if (code == 401) {
        store.dispatch('FedLogOut').then(() => {
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
        })
      }
      return Promise.reject(new Error(msg))
    }
    return data
  },
  error => {
    NProgress.done()
    let errMsg = error.toString()
    let code = errMsg.substr(errMsg.indexOf('code') + 5)
    Message({
      message: errorCode[code] || errorCode['default'],
      type: 'error'
    })
    return Promise.reject(new Error(error))
  }
)

export default axios
