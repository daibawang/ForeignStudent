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
            <p style="letter-spacing:1px;" class="Status_title">申请费支付/Application Fee Payment</p>
            <div class="Status_title_detail">
              缴费方式/Payment method:
              <br/>1. 申请费金额：800元/Application fee amount: 800 yuan
              <br/>2. 只能通过电汇方式支付/Only accept telegraphic transfer
              <br/>3. 支付币种：人民币或美元（不接受其他币种支付）/Payment Currency: RMB or USD ( other currency are not accepted )
              <br/>4. 支付时请备注：姓名+中医药/Please leave a note when making a transaction: Name + TCM
              <br/>5. 详细汇款账号信息见附件/Detailed remittance account information can be found in the attachment.
            </div>
            <div class="payment_dowload">
              <span class="iconfont" style="color:#EE761C; margin-left:20px"><i class="el-icon-download"></i></span>
              <a class="recruitment-more" download="" href='http://www.istuadmission.com/FStudent/Attachment_Overseas_Remittance_ofForeign_Exchange.zip'>Download Attachment</a>
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
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl
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
        url: this.$URL + '/SeletWckServlet',
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
  width:90%;
}
.Status_from{
  margin-left:40px;
  margin-top:20px;
}
.payment_dowload{
  padding-top:5px;
  padding-left:26px;
}
</style>
