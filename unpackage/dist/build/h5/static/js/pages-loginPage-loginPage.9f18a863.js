(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-loginPage-loginPage"],{"02b9":function(e,t,n){"use strict";n.r(t);var i=n("2543"),a=n("a895");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("98bc");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"03a753e1",null,!1,i["a"],r);t["default"]=c.exports},"20ea":function(e,t,n){e.exports=n.p+"static/img/logo.9bb9e750.png"},2543:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"login-page"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{attrs:{src:n("20ea"),mode:""}})],1),i("v-uni-view",{staticClass:"text-box"},[i("v-uni-text",[e._v("MALL  ACTIVITIES")])],1),i("v-uni-view",{staticClass:"note-box"},[i("v-uni-text",[e._v("Store owners provide part-time tasks, and everyone can choose to complete them according to their abilities and receive commissions.")])],1),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"front"},[e._v("+86")]),i("v-uni-view",{},[i("v-uni-input",{attrs:{type:"text",placeholder:"Mobile phone number"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})],1)],1),i("v-uni-view",{staticClass:"password"},[i("v-uni-input",{attrs:{type:"password",password:e.pass,placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("LOGIN")]),i("v-uni-view",{staticClass:"reg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.jumpRegister()}}},[i("v-uni-text",[e._v("Register")])],1),i("v-uni-view",{staticClass:"forget",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.jumpRegister()}}},[i("v-uni-text",[e._v("Forgot password?")])],1)],1)],1)},o=[]},"357d":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-03a753e1]{background:linear-gradient(180deg,#fcedff 0,#fff)}.login-page[data-v-03a753e1]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.login-page .content[data-v-03a753e1]{margin-top:%?160?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.login-page .content .logo[data-v-03a753e1]{width:%?200?%;height:%?188?%}.login-page .content .logo uni-image[data-v-03a753e1]{width:%?200?%;height:%?188?%}.login-page .content .text-box[data-v-03a753e1]{margin:%?20?% 0 %?32?%}.login-page .content .text-box uni-text[data-v-03a753e1]{font-size:%?36?%;color:#29292c;font-weight:700}.login-page .content .note-box[data-v-03a753e1]{width:%?626?%;color:#66666d;text-align:center;font-weight:700}.login-page .content .account[data-v-03a753e1]{margin-top:%?40?%;border:%?1?% solid red;width:%?630?%;height:%?90?%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background:#fff;border-radius:40px;border:1px solid rgba(0,0,0,.08);position:relative}.login-page .content .account .front[data-v-03a753e1]{padding:0 %?8?%;position:absolute;left:%?20?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.login-page .content .account uni-input[data-v-03a753e1]{text-align:center;width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.login-page .content .password[data-v-03a753e1]{border:%?1?% solid red;width:%?630?%;height:%?90?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;background:#fff;border-radius:%?40?%;border:%?1?% solid rgba(0,0,0,.08);margin:%?20?% 0 %?80?% 0}.login-page .content .password uni-input[data-v-03a753e1]{text-align:center;width:100%}.login-page .login-btn[data-v-03a753e1]{width:%?630?%;height:%?100?%;background-image:linear-gradient(113deg,#d279f1,#b6b7ff);text-align:center;color:#fff;line-height:%?100?%;border-radius:%?60?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.login-page .reg[data-v-03a753e1]{margin-top:%?50?%;font-size:%?28?%;color:#6e00bf;font-weight:600}.login-page .forget[data-v-03a753e1]{margin-top:%?140?%;font-size:%?28?%;color:#a3a9b1;line-height:%?40?%;font-weight:500}body.?%PAGE?%[data-v-03a753e1]{background:linear-gradient(180deg,#fcedff 0,#fff)}',""]),e.exports=t},"86be":function(e,t,n){var i=n("357d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("d8da19a6",i,!0,{sourceMap:!1,shadowMode:!1})},"98bc":function(e,t,n){"use strict";var i=n("86be"),a=n.n(i);a.a},a895:function(e,t,n){"use strict";n.r(t);var i=n("d389"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},d389:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b43e")),o={data:function(){return{title:"Hello",value:"",type:"text",border:!0,pass:!1,account:"15999852324",password:"123456"}},onLoad:function(){},methods:{login:function(){var e=this,t={phone:this.account,password:this.password};a.default.login_Api(t).then((function(t){"0000"==t.responseCode?(uni.setStorage({key:"token",data:t.responseMsg}),e.$store.commit("setToken",t.responseMsg),e.getUserMes(t.responseMsg),uni.showToast({title:"Login successful",duration:2e3,icon:"none"})):uni.showToast({title:"Login failed",duration:2e3,icon:"none"})}))},getUserMes:function(e){var t=this,n={token:e};a.default.getUserMes_Api(n).then((function(e){if("0000"==e.responseCode){var n=JSON.stringify(e.data);uni.setStorage({key:"userInfo",data:n}),t.$store.commit("setUserInfo",e.data),setTimeout((function(){uni.switchTab({url:"/pages/index/index"})}),1e3)}}))},btnclick:function(){this.pass=!this.pass},jumpRegister:function(){uni.navigateTo({url:"../registerPage/registerPage"})}}};t.default=o}}]);