#本地开放

> 修改本地 host
> gedit /etc/hosts

127.0.0.1 tcapp.sit.allcitygo.com
10.0.0.120 bm.sit.allcitygo.com

npm start
http://bm.sit.allcitygo.com 登录成功后打开各个页面
如 http://tcapp.sit.allcitygo.com:8080/#/customBus

http://tcapp.sit.allcitygo.com:8080/#/customBus/custbusdetail
http://tcapp.sit.allcitygo.com:8080/#/customBus/stock
http://tcapp.sit.allcitygo.com:8080/#/customBus/sample
http://tcapp.sit.allcitygo.com:8080/#/customBus/report

## 开发环境

baseUrl = 'http://10.0.0.120:9999'
loginUrl = 'http://bm.sit.allcitygo.com:8080/bmui/#/login'

## 测试环境

baseUrl = 'http://sit-basic-gw.allcitygo.com'
loginUrl = 'http://sit-basic.allcitygo.com/bmui/#/login'

## 生产环境

baseUrl = 'https://bmapi.allcitygo.com:13002'
loginUrl = 'https://bm.allcitygo.com/#/login'

#定制公交后管