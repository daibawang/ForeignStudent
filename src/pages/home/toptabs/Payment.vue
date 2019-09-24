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
              <p style="margin-top:30px" class="payment_title">上传完成截图/Upload</p>
              <div class="payment_file">
                <el-upload :disabled="eqit"
                  accept=".pdf"
                  class="upload-demo"
                  :action="params.action"
                  :before-upload="onBeforeUpload"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-success="(res,file)=>{return onSuccess(res,file,1)}"
                  multiple
                  :limit="1"
                  :data="params.data1"
                  :auto-upload="true"
                  :on-exceed="handleExceed"
                  :file-list="fileList1">
                  <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                  <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB</span>
                </el-upload>
              </div>
            </div>
            <div class="payment_submit">
              <el-button :disabled="eqit" type="primary" @click="submitPaytime()" style="margin-left:50px;">提交 Submit</el-button>
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
      username: '',
      eqit: false,
      params: {
        action: this.$URL + '/UploadHandleServlet',
        data1: {'username': '', 'kind': '15', 'filename': '', 'packname': ''}
      },
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl,
      peopleName: '',
      fileList1: []
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
        if (isShow < 15) {
          this.$alert(this.NeedInput[isShow], {
            confirmButtonText: 'sure'
          })
          if (isShow == 10 || isShow == 11) {
            this.$router.push(this.NeedUrl[10])
          } else if (isShow >= 12 && isShow <= 13) {
            this.$router.push('/Status/')
          } else {
            this.$router.push('/asidetab/' + this.NeedUrl[isShow])
          }
        }
        // else {
        //   if (isShow == 15) {
        //     this.$alert('通过审核后才可通过缴费', {
        //       confirmButtonText: 'sure'
        //     })
        //     this.$router.push('/Status/')
        //   }
        // }
        setCookie('InputInfo', isShow, 1000 * 60)
      })
    } else {
      if (isShow < 15) {
        this.$alert(this.NeedInput[isShow], {
          confirmButtonText: 'sure'
        })
        if (isShow == 10 || isShow == 11) {
          this.$router.push(this.NeedUrl[10])
        } else if (isShow >= 12 && isShow <= 13) {
          this.$router.push('/Status/')
        } else {
          this.$router.push('/asidetab/' + this.NeedUrl[isShow])
        }
      } else if (isShow == 18) {
        this.eqit = true
      }
    }
    this.$axios({
      method: 'get',
      url: this.$URL + '/GetPinfByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      if (response.data[0].username == '') {
        console.log('zzzzzzzz')
      } else {
        this.peopleName = response.data[0].givenName + '.' + response.data[0].familyName
        this.params.data1.username = uname
        this.params.data1.packname = uname + '_' + this.peopleName
        this.params.data1.filename = uname + '_' + this.peopleName + '_' + '缴费凭据.jpg'
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    submitPaytime () {
      let isShow = getCookie('InputInfo')
      let thistime = new Date().getTime()
      if (isShow == 17) {
        this.$alert('请勿重复提交', {
          confirmButtonText: 'sure'
        })
      } else if (isShow < 16) {
        this.$alert('缴费票据未上传', {
          confirmButtonText: 'sure'
        })
      } else {
        this.$axios({
          method: 'get',
          url: this.$URL + '/JfStateServlet',
          params: {
            username: this.username,
            time: thistime,
            eqit: false
          }
        }).then((response) => {
          if (response.data == true) {
            setCookie('InputInfo', 17, 1000 * 60)
            console.log('Cook遗传')
            this.$alert('提交成功', {
              confirmButtonText: 'sure'
            }).then(() => {
              this.$router.push('/Status')
            })
          } else {
            this.$alert('缴费票据未上传', {
              confirmButtonText: 'sure'
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    onBeforeUpload (file) {
      const isLt1M = file.size / 1024 / 1024 < 2
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 2MB!')
      }
      return isLt1M
    },
    onSuccess (response, file, index) {
      console.log(URL.createObjectURL(file.raw))
      console.log(file)
      this.$axios({
        method: 'get',
        url: this.$URL + '/UpWckServlet',
        params: {
          username: this.username,
          typ: '16'
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
      setCookie('InputInfo', 16, 1000 * 60)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除/Make sure remove ${file.name}？`)
    }
  }

}
</script>
<style lang="stylus">
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
  .payment_title{
    font-size:15px;
    color:#606266;
    line-height: 25px;
    letter-spacing: 2px;
  }
  .payment_file{
    margin-top:10px;
    width:30%;
  }
}
.payment_submit{
  margin-top:60px;
  width:100%;
  text-align:center;
}
</style>
