// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import './mockData/mockServer'
import 'lib-flexible/flexible'
import './validate/index'

/*import VueScroller from 'vue-scroller'



Vue.use(VueScroller)*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,  //注册路由
  store
})
