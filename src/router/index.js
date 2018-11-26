import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Main from '@/pages/Main/main.vue'
import Home from '@/pages/home/home.vue'
import ApplicationMain from '@/pages/home/toptabs/ApplicationMain'
import Psychological from '@/pages/home/toptabs/Psychological'
import Status from '@/pages/home/toptabs/Status'
import Payment from '@/pages/home/toptabs/Payment'
import Information_1_Personal from '@/pages/home/asidetab/Information_1_Personal'
import Information_2_Education from '@/pages/home/asidetab/Information_2_Education'
import Information_3_Working from '@/pages/home/asidetab/Information_3_Working'
import Information_4_Language from '@/pages/home/asidetab/Information_4_Language'
import Information_5_Plan from '@/pages/home/asidetab/Information_5_Plan'
import Information_6_Achievements from '@/pages/home/asidetab/Information_6_Achievements'
import Information_7_OtherInformation from '@/pages/home/asidetab/Information_7_OtherInformation'
import Information_8_Upload from '@/pages/home/asidetab/Information_8_Upload'
import Information_9_Announcement from '@/pages/home/asidetab/Information_9_Announcement'
import Information_10_Submission from '@/pages/home/asidetab/Information_10_Submission'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        title:'this is login',
      }
    },
    {
      path: '/main',
      props:true,
      name: 'Main',
      component: Main,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:{ name: 'ApplicationMain' },
      children:[
        {
          name:'ApplicationMain',
          path:'/ApplicationMain',
          mode:'Student',
          props:true,
          component:ApplicationMain,
          redirect:'/asidetab/Information_1_Personal',
          children:[
            {name:'Information_1_Personal',path:'/asidetab/Information_1_Personal',component:Information_1_Personal},
            {name:'Information_2_Education',path:'/asidetab/Information_2_Education',component:Information_2_Education},
            {name:'Information_3_Working',path:'/asidetab/Information_3_Working',component:Information_3_Working},
            {name:'Information_4_Language',path:'/asidetab/Information_4_Language',component:Information_4_Language},
            {name:'Information_5_Plan',path:'/asidetab/Information_5_Plan',component:Information_5_Plan},
            {name:'Information_6_Achievements',path:'/asidetab/Information_6_Achievements',component:Information_6_Achievements},
            {name:'Information_7_OtherInformation',path:'/asidetab/Information_7_OtherInformation',component:Information_7_OtherInformation},
            {name:'Information_8_Upload',path:'/asidetab/Information_8_Upload',component:Information_8_Upload},
            {name:'Information_9_Announcement',path:'/asidetab/Information_9_Announcement',component:Information_9_Announcement},
            {name:'Information_10_Submission',path:'/asidetab/Information_10_Submission',component:Information_10_Submission},
          ]
        },
        {name:'Psychological',path:'/Psychological',props:true,component:Psychological},
        {name:'Status',path:'/Status',props:true,component:Status},
        {name:'Payment',path:'/Payment',props:true,component:Payment}
      ]
    }
  ]
})
