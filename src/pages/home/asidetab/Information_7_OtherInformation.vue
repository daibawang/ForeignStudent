<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写其他信息 : Please complete Other Information </p>
    <div class="Info_1_form">
      <el-form :show-message="false" :model="OtherInformation" :rules="rules" ref="OtherInformation" label-width="170px" class="demo-OtherInformation" label-position="top">
        <p>申请人在华事务担保人或机构/The Emergency Contact (Chinese or Foreigner) During Your Study in China:</p>
        <!-- <p class="score-split"></p> -->
        <el-form-item label="名称/Name" prop="Name" class="el_left">
          <el-input v-model="OtherInformation.Name" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="Tel" class="el_left">
          <el-input v-model.number="OtherInformation.Tel" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="传真/Fax" prop="Fax" class="el_left">
          <el-input v-model="OtherInformation.Fax" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="地址/Address" prop="Address" class="el_left" >
          <el-input v-model="OtherInformation.Address" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <p class="score-split"></p>

        <p>申请人亲属情况/Family Members of the Applicants:</p>
        <!-- <p>父亲/Father</p> -->
        <el-form-item label="父亲/Father:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="FatherName" class="el_left" required>
              <el-input v-model="OtherInformation.FatherName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" >
            <el-form-item label="年龄/Age" prop="FatherAge" class="el_left" required>
              <el-input v-model="OtherInformation.FatherAge" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="职业/Employment" prop="FatherEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.FatherEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" >
            <el-form-item label="联系方式/Telephone Number" prop="FatherNumber" class="el_left" required>
              <el-input v-model="OtherInformation.FatherNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <p>母亲/Mother</p> -->
        <el-form-item label="母亲/Mother:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="MotherName" class="el_left" required>
              <el-input v-model="OtherInformation.MotherName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" >
            <el-form-item label="年龄/Age" prop="MotherAge" class="el_left" required>
              <el-input v-model="OtherInformation.MotherAge" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="职业/Employment" prop="MotherEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.MotherEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" >
            <el-form-item label="联系方式/Telephone Number" prop="MotherNumber" class="el_left" required>
              <el-input v-model="OtherInformation.MotherNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="配偶/Spouse:" class="el_left"  >
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="SpouseName" class="el_left" >
              <el-input v-model="OtherInformation.SpouseName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" >
            <el-form-item label="年龄/Age" prop="SpouseAge" class="el_left" >
              <el-input v-model="OtherInformation.SpouseAge" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="职业/Employment" prop="SpouseEmployment" class="el_left" >
              <el-input v-model="OtherInformation.SpouseEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" >
            <el-form-item label="联系方式/Telephone Number" prop="SpouseNumber" class="el_left" >
              <el-input v-model="OtherInformation.SpouseNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <p>子女/Daughter</p> -->
        <el-form-item label="子女/Daughter:" class="el_left"  >
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="DaughterName" class="el_left" >
              <el-input v-model="OtherInformation.DaughterName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" >
            <el-form-item label="年龄/Age" prop="DaughterAge" class="el_left" >
              <el-input v-model="OtherInformation.DaughterAge" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="职业/Employment" prop="DaughterEmployment" class="el_left" >
              <el-input v-model="OtherInformation.DaughterEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" >
            <el-form-item label="联系方式/Telephone Number" prop="DaughterNumber" class="el_left" >
              <el-input v-model="OtherInformation.DaughterNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <div class="bottom_button">
          <el-button @click="resetForm('OtherInformation')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('OtherInformation')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="submitForm('OtherInformation')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_7_OtherInformation',
  data () {
    return {
      OtherInformation: {
        Name: '', // 姓
        Tel: '',
        Fax: '',
        Address: '',
        FatherName: '',
        FatherNumber: '',
        FatherEmployment: '',
        FatherAge: '',
        MotherName: '',
        MotherNumber: '',
        MotherEmployment: '',
        MotherAge: '',
        DaughterNumber: '',
        DaughterEmployment: '',
        DaughterAge: '',
        DaughterName: '',
        SpouseName: '',
        SpouseNumber: '',
        SpouseAge: '',
        SpouseEmployment: ''
      },
      rules: {
        Name: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Address: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Tel: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ],
        Fax: [
          { required: false, message: '', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
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
