<template>
  <div class="container">
    <div class="ALM_Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页 Homepage </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">申请信息 My Application </el-breadcrumb-item>
        <el-breadcrumb-item >{{asideTabList[this.actived].text}} {{asideTabList[this.actived].text_english}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ALM_content">
      <div class="ALM_content_aside">
        <div v-for="(item,index) of asideTabList" :key="item.id">
          <router-link :to="'/asidetab/'+item.toUrl" v-bind:path="actived" v-on:thispath="change($event)">
            <div :class="['ALM_content_aside_item',actived == index||hover== index ?'aside_item_nocheck':'']"
            @click="toggle(index)"
            @mouseover="overShow(index)"
            @mouseout="outHide(index)">
              <span class="item_ch">{{item.text}}<p>{{item.text_english}}</p></span>
              <span :class=" ['iconfont',actived == index||hover== index ?'item_icon':'item_icon_nocheck']">&#xe86d;</span>
              <!-- <span class="iconfont item_icon">&#xe7fc;</span> -->
            </div>
          </router-link>
        </div>
      </div>
      <div class="ALM_content_right">
        <router-view></router-view>
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
        id: '1',
        toUrl: 'Information_1_Personal',
        text: '个人信息 ',
        text_english: 'Personal Information'
      }, {
        id: '2',
        toUrl: 'Information_2_Education',
        text: '学习经历',
        text_english: 'Education History'
      }, {
        id: '3',
        toUrl: 'Information_3_Working',
        text: '工作经历',
        text_english: 'Working Expereience'
      }, {
        id: '4',
        toUrl: 'Information_4_Language',
        text: '语言能力',
        text_english: 'Language Proficiency'
      }, {
        id: '5',
        toUrl: 'Information_5_Plan',
        text: '学习计划',
        text_english: 'Study Plan in BCU'
      }, {
        id: '6',
        toUrl: 'Information_6_Achievements',
        text: '学习成就',
        text_english: 'Achievements'
      }, {
        id: '7',
        toUrl: 'Information_7_OtherInformation',
        text: '其他信息',
        text_english: 'Other Information'
      }, {
        id: '8',
        toUrl: 'Information_8_Upload',
        text: '上传申请材料',
        text_english: 'Upload Application Documents'
      }, {
        id: '9',
        toUrl: 'Information_9_Announcement',
        text: '申请人保证',
        text_english: 'Announcement'
      }, {
        id: '10',
        toUrl: 'Information_10_Submission',
        text: '预览及提交',
        text_english: 'Review & Submission'
      }]
    }
  },
  computed () {
    /* 页面挂载获取保存的cookie值，渲染到页面上 */
    let uname = getCookie('username')
    this.name = uname
    if (uname == '') {
      this.$router.push('/')
    }
  },
  created: function () {
    console.log(this.$route.name)
    let thisactived = this.$route.name.split('_')
    this.actived = parseInt(thisactived[1]) - 1
    this.hover = parseInt(thisactived[1]) - 1
    console.log(this.actived)
  },
  mounted () {
    // console.log(this.$route)
  },
  methods: {
    change: function (thispath) {
      console.log(thispath + '父组件接受得值')
      this.actived = parseInt(thispath) - 1
      this.hover = this.actived
    },
    toggle (index) {
      this.actived = index
    },
    overShow (index) {
      this.hover = index
    },
    outHide (index) {
      this.hover = this.actived
    }
  }
}
</script>
<style>
.my{
}
</style>
<style lang="stylus">
@import '~styles/varibles.styl'
.container{
  width: 82%;
  margin: auto;
  .ALM_Bread{
  }
  .ALM_content{
    margin-top:30px;
    display:flex;
    flex-direction:row;
    .ALM_content_aside{
      /* float:left; */
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
        border-bottom: 1px #e6e7e7 solid;
        font-size:14px;
        color:#606266;
        background-color:#F7F8F8;
        padding-left:15px;
        padding-bottom:5px;
        .item_ch{
          letter-spacing:1px;
          margin-top:8px;
          line-height: 22px;
        }
        .item_icon{
          width:15px;
          line-height: 50px;
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
      /* float:left; */
      border-radius:5px;
      margin-left:30px;
      margin-bottom:50px;
      width:79%;
      background-color: #F7F8F8;
    }
  }
}
</style>
