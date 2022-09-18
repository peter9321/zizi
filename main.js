import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'


// 公共接口
import { myRequest, BASE_URL } from './util/api.js'
Vue.prototype.$myRuquest = myRequest

Vue.prototype.$url = BASE_URL  //公共路径


import uView from "uview-ui";
Vue.use(uView);



const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif