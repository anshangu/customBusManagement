import request from '@/router/axios'
import { reject } from 'bluebird'
export const CITY_MAP_CENTER = [107.237703, 34.362923] // 宝鸡
export const AMP_WEB_KEY = '5d1564203934a57a268d0ef563babc03'
export const AMP_JSAPI_KEY = '80087a0431514fc08f05b6fabad3c8d5'
//axios.defaults.crossDomain = true
//axios.defaults.withCredentials = true
const direction_url = 'https://restapi.amap.com/v3/direction/driving'

/*
origin destination originid destinationid extensions strategy waypoints avoidpolygons avoidroad

*/

export function direction(query) {
  return request({
    url: direction_url,
    method: 'get',
    params: Object.assign(query, { key: AMP_WEB_KEY, strategy: 16 })
  }).then(res => {
    console.log(res.data)
    if (res.data.status === '1' && res.data.route.paths) {
      let polylines = []
      //paths[] -> steps[] -> polyline
      let paths = res.data.route.paths

      paths.forEach(e1 => {
        let polyline = []
        let steps = e1.steps
        steps &&
          steps.forEach(e2 => {
            //[120.197739, 30.230799]
            //"120.197739,30.230799;120.196617,30.229786;120.195908,30
            let p = e2.polyline.split(';')
            let path = []
            p.forEach(e3 => {
              path.push(JSON.parse('[' + e3 + ']'))
            })
            polyline.push(path)
            //console.log(p)
          })
        polylines.push(polyline)
      })

      return polylines
    } else {
      reject(new Error('status fail'))
    }
  })
}
