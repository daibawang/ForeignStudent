<template>
  <div>
    Information_9_Submission
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_10_Submission',
  data () {
    return {
      username: '',
      NeedInput: ['请先填写个人信息 Please complete  Personal Information', '请先填写个人信息 Please complete  Personal Information',
        '请先填写学习经历 Please complete  Education History',
        '请先填写工作经历 Please complete  Working Experience ',
        '请先填写语言能力 Please complete  Language Proficiency ',
        '请先填写来华学习计划 Please complete Proposed Study in BCU',
        '请先填写学习成就 Please complete Achievements',
        '请先填写其他信息 Please complete  Other Information',
        '请先上传申请材料 Please Upload Application Documents',
        '请先填写保证 Please complete Announcement '],
      NeedUrl: ['Information_1_Personal', 'Information_1_Personal', 'Information_2_Education', 'Information_3_Working', 'Information_4_Language', 'Information_5_Plan', 'Information_6_Achievements', 'Information_7_OtherInformation', 'Information_8_Upload', 'Information_9_Announcement', 'Information_10_Submission']
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    console.log(this.username)
    let isShow = getCookie('InputInfo')
    if (isShow < 9) {
      this.$alert(this.NeedInput[isShow], {
        confirmButtonText: 'sure'
      })
      this.$router.push('/asidetab/' + this.NeedUrl[isShow])
    }
  }
}
</script>
<style>
</style>
