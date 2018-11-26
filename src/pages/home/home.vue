<template>
  <div>
    <div class="home">
      <HomeHeader :city="city"></HomeHeader>
      <TopTabs :ischeck="ischeck"></TopTabs>
      <!-- <ApplicationMain :list="swiperList"></ApplicationMain> -->
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import TopTabs from './toptabs/TopTabs.vue'
import axios from 'axios'
import {setCookie, getCookie} from '../../assets/js/cookie.js'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    TopTabs
  },
  data () {
    return {
      name: '',
      city: '',
      ischeck: 2,
      swiperList: []
    }
  },
  computed () {
  },
  methods: {
    getHomeInfo () {
      // axios.get('/static/mock/index.json')
      //   .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
      console.log(this.city)
    }
  },
  // 生命周期函数
  mounted () {
    /* 页面挂载获取保存的cookie值，渲染到页面上 */
    let uname = getCookie('username')
    this.name = uname,
    console.log(this.name)
    if (uname == '') {
      this.$router.push('/')
    }
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
