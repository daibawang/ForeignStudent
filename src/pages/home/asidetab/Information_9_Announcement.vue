<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请阅读并保证 : Please Read  And Announcement</p>
    <div class="Info_1_form">
      <div class="Info_1_form_announcement">
        1.	申请表中所填写的内容和提供的材料真实无误；
       <br/>All information and materials given in this form are true and correct.
  <br/><br/>2.	在华期间，遵守中国的法律、法规，不从事任何危害中国社会秩序的、与本人来华学习身份不符合的活动；
       <br/>During my stay in China, I shall abide by the laws and decrees of the Chinese government, and will not participate in any activities in China which are deemed to be adverse to the social order of China or inappropriate with regard to my status as an international student.
  <br/><br/>3.	在学期间，遵守学校的校纪、校规，全力投入学习和研究工作。尊重学校的教学安排；
      <br/> During my study in China, I shall abide by the rules and regulations of the host university, concentrate on my studies and researches, and follow the teaching programs arranged by the university.
  <br/><br/>4.	如违反上述保证而受到中国法律、法规或校纪、校规的惩处，我愿意接受北京城市学院相应的处罚。
      <br/> If I am judged by the Chinese laws and decrees and the rules and regulations of the university as having violated any of the above, I will not lodge any appeal against the decision and other penalties of Beijing City University.
  <br/><br/>5.	申请者需根据申请页面提示完成心理测评并上传测评完成页截图，如未上传，申请无效。
  <br/>Applicants should complete the psychological assessment according to the application page prompt and upload a screenshot of the completion page. If not, the application is invalid
      </div>
      <div class="announcement_button">
        <el-button type="primary" @click="Announcement()" style="margin-left:50px;">保证 Announcement</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_9_Announcement',
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
    if (isShow == '') {
      this.$axios({
        method: 'get',
        url: '/apis/SeletWckServlet',
        params: {
          username: this.username
        }
      }).then((response) => {
        isShow = parseInt(response.data[0].typ)
        if (isShow < 8) {
          this.$alert(this.NeedInput[isShow], {
            confirmButtonText: 'sure'
          })
          this.$router.push('/asidetab/' + this.NeedUrl[isShow])
        }
        setCookie('InputInfo', isShow, 1000 * 60)
      })
    } else {
      if (isShow < 8) {
        this.$alert(this.NeedInput[isShow], {
          confirmButtonText: 'sure'
        })
        this.$router.push('/asidetab/' + this.NeedUrl[isShow])
      }
    }
  },
  methods: {
    Announcement () {
      // 更新Cookie
      this.$axios({
        method: 'get',
        url: '/apis/UpWckServlet',
        params: {
          username: this.username,
          typ: '9'
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
      setCookie('InputInfo', 9, 1000 * 60)
      this.$router.push('/asidetab/Information_10_Submission')
    }
  }
}
</script>
<style lang="stylus" scoped>
.Info_1_border{
  padding-top:20px;
  padding-left:40px;
  display: flex;
  flex-direction: column;
  color:#606266;
  /* width:80%; */
  .Info_1_form{
    padding-left:10px;
    margin-top: 30px;
    .Info_1_form_announcement{
      line-height: 25px;
      text-align: justify;
      font-family: "Helvetica Neue";
      width:96%;
    }
    .announcement_button{
      margin: 60px 0px 60px 200px;
      display flex
    }
  }
}
</style>
