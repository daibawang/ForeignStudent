<template>
  <div class="container">
    <div class="ALM_Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页 Homepage </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">申请信息 My Application </el-breadcrumb-item>
        <el-breadcrumb-item >基本信息Basic Information</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ALM_content">
      <div class="ALM_content_aside">
        <div v-for="(item,index) of asideTabList" :key="item.id">
          <div :class="['ALM_content_aside_item',actived == index||hover== index ?'aside_item_nocheck':'']" >
            <span class="item_ch">{{item.text}}<p>{{item.text_english}}</p></span>
            <span :class=" ['iconfont',actived == index||hover== index ?'item_icon':'item_icon_nocheck']">&#xe86d;</span>
            <!-- <span class="iconfont item_icon">&#xe7fc;</span> -->
          </div>
        </div>
      </div>
      <div class="ALM_content_right">
        z
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'ApplicationMain',
  data () {
    return {
      actived: 0,
      hover: 0,
      asideTabList: [{
        id: '001',
        toUrl: '',
        text: '个人信息 ',
        text_english: 'Personal Information'
      }, {
        id: '001',
        toUrl: '',
        text: '学习经历',
        text_english: 'Education History'
      }, {
        id: '001',
        toUrl: '',
        text: '工作经历',
        text_english: 'Working Expereience'
      }, {
        id: '001',
        toUrl: '',
        text: '语言能力',
        text_english: 'Language Proficiency'
      }, {
        id: '001',
        toUrl: '',
        text: '学习计划',
        text_english: 'Study Plan in BCU'
      }, {
        id: '001',
        toUrl: '',
        text: '学习成就',
        text_english: 'Achievements'
      }, {
        id: '001',
        toUrl: '',
        text: '上传申请材料',
        text_english: 'Upload Application Documents'
      }, {
        id: '001',
        toUrl: '',
        text: '申请人保证',
        text_english: 'Announcement'
      }, {
        id: '001',
        toUrl: '',
        text: '预览及提交',
        text_english: 'Review & Submission'
      }]
    }
  }
}
</script>
<style>
.my{
}
</style>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.container{
  width: 82%;
  margin: auto;
  .ALM_Bread{
  }
  .ALM_content{
    margin-top:30px;
    display: flex;
    flex-direction: row;
    .ALM_content_aside{
      width:18%;
      background-color: #F7F8F8;
      display: flex;
      flex-direction: column;
      border-radius:5px;
      .ALM_content_aside_item{
        /* border-top-left-radius:5px;
        border-bottom-left-radius:5px; */
        border-radius:5px
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        height:60px;
        border-bottom: 1px #e6e7e7 solid;
        font-size:14px;
        color:#595757;
        background-color:#F7F8F8;
        padding-left:15px;
        .item_ch{
          letter-spacing:1px;
          margin-top:8px;
          line-height: 22px;
        }
        .item_icon{
          width:15px;
          line-height: 60px;
          margin-right:8px;
        }
        .item_icon_nocheck{
          visibility:hidden
        }
      }
      .aside_item_nocheck{
        color:#fff;
        background-color:#2F88EE;
      }

    }
    .ALM_content_right{
      margin-left:30px;
      width:78%;
      height: 100px;
      background-color: #F7F8F8;
    }
  }
}
</style>
