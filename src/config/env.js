// 配置编译环境和线上环境之间的切换

let baseUrl = 'http://172.31.254.206:4002'
const iconfontVersion = [
  '567566_r22zi6t8noas8aor',
  '599693_dfa50fge714',
  '667895_2ek3wqcg8w1',
  '667895_5kwuxgtttcl',
  '825523_688oweoip6i'
]
const iconfontUrl = `//at.alicdn.com/t/font_$key.css`
let codeUrl = `${baseUrl}/code`
const env = process.env
let loginUrl = ''
let downloadUrl = ''
//应用的appId
let appId = 7
if (env.NODE_ENV == 'development') {
  baseUrl = 'http://sit-basic-gw.allcitygo.com' //'http://10.0.0.120:9999' // 'http://sit-basic-gw.allcitygo.com' // 开发环境地址
  loginUrl = 'http://bm.sit.allcitygo.com:8080/bmui/#/login' // 'http://sit-basic.allcitygo.com/bmui/#/login' //'http://bm.sit.allcitygo.com:8080/bmui/#/login' // 'http://172.31.254.206/bmui/#/login'
  downloadUrl = 'http://sit-zctcustom.allcitygo.com'
} else if (env.NODE_ENV == 'production') {
  baseUrl = 'https://bmapi.allcitygo.com:13002'
  loginUrl = 'https://bm.allcitygo.com/#/login'
  downloadUrl = 'https://ztmanage.allcitygo.com:8195'
} else if (env.NODE_ENV == 'test') {
  baseUrl = `http://172.31.254.206:4002` //测试环境地址
  loginUrl = 'http://172.31.254.206/#/login'
  downloadUrl = 'http://172.31.254.206:4002'
}
export {
  baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  loginUrl,
  appId,
  env,
  downloadUrl
}
