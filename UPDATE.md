#
http://tcapp.sit.allcitygo.com:8080/toUrl/customBus&name=已开通线路


## 2018-11-13

- 启动配置 node_modules/@vue/cli-service/lib/commands/serve.js
- 修改参数

~
const defaults = {
  host: 'local.sit.allcitygo.com', // tcapp.sit.allcitygo.com
  // 测试环境 local.sit.allcitygo.com
  // 开发环境 tcapp.sit.allcitygo.com
  port: 8080,
  https: false
}
~
