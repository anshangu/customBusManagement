import request from '@/router/axios'
import qs from 'qs'
import moment from 'moment'
import { downloadUrl } from '@/config/env'
//import { getToken } from '@/util/auth'
function checkBe(obj) {
  if (!(typeof obj == 'object')) {
    return
  }
  for (var key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] == null || obj[key] == undefined || obj[key] == '')
    ) {
      delete obj[key]
    }
  }
  return obj
}
export function fetchList(query) {
  return request({
    // baseURL: 'http://118.31.129.123:8071/', // 'http://192.168.1.9:8091',
    url: '/custombus/webapi/custbus/list', // /custombus
    method: 'get',
    params: query
  })
}

// 新增路线
export function addObj(obj) {
  obj.original_amt = obj.original_amt * 100
  obj.city_code = '610300'
  return request({
    // baseURL: 'http://192.168.1.9:8091',
    url: '/custombus/webapi/custbus/add',
    method: 'post',
    data: obj
  })
}

// 查询单条路线
export function getObj(id) {
  return request({
    url: '/tcapp/custbus/' + id,
    method: 'get'
  })
}

// 删除单条线路
export function delObj(id) {
  return request({
    // baseURL: 'http://192.168.1.9:8091',
    url: `/custombus/webapi/custbus/del?ids=${encodeURI(JSON.stringify([id]))}`,
    method: 'delete'
  })
}

// 更新单条线路
export function putObj(obj) {
  if (obj.towards === '上行') obj.towards = 0
  else if (obj.towards === '下行') obj.towards = 1
  obj.original_amt = obj.original_amt * 100
  if (obj.amt_type === 3) obj.discount = obj.discount * 100
  return request({
    url: `/custombus/webapi/custbus/custom/${obj.id}`,
    method: 'put',
    data: obj
  })
}
// 更新单条线路
export function detailObj(obj) {
  return request({
    url: `/custombus/webapi/custbus/custom/${obj}`,
    method: 'get',
    data: ''
  })
}

export function noticeOpen(obj) {
  return request({
    url: `/custombus/webapi/custbus/open/notice/${obj.id}`,
    method: 'get'
  })
}
function downFlie1() {
  // 创建a标签
  var elementA = document.createElement('a')

  //文件的名称为时间戳加文件名后缀
  elementA.download = +new Date() + '.tpl'
  elementA.style.display = 'none'

  //生成一个blob二进制数据，内容为json数据
  var blob = new Blob([JSON.stringify(jsonObj)])

  //生成一个指向blob的URL地址，并赋值给a标签的href属性
  elementA.href = URL.createObjectURL(blob)
  document.body.appendChild(elementA)
  elementA.click()
  document.body.removeChild(elementA)
}

function downFile(name, data) {
  var elementA = document.createElement('a')
  elementA.setAttribute('href', 'data:text/plain;charset=utf-8,' + data)
  elementA.setAttribute('download', name)
  elementA.style.display = 'none'
  document.body.appendChild(elementA)
  elementA.click()
  document.body.removeChild(elementA)
}

export function exoprtList() {
  //
  window.open(`${downloadUrl}/webapi/custbus/export_cust_bus`)
  //downFile(`开通路线报表_导出日期${moment().format('YYYY-MM-DD_')}.csv`, 'test')
  /* return request({
    url: `/custombus/webapi/custbus/export_cust_bus`,
    method: 'get'
  }).then(res => {
    downFile(
      `开通路线报表_导出日期${moment().format('YYYY-MM-DD_')}.csv`,
      res.data
    )
  }) */

  //downFile()
  //window.open(`${baseUrl}/custombus/webapi/custbus/export_cust_bus`)
  /*  return request({
    url: `/custombus/webapi/custbus/export_cust_bus`,
    method: 'get'
  }) */
}

export function tradeOrderExoprtList(obj) {
  let q = qs.stringify(checkBe(obj))
  window.open(`${downloadUrl}/webapi/trade_order/export?${q}`)
  /*  return request({
    url: `/custombus/webapi/trade_order/export?${q}`,
    method: 'get'
  }).then(res => {
    downFile(`交易报表_导出日期${moment().format('YYYY-MM-DD_')}.csv`, res.data)
  }) */
  //window.open(`${baseUrl}/custombus/webapi/trade_order/export?${q}`)
  /*  return request({
    url: `/custombus/webapi/custbus/export_cust_bus`,
    method: 'get'
  }) */
}

export function tradeOrder(obj) {
  obj.city_code = obj.city_code || '610300'
  return request({
    url: `/custombus/webapi/trade_order/list`,
    method: 'post',
    data: checkBe(obj)
  })
}

///webapi/custbus/draw_line
