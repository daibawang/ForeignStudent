<template>
  <div>
      <el-header>
        <img src="~images/shool_logo_blue1.png" class="img_logo">
        <div class="header_title">
          <span class="iconfont exit" @click="quit">&#xe635;</span>
          <span>北京城市学院留学生申请系统 {{this.city}} </span>
          <span class="english_text">Application For International Student Admission</span>
        </div>
      </el-header>
  </div>
</template>
<script>
import { setCookie, getCookie, delCookie } from '../../../assets/js/cookie.js'
export default{
  name: 'HomeHeader',
  props: {

  },
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    /* 页面挂载获取保存的cookie值，渲染到页面上 */
    let uname = getCookie('username')
    this.name = uname
    /* 如果cookie不存在，则跳转到登录页 */
    if (uname == '') {
      this.$router.push('/')
    }
  },
  methods: {
    quit () {
      this.$confirm('您确定退出登录吗？', 'Prompt', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        /* 删除cookie */
        delCookie('username')
        setTimeout(function () {
          this.$router.push('/')
        }.bind(this), 1000)
      }).catch(() => {
      })
    }
  }
}
</script>
<style>
.d{
}
</style>
<style lang="stylus">
@import '~styles/varibles.styl'
.el-header{
    margin 20px auto 70px auto;
    background-color: #bgColor;
    /* line-height: 60px; */
    width: 90%;
    display: flex;
    flex-direction: row;
    .img_logo{
      margin: 10px 50px 0px 0px;
      width 280px
      height 70px
      /* float left */
    }
    .header_title{
      font-family: "Helvetica Neue"
      display: flex;
      flex-direction: column;
      .exit{
        cursor: pointer;
        top:5px;
        right:90px;
        position: absolute;
        font-size: 20px;
        width 40px;
        margin-left:10px;
        color:#E54538;
      }
      span{
        font-family:'Microsoft Yahei';
        margin-top:10px;
        font-size 28px
        color #2F88EE
        letter-spacing 5px
      }
      .english_text{
        letter-spacing 2px
      }
    }
  }

</style>
