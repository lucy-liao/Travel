// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from'fastclick'
import 'lib-flexible'
import axios from'axios'
import store from './vuex/index'
import  VueAwesomeSwiper from'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// axios的全局配置
Vue.prototype.$http = axios
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 引入样式文件
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'


Vue.config.productionTip = false
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
