<template>
  <div class="container">
    <div class="ALM_Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/main' }">主页 Homepage </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Status' }">申请状态 Application Status</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <div class="ALM_content">
        <div class="ALM_content_aside" style="height:60px; width:18%">
              <div class="ALM_content_aside_item aside_item_nocheck">
                <span class="item_ch">申请状态<p>Psychological Test</p></span>
              </div>
        </div>
        <div class="ALM_content_right Psychological_right" style="text-align: left;">
          <p style="letter-spacing:1px;" class="Status_title">申请记录/Application Record</p>
          <div class="Status_from">
            <el-form :inline="true" label-position="top" :model="formInline" class="demo-form-inline">
              <el-form-item label="姓名/Name">
                <el-input  readonly v-model="formInline.uName"></el-input>
              </el-form-item>
              <el-form-item label="申请时间/Psychological Time" style="margin-left:30px">
                <el-input readonly v-model="formInline.recordtime"></el-input>
              </el-form-item>
              <el-form-item label="申请状态/Application Status" style="margin-left:30px">
                <el-input readonly v-model="formInline.status"></el-input>
              </el-form-item>

            </el-form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '../../../assets/js/formatDate.js'
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Status',
  data () {
    return {
      username: '',
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl,
      formInline: {
        uName: '',
        recordtime: '',
        status: '',
        readonly: true
      }
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname

    this.$axios({
      method: 'get',
      url: this.$URL + '/GetStateByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      if (response.data[0].applytime == '') {
        this.$axios({
          method: 'get',
          url: this.$URL + '/SeletWckServlet',
          params: {
            username: this.username
          }
        }).then((response) => {
          let isShow = parseInt(response.data[0].typ)
          if (isShow < 12) {
            this.$alert(this.NeedInput[isShow], {
              confirmButtonText: 'sure'
            })
            if (isShow == 10 || isShow == 11) {
              this.$router.push(this.NeedUrl[isShow])
            } else {
              this.$router.push('/asidetab/' + this.NeedUrl[isShow])
            }
          }
          setCookie('InputInfo', isShow, 1000 * 60)
        })
      } else {
        this.$axios({
          method: 'get',
          url: this.$URL + '/SeletWckServlet',
          params: {
            username: this.username
          }
        }).then((response) => {
          let isShow = parseInt(response.data[0].typ)
          setCookie('InputInfo', isShow, 1000 * 60)
        })
        this.formInline.uName = response.data[0].username
        this.formInline.recordtime = formatDate(new Date(response.data[0].applytime * 1), 'yyyy-MM-dd hh:mm')
        this.formInline.status = response.data[0].state
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style lang="stylus" >
.Status_title{
  padding-top:10px;
  padding-left:30px;
  display: flex;
  font-size:15px;
  flex-direction: column;
  color:#606266;
  line-height: 20px;
  letter-spacing: 3px;
}
.Status_from{
  margin-left:40px;
  margin-top:20px;
}
.Psychological_right{
  height:600px
}
</style>
