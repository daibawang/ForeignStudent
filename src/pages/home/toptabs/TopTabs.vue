<template>
  <div class="tabs_icons">
    <div class="tabs_view">
      <el-row :gutter="20" >
        <el-col :span="6" v-for="(item,index) of toptabList" :key="item.id">
            <div :class="['icon',actived == index||hover== index ?'icon_check':'']"
            @click="toggle(index)"
            @mouseover="overShow(index)"
            @mouseout="outHide(index)">
            <router-link :to="item.toURL">
              <div class="text_c">{{item.text}}</div><p>{{item.text_english}}</p>
            </router-link>
            </div>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  name: 'TopTabs',
  // props: {
  //   ischeck: Number
  // },
  data () {
    return {
      ischecked: 3,
      actived: 0,
      hover: 0,
      toptabList: [{
        id: '001',
        toURL: '/ApplicationMain',
        text: '申请信息',
        text_english: 'My Application'
      },
      {
        id: '002',
        toURL: '/Psychological',
        text: '心理测评',
        text_english: 'Psychological Test '
      },
      {
        id: '003',
        toURL: '/Status',
        text: '申请状态',
        text_english: 'Application Status'
      },
      {
        id: '004',
        toURL: '/Payment',
        text: '缴费',
        text_english: 'Payment'
      }
      ]
    }
  },
  created: function () {
    let routename = this.$route.name
    if (routename == 'ApplicationMain') {
      this.actived = 0
    } else if (routename == 'Psychological') {
      this.actived = 1
    } else if (routename == 'Status') {
      this.actived = 2
    } else if (routename == 'Payment') {
      this.actived = 3
    } else {
      this.actived = 0
    }
    this.hover = this.actived
  },
  watch: {
    '$route': 'changeactivity'
  },
  computed () {
    // this.$set(this.toptabList[{{this.ischecked}}], 'ischecked', true);
  },
  methods: {
    changeactivity () {
      let routename = this.$route.name
      if (routename == 'ApplicationMain') {
        this.actived = 0
      } else if (routename == 'Psychological') {
        this.actived = 1
      } else if (routename == 'Status') {
        this.actived = 2
      } else if (routename == 'Payment') {
        this.actived = 3
      } else {
        this.actived = 0
      }
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
  // watch: {
  //   ischeck () {
  //     console.log(ischeck)
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'

.tabs_icons{
  overflow hidden
  margin 70px auto 0 auto;
  width 100%;
  .tabs_view{
    margin 0px auto 50px auto;
    width 80%
  /* background red */
    .icon {
      width: 180px;
      height: 45px;
      text-align: center;
      font-size: 16px;
      border: 1px solid #F7F8F8;
      position: relative;
      border-radius: 3px;
      background: #F7F8F8;
      color:#2F88EE;
      border-top-left-radius:5px;
      border-bottom-left-radius:5px;
      box-shadow: 1px 1px 7px #999;
      /* min-width:0 */
      .text_c{
        color:#2F88EE;
        margin-top:5px;
        margin-bottom:2px;
        ellipsis()
      }
      p{
        color:#2F88EE
      }
    }
    .icon:before {
      content: "";
      position: absolute;
      right: -17px;
      top: 6px;
      width: 32px;
      height: 31px;
      background: #F7F8F8;
      border-bottom: 1px solid #F7F8F8;
      border-left: 1px solid #F7F8F8;
      transform: rotate(225deg);
    }
    .icon_check{
      border: 1px solid #2F88EE;
      background: #2F88EE;
      color:#fff;
      .text_c{
        color:#fff;
      }
      p{
        color:#fff
      }
    }
    .icon_check:before{
      border: 1px solid #2F88EE;
      background: #2F88EE;
      color:#fff;
    }
  }

}
</style>
