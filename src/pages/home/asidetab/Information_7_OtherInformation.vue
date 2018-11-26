<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写其他信息 : Please complete Other Information </p>
    <div class="Info_1_form">
      <el-form :show-message="false" :model="OtherInformation" :rules="rules" ref="OtherInformation" label-width="170px" class="demo-OtherInformation" label-position="top">
        <p>申请人在华事务担保人或机构/The Emergency Contact (Chinese or Foreigner) During Your Study in China:</p>
        <!-- <p class="score-split"></p> -->
         <el-form-item label="名称/Name" prop="name" class="el_left" required>
          <el-input v-model="OtherInformation.name" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="tel" class="el_left">
          <el-input v-model.number="OtherInformation.tel" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="邮箱/E-mail" prop="fax" class="el_left">
          <el-input v-model="OtherInformation.fax" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <el-form-item label="地址/Address" prop="address" class="el_left" >
          <el-input v-model="OtherInformation.address" clearable style="width:400px" class="el_left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <p>申请人亲属情况/Family Members of the Applicants:</p>
        <!-- <p>父亲/Father</p> -->
        <el-form-item label="父亲/Father:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="Family[0].FatherName" class="el_left" required>
              <el-input v-model="OtherInformation.Family[0].FatherName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" >
            <el-form-item label="职业/Employment" prop="Family[0].FatherEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.Family[0].FatherEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="电话/Telephone Number" prop="Family[0].FatherNumber" class="el_left" required>
              <el-input v-model="OtherInformation.Family[0].FatherNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6.5" >
            <el-form-item label="邮箱/E-mail" prop="Family[0].Fathermail" class="el_left" required
            :rules="{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }">
              <el-input v-model="OtherInformation.Family[0].Fathermail" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <p>母亲/Mother</p> -->
        <el-form-item label="母亲/Mother:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="Family[1].MotherName" class="el_left" required>
              <el-input v-model="OtherInformation.Family[1].MotherName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" >
            <el-form-item label="职业/Employment" prop="Family[1].MotherEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.Family[1].MotherEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="电话/Telephone Number" prop="Family[1].MotherNumber" class="el_left" required>
              <el-input v-model="OtherInformation.Family[1].MotherNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6.5" >
            <el-form-item label="邮箱/E-mail" prop="Family[1].Mothermail"
            class="el_left" required
            :rules="{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }">
              <el-input v-model="OtherInformation.Family[1].Mothermail" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="配偶/Spouse:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="Family[2].SpouseName" class="el_left" required>
              <el-input v-model="OtherInformation.Family[2].SpouseName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" >
            <el-form-item label="职业/Employment" prop="Family[2].SpouseEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.Family[2].SpouseEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="电话/Telephone Number" prop="Family[2].SpouseNumber" class="el_left" required>
              <el-input v-model="OtherInformation.Family[2].SpouseNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6.5" >
            <el-form-item label="邮箱/E-mail" prop="Family[2].Spousemail"
            class="el_left" required>
              <el-input v-model="OtherInformation.Family[2].Spousemail" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <p>子女/Daughter</p> -->
        <el-form-item label="子女/Daughter:" class="el_left"  required>
          <el-col :span="4">
            <el-form-item label="姓名/Name" prop="Family[3].DaughterName" class="el_left" required>
              <el-input v-model="OtherInformation.Family[3].DaughterName" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" >
            <el-form-item label="职业/Employment" prop="Family[3].DaughterEmployment" class="el_left" required>
              <el-input v-model="OtherInformation.Family[3].DaughterEmployment" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" >
            <el-form-item label="电话/Telephone Number" prop="Family[3].DaughterNumber" class="el_left" required>
              <el-input v-model="OtherInformation.Family[3].DaughterNumber" clearable  class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6.5" >
            <el-form-item label="邮箱/E-mail" prop="Family[3].Daughtermail"
            class="el_left" required>
              <el-input v-model="OtherInformation.Family[3].Daughtermail" clearable class="el-in-left"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        </el-form>
        <div class="bottom_button">
          <el-button @click="resetForm('OtherInformation')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('OtherInformation','Family')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="PersonalFormNavicat('OtherInformation','Family')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_7_OtherInformation',
  data () {
    return {
      username: '',
      isSave: false,
      geturl1: '',
      geturl2: '',
      OtherInformation: {
        name: '',
        tel: '',
        fax: '',
        address: '',
        type: 1,
        Family: [{
          'FatherName': '', 'FatherNumber': '', 'FatherEmployment': '', 'Fathermail': ''
        }, {
          'MotherName': '', 'MotherNumber': '', 'MotherEmployment': '', 'Mothermail': ''
        }, {
          'SpouseName': '', 'SpouseNumber': '', 'SpouseEmployment': '', 'Spousemail': ''
        }, {
          'DaughterName': '', 'DaughterNumber': '', 'DaughterEmployment': '', 'Daughtermail': ''
        }]
      },
      rules: {
        name: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ],
        fax: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
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
      url: '/apis/GetContactByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      // 判断有没有值
      if (response.data[0].username == '') {
        console.log('zzzzzzzz')
      } else {
        this.isSave = true
        this.OtherInformation.name = response.data[0].name
        this.OtherInformation.tel = parseInt(response.data[0].tel)
        this.OtherInformation.fax = response.data[0].fax
        this.OtherInformation.address = response.data[0].address
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    PersonalFormNavicat (formName) {
      if (this.isClickSave == true) {
        this.$router.push('/asidetab/Information_8_Upload')
      } else {
        this.submitForm(formName)
        this.$router.push('/asidetab/Information_8_Upload')
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl1 = '/apis/AddXsServlet'
            this.geturl2 = '/apis/AddFamilyServlet'
          } else {
            this.geturl1 = '/apis/ChangeXsServlet'
            this.geturl2 = '/apis/ChangeFamilyServlet'
          }
          this.$axios({
            method: 'get',
            url: '/apis/AddContactServlet',
            params: {
              username: this.username,
              name: this.OtherInformation.name,
              tel: this.OtherInformation.tel,
              fax: this.OtherInformation.fax,
              address: this.OtherInformation.address
            }
          }).then((response) => {
            console.log(response)
            console.log(response.data)
          }).catch((error) => {
            console.log(error)
          })
          this.$axios({
            method: 'get',
            url: '/apis/AddFamilyServlet',
            params: {
              username: this.username,
              Father: this.OtherInformation.Family[0],
              Mother: this.OtherInformation.Family[1],
              Spouse: this.OtherInformation.Family[2],
              Daughter: this.OtherInformation.Family[3]
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
