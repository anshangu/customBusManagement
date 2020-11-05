import request from '@/router/axios'

export function fetchList(query, id = 1) {
  return request({
    url: `/custombus/webapi/custbus/ticket/${id}/web`,
    method: 'get',
    params: query
  })
}

// 新增余票
export function addObj(obj, id) {
  return request({
    url: `/custombus/webapi/custbus/detail/${id}/ticket/add`,
    method: 'post',
    data: {
      cust_bus_date: obj.cust_bus_date,
      publish: obj.publish
    }
  })
}

export function getObj(id) {
  return request({
    url: '/tcapp/custbusstock/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/tcapp/custbusstock/' + id,
    method: 'delete'
  })
}

// 修改余票信息
export function putObj(obj) {
  console.log(obj)
  return request({
    url: `/custombus/webapi//custbus/detail/ticket/edit/${obj.id}`,
    method: 'put',
    data: obj
  })
}
