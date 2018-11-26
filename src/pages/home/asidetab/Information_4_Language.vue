<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写语言能力 : Please complete Language Skill </p>
    <div class="Info_1_form">
      <el-form :model="LanguageForm" :rules="rules" ref="LanguageForm" label-width="200px" class="demo-LanguageForm" label-position="top">
        <!-- 姓名 -->
        <el-form-item label="汉语能力/Chinese Proficiency:" prop="proficiency_c">
            <el-radio-group v-model="LanguageForm.proficiency_c">
              <el-radio label="1" value='1'>很好/Excellent</el-radio>
              <el-radio label="2" value='2'>好/Good</el-radio>
              <el-radio label="3" value='3'>较好/Fair</el-radio>
              <el-radio label="4" value-'4'>差/Poor</el-radio>
              <el-radio label="5" value='5'>不会/None</el-radio>
            </el-radio-group>
        </el-form-item>
        <p> HSK 考试等级或其他类型汉语考试成绩/ Level of HSK test or other certificates that can testify your</p>
        <el-form-item label="考试类型/Type" prop="level_c" class="el_left">
            <el-cascader separator='' expand-trigger="hover" :options="options" v-model="LanguageForm.level_c"@change="handleChange">
            <el-cascader>
        </el-form-item>
        <el-form-item label="考试成绩/Test Scores" prop="level_c_Scores" class="el_left">
          <el-input v-model.number="LanguageForm.level_c_Scores" clearable style="width:200px;" class="el-in-left el_left"></el-input>
        </el-form-item>

        <p class="score-split"></p>

        <el-form-item label="英语能力/English Proficiency:" prop="proficiency_e">
            <el-radio-group v-model="LanguageForm.proficiency_e">
            <el-radio label="1" value='1'>很好/Excellent</el-radio>
            <el-radio label="2" value='2'>好/Good</el-radio>
            <el-radio label="3" value='3'>较好/Fair</el-radio>
            <el-radio label="4" value-'4'>差/Poor</el-radio>
            <el-radio label="5" value='5'>不会/None</el-radio>
            </el-radio-group>
        </el-form-item>
        <p>TOEFL或ILETS 考试成绩/ TOEFL or ILETS test score</p>
        <el-form-item label="考试类型/Type" prop="level_e" class="el_left">
          <el-select v-model="LanguageForm.level_e" style="width:200px">
            <el-option label="TOEFL" value="TOEFL"></el-option>
            <el-option label="ILETS" value="ILETS"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试成绩/Test Scores" prop="level_e_score" class="el_left">
          <el-input v-model.number="LanguageForm.level_e_score" clearable style="width:200px;" class="el-in-left el_left"></el-input>
        </el-form-item>

        <div class="bottom_button">
          <el-button @click="resetForm('LanguageForm')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('LanguageForm')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="PersonalFormNavicat('LanguageForm')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_4_Language',
  data () {
    return {
      username: '',
      isSave: false,
      geturl: '',
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
          value: 'none',
          label: '无/None'
        }
      ],
      LanguageForm: {
        proficiency_c: '', // 汉语能力
        level_c: [], // 汉语考试
        level_c_Scores: null, // 汉语考试成绩
        proficiency_e: '', // 英语能力
        level_e: '', // 英语考试
        level_e_score: null,
        type: 1
      },
      rules: {
        Passport: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        proficiency_e: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        level_e: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        level_e_score: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: '只能输入数字 Only Number', trigger: 'blur'}
        ],
        level_c_Scores: [
          { required: false, trigger: 'blur' },
          { type: 'number', message: '只能输入数字 Only Number', trigger: 'blur'}
        ]
      }
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname,
    console.log(this.username)
    this.$axios({
      method: 'get',
      url: '/apis/GetProficiencyByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      if (response.data[0].username == '') {
        console.log('zzzzzzzz')
      } else {
        this.isSave = true
        let level_c_return = response.data[0].level_c.split('级').toString()
        level_c_return = level_c_return.split('分').toString()
        level_c_return = level_c_return.split(',')
        this.LanguageForm.proficiency_c = response.data[0].proficiency_c
        this.LanguageForm.level_c = level_c_return[0].split(' ')
        if (this.LanguageForm.level_c[0] == 'none') {
          this.LanguageForm.level_c_Scores = ''
        } else {
          this.LanguageForm.level_c_Scores = parseInt(level_c_return[1])
        }
        this.LanguageForm.proficiency_e = response.data[0].proficiency_e
        this.LanguageForm.level_e = response.data[0].level_e.substr(0, 5)
        this.LanguageForm.level_e_score = parseInt(response.data[0].level_e.substr(5, 3))
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    handleChange (value) {
      console.log(this.LanguageForm.Type)
    },
    PersonalFormNavicat (formName) {
      if (this.isClickSave == true) {
        this.$router.push('/asidetab/Information_5_Plan')
      } else {
        this.submitForm(formName)
        this.$router.push('/asidetab/Information_5_Plan')
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = '/apis/AddProficiencyServlet'
          } else {
            this.geturl = '/apis/ChangeProficiencyServlet'
          }
          this.$axios({
            method: 'get',
            url: this.geturl,
            params: {
              // LanguageForm: studyJsonForm
              username: this.username,
              proficiency_c: this.LanguageForm.proficiency_c,
              level_c: this.LanguageForm.level_c[0] + ' ' + this.LanguageForm.level_c[1] + '级' + this.LanguageForm.level_c_Scores + '分',
              proficiency_e: this.LanguageForm.proficiency_e,
              level_e: this.LanguageForm.level_e + this.LanguageForm.level_e_score,
              type: 1
            }
          }).then((response) => {
            this.isSave = true
            console.log(response)
            console.log(response.data)
          }).catch((error) => {
            console.log(error)
          })
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
