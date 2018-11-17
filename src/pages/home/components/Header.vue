<template>
  <div>
      <el-header>
        <img src="~images/shool_logo_blue1.png" class="img_logo">
        <div class="header_title">
          <span v-if="showcity">北京城市学院留学生申请系统 {{this.city}} </span>
          <span class="english_text">Application For International Student Admission</span>
        </div>
        <!-- <span class="iconfont exit">&#xe635;</span> -->
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
<style>
{

}
</style>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.el-header{
    margin 20px auto 70px auto;
    background-color: #bgColor;
    /* color: #333; */
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
      display: flex;
      flex-direction: column;
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

    .exit{
      float:right
    }
  }

</style>
