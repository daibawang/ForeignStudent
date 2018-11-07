<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写来华学习计划 : Please complete Proposed Study in BCU </p>
    <div class="Info_1_form">
      <el-form :model="StudyForm" :rules="rules" ref="StudyForm" label-width="200px" class="demo-StudyForm" label-position="top">
      <p>来华学习计划/Proposed Study in BCU:</p>
        <!-- 姓名 -->
        <el-form-item label="学位/Study in BCU:" prop="Candidate" class="el_left">
            <el-radio-group v-model="StudyForm.Candidate" style="line-height:35px;">
              <el-radio label="本科生/Bachelor’s Degree Candidate"></el-radio>
              <el-radio label="硕士研究生/Master’s Degree Candidate"></el-radio>
              <el-radio label="博士研究生/Doctor’s Degree Candidate"></el-radio>
              <el-radio label="研究学者/Research Scholar"></el-radio>
              <el-radio label="高级进修生/Senior Scholar"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="申请来华学习专业或研究专题/Intended Subject or Field of Study in China" prop="Intended" class="el_left">
          <el-input v-model="StudyForm.Intended" clearable style="width:500px;" class="el-in-left el_left"></el-input>
        </el-form-item>
        <el-form-item label="申请专业学习时间/Duration of the Intended Study:" class="el_left" required >
          <el-col :span="5">
            <el-form-item prop="fromtime">
                <el-date-picker  type="month" placeholder="From" v-model="StudyForm.fromdate" style="width: 150px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5" >
            <el-form-item prop="totime">
              <el-date-picker type="month" placeholder="To" v-model="StudyForm.todate" style="width: 150px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <p>拟在华学习或研究的详细内容（学习计划不少于400字，研究计划不少于800字，可另附纸）/ Please Describe the Details of your Study or Research Plan in China  (can be attached if this space is not enough)</p>
        <el-form-item label="详细内容/Study Details" prop="Details" class="el_left">
          <el-input style="width:650px"
          maxlength=800
          type="textarea" :autosize="{ minRows: 8}"placeholder="请输入内容/Please fill details"
          v-model="StudyForm.Details">
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
        Candidate: '',
        Intended: '',
        fromtime: '',
        totime: '',
        Details: ''
      },
      rules: {
        Candidate: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Intended: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        fromtime: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        totime: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Details: [
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
