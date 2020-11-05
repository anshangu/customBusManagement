import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: `/custombus/webapi/custbus/sample/list?city_code=610300`,
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/tcapp/custbussample/',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/tcapp/custbussample/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/tcapp/custbussample/' + id,
    method: 'delete'
  })
}

// 修改待开通线路
export function putObj(obj) {
  // console.log(obj)
  return request({
    url: `/custombus/webapi/custbus/sample/${obj.id}/${obj.state}`,
    method: 'put',
    data: obj
  })
}
