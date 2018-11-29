<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请上传申请材料 : Please Upload Application Documents </p>
    <div class="Info_1_form">
      <!-- 证件照 1-->
      <div class="Upload_layout">
        <el-col :span="13">
            <p class="select_star">证件照/ The passport photo.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".jpg"
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
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传jpg文件 ,且不超过2MB</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 护照复印件2./ -->
      <div class="Upload_layout">
              <el-col :span="13" >
                  <p class="select_star">护照信息页/ The information page of the Applicant’s Passport</p>
              </el-col>
              <el-col :span="9" >
                <el-upload :disabled="eqit"
                  accept=".pdf"
                  :before-upload="onBeforeUpload"
                  class="upload-demo"
                  :action="params.action"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :data="params.data2"
                  :on-exceed="handleExceed"
                  :file-list="fileList3">
                  <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                  <span style="font-size:11px;">只能上传pdf文件，且不超过2m</span>
                </el-upload>
              </el-col>
            </div>
      <p class="score-split-upload"></p>
      <!-- 担保人有效证件的复印件3-->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p class="select_star">担保人有效证件的复印件/ A photocopy of an ID (can be a passport, license, or other official ID) of the applicant’s emergency contact. </p>
            </el-col>
            <el-col :span="9" >
              <el-upload :disabled="eqit"
                accept=".pdf"
                :before-upload="onBeforeUpload"
                class="upload-demo"
                :action="params.action"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :data="params.data3"
                :on-exceed="handleExceed"
                :file-list="fileList6">
                <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2m</span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- 本人最后学历成绩单复印件4 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">本人最后学历成绩单复印件/ Transcripts of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :data="params.data4"
            :on-exceed="handleExceed"
            :file-list="fileList2">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 本人最后学历证书复印件5 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">本人最后学历证书复印件/ Diploma of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :data="params.data5"
            :on-exceed="handleExceed"
            :file-list="fileList3">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 推荐信1 6 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">推荐信1/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :data="params.data6"
            :on-exceed="handleExceed"
            :file-list="fileList3">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <span class="iconfont" style="color:#EE761C; margin-left:20px"><i class="el-icon-download"></i></span>
      <a class="recruitment-more" href='http://www.istuadmission.com/FStudent/BCU_Reference_Letter_Format-CN-EN.doc' download="">Letter Download</a>
      <p class="score-split-upload"></p>
      <!-- 推荐信2 13 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">推荐信2/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :data="params.data13"
            :on-exceed="handleExceed"
            :file-list="fileList3">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <span class="iconfont" style="color:#EE761C; margin-left:20px"><i class="el-icon-download"></i></span>
      <a class="recruitment-more" href='http://www.istuadmission.com/FStudent/BCU_Reference_Letter_Format-CN-EN.doc' download="">Letter Download</a>
      <p class="score-split-upload"></p>
      <!-- 雅思或托福成绩证书复印件 7-->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p class="select_star">雅思或托福成绩证书复印件/ A photocopy of ILETS OR TOEFL certificate.</p>
            </el-col>
            <el-col :span="9" >
              <el-upload :disabled="eqit"
                accept=".pdf"
                :before-upload="onBeforeUpload"
                class="upload-demo"
                :action="params.action"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :data="params.data7"
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList8">
                <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2M </span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- HSK证书复印件8 -->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p>HSK证书复印件/ A photocopy of HSK certificate.</p>
            </el-col>
            <el-col :span="9" >
              <el-upload :disabled="eqit"
                accept=".pdf"
                :before-upload="onBeforeUpload"
                class="upload-demo"
                :action="params.action"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :data="params.data8"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList7">
                <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2M </span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- 来华学习计划/ 9-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>来华学习计划/ Study Plan in China</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            class="upload-demo"
            :action="params.action"
            :before-upload="onBeforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :data="params.data9"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList4">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB </span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 发表文章或科研成果 10-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>发表文章或科研成果/ Published Article or Research Achievements </p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :limit="1"
            :data="params.data10"
            :on-exceed="handleExceed"
            :file-list="fileList11">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB </span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 无犯罪证明/ No crime certificate必上传 11-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">无犯罪证明/ No crime certificate</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :data="params.data11"
            :on-exceed="handleExceed"
            :file-list="fileList11">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB </span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 近6个月内的体检报告 12-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">近6个月内的体检报告/ Physical Examination in the past 6 months.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload :disabled="eqit"
            accept=".pdf"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :data="params.data12"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList10">
            <el-button :disabled="eqit" size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M </span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <div class="upload_button">
        <!-- <el-button :disabled="eqit" @click="resetForm('OtherInformation')">重置 Reset</el-button> -->
        <el-button :disabled="eqit" type="primary" @click="submitForm()" style="margin-left:50px;">继续 Continue</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_8_Upload',
  data () {
    return {
      username: '',
      peopleName: '',
      eqit: false,
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl,
      params: {
        action: this.$URL + '/UploadHandleServlet',
        data1: {'username': '', 'kind': '1', 'filename': '', 'packname': ''},
        data2: {'username': '', 'kind': '2', 'filename': '', 'packname': ''},
        data3: {'username': '', 'kind': '3', 'filename': '', 'packname': ''},
        data4: {'username': '', 'kind': '4', 'filename': '', 'packname': ''},
        data5: {'username': '', 'kind': '5', 'filename': '', 'packname': ''},
        data6: {'username': '', 'kind': '6', 'filename': '', 'packname': ''},
        data7: {'username': '', 'kind': '7', 'filename': '', 'packname': ''},
        data8: {'username': '', 'kind': '8', 'filename': '', 'packname': ''},
        data9: {'username': '', 'kind': '9', 'filename': '', 'packname': ''},
        data10: {'username': '', 'kind': '10', 'filename': '', 'packname': ''},
        data11: {'username': '', 'kind': '11', 'filename': '', 'packname': ''},
        data12: {'username': '', 'kind': '12', 'filename': '', 'packname': ''},
        data13: {'username': '', 'kind': '13', 'filename': '', 'packname': ''}
      },
      fileList1: [],
      fileList3: [],
      fileList4: [],
      fileList5: [],
      fileList6: [],
      fileList7: [],
      fileList8: [],
      fileList9: [],
      fileList10: [],
      fileList11: [],
      fileList12: []

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
      url: this.$URL + '/GetPinfByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      if (response.data[0].username == '') {
        let isShow = getCookie('InputInfo')
        if (isShow == '') {
          this.$axios({
            method: 'get',
            url: this.$URL + '/SeletWckServlet',
            params: {
              username: this.username
            }
          }).then((response) => {
            isShow = parseInt(response.data[0].typ)
            if (isShow < 7) {
              this.$alert(this.NeedInput[isShow], {
                confirmButtonText: 'sure'
              })
              this.$router.push('/asidetab/' + this.NeedUrl[isShow])
            }
            setCookie('InputInfo', isShow, 1000 * 60)
          })
        } else {
          if (isShow < 7) {
            this.$alert(this.NeedInput[isShow], {
              confirmButtonText: 'sure'
            })
            this.$router.push('/asidetab/' + this.NeedUrl[isShow])
          }
        }
      } else {
        // 是否禁用
        let isShow = getCookie('InputInfo')
        if (isShow == '') {
          this.$axios({
            method: 'get',
            url: this.$URL + '/SeletWckServlet',
            params: {
              username: this.username
            }
          }).then((response) => {
            isShow = parseInt(response.data[0].typ)
            if (isShow == 15) {
              this.eqit = true
            }
          })
        } else {
          if (isShow == 15) {
            this.eqit = true
          }
        }
        this.peopleName = response.data[0].givenName + '.' + response.data[0].familyName
        this.params.data1.username = uname
        this.params.data2.username = uname
        this.params.data3.username = uname
        this.params.data4.username = uname
        this.params.data5.username = uname
        this.params.data6.username = uname
        this.params.data7.username = uname
        this.params.data8.username = uname
        this.params.data9.username = uname
        this.params.data10.username = uname
        this.params.data11.username = uname
        this.params.data12.username = uname
        this.params.data13.username = uname

        this.params.data1.packname = uname + '_' + this.peopleName
        this.params.data2.packname = uname + '_' + this.peopleName
        this.params.data3.packname = uname + '_' + this.peopleName
        this.params.data4.packname = uname + '_' + this.peopleName
        this.params.data5.packname = uname + '_' + this.peopleName
        this.params.data6.packname = uname + '_' + this.peopleName
        this.params.data7.packname = uname + '_' + this.peopleName
        this.params.data8.packname = uname + '_' + this.peopleName
        this.params.data9.packname = uname + '_' + this.peopleName
        this.params.data10.packname = uname + '_' + this.peopleName
        this.params.data11.packname = uname + '_' + this.peopleName
        this.params.data12.packname = uname + '_' + this.peopleName
        this.params.data13.packname = uname + '_' + this.peopleName

        this.params.data1.filename = uname + '_' + this.peopleName + '_' + '证件照.jpg'
        this.params.data2.filename = uname + '_' + this.peopleName + '_' + '护照信息页.pdf'
        this.params.data3.filename = uname + '_' + this.peopleName + '_' + '担保人有效证件.pdf'
        this.params.data4.filename = uname + '_' + this.peopleName + '_' + '学历成绩单.pdf'
        this.params.data5.filename = uname + '_' + this.peopleName + '_' + '学历证书.pdf'
        this.params.data6.filename = uname + '_' + this.peopleName + '_' + '推荐信1.pdf'
        this.params.data7.filename = uname + '_' + this.peopleName + '_' + '雅思或托福成绩证书复印件.pdf'
        this.params.data8.filename = uname + '_' + this.peopleName + '_' + 'HSK证书复印件.pdf'
        this.params.data9.filename = uname + '_' + this.peopleName + '_' + '来华学习计划.pdf'
        this.params.data10.filename = uname + '_' + this.peopleName + '_' + '发表文章或科研成果.pdf'
        this.params.data11.filename = uname + '_' + this.peopleName + '_' + '无犯罪证明.pdf'
        this.params.data12.filename = uname + '_' + this.peopleName + '_' + '近6个月内的体检报告.pdf'
        this.params.data13.filename = uname + '_' + this.peopleName + '_' + '推荐信2.pdf'
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // 文件上传前钩子
    onBeforeUpload (file) {
      // const isIMAGE = file.type === 'image/jpg' || 'image/gif' || 'image/png'
      const isLt1M = file.size / 1024 / 1024 < 2
      // if (!isIMAGE) {
      //   this.$message.error('上传文件只能是图片格式!')
      // }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 2MB!')
      }
      return isLt1M
    },
    submitForm () {
      this.$axios({
        method: 'get',
        url: this.$URL + '/ChackUploadServlet',
        params: {
          username: this.username
        }
      }).then((response) => {
        if (response.data == true) {
          setCookie('InputInfo', 8, 1000 * 60)
          this.$router.push('/asidetab/Information_9_Announcement')
        } else {
          this.$alert('未上传所有申请材料', 'Error', {
            confirmButtonText: 'sure'
          })
        }
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    onSuccess (response, file, index) {
      console.log(URL.createObjectURL(file.raw))
      console.log(file)
      // let
      // fileList[0].name = file.name
      console.log('成功' + index)
    },
    handleRemove (file, fileList) {
      console.log('删除时')
      console.log()
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
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
<style>
.Info_1_border{
}
</style>
<style lang="stylus" scoped>
.Info_1_border{
  padding-top:20px;
  padding-left:40px;
  display: flex;
  flex-direction: column;
  color:#606266;
  /* width:80%; */
  .Info_1_form{
    padding-left:10px;
    margin-top: 30px;
    .Upload_layout{
      display: flex;
      justify-content:center;
      align-items:Center;
      p{
        color:#2F88EE;
        font-weight: bold;
      }
      .select_star{
        position: relative;
      }
      .select_star:before{
        content: '';
        background-repeat: no-repeat;
        background:url('~images/select_star.png');
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        left: -15px;
      }

    }
    .upload_button{
      padding-right:80px;
      margin-bottom:40px;
      margin-top:60px;
      display:flex;
      justify-content:flex-end;
    }
    .score-split-upload{
      width:90%;
      height:1px;
      background-color: #CACACB;
      margin:30px auto 20px 10px;
    }
    p{
      color:#2F88EE;
      margin-bottom:20px;
      margin-top:5px;
      font-size:14px;
    }
    .el_left{
      padding-left:20px;
      .el-in-left{
        margin-left:-20px;
      }
    }
    .bottom_button{
      margin-bottom:40px;
      margin-top:60px;
      display:flex;
      justify-content:flex-start;
    }
  }
}
</style>
