<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请用中文或英文填写个人信息 : Please complete Personal Information in Chinese or English </p>
    <div class="Info_1_form">
      <el-form :model="PersonalForm" :rules="rules" ref="PersonalForm" label-width="170px" class="demo-PersonalForm" label-position="left">
        <!-- 姓名 -->
        <p>护照用名/Passport Name:</p>
        <el-form-item label="姓/Family Name" prop="Familyname" class="el_left">
          <el-input v-model="PersonalForm.Familyname" clearable style="width:400px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="名/Given Name" prop="Givenname" class="el_left">
          <el-input v-model="PersonalForm.Givenname" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 国家 -->
        <el-form-item label="国籍/Nationality" prop="Nationality" >
          <el-input v-model="PersonalForm.Nationality" clearable style="width:400px"></el-input>
        </el-form-item>
        <!-- 护照号码-->
        <el-form-item label="护照号码/Passport No" prop="Passport" >
          <el-input v-model="PersonalForm.Passport" clearable style="width:400px"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 出生日期 -->
        <el-form-item label="出生日期/Date of Birth" prop="Birthdate">
          <el-date-picker value-format="yyyyMMdd" type="date" placeholder="选择日期 Select Date" v-model="PersonalForm.Birthdate" style="width: 400px"></el-date-picker>
        </el-form-item>
        <!-- 出生地点 -->
        <p>出生地点/Place of Birth</p>
        <el-form-item label="国家/Country" prop="Country" class="el_left">
          <el-input v-model="PersonalForm.Country" clearable style="width:400px"class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="城市/City" prop="City" class="el_left">
          <el-input v-model="PersonalForm.City" clearable style="width:400px"class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 性别 -->
        <el-form-item label="性别/Gender " prop="Sex">
          <el-radio-group v-model="PersonalForm.Sex">
            <el-radio label="男/Male"></el-radio>
            <el-radio label="女/Female"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 婚姻状况Marital Status -->
        <el-form-item label="婚姻状况/Marital Status" prop="Marital">
          <el-radio-group v-model="PersonalForm.Marital">
            <el-radio label="已婚/Married"></el-radio>
            <el-radio label="未婚/Single"></el-radio>
            <el-radio label="其它/Other"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="宗教信仰/Religion" prop="Religion">
          <el-select v-model="PersonalForm.Religion" placeholder="请选择宗教信仰/Please Choose your religion" style="width:400px">
            <el-option label="圣公会 Anglican" value="Anglican"></el-option>
            <el-option label="无神论 Atheism" value="Atheism"></el-option>
            <el-option label="佛教 Buddhism" value="Buddhism"></el-option>
            <el-option label="天主教 Catholicism" value="Catholicism"></el-option>
            <el-option label="儒教 Confucianist" value="Confucianist"></el-option>
            <el-option label="基督教 Christianity" value="Christianity"></el-option>
            <el-option label="东正教 Eastern Orhodoxy " value="Eastern Orhodoxy"></el-option>
            <el-option label="印度教 Hinduism" value="Hinduism"></el-option>
            <el-option label="伊斯兰教 Islam" value="Islam"></el-option>
            <el-option label="犹太教 Judaism " value="Judaism"></el-option>
            <el-option label="摩门教 Mormon" value="Mormon"></el-option>
            <el-option label="新教 Protestantism" value="Protestantism"></el-option>
            <el-option label="神道 Shintoism" value="Protestantism"></el-option>
            <el-option label="锡克教 Sikh" value="Sikh"></el-option>
            <el-option label="道教 Taoism" value="Taoism"></el-option>
            <el-option label="无信仰 None" value="None"></el-option>
            <el-option label="其他 Others" value="Others"></el-option>
          </el-select>
        </el-form-item>
        <p class="score-split"></p>
        <p>录取通知书邮寄地址/Address for correspondence (Please inform  BCU for any change of this address)</p>
        <el-form-item label="地址/Address" prop="Address" class="el_left" >
          <el-input v-model="PersonalForm.Address" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="Tel" class="el_left">
          <el-input v-model.number="PersonalForm.Tel" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="传真/Fax" prop="Fax" class="el_left">
          <el-input v-model="PersonalForm.Fax" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="mail" class="el_left">
          <el-input v-model="PersonalForm.mail" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <p>家庭地址/Home Address</p>
        <el-form-item label="地址/Home Address" prop="Home" class="el_left">
          <el-input v-model="PersonalForm.Home" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="HTel" class="el_left">
          <el-input v-model.number="PersonalForm.HTel" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="传真/Fax" prop="HFax" class="el_left">
          <el-input v-model="PersonalForm.HFax" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="Hmail" class="el_left">
          <el-input v-model="PersonalForm.Hmail" clearable style="width:400px" class="el-in-left"></el-input>
        </el-form-item>
        <div class="bottom_button">
          <el-button @click="resetForm('PersonalForm')">重置 Reset</el-button>
          <el-button type="primary" @click="submitForm('PersonalForm')" style="margin-left:50px;">保存 Save</el-button>
          <el-button type="primary" @click="submitForm('PersonalForm')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_1_Personal',
  data () {
    return {
      PersonalForm: {
        Familyname: '', // 姓
        Givenname: '', // 名
        Nationality: '', // 国籍
        Passport: '',
        Country: '',
        City: '',
        Sex: '',
        Religion: '',
        Address: '',
        Tel: '',
        Fax: '',
        mail: '',
        Home: '',
        HTel: '',
        HFax: '',
        Hmail: ''
      },
      rules: {
        Familyname: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Givenname: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Nationality: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Passport: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Country: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        City: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Sex: [
          { required: true, message: '请选择性别 Please Choose your Gender', trigger: 'change' }
        ],
        Marital: [
          { required: true, message: '请选择婚姻状况 Please Choose your Marital Status', trigger: 'change' }
        ],
        Religion: [
          { required: true, message: '请选择宗教信仰 Please Choose your religion', trigger: 'change' }
        ],
        Birthdate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
        ],
        Home: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        HTel: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ],
        HFax: [
          { required: false, message: '', trigger: 'blur' }
        ],
        Hmail: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
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
