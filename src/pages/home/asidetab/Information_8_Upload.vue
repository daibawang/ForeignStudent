<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请上传申请材料 : Please Upload Application Documents </p>
    <div class="Info_1_form">
      <!-- 证件照-->
      <div class="Upload_layout">
        <el-col :span="13">
            <p class="select_star">证件照/ The passport photo.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".jpg"
            class="upload-demo"
            :action="params.action"
            :before-upload="onBeforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="onSuccess"
            multiple
            :limit="1"
            :data="params.data1"
            :auto-upload="true"
            :on-exceed="handleExceed"
            :file-list="fileList1">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传jpg文件 ,且不超过2MB</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 护照复印件./ -->
      <div class="Upload_layout">
              <el-col :span="13" >
                  <p class="select_star">护照信息页/ The information page of the Applicant’s Passport</p>
              </el-col>
              <el-col :span="9" >
                <el-upload
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
                  <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                  <span style="font-size:11px;">只能上传pdf文件，且不超过2m</span>
                </el-upload>
              </el-col>
            </div>
      <p class="score-split-upload"></p>
      <!-- 担保人有效证件的复印件-->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p class="select_star">担保人有效证件的复印件/ A photocopy of an ID (can be a passport, license, or other official ID) of the applicant’s emergency contact. </p>
            </el-col>
            <el-col :span="9" >
              <el-upload
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
                <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2m</span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- 本人最后学历成绩单复印件 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">本人最后学历成绩单复印件/ Transcripts of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 本人最后学历证书复印件 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">本人最后学历证书复印件/ Diploma of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 两封推荐信 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">两封推荐信/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M Limit 2</span>
          </el-upload>
        </el-col>
      </div>
      <span class="iconfont" style="color:#EE761C; margin-left:20px"><i class="el-icon-download"></i></span>
      <a class="recruitment-more" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">Letter Download</a>
      <p class="score-split-upload"></p>
      <!-- 雅思或托福成绩证书复印件 -->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p class="select_star">雅思或托福成绩证书复印件/ A photocopy of ILETS OR TOEFL certificate.</p>
            </el-col>
            <el-col :span="9" >
              <el-upload
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
                <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2M Limit 2</span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- HSK证书复印件 -->
      <div class="Upload_layout">
            <el-col :span="13" >
                <p>HSK证书复印件/ A photocopy of HSK certificate.</p>
            </el-col>
            <el-col :span="9" >
              <el-upload
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
                <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
                <span style="font-size:11px;">只能上传pdf文件，且不超过2M </span>
              </el-upload>
            </el-col>
          </div>
      <p class="score-split-upload"></p>
      <!-- 来华学习计划/ -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>来华学习计划/ Study Plan in China</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB Limit 2</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 发表文章或科研成果 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>发表文章或科研成果/ Published Article or Research Achievements </p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB Limit 5</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 无犯罪证明/ No crime certificate必上传 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>无犯罪证明/ No crime certificate</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件 ,且不超过2MB Limit 2</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 近6个月内的体检报告-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">近6个月内的体检报告/ Physical Examination in the past 6 months.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
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
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf文件，且不超过2M Limit 10</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 心理测评完成页截图-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">心理测评完成页截图/ The screenshot of psychological assessment completion page.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".pdf,.png,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :data="params.data13"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList10">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf/png/jpg文件，且不超过2M Limit 1</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 申请费用转账凭证-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p class="select_star">申请费用转账凭证</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".pdf,.png,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            :action="params.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :data="params.data14"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList10">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传pdf/png/jpg文件，且不超过2M Limit 1</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_8_Upload',
  data () {
    return {
      username: 'Zhang',
      params: {
        action: '/apis/UploadHandleServlet',
        data1: {'username': this.username, 'kind': '1', 'istrue': 'true'},
        data2: {'username': this.username, 'kind': '2', 'istrue': 'true'},
        data3: {'username': this.username, 'kind': '3', 'istrue': 'true'},
        data4: {'username': this.username, 'kind': '4', 'istrue': 'true'},
        data5: {'username': this.username, 'kind': '5', 'istrue': 'true'},
        data6: {'username': this.username, 'kind': '6', 'istrue': 'true'},
        data7: {'username': this.username, 'kind': '7', 'istrue': 'true'},
        data8: {'username': this.username, 'kind': '8', 'istrue': 'true'},
        data9: {'username': this.username, 'kind': '9', 'istrue': 'true'},
        data10: {'username': this.username, 'kind': '10', 'istrue': 'true'},
        data11: {'username': this.username, 'kind': '11', 'istrue': 'true'},
        data12: {'username': this.username, 'kind': '12', 'istrue': 'true'},
        data13: {'username': this.username, 'kind': '13', 'istrue': 'true'},
        data14: {'username': this.username, 'kind': '14', 'istrue': 'true'}
      },
      fileList1: [
        // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      file: {},
      fileList3: [
      ],
      fileList4: [
      ],
      fileList5: [
      ],
      fileList6: [
      ],
      fileList7: [
      ],
      fileList8: [
      ],
      fileList9: [
      ],
      fileList10: [
      ],
      fileList11: [
      ],
      fileList12: [
      ]

    }
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
    onSuccess (response, file, fileList) {
      console.log(URL.createObjectURL(file.raw))
      console.log(file)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 2 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
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
  padding-left:50px;
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
