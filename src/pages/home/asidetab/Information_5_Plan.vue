<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写来华学习计划 : Please complete Proposed Study in BCU </p>
    <div class="Info_1_form">
      <el-form :model="StudyForm" :rules="rules" ref="StudyForm" label-width="200px" class="demo-StudyForm" label-position="top">
      <p>来华学习计划/Proposed Study in BCU:</p>
        <!-- 姓名 -->
        <el-form-item label="学位/Study in BCU:" prop="degree" class="el_left">
            <el-radio-group v-model="StudyForm.degree" style="line-height:35px;">
              <el-radio label="1" value="1" >本科生/Bachelor’s Degree degree</el-radio>
              <el-radio label="2" value="2" >硕士研究生/Master’s Degree degree</el-radio>
              <el-radio label="3" value="3">博士研究生/Doctor’s Degree degree</el-radio>
              <el-radio label="4" value="4">研究学者/Research Scholar</el-radio>
              <el-radio label="5" value="5">高级进修生/Senior Scholar</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="申请来华学习专业或研究专题/subject Subject or Field of Study in China" prop="subject" class="el_left">
          <el-select v-model="StudyForm.subject" style="width:300px;" class="el-in-left el_left">
            <el-option label="中医药专业Traditional Chinese Medicine" value="medicine">中医药专业 Traditional Chinese Medicine</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请专业学习时间/Duration of the subject Study:" class="el_left" required >
          <el-col :span="5">
            <el-select v-model="StudyForm.ym_f" style="width:150px;" class="el-in-left el_left">
              <el-option label="2018" value="2018">2018</el-option>
            </el-select>
          </el-col>
          <el-col :span="5" >
            <el-select v-model="StudyForm.ym_l" style="width:150px; margin-left:10px" class="el-in-left el_left">
              <el-option label="2019" value="2018">2019</el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <p>拟在华学习或研究的详细内容（可另附纸）/ Please Describe the details of your Study or Research Plan in China  (can be attached if this space is not enough)</p>
        <el-form-item label="详细内容/Study details" prop="details" class="el_left">
          <el-input style="width:650px"
          maxlength=2000
          type="textarea" :autosize="{ minRows: 8}"placeholder="请输入内容/Please fill details"
          v-model="StudyForm.details">
          </el-input>
        </el-form-item>

        <div class="bottom_button">
          <el-button @click="resetForm('StudyForm')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('StudyForm')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="submitForm('StudyForm')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_5_Plan',
  data () {
    return {
      StudyForm: {
        username: 'zmz',
        degree: '',
        subject: '',
        ym_f: '',
        ym_l: '',
        details: '',
        type: 1
      },
      rules: {
        degree: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        subject: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        ym_f: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        ym_l: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        details: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Scores2: [
          { required: true, message: '请选择性别 Please Choose your Gender', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ]
      }
    }
  },
  methods: {
    handleChange (value) {
      console.log(this.StudyForm.Type)
    },
    // "domain.testUrl"
    submitForm (formName) {
      // let ym_f = this.moment(his.StudyForm.ym_f).format('YYYYMMDD')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!' + this.StudyForm.degree + this.StudyForm.Birthdate)
          var studyJsonForm = JSON.stringify(this.StudyForm)
          this.$axios({
            method: 'get',
            url: '/apis/ProposedServlet',
            params: {
              // StudyForm: studyJsonForm
              username: this.StudyForm.username,
              degree: this.StudyForm.degree,
              subject: this.StudyForm.subject,
              ym_f: this.StudyForm.ym_f,
              ym_l: this.StudyForm.ym_l,
              details: this.StudyForm.details,
              type: this.StudyForm.type
            }
          }).then((response) => {
            console.log(response)
            console.log(response.data)
          }).catch((error) => {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
    .score-split{
      width:500px;
      height:1px;
      background-color: #CACACB;
      margin-bottom:20px;
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
