(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registerPage-registerPage"],{"20ea":function(e,t,n){e.exports=n.p+"static/img/logo.9bb9e750.png"},"307e":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"register-page"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{attrs:{src:n("20ea"),mode:""}})],1),i("v-uni-view",{staticClass:"text-box"},[i("v-uni-text",[e._v("MALL  ACTIVITIES")])],1),i("v-uni-view",{staticClass:"note-box"},[i("v-uni-text",[e._v("Store owners provide part-time tasks, and everyone can choose to complete them according to their abilities and receive commissions.")])],1),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"front"},[e._v("+86")]),i("v-uni-input",{attrs:{type:"text",placeholder:"Mobile phone number"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})],1),i("v-uni-view",{staticClass:"password"},[i("v-uni-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("v-uni-view",{staticClass:"confirm-password"},[i("v-uni-input",{attrs:{type:"password",placeholder:"Please confirm the password"},model:{value:e.confirmPasseord,callback:function(t){e.confirmPasseord=t},expression:"confirmPasseord"}})],1),i("v-uni-view",{staticClass:"invitation-code"},[i("v-uni-input",{attrs:{type:"text",placeholder:"Please enter the invitation code"},model:{value:e.invitationCode,callback:function(t){e.invitationCode=t},expression:"invitationCode"}})],1),i("v-uni-view",{staticClass:"register-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.registerBtn.apply(void 0,arguments)}}},[e._v("REGISTERED ACCOUNT")]),i("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.jumpLogin.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("Login")])],1)],1)],1)},o=[]},"368d":function(e,t,n){"use strict";n.r(t);var i=n("307e"),a=n("78f7");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("da00");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3b362a5c",null,!1,i["a"],r);t["default"]=c.exports},"40b0":function(e,t,n){var i=n("f528");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("57bd7ac6",i,!0,{sourceMap:!1,shadowMode:!1})},"4b1c":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b43e")),o={data:function(){return{title:"Hello",value:"",type:"text",border:!0,pass:!1,account:"",password:"",confirmPasseord:"",invitationCode:""}},onLoad:function(){},methods:{registerBtn:function(){a.default.register_Api({phone:this.account,password:this.password,areaCode:"+86",invitationCode:this.invitationCode}).then((function(e){console.log(e),console.log("注册res"),"0000"==e.responseCode?(uni.showToast({title:"Registration Success",duration:2e3}),uni.setStorage({key:"token",data:e.responseMsg,success:function(){console.log("success")}}),setTimeout((function(){uni.switchTab({url:"/pages/index/index"})}),2e3)):uni.showToast({title:"Registration Failed",duration:2e3,icon:"none"})}))},jumpLogin:function(){console.log(11),uni.navigateTo({url:"../loginPage/loginPage"})}}};t.default=o},"78f7":function(e,t,n){"use strict";n.r(t);var i=n("4b1c"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},da00:function(e,t,n){"use strict";var i=n("40b0"),a=n.n(i);a.a},f528:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.register-page[data-v-3b362a5c]{background:linear-gradient(180deg,#fcedff 0,#fff);height:100vh;background-color:#fcedff;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.register-page .content[data-v-3b362a5c]{margin-top:%?160?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.register-page .content .logo[data-v-3b362a5c]{width:%?200?%;height:%?188?%}.register-page .content .logo uni-image[data-v-3b362a5c]{width:%?200?%;height:%?188?%}.register-page .content .text-box[data-v-3b362a5c]{margin:%?20?% 0 %?32?%}.register-page .content .text-box uni-text[data-v-3b362a5c]{font-size:%?36?%;color:#29292c;font-weight:700}.register-page .content .note-box[data-v-3b362a5c]{width:%?626?%;color:#66666d;text-align:center;font-weight:700}.register-page .content .account[data-v-3b362a5c]{margin-top:%?40?%;border:%?1?% solid red;width:%?630?%;height:%?90?%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background:#fff;border-radius:%?40?%;border:%?1?% solid rgba(0,0,0,.08);position:relative}.register-page .content .account .front[data-v-3b362a5c]{padding:0 %?8?%;height:%?42?%;position:absolute;left:%?20?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.register-page .content .account uni-input[data-v-3b362a5c]{text-align:center;width:100%}.register-page .content .password[data-v-3b362a5c], .register-page .content .confirm-password[data-v-3b362a5c], .register-page .content .invitation-code[data-v-3b362a5c]{border:%?1?% solid red;width:%?630?%;height:%?90?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;background:#fff;border-radius:%?40?%;border:%?1?% solid rgba(0,0,0,.08);margin-top:%?20?%}.register-page .content .password uni-input[data-v-3b362a5c], .register-page .content .confirm-password uni-input[data-v-3b362a5c], .register-page .content .invitation-code uni-input[data-v-3b362a5c]{text-align:center;width:100%}.register-page .register-btn[data-v-3b362a5c]{width:%?630?%;height:%?100?%;background-image:linear-gradient(113deg,#d279f1,#b6b7ff);text-align:center;color:#fff;line-height:%?100?%;border-radius:%?60?%;margin-top:%?60?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.register-page .login-btn[data-v-3b362a5c]{width:%?100?%;height:%?100?%;color:#6d00be;display:flex;flex-direction:row;justify-content:center;align-items:center}',""]),e.exports=t}}]);