<template>
  <div>
      <el-header style="">
        <img src="~images/shool_logo_blue1.png" class="img_logo">
        <span v-if="showcity">留学生申请系统 {{this.city}} </span>
        <span class="english_text">Application For Student Admission</span>
        <span class="iconfont exit">&#xe635;</span>
      </el-header>
  </div>
</template>
<script>
export default{
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {

    }
  },
  computed: {
    showcity () {
      return true
      // return city.length
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.el-header{
    margin 20px auto 0 auto;
    background-color: #bgColor;
    color: #333;
    line-height: 60px;
    width: 90%;
    .img_logo{
      margin: 0px 50px 0px 0px;
      width 251px
      height 60px
      /* float left */
    }
    span{
      font-size 28px
      color #2F88EE
      letter-spacing 5px
    }
    .english_text{
      letter-spacing 2px
    }
    .exit{
      float:right
    }
  }

</style>
