import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/custombus/webapi/custbus/complete/list',
    method: 'get',
    params: query
  })
  // let data = []
  // return data
}
export function getObj(id) {
  return request({
    url: '/tcapp/custbussample/' + id,
    method: 'get'
  })
}

// 更新
export function putObj(obj) {
  console.log(obj)
  return request({
    url: `/custombus/webapi/custbus/complete/${obj.id}/${obj.complete_state}`,
    method: 'put'
  })
}
