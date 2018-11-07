<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请上传申请材料 : Please Upload Application Documents </p>
    <div class="Info_1_form">
      <!-- 两封推荐信 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>两封推荐信/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".doc,.docx,.text"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="onBeforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList1">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传doc/docx/text文件 ,且不超过1MB</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
<!-- 本人最后学历成绩单复印件 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>本人最后学历成绩单复印件/ Transcripts of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList2">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
<!-- 本人最后学历证书复印件 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>本人最后学历证书复印件/ Diploma of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList3">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
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
            accept=".doc,.docx,.text"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="onBeforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList4">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传doc/docx/text文件 ,且不超过1MB</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
<!-- 护照复印件./ -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>本人最后学历证书复印件/ Diploma of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList3">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
  <!-- 担保人有效证件的复印件-->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>担保人有效证件的复印件/ A photocopy of an ID (can be a passport, license, or other official ID) of the applicant’s emergency contact. </p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList6">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
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
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList7">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
  <!-- 雅思或托福成绩证书复印件 -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>雅思或托福成绩证书复印件/ A photocopy of ILETS OR TOEFL certificate.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            accept=".png,.pdf,.jpg"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList8">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">只能上传png/pdf/jpg文件，且不超过500kb</span>
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
            accept=".png,.pdf,.jpg,.doc,.docx,.text"
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList9">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;">不超过1M</span>
          </el-upload>
        </el-col>
      </div>
      <p class="score-split-upload"></p>
      <!-- 近6个月内的体检报告/ Physical Examination in the past 6 months -->
      <div class="Upload_layout">
        <el-col :span="13" >
            <p>近6个月内的体检报告/ Physical Examination in the past 6 months.</p>
        </el-col>
        <el-col :span="9" >
          <el-upload
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList10">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;"></span>
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
            :before-upload="onBeforeUpload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList11">
            <el-button size="mini" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <span style="font-size:11px;"></span>
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
      fileList1: [
        // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      fileList2: [
      ],
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
      const isLt1M = file.size / 1024 / 1024 < 5
      // if (!isIMAGE) {
      //   this.$message.error('上传文件只能是图片格式!')
      // }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 5MB!')
      }
      return isIMAGE && isLt1M
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
      return this.$confirm(`确定移除 ${file.name}？`)
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
