<template>
  <div class="container">
    <div class="ALM_Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/main' }">主页 Homepage </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Psychological' }">缴费 Payment</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <div class="ALM_content">
        <div class="ALM_content_aside" style="height:60px; width:18%">
              <div class="ALM_content_aside_item aside_item_nocheck">
                <span class="item_ch">缴费<br/>Payment</p></span>
              </div>
        </div>
        <div class="ALM_content_right Psychological_right" style="text-align: left;">
          <div class="ALM_content_right Psychological_right" style="text-align: left;">
            <p style="letter-spacing:1px;" class="Status_title">申请费支付/Application Fee Payment</p>
            <div class="Status_title_detail">
              Payment method:
              <br/>1. Application fee amount: 800 yuan
              <br/>2. Only accept telegraphic transfer
              <br/>3. Payment Currency: RMB or USD ( other currency are not accepted )
              <br/>4. Please leave a note when making a transaction: Name + TCM
              <br/>5. Detailed remittance account information can be found in the attachment.
            </div>
            <a class="Psychological_a" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm</a>

          </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Payment',
  data () {
    return {
      NeedInput: ['请先填写个人信息 Please complete  Personal Information',
        '请先填写个人信息 Please complete  Personal Information',
        '请先填写学习经历 Please complete  Education History',
        '请先填写工作经历 Please complete  Working Experience ',
        '请先填写语言能力 Please complete  Language Proficiency ',
        '请先填写来华学习计划 Please complete Proposed Study in BCU',
        '请先填写学习成就 Please complete Achievements',
        '请先填写其他信息 Please complete  Other Information',
        '请先上传申请材料 Please Upload Application Documents',
        '请先填写保证 Please complete Announcement ',
        '请先提交申请 Please Submit First',
        '请先完成心理测评 Please Upload Psychological Test'],
      NeedUrl: ['Information_1_Personal', 'Information_1_Personal',
        'Information_2_Education', 'Information_3_Working',
        'Information_4_Language', 'Information_5_Plan',
        'Information_6_Achievements', 'Information_7_OtherInformation',
        'Information_8_Upload', 'Information_9_Announcement',
        'Information_10_Submission', 'Psychological']
    }
  },
  mounted () {
    console.log(this.username)
  },
  created () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    let isShow = getCookie('InputInfo')
    console.log('Payment的Cokie' + isShow)
    if (isShow == '') {
      this.$axios({
        method: 'get',
        url: '/apis/SeletWckServlet',
        params: {
          username: this.username
        }
      }).then((response) => {
        isShow = parseInt(response.data[0].typ)
        if (isShow < 12) {
          this.$alert(this.NeedInput[isShow], {
            confirmButtonText: 'sure'
          })
          if (isShow == 11) {
            this.$router.push(this.NeedUrl[isShow])
          } else {
            this.$router.push('/asidetab/' + this.NeedUrl[isShow])
          }
        }
        setCookie('InputInfo', isShow, 1000 * 60)
      })
    } else {
      if (isShow < 12) {
        this.$alert(this.NeedInput[isShow], {
          confirmButtonText: 'sure'
        })
        if (isShow == 11) {
          this.$router.push(this.NeedUrl[isShow])
        } else {
          this.$router.push('/asidetab/' + this.NeedUrl[isShow])
        }
      }
    }
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
.Status_title_detail{
  padding-top:10px;
  padding-left:30px;
  display: flex;
  font-size:13px;
  flex-direction: column;
  color:#606266;
  line-height: 25px;
  letter-spacing: 2px;
  width:100%;
}
.Status_from{
  margin-left:40px;
  margin-top:20px;
}
</style>
