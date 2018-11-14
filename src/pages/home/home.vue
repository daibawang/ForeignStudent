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
export default{
  name: 'Home',
  components: {
    HomeHeader,
    TopTabs
  },
  data () {
    return {
      city: '',
      ischeck: 2,
      swiperList: []
    }
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
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
