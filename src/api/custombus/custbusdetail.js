import request from '@/router/axios'
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
export function fetchList(query, id) {
  return request({
    // baseURL: 'https://easy-mock.com/mock/5b9614d965bc2f6eaf2fb7c3',
    url: `/custombus/webapi/custbus/detail/${id}`,
    method: 'get'
  })
}
// 添加站点
export function addObj(obj) {
  // console.log(obj, location.hash.split('=')[1])
  return request({
    url: `/custombus/webapi/custbus/detail/${location.hash.split('=')[1]}/add`,
    method: 'post',
    data: {
      name: obj.station_name,
      des: obj.station_des,
      lon: obj.station_lon,
      lat: obj.station_lat,
      arr_time: obj.arr_time
    }
  })
}

export function getObj(id) {
  return request({
    url: '/tcapp/custbusdetail/' + id,
    method: 'get'
  })
}

// 删除站点
export function delObj(id) {
  return request({
    url: `/custombus/webapi/custbus/detail/del?ids=${encodeURI(
      JSON.stringify([id])
    )}`,
    method: 'delete'
  })
}

// 编辑站点
export function putObj(obj) {
  return request({
    url: `/custombus/webapi/custbus/detail/edit/${obj.id}`,
    method: 'PUT',
    data: {
      id: obj.id,
      arr_time: obj.arr_time,
      des: obj.station_des,
      lat: obj.station_lat,
      lon: obj.station_lon,
      name: obj.station_name
    }
  })
}

export function getDrawLine(obj) {
  return request({
    url: `/custombus/webapi/custbus/line_points?id=${obj.id}`,
    method: 'get'
  })
}

export function putDrawLine(obj) {
  return request({
    url: `/custombus/webapi/custbus/draw_line`,
    method: 'post',
    data: checkBe(obj)
  })
}
