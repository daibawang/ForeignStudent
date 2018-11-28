<template>
  <div class="container">
    <div class="ALM_Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/main' }">主页 Homepage </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Psychological' }">心理测评 Psychological Test</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <div class="ALM_content">
        <div class="ALM_content_aside" style="height:60px; width:18%">
              <div class="ALM_content_aside_item aside_item_nocheck">
                <span class="item_ch">心理测评<p>Psychological Test</p></span>
              </div>
        </div>
        <div class="ALM_content_right Psychological_right" style="text-align: left;">
        <p style="letter-spacing:1px;" class="Psychological_title">请前往下方网站完成心理测评/Please  </p>
        <a class="Psychological_a" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm</a>
        <div class="Psychological_upload">
          <p style="margin-top:10px" class="Psychological_title">上传完成截图</p>
          <div class="Psychological_file">
            <el-upload
              accept=".pdf"
              class="upload-demo"
              :action="params.action"
              :before-upload="onBeforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="(res,file)=>{return onSuccess(res,file,1)}"
              multiple
              :limit="2"
              :data="params.data1"
              :auto-upload="true"
              :on-exceed="handleExceed"
              :file-list="fileList1">
              <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
              <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB</span>
            </el-upload>
          </div>
        </div>
        <div class="Psychological_submit">
          <el-button type="primary" @click="submitPsychological()" style="margin-left:50px;">提交 Submit</el-button>
        </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Psychological',
  data () {
    return {
      params: {
        action: '/apis/UploadHandleServlet',
        data1: {'username': '', 'kind': '14', 'filename': '', 'packname': ''}
      },
      NeedInput: ['请先填写个人信息 Please complete  Personal Information', '请先填写个人信息 Please complete  Personal Information',
        '请先填写学习经历 Please complete  Education History',
        '请先填写工作经历 Please complete  Working Experience ',
        '请先填写语言能力 Please complete  Language Proficiency ',
        '请先填写来华学习计划 Please complete Proposed Study in BCU',
        '请先填写学习成就 Please complete Achievements',
        '请先填写其他信息 Please complete  Other Information',
        '请先上传申请材料 Please Upload Application Documents',
        '请先填写保证 Please complete Announcement ', '请先提交申请 Please Submit First'],
      NeedUrl: ['Information_1_Personal', 'Information_1_Personal',
        'Information_2_Education', 'Information_3_Working',
        'Information_4_Language', 'Information_5_Plan',
        'Information_6_Achievements', 'Information_7_OtherInformation',
        'Information_8_Upload', 'Information_9_Announcement',
        'Information_10_Submission', 'Psychological'],

      fileList1: []
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    let isShow = getCookie('InputInfo')
    if (isShow == '') {
      this.$axios({
        method: 'get',
        url: '/apis/SeletWckServlet',
        params: {
          username: this.username
        }
      }).then((response) => {
        isShow = parseInt(response.data[0].typ)
        if (isShow < 10) {
          this.$alert(this.NeedInput[isShow], {
            confirmButtonText: 'sure'
          })
          this.$router.push('/asidetab/' + this.NeedUrl[isShow])
        }
        setCookie('InputInfo', isShow, 1000 * 60)
      })
    } else {
      if (isShow < 10) {
        this.$alert(this.NeedInput[isShow], {
          confirmButtonText: 'sure'
        })
        this.$router.push('/asidetab/' + this.NeedUrl[isShow])
      }
    }
    this.$axios({
      method: 'get',
      url: '/apis/GetPinfByNameServlet',
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
        this.params.data1.filename = uname + '_' + this.peopleName + '_' + '心理测评截图.jpg'
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    onBeforeUpload (file) {
      const isLt1M = file.size / 1024 / 1024 < 2
      // if (!isIMAGE) {
      //   this.$message.error('上传文件只能是图片格式!')
      // }
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
        url: '/apis/UpWckServlet',
        params: {
          username: this.username,
          typ: '11'
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
      setCookie('InputInfo', 11, 1000 * 60)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除/Make sure remove ${file.name}？`)
    },
    submitPsychological () {
      let thistime = new Date().getTime()
      this.$axios({
        method: 'get',
        url: '/apis/TjServlet',
        params: {
          username: this.username,
          time: thistime,
          type: '12'
        }
      }).then((response) => {
        if (response.data == true) {
          setCookie('InputInfo', 12, 1000 * 60)
          this.$alert('提交成功，等待管理员审核材料', {
            confirmButtonText: 'sure'
          })
        } else {
          this.$alert('心里截图未上传', {
            confirmButtonText: 'sure'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
</style>
<style lang="stylus" scoped>
.ALM_content_All{
  border-radius: 5px;
  margin-bottom: 50px;
  width: 100%;
  background-color: #f7f8f8;
}
.Psychological_right{
  height:600px;
}
.Psychological_title{
  padding-top:10px;
  padding-left:30px;
  display: flex;
  font-size:15px;
  flex-direction: column;
  color:#606266;
  line-height: 20px;
  letter-spacing: 3px;
}
.Psychological_a{
  padding-top:10px;
  padding-left:30px;
  display: flex;
  font-size:15px;
  flex-direction: column;
}
.Psychological_upload{
  margin-top:10px;
  display: flex;
  flex-direction: row;
  .Psychological_file{
    margin-top:20px;
    margin-left:30px;
    width:30%;
  }
}
.Psychological_submit{
  margin-top:60px;
  width:100%;
  text-align:center;
}

</style>
