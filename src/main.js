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
import domain from './assets/js/domain.js';
//配置生产环境和开发环境url
Vue.prototype.$URL = process.env.API_ROOT;
//axios 配置
import axios from 'axios'
Vue.prototype.$axios = axios;
//全局注册，使用方法为:this.$axios
 Vue.config.productionTip=false;
fastClick.attach(document.body)
//引入全局变量Global,并全局引用
import global_ from './components/tools/Global.vue'
Vue.prototype.GLOBAL = global_

//跳转回到顶部
router.afterEach((to,from,next) => {
       window.scrollTo(0,0);
})
//跳转前加载title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
