import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import ApplicationMain from '@/pages/home/toptabs/ApplicationMain'
import Psychological from '@/pages/home/toptabs/Psychological'
import Status from '@/pages/home/toptabs/Status'
import Payment from '@/pages/home/toptabs/Payment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/ApplicationMain',
      children:[
        {name:'ApplicationMain',path:'/ApplicationMain',component:ApplicationMain},
        {name:'Psychological',path:'/Psychological',component:Psychological},
        {name:'Status',path:'/Status',component:Status},
        {name:'Payment',path:'/Payment',component:Payment}
      ]
    }
  ]
})
