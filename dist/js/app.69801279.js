(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],_=0,l=[];_<u.length;_++)a=u[_],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-27b9":"a0a3b252","chunk-2f60":"c44cd68e","chunk-3854":"9f267de8","chunk-4157":"b57de83d","chunk-447e":"3371a115","chunk-9015":"0200ba0e","chunk-4e5e":"5f2d6902","chunk-5659":"f74e5074","chunk-6a49":"139bf554","chunk-802c":"3e88dbaa","chunk-d98f":"9f6dfa5e","chunk-2023":"84f2db1a","chunk-209c":"cbdeb88a","chunk-6039":"5282c0f9","chunk-f86e":"b601279b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-27b9":1,"chunk-2f60":1,"chunk-3854":1,"chunk-4157":1,"chunk-447e":1,"chunk-4e5e":1,"chunk-5659":1,"chunk-6a49":1,"chunk-802c":1,"chunk-2023":1,"chunk-209c":1,"chunk-6039":1,"chunk-f86e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27b9":"c19c5dd7","chunk-2f60":"9ffd6d86","chunk-3854":"04a434a3","chunk-4157":"03e1c746","chunk-447e":"2b8d3d99","chunk-9015":"31d6cfe0","chunk-4e5e":"bd0ee5f9","chunk-5659":"0e8b3ac4","chunk-6a49":"738d08b1","chunk-802c":"c01f40c7","chunk-d98f":"31d6cfe0","chunk-2023":"93843119","chunk-209c":"0892a3e6","chunk-6039":"5869d8de","chunk-f86e":"7972ca9e"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var _=document.getElementsByTagName("style");for(c=0;c<_.length;c++){u=_[c],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},l.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,_=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,_.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/customBus/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],_=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=_;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a5a":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r=n("a78e"),a=n.n(r),o="x-access-token";function c(){return a.a.get(o)}function u(){return a.a.remove(o)}},"0e0b":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});n("6b54"),n("f559"),n("ac6a"),n("a481"),n("c54a");var r=function(e,t){var n=e;return n=-1!=e.indexOf("http")||-1!=e.indexOf("https")?"/myiframe/urlPath?src=".concat(n,"&name=").concat(t):"".concat(n),n},a=function(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e;var n=document.getElementsByTagName("head")[0];n.appendChild(t)}},"1be0":function(e,t,n){},"3cd9":function(e,t,n){"use strict";var r=n("edd5"),a=n.n(r);a.a},"3ce2":function(e,t,n){"use strict";var r=n("e56f"),a=n.n(r);a.a},"3dfd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"app",data:function(){return{}},watch:{},created:function(){},methods:{},computed:{}},c=o,u=(n("3cd9"),n("2877")),i=Object(u["a"])(c,r,a,!1,null,null,null);i.options.__file="App.vue";t["default"]=i.exports},4360:function(e,t,n){"use strict";var r=n("8bbf"),a=n.n(r),o=n("5880"),c=n.n(o),u=(n("cadf"),n("551c"),n("097d"),n("0a5a")),i=n("e3c4"),s=(n("c54a"),n("0e0b"),n("b5c6"));function _(){return Object(s["a"])({url:"/admin/menu/userMenu",method:"get"})}var l=n("51be"),f=function(){return Object(s["a"])({url:"/admin/user/info",method:"get",params:{appId:l["appId"]}})},m=function(e,t){return Object(s["a"])({url:"/admin/auth/logout",method:"post",params:{accesstoken:e,refreshToken:t}})},d={state:{userInfo:Object(i["a"])({name:"userInfo"})||{},permissions:Object(i["a"])({name:"permissions"})||{},roles:Object(i["a"])({name:"roles"})||[],menu:Object(i["a"])({name:"menu"})||[],isInitMenu:Object(i["a"])({name:"isInitMenu"})||!1,token:Object(i["a"])({name:"token"})||""},actions:{GetUserInfo:function(e){var t=e.commit;e.state,e.dispatch;return new Promise(function(e,n){f().then(function(r){if(r.data&&r.data.suc){var a=r.data.data;t("SET_USERIFNO",a.sysUser),t("SET_ROLES",a.roles),t("SET_PERMISSION",a.permissions),e(a)}else console.log(r.data),n(new Error(r.data))})})},LogOut:function(e){var t=e.commit;e.state;return new Promise(function(e,n){m().then(function(){t("SET_MENU",[]),t("SET_PERMISSION",[]),t("SET_USERINFO",{}),t("SET_TOKEN",""),t("SET_ROLES",[]),t("DEL_ALL_TAG"),t("CLEAR_LOCK"),Object(u["b"])(),e()}).catch(function(e){n(e)})})},FedLogOut:function(e){var t=e.commit;return new Promise(function(e){t("SET_MENU",[]),t("SET_PERMISSION",[]),t("SET_USERINFO",{}),t("SET_TOKEN",""),t("SET_ROLES",[]),t("DEL_ALL_TAG"),t("CLEAR_LOCK"),Object(u["b"])(),e()})},GetMenu:function(e){var t=e.commit;return new Promise(function(e){_().then(function(n){var r=n.data;t("SET_MENU",r),e(r)})})}},mutations:{SET_TOKEN:function(e,t){e.token=t,Object(i["c"])({name:"token",content:e.token,type:"session"})},SET_USERIFNO:function(e,t){e.userInfo=t,Object(i["c"])({name:"userInfo",content:e.userInfo,type:"session"})},SET_MENU:function(e,t){e.menu=t,Object(i["c"])({name:"menu",content:e.menu,type:"session"})},SET_ROLES:function(e,t){e.roles=t},SET_PERMISSION:function(e,t){for(var n={},r=0;r<t.length;r++)n[t[r]]=!0;e.permissions=n,Object(i["c"])({name:"permissions",content:e.permissions,type:"session"})}}},p=d;n("ac6a");function b(e){return Object(s["a"])({url:"/admin/dict/",method:"get",data:e})}var g={title:"后管系统",logo:"通卡",author:"通卡联城",whiteList:["/login","/404","/401","/lock"],tokenTime:6e3,info:{title:"统一后台管理系统",list:["通卡联城统一后台管理系统","权限管理系统接入"]},wel:{title:"统一后台管理系统",list:["1、权限管理接入"]}},h={state:{isCollapse:!1,isFullScren:!1,isLock:Object(i["a"])({name:"isLock"})||!1,theme:Object(i["a"])({name:"theme"})||"#409EFF",themeName:Object(i["a"])({name:"themeName"})||"",lockPasswd:Object(i["a"])({name:"lockPasswd"})||"",website:g},actions:{GetDic:function(e,t){e.commit,e.state,e.dispatch;return new Promise(function(e,n){t instanceof Array&&Promise.all(t.map(function(e){return b(e)})).then(function(n){var r={};t.forEach(function(e,t){r[e]=n[t].data}),e(r)})})}},mutations:{SET_COLLAPSE:function(e,t){e.isCollapse=!e.isCollapse},SET_FULLSCREN:function(e,t){e.isFullScren=!e.isFullScren},SET_LOCK:function(e,t){e.isLock=!0,Object(i["c"])({name:"isLock",content:e.isLock,type:"session"})},SET_THEME:function(e,t){e.theme=t,Object(i["c"])({name:"theme",content:e.theme})},SET_THEME_NAME:function(e,t){e.themeName=t,Object(i["c"])({name:"themeName",content:e.themeName})},SET_LOCK_PASSWD:function(e,t){e.lockPasswd=t,Object(i["c"])({name:"lockPasswd",content:e.lockPasswd,type:"session"})},CLEAR_LOCK:function(e,t){e.isLock=!1,e.lockPasswd="",Object(i["b"])({name:"lockPasswd"}),Object(i["b"])({name:"isLock"})}}},E=h,O={label:"",value:"",query:"",num:"",close:!0};function v(e){return 1==e.length?e[0].close=!1:e.some(function(e){e.close=!0}),e}var k={state:{tagList:Object(i["a"])({name:"tagList"})||[],tag:Object(i["a"])({name:"tag"})||O,tagWel:{label:"首页",value:"/wel/index"},tagCurrent:Object(i["a"])({name:"tagCurrent"})||[]},actions:{},mutations:{ADD_TAG:function(e,t){e.tag=t,Object(i["c"])({name:"tag",content:e.tag,type:"session"}),e.tagList.some(function(e){return e.value===t.value})||(e.tagList.push({label:t.label,value:t.value,query:t.query}),e.tagList=v(e.tagList),Object(i["c"])({name:"tagList",content:e.tagList,type:"session"}))},SET_TAG_CURRENT:function(e,t){e.tagCurrent=t,Object(i["c"])({name:"tagCurrent",content:e.tagCurrent,type:"session"})},SET_TAG:function(e,t){e.tagList.forEach(function(n,r){n.value===t&&(e.tag=e.tagList[r],Object(i["c"])({name:"tag",content:e.tag,type:"session"}))})},DEL_ALL_TAG:function(e,t){e.tag=O,e.tagList=[],e.tagList.push(e.tagWel),e.tagList[0].close=!1,Object(i["b"])({name:"tag"}),Object(i["b"])({name:"tagList"})},DEL_TAG_OTHER:function(e,t){e.tagList.forEach(function(t,n){t.value===e.tag.value&&(e.tagList=e.tagList.slice(n,n+1),e.tag=e.tagList[0],e.tagList[0].close=!1,Object(i["c"])({name:"tag",content:e.tag,type:"session"}),Object(i["c"])({name:"tagList",content:e.tagList,type:"session"}))})},DEL_TAG:function(e,t){e.tagList.forEach(function(n,r){n.value===t.value&&(e.tagList.splice(r,1),e.tagList=v(e.tagList),Object(i["c"])({name:"tag",content:e.tag,type:"session"}),Object(i["c"])({name:"tagList",content:e.tagList,type:"session"}))})}}},w=k,y=(n("6b54"),n("f751"),n("8975")),L=function(){return new Promise(function(e){e({})})},j={state:{logsList:Object(i["a"])({name:"logsList"})||[]},actions:{SendLogs:function(e){var t=e.commit;return new Promise(function(e,n){L().then(function(){t("CLEAR_LOGS"),e()}).catch(function(e){n(e)})})}},mutations:{ADD_LOGS:function(e,t){var n=t.type,r=t.message,a=t.stack,o=t.info;e.logsList.push(Object.assign({url:window.location.href,time:Object(y["dateFormat"])(new Date)},{type:n,message:r,stack:a,info:o.toString()})),Object(i["c"])({name:"logsList",content:e.logsList})},CLEAR_LOGS:function(e){e.logsList=[],Object(i["c"])({name:"logsList",content:e.logsList})}}},S=j,M={tag:function(e){return e.tags.tag},website:function(e){return e.common.website},userInfo:function(e){return e.user.userInfo},theme:function(e){return e.common.theme},themeName:function(e){return e.common.themeName},isCollapse:function(e){return e.common.isCollapse},isLock:function(e){return e.common.isLock},isFullScren:function(e){return e.common.isFullScren},lockPasswd:function(e){return e.common.lockPasswd},tagList:function(e){return e.tags.tagList},tagCurrent:function(e){return e.tags.tagCurrent},tagWel:function(e){return e.tags.tagWel},token:function(e){return e.user.token},roles:function(e){return e.user.roles},permissions:function(e){return e.user.permissions},menu:function(e){return e.user.menu},menuAll:function(e){return e.user.menuAll},logsList:function(e){return e.logs.logsList},logsLen:function(e){return e.logs.logsList.length||0},logsFlag:function(e,t){return 0===t.logsLen}},P=M;a.a.use(c.a);var T=new c.a.Store({modules:{user:p,common:E,logs:S,tags:w},getters:P});t["a"]=T},"47cf":function(e,t,n){"use strict";var r=n("7b57"),a=n.n(r);a.a},"51be":function(e,t,n){"use strict";n.r(t),n.d(t,"baseUrl",function(){return r}),n.d(t,"iconfontUrl",function(){return o}),n.d(t,"iconfontVersion",function(){return a}),n.d(t,"codeUrl",function(){return c}),n.d(t,"loginUrl",function(){return i}),n.d(t,"appId",function(){return _}),n.d(t,"env",function(){return u}),n.d(t,"downloadUrl",function(){return s});n("cadf"),n("551c"),n("097d");var r="http://172.31.254.206:4002",a=["567566_r22zi6t8noas8aor","599693_dfa50fge714","667895_2ek3wqcg8w1","667895_5kwuxgtttcl","825523_688oweoip6i"],o="//at.alicdn.com/t/font_$key.css",c="".concat(r,"/code"),u=Object({NODE_ENV:"production",BASE_URL:"/customBus/"}),i="",s="",_=7;"development"==u.NODE_ENV?(r="http://sit-basic-gw.allcitygo.com",i="http://bm.sit.allcitygo.com:8080/bmui/#/login",s="http://sit-zctcustom.allcitygo.com"):"production"==u.NODE_ENV?(r="https://bmapi.allcitygo.com:13002",i="https://bm.allcitygo.com/#/login",s="https://ztmanage.allcitygo.com:8195"):"test"==u.NODE_ENV&&(r="http://172.31.254.206:4002",i="http://172.31.254.206/#/login",s="http://172.31.254.206:4002")},"56d7":function(e,t,n){"use strict";n.r(t);n("a481"),n("456d"),n("ac6a"),n("cadf"),n("551c"),n("097d");var r=n("8bbf"),a=n.n(r),o=n("b5c6"),c=n("a7fe"),u=n.n(c),i=n("3dfd"),s=(n("6b54"),n("3b2b"),n("c93e")),_=n("9883"),l=n("4360"),f=n("323e"),m=n.n(f),d=(n("a5d8"),n("0a5a")),p=(n("a586"),n("0e0b")),b=(n("c54a"),n("51be"));m.a.configure({showSpinner:!1});var g=l["a"].getters.website.lockPage;_["b"].addRoutes(_["a"]),_["b"].beforeEach(function(e,t,n){m.a.start();var r=Object(d["a"])();if(r&&"undefined"!==r)if(l["a"].getters.isLock&&e.path!=g)n({path:g}),m.a.done();else if("{}"==JSON.stringify(l["a"].getters.userInfo))l["a"].dispatch("GetUserInfo").then(function(t){n(Object(s["a"])({},e,{replace:!0}))}).catch(function(){window.top.location.href=b["loginUrl"]});else{for(var a=l["a"].getters.website.whiteList,o=0;o<a.length;o++)if(new RegExp("^"+a[o].toString()+".*","g").test(e.path)){!1;break}n()}else{for(var c=!0,u=l["a"].getters.website.whiteList,i=0;i<u.length;i++)if(new RegExp("^"+u[i].toString()+".*","g").test(e.path)){c=!1;break}c?window.top.location.href=b["loginUrl"]:n()}}),_["b"].afterEach(function(e,t){m.a.done()}),a.a.config.errorHandler=function(e,t,n){a.a.nextTick(function(){l["a"].commit("ADD_LOGS",{type:"error",message:e.message,stack:e.stack,info:n})})};n("8f5a");var h=n("8975"),E=(n("1be0"),n("50d6"),n("9850"),n("dc8a")),O=n("4eb5"),v=n.n(O),k=n("558c"),w=n.n(k),y=n("8f9b"),L=n.n(y);a.a.use(L.a),L.a.initAMapApiLoader({key:"80087a0431514fc08f05b6fabad3c8d5",plugin:["AMap.Geolocation","AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor"],v:"1.4.4"}),a.a.use(v.a),a.a.use(w.a),a.a.use(u.a,o["a"]),a.a.component("basicContainer",E["default"]),Object.keys(b).forEach(function(e){a.a.prototype[e]=b[e]}),Object.keys(h).forEach(function(e){a.a.filter(e,h[e])}),b["iconfontVersion"].forEach(function(e){Object(p["a"])(b["iconfontUrl"].replace("$key",e))}),a.a.config.productionTip=!1,new a.a({router:_["b"],store:l["a"],render:function(e){return e(i["default"])}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},"7b57":function(e,t,n){},8975:function(e,t,n){"use strict";n.r(t),n.d(t,"dateFormat",function(){return o}),n.d(t,"timeAgo",function(){return c}),n.d(t,"parseTime",function(){return u}),n.d(t,"formatTime",function(){return i}),n.d(t,"nFormatter",function(){return s}),n.d(t,"html2Text",function(){return _}),n.d(t,"toThousandslsFilter",function(){return l});n("6b54");var r=n("6bde");n("c5f6"),n("3b2b"),n("a481"),n("a586");function a(e,t){return 1===e?e+t:e+t+"s"}function o(e){var t="yyyy-MM-dd hh:mm:ss";if("Invalid Date"!=e){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}return""}function c(e){var t=Date.now()/1e3-Number(e);return t<3600?a(~~(t/60)," minute"):t<86400?a(~~(t/3600)," hour"):a(~~(t/86400)," day")}function u(e,t){if(0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n,a=t||"{y}-{m}-{d} {h}:{i}:{s}";n="object"===Object(r["a"])(e)?e:new Date(e);var o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},c=a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=o[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)});return c}function i(e,t){e=1e3*+e;var n=new Date(e),r=Date.now(),a=(r-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?u(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function s(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],r=0;r<n.length;r++)if(e>=n[r].value)return(e/n[r].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[r].symbol;return e.toString()}function _(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function l(e){return(+e||0).toString().replace(/^-?\d+/g,function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")})}},"8bbf":function(e,t){e.exports=Vue},9883:function(e,t,n){"use strict";var r=n("8bbf"),a=n.n(r),o=n("6389"),c=n.n(o),u=n("9cc4"),i=[{path:"*",redirect:"/404",hidden:!0},{path:"/404",component:function(){return n.e("chunk-27b9").then(n.bind(null,"a5fa"))},name:"404"},{path:"/403",component:function(){return n.e("chunk-2f60").then(n.bind(null,"a8d0"))},name:"403"},{path:"/500",component:function(){return n.e("chunk-f86e").then(n.bind(null,"611b"))},name:"500"},{path:"/",name:"主页",redirect:"/wel"},{path:"/myiframe",component:u["default"],redirect:"/myiframe",children:[{path:":routerPath",name:"iframe",component:function(){return n.e("chunk-5659").then(n.bind(null,"c1a1"))},props:!0}]}],s=[{path:"/wel",component:u["default"],redirect:"/wel/index",children:[{path:"index",name:"首页",component:function(){return n.e("chunk-3854").then(n.bind(null,"696f"))}}]}],_=[{path:"/hireBus",component:u["default"],name:"包车旅游",children:[{path:"/",component:function(){return n.e("chunk-4e5e").then(n.bind(null,"9bbf"))}}]}],l=[{path:"/customBus",component:u["default"],name:"定制公交",children:[{path:"/",name:"已开通线路",component:function(){return Promise.all([n.e("chunk-d98f"),n.e("chunk-2023")]).then(n.bind(null,"7ac5"))}},{path:"custbusdetail",name:"站点详情",component:function(){return n.e("chunk-802c").then(n.bind(null,"49e5"))}},{path:"stock",name:"余票详情",component:function(){return n.e("chunk-6a49").then(n.bind(null,"8e7b"))}},{path:"sample",name:"未开通列表",component:function(){return n.e("chunk-4157").then(n.bind(null,"ce52"))}},{path:"map",name:"绘制线路",component:function(){return Promise.all([n.e("chunk-447e"),n.e("chunk-9015")]).then(n.bind(null,"6ece"))}},{path:"report",name:"公交订单",component:function(){return Promise.all([n.e("chunk-d98f"),n.e("chunk-209c")]).then(n.bind(null,"3885"))}}]}],f=s.concat(_,l);n("4360"),n("0e0b");n.d(t,"a",function(){return m}),a.a.use(c.a);t["b"]=new c.a({scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}});var m=[].concat(i,f)},"9cc4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"avue-contail"},[n("el-container",[n("el-main",{staticClass:"avue-main"},[n("transition",{attrs:{name:"fade-transverse"}},[e.$route.meta.keepAlive?n("router-view",{staticClass:"avue-view"}):e._e()],1),n("transition",{attrs:{name:"fade-transverse"}},[e.$route.meta.keepAlive?e._e():n("router-view",{staticClass:"avue-view"})],1)],1)],1)],1)},a=[],o=n("5880"),c=(n("c54a"),n("e3c4"),{components:{},name:"index",data:function(){return{}},created:function(){},mounted:function(){},computed:Object(o["mapGetters"])(["isLock","isCollapse","website"]),props:[],methods:{}}),u=c,i=(n("47cf"),n("2877")),s=Object(i["a"])(u,r,a,!1,null,"2cdc480f",null);s.options.__file="index.vue";t["default"]=s.exports},a586:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_5__),element_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("5f72"),element_ui__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_6__),GetQueryString=function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),r=e.substr(e.indexOf("?")+1).match(n);return null!=r?unescape(r[2]):null},parseParam=function(e){var t="";if(e instanceof Object)for(var n in e)vaildUtil.ifnull(e[n])||(t="".concat(t).concat(n,"=").concat(e[n],"&"));return t.substr(0,t.length-1)},messageBox=function(e){e instanceof Object?1==e.type?Object(element_ui__WEBPACK_IMPORTED_MODULE_6__["Notification"])({title:e.title,message:e.msg,type:e.boxtype}):Object(element_ui__WEBPACK_IMPORTED_MODULE_6__["Message"])({title:e.title,message:e.msg,type:e.boxtype}):Object(element_ui__WEBPACK_IMPORTED_MODULE_6__["Message"])({title:"错误提示",message:e,type:"info"})},nowCovyearOld=function(e){return dateFormat(new Date,"yyyy")-e},nowCri=function(e){return(new Date).getTime()-new Date(e).getTime()<0},dateCri=function(e,t){return new Date(t).getTime()-new Date(e).getTime()<0},getArraynum=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},IdCard=function(e,t){if(18==e.length){if(1==t){var n="";return n=e.substring(6,10)+"-"+e.substring(10,12)+"-"+e.substring(12,14),n}if(2==t)return parseInt(e.substr(16,1))%2==1?"1":"2";if(3==t){var r=new Date,a=r.getMonth()+1,o=r.getDate(),c=r.getFullYear()-e.substring(6,10)-1;return(e.substring(10,12)<a||e.substring(10,12)==a&&e.substring(12,14)<=o)&&c++,c}}return""},calcListnum=function(e,t){for(var n=0,r=0;r<e.length;r++){var a=e[r];n+=Number(a[t])}return Number(n)},setObjectnull=function(e){for(var t in e)e[t]="";return e},setObjectstr=function(e){for(var t in e)null!=e[t]&&"null"!=e[t]||(e[t]="");return e},strCovArray=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];n&&e.push(n)}return e},formatJson=function(e,t){var n=null,r="",a=0,o="    ";if(t=t||{},t.newlineAfterColonIfBeforeBraceOrBracket=!0===t.newlineAfterColonIfBeforeBraceOrBracket,t.spaceAfterColon=!1!==t.spaceAfterColon,"string"!==typeof e)e=JSON.stringify(e);else{try{e=JSON.parse(e)}catch(e){new Error("不是JSON对象")}e=JSON.stringify(e)}return n=/([\{\}])/g,e=e.replace(n,"\r\n$1\r\n"),n=/([\[\]])/g,e=e.replace(n,"\r\n$1\r\n"),n=/(\,)/g,e=e.replace(n,"$1\r\n"),n=/(\r\n\r\n)/g,e=e.replace(n,"\r\n"),n=/\r\n\,/g,e=e.replace(n,","),t.newlineAfterColonIfBeforeBraceOrBracket||(n=/\:\r\n\{/g,e=e.replace(n,":{"),n=/\:\r\n\[/g,e=e.replace(n,":[")),t.spaceAfterColon&&(n=/\:/g,e=e.replace(n,":")),e.split("\r\n").forEach(function(e,t){var n=0,c=0,u="";for(e.match(/\{$/)||e.match(/\[$/)?c=1:e.match(/\}/)||e.match(/\]/)?0!==a&&(a-=1):c=0,n=0;n<a;n++)u+=o;r+=u+e+"\r\n",a+=c}),r},findStrArray=function(e,t){if(!vaildUtil.ifnull(e))for(var n=0;n<e.length;n++)if(e[n]==t)return n;return-1},findObjArray=function(e,t,n,r){n=n||"value",r=r||"value";for(var a=0;a<e.length;a++){var o=e[a];if(o[n]==t[r])return a}return-1},getDicvalue=function getDicvalue(obj){var flag=0;return"Area_CD1"!=obj&&"INDUSTRY_CLASS"!=obj||(flag=1e3),null==localStorage.getItem(obj)?eval(obj):JSON.parse(localStorage.getItem(obj))},validObj=function(e,t){var n=!0;for(var r in t)if(t[r]!=e[r]){n=!1;break}return n},dataFormat=function dataFormat(data,type){if(data=getSessionStore(data)||getStore(data)||null,!vaildUtil.ifnull(data))return 1==type?JSON.parse(data):2==type?eval(data):data},removeByValue=function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return e.splice(n,1),e}},b5c6:function(e,t,n){"use strict";n("6b54"),n("a481"),n("cadf"),n("551c"),n("097d");var r=n("cebe"),a=n.n(r),o=n("0a5a"),c=n("5f72"),u={401:"当前操作没有权限",403:"当前操作没有权限",404:"资源不存在",417:"未绑定登录账号，请使用密码登录后绑定",426:"用户名不存在或密码错误",428:"验证码错误,请重新输入",429:"请求过频繁",479:"演示环境，没有权限操作",default:"系统未知错误,请反馈给管理员"},i=n("323e"),s=n.n(i),_=(n("a5d8"),n("51be")),l=n("4360"),f=n("9883");a.a.defaults.timeout=3e4,a.a.defaults.withCredentials=!0,a.a.defaults.crossDomain=!0,a.a.defaults.baseURL=_["baseUrl"],s.a.configure({showSpinner:!1});var m="系统忙，请稍后再试";a.a.interceptors.request.use(function(e){if(e.url.indexOf(_["baseUrl"])>=0||-1==e.url.indexOf("http")){s.a.start();var t=Object(o["a"])();t&&"undefined"!==t&&(e.headers["access_token"]=Object(o["a"])())}else e.withCredentials=!1;return e},function(e){return Promise.reject(e)}),a.a.interceptors.response.use(function(e){if(s.a.done(),"undefined"!==e.data.sUc&&0==e.data.sUc){var t=e.data.code;return Object(c["Message"])({message:e.data.msg||u["default"],type:"error"}),401==t&&l["a"].dispatch("FedLogOut").then(function(){f["b"].replace({path:"login",query:{redirect:f["b"].currentRoute.fullPath}})}),Promise.reject(new Error(m))}return e},function(e){s.a.done();var t=e.toString(),n=t.substr(t.indexOf("code")+5);return Object(c["Message"])({message:u[n]||u["default"],type:"error"}),Promise.reject(new Error(e))});t["a"]=a.a},c54a:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n("28a5");function r(e){if("boolean"==typeof e)return!1;if(e instanceof Array){if(0==e.length)return!0}else{if(!(e instanceof Object))return"null"==e||null==e||"undefined"==e||void 0==e||""==e;if("{}"===JSON.stringify(e))return!0}return!1}},cebe:function(e,t){e.exports=axios},dc8a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic-container"},[n("el-card",[e._t("default")],2)],1)},a=[],o={name:"basicContainer"},c=o,u=(n("3ce2"),n("2877")),i=Object(u["a"])(c,r,a,!1,null,null,null);i.options.__file="main.vue";t["default"]=i.exports},e3c4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return setStore}),__webpack_require__.d(__webpack_exports__,"a",function(){return getStore}),__webpack_require__.d(__webpack_exports__,"b",function(){return removeStore});var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__),_Users_fangjunchao_workspace_custom_bus_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6bde"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__),_util_validate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c54a"),setStore=function(e){var t=e.name,n=e.content,r=e.type,a=(e.datetime,{dataType:Object(_Users_fangjunchao_workspace_custom_bus_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_1__["a"])(n),content:n,type:r,datetime:(new Date).getTime()});r?window.sessionStorage.setItem(t,JSON.stringify(a)):window.localStorage.setItem(t,JSON.stringify(a))},getStore=function getStore(params){var name=params.name,type=params.type,debug=params.debug,obj={},content;if(obj=window.localStorage.getItem(name),Object(_util_validate__WEBPACK_IMPORTED_MODULE_3__["a"])(obj)&&(obj=window.sessionStorage.getItem(name)),!Object(_util_validate__WEBPACK_IMPORTED_MODULE_3__["a"])(obj))return obj=JSON.parse(obj),debug?obj:("string"==obj.dataType?content=obj.content:"number"==obj.dataType?content=Number(obj.content):"boolean"==obj.dataType?content=eval(obj.content):"object"==obj.dataType&&(content=obj.content),content)},removeStore=function(e){var t=e.name;window.localStorage.removeItem(t),window.sessionStorage.removeItem(t)},getAllStore=function(e){for(var t=[],n=e.type,r=1;r<=window.sessionStorage.length;r++)n?t.push({name:window.sessionStorage.key(r),content:getStore({name:window.sessionStorage.key(r),type:"session"})}):t.push(getStore({name:window.localStorage.key(r),content:getStore({name:window.localStorage.key(r)})}));return t},clearStore=function(e){var t=e.type;t?window.sessionStorage.clear():window.localStorage.clear()}},e56f:function(e,t,n){},edd5:function(e,t,n){}});