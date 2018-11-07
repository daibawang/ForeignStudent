<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写语言能力 : Please complete Language Skill </p>
    <div class="Info_1_form">
      <el-form :model="LanguageForm" :rules="rules" ref="LanguageForm" label-width="200px" class="demo-LanguageForm" label-position="top">
        <!-- 姓名 -->
        <el-form-item label="汉语能力/Chinese Proficiency:" prop="Chinese">
            <el-radio-group v-model="LanguageForm.Chinese">
              <el-radio label="很好/Excellent"></el-radio>
              <el-radio label="好/Good"></el-radio>
              <el-radio label="较好/Fair"></el-radio>
              <el-radio label="差/Poor"></el-radio>
              <el-radio label="不会/None"></el-radio>
            </el-radio-group>
        </el-form-item>
        <p> HSK 考试等级或其他类型汉语考试成绩/ Level of HSK test or other certificates that can testify your</p>
        <el-form-item label="考试类型/Type" prop="Type" class="el_left">
            <el-cascader separator='' expand-trigger="hover" :options="options" v-model="LanguageForm.Type"@change="handleChange">
            <el-cascader>
        </el-form-item>
        <el-form-item label="考试成绩/Test Scores" prop="Scores" class="el_left">
          <el-input v-model="LanguageForm.Scores" clearable style="width:200px;" class="el-in-left el_left"></el-input>
        </el-form-item>

        <p class="score-split"></p>

        <el-form-item label="英语能力/English Proficiency:" prop="English">
            <el-radio-group v-model="LanguageForm.English">
              <el-radio label="很好/Excellent"></el-radio>
              <el-radio label="好/Good"></el-radio>
              <el-radio label="较好/Fair"></el-radio>
              <el-radio label="差/Poor"></el-radio>
              <el-radio label="不会/None"></el-radio>
            </el-radio-group>
        </el-form-item>
        <p>TOEFL或ILETS 考试成绩/ TOEFL or ILETS test score</p>
        <el-form-item label="考试类型/Type" prop="Type2" class="el_left">
          <el-select v-model="LanguageForm.Type2" style="width:200px">
            <el-option label="TOEFL" value="TOEFL"></el-option>
            <el-option label="ILETS" value="ILETS"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试成绩/Test Scores" prop="Scores2" class="el_left">
          <el-input v-model="LanguageForm.Scores2" clearable style="width:200px;" class="el-in-left el_left"></el-input>
        </el-form-item>

        <div class="bottom_button">
          <el-button @click="resetForm('LanguageForm')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('LanguageForm')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="submitForm('LanguageForm')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_4_Language',
  data () {
    return {
      options: [
        {
          value: 'HSK',
          label: 'HSK',
          children: [{
            value: '1',
            label: '1'
          }, {
            value: '2',
            label: '2'
          }, {
            value: '3',
            label: '3'
          }, {
            value: '4',
            label: '4'
          }, {
            value: '5',
            label: '5'
          }, {
            value: '',
            label: '6'
          }]
        }, {
          value: 'other',
          label: '其他Other'
        }, {
          value: 'none',
          label: '无/None'
        }
      ],
      LanguageForm: {
        Chinese: '', // 汉语能力
        Type: [], // 汉语考试
        Scores: null, // 汉语考试成绩
        English: '', // 英语能力
        Type2: '', // 英语考试
        Scores2: null
      },
      rules: {
        Chinese: [
          { required: false, message: '', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Scores: [
          { required: false, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Passport: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        English: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Type2: [
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
      console.log(this.LanguageForm.Type)
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
