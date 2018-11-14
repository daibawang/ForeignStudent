// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import Moment from 'moment'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

Vue.prototype.moment = Moment;
//
// import domain from './domain.js';
// global.domain = domain;

//axios 配置
import axios from 'axios'
Vue.prototype.$axios = axios;
//全局注册，使用方法为:this.$axios
 Vue.config.productionTip=false;
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
