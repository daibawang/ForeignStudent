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
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        title:'登录/Login',
      }
    },
    {
      path: '/main',
      props:true,
      name: 'Main',
      component: Main,
      meta:{
        title:'招生简章/Recruitment Informationfor',
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:{ name: 'ApplicationMain' },
      meta:{title:'主页/HomePage'},
      children:[
        {
          name:'ApplicationMain',
          path:'/ApplicationMain',
          mode:'Student',
          props:true,
          component:ApplicationMain,
          meta:{title:'申请信息/My Application'},
          redirect:'/asidetab/Information_1_Personal',
          children:[
            {name:'Information_1_Personal',path:'/asidetab/Information_1_Personal',meta:{title:'个人信息/Personal Information'},component:Information_1_Personal},
            {name:'Information_2_Education',path:'/asidetab/Information_2_Education',meta:{title:'学习经历/Education History'},component:Information_2_Education},
            {name:'Information_3_Working',path:'/asidetab/Information_3_Working',meta:{title:'工作经历/Working Expereience'},component:Information_3_Working},
            {name:'Information_4_Language',path:'/asidetab/Information_4_Language',meta:{title:'语言能力/Language Proficiency'},component:Information_4_Language},
            {name:'Information_5_Plan',path:'/asidetab/Information_5_Plan',meta:{title:'学习计划/Study Plan in BCU'},component:Information_5_Plan},
            {name:'Information_6_Achievements',path:'/asidetab/Information_6_Achievements',meta:{title:'学习成就/Achievements'},component:Information_6_Achievements},
            {name:'Information_7_OtherInformation',path:'/asidetab/Information_7_OtherInformation',meta:{title:'其他信息/Other Information'},component:Information_7_OtherInformation},
            {name:'Information_8_Upload',path:'/asidetab/Information_8_Upload',meta:{title:'上传申请材料/Upload Application Documents'},component:Information_8_Upload},
            {name:'Information_9_Announcement',path:'/asidetab/Information_9_Announcement',meta:{title:'申请人保证/Announcement'},component:Information_9_Announcement},
            {name:'Information_10_Submission',path:'/asidetab/Information_10_Submission',meta:{title:'预览及提交/Review & Submission'},component:Information_10_Submission},
          ]
        },
        {name:'Psychological',path:'/Psychological',meta:{title:'心理测评/Psychological Test'},props:true,component:Psychological},
        {name:'Status',path:'/Status',meta:{title:'申请状态/Application Status'},props:true,component:Status},
        {name:'Payment',path:'/Payment',meta:{title:'缴费/Payment'},props:true,component:Payment}
      ]
    }
  ]
})
