import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css';
import Win from 'electron-vue-windows';
// Win.init(router, {
//   freeWindowNum: 1, // 初始空闲窗口数量（选填：默认为1）
//   port: 9080 // 端口号（选填：默认9080）
// })
Vue.prototype.$Win = Win;
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
