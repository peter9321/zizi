import App from './App'
import store from './store'
import uView from "uview-ui";
Vue.use(uView);
import global from './utils/global.js'
 Vue.prototype.GLOBAL = global
Vue.prototype.$store = store
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import uView from "uview-ui";
Vue.use(uView);

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif