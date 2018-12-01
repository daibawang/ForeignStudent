<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请用中文或英文填写个人信息 : Please complete Personal Information in Chinese or English </p>
    <div class="Info_1_form">
      <el-form :model="PersonalForm" :rules="rules" ref="PersonalForm" label-width="170px" class="demo-PersonalForm" label-position="left">
        <!-- 姓名 -->
        <p>护照用名/Passport Name:</p>
        <el-form-item label="姓/Family Name" prop="family_name" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.family_name" clearable class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="名/Given Name" prop="given_name" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.given_name" clearable  class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 国家 -->
        <el-form-item label="国籍/Nationality" prop="nationality" >
          <el-autocomplete :disabled="eqit" :fetch-suggestions="countrySearch" v-model="PersonalForm.nationality" placeholder="请选择或填写国籍/Please Choose or Input your Nationality" clearable class="el-in-nomal">
          </el-autocomplete>
        </el-form-item>
        <!-- 护照号码-->
        <el-form-item label="护照号码/Passport No" prop="passport_no" >
          <el-input :disabled="eqit" v-model="PersonalForm.passport_no" clearable class="el-in-nomal"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 出生日期 -->
        <el-form-item label="出生日期/Date of Birth" prop="date_birth">
          <el-date-picker :picker-options="pickerOptions0" :disabled="eqit" value-format="yyyyMMdd" type="date" placeholder="选择日期 Select Date" v-model="PersonalForm.date_birth" class="el-in-nomal"></el-date-picker>
        </el-form-item>
        <!-- 出生地点 -->
        <p>出生地点/Place of Birth</p>
        <el-form-item label="国家/Country" prop="Country" class="el_left">
          <el-autocomplete :disabled="eqit" :fetch-suggestions="countrySearch" v-model="PersonalForm.Country" placeholder="请选择或填写国家/Please Choose or Input your Country" clearable class="el-in-left">
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="城市/City" prop="City" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.City" clearable class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <!-- 性别 -->
        <el-form-item label="性别/Gender " prop="sex">
          <el-radio-group :disabled="eqit" v-model="PersonalForm.sex">
            <el-radio label="0" value='0'>男/Male</el-radio>
            <el-radio label="1" value='1'>女/Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 婚姻状况Marital Status -->
        <el-form-item label="婚姻状况/Marital Status" prop="marri">
          <el-radio-group :disabled="eqit" v-model="PersonalForm.marri">
            <el-radio label="0" value="0">已婚/Married</el-radio>
            <el-radio label="1" value="1">未婚/Single</el-radio>
            <el-radio label="2" value="2">其它/Other</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="宗教信仰/Religion" prop="religion">
            <el-autocomplete :disabled="eqit" :fetch-suggestions="querySearch" v-model="PersonalForm.religion" placeholder="请选择或填写宗教信仰/Please Choose or Input your religion" class="el-in-nomal">
          </el-autocomplete>
        </el-form-item>
        <p class="score-split"></p>
        <p>录取通知书邮寄地址/Address for correspondence (Please inform  BCU for any change of this address)</p>
        <el-form-item label="地址/Address" prop="address_c" class="el_left" >
          <el-input :disabled="eqit" v-model="PersonalForm.address_c" clearable class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="ctel" class="el_left">
          <el-input :disabled="eqit" v-model.number="PersonalForm.ctel" clearable  class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="传真/Fax" prop="cfax" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.cfax" clearable class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="cmail" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.cmail" clearable class="el-in-left"></el-input>
        </el-form-item>
        <p class="score-split"></p>
        <p>家庭地址/Home Address</p>
        <el-form-item label="地址/Home Address" prop="address_h" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.address_h" clearable class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="电话/Tel" prop="htel" class="el_left">
          <el-input :disabled="eqit" v-model.number="PersonalForm.htel" clearable class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="传真/Fax" prop="hfax" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.hfax" clearable  class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="hmail" class="el_left">
          <el-input :disabled="eqit" v-model="PersonalForm.hmail" clearable class="el-in-left"></el-input>
        </el-form-item>
        <div class="bottom_button">
          <el-button :disabled="eqit" @click="resetForm('PersonalForm')">重置 Reset</el-button>
          <el-button :disabled="eqit" type="primary" @click="submitForm('PersonalForm')" style="margin-left:50px;">保存并继续 Save &Continue</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_1_Personal',
  data () {
    return {
      username: '',
      isSave: false,
      geturl: '',
      isClickSave: false,
      eqit: false,
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      PersonalForm: {
        pic: '',
        passport_name: '',
        family_name: '', // 姓
        given_name: '', // 名
        nationality: '', // 国籍
        date_birth: '',
        passport_no: '',
        Country: '',
        City: '',
        sex: '',
        marri: '',
        religion: '',
        address_c: '',
        ctel: '',
        cfax: '',
        cmail: '',
        address_h: '',
        htel: '',
        hfax: '',
        hmail: '',
        religions: [],
        countries: []
      },
      rules: {
        family_name: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        given_name: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        nationality: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        passport_no: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        Country: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        City: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别 Please Choose your Gender', trigger: 'change' }
        ],
        Marital: [
          { required: true, message: '请选择婚姻状况 Please Choose your Marital Status', trigger: 'change' }
        ],
        religion: [
          { required: true, message: '请选择宗教信仰 Please Choose your religion', trigger: 'change' }
        ],
        Birthdate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        address_c: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        ctel: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ],
        cfax: [
          { required: false, message: '', trigger: 'blur' }
        ],
        address_h: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' }
        ],
        cmail: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        htel: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'number', message: 'Must fill number'}
        ],
        hfax: [
          { required: false, message: '', trigger: 'blur' }
        ],
        hmail: [
          { required: true, message: '必填项 This field is required.', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  created: function () {
    console.log(this.$URL + '这是domain')
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname,
    this.$axios({
      method: 'get',
      url: this.$URL + '/GetPinfByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      if (response.data[0].username == '') {
      } else {
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
        this.isSave = true
        this.PersonalForm.pic = response.data[0].pic
        this.PersonalForm.passport_name = response.data[0].passportName
        this.PersonalForm.family_name = response.data[0].familyName
        this.PersonalForm.given_name = response.data[0].givenName
        this.PersonalForm.nationality = response.data[0].nationality
        this.PersonalForm.date_birth = response.data[0].dateBirth
        this.PersonalForm.passport_no = response.data[0].passportNo
        let place = response.data[0].placeBirth.split('/')
        this.PersonalForm.Country = place[0]
        this.PersonalForm.City = place[1]
        this.PersonalForm.sex = response.data[0].sex
        this.PersonalForm.marri = response.data[0].marri
        this.PersonalForm.religion = response.data[0].religion
        this.PersonalForm.address_c = response.data[0].addressC
        this.PersonalForm.ctel = parseInt(response.data[0].ctel)
        this.PersonalForm.cfax = response.data[0].cfax
        this.PersonalForm.cmail = response.data[0].cmail
        this.PersonalForm.address_h = response.data[0].addressH
        this.PersonalForm.htel = parseInt(response.data[0].htel)
        this.PersonalForm.hfax = response.data[0].hfax
        this.PersonalForm.hmail = response.data[0].hmail
      }
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // 默认选中方法
    querySearch (queryString, cb) {
      var religions = this.religions
      var results = queryString ? religions.filter(this.createFilter(queryString)) : religions
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    countrySearch (queryString, cb) {
      var countries = this.countries
      var results = queryString ? countries.filter(this.createFilter(queryString)) : countries
      cb(results)
    },
    createFilter (queryString) {
      return (listdata) => {
        return (listdata.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        {'value': '圣公会 Anglican'}, {'value': '无神论 Atheism'},
        {'value': '佛教 Buddhism'}, {'value': '天主教 Catholicism'}, {'value': '儒教 Confucianist'}, {'value': '基督教 Christianity'},
        {'value': '东正教 Eastern Orhodoxy'}, {'value': '印度教 Hinduism'}, {'value': '伊斯兰教 Islam'}, {'value': '犹太教 Judaism'},
        {'value': '摩门教 Mormon'}, {'value': '新教 Protestantism' }, {'value': '神道 Shintoism'}, {'value': '锡克教 Sikh'},
        {'value': '道教 Taoism'}, {'value': '无信仰 None'}]
    },
    loadCountries () {
      return [
        {'value': '蒙古 Mongolia'}, {'value': '新加坡 Singapore'},
        {'value': '马来西亚 Malaysia'}, {'value': '印度尼西亚 Indonesia'},
        {'value': '缅甸 Myanmar'}, {'value': '泰国 Thailand'},
        {'value': '老挝 Laos'}, {'value': '柬埔寨 Cambodia'},
        {'value': '越南 Vietnam'}, {'value': '文莱 Brunei'},
        {'value': '菲律宾 Philippines'}, {'value': '伊朗 Iran' },
        {'value': '伊拉克 Iraq'}, {'value': '土耳其 Turkey'},
        {'value': '叙利亚 Syria'}, {'value': '约旦 Jordan'},
        {'value': '黎巴嫩 Lebanon'}, {'value': '以色列 Israel'},
        {'value': '巴勒斯坦 Palestine'}, {'value': '沙特阿拉伯 Saudi Arabia'},
        {'value': '也门 Yemen'}, {'value': '阿曼 Oman'},
        {'value': '阿联酋 United Arab Emirates'}, {'value': '卡塔尔 Qatar'},
        {'value': '科威特 Kuwait'}, {'value': '巴林 Bahrain'},
        {'value': '希腊 Greece'}, {'value': '塞浦路斯 Cyprus' },
        {'value': '埃及的西奈半岛 Sinai Peninsula of Egypt'}, {'value': '印度 India'},
        {'value': '巴基斯坦 Pakistan'}, {'value': '孟加拉 Bangladesh'},
        {'value': '阿富汗 Afghanistan'}, {'value': '斯里兰卡 Sri Lanka'},
        {'value': '马尔代夫 Maldives'}, {'value': '尼泊尔 Nepal'},
        {'value': '不丹 Bhutan'}, {'value': '哈萨克斯坦 Kazakhstan'},
        {'value': '乌兹别克斯坦 Uzbekistan'}, {'value': '土库曼斯坦 Turkmenistan'},
        {'value': '塔吉克斯坦 Tajikistan'}, {'value': '吉尔吉斯斯坦 Kyrgyzstan'},
        {'value': '俄罗斯 Russia'}, {'value': '乌克兰 Ukraine' },
        {'value': '白俄罗斯 Belarus'}, {'value': '格鲁吉亚 Georgia'},
        {'value': '阿塞拜疆 Azerbaijan'}, {'value': '亚美尼亚 Armenia'},
        {'value': '摩尔多瓦 Moldova'}, {'value': '波兰 Poland'},
        {'value': '立陶宛 Lithuania'}, {'value': '爱沙尼亚 Estonia'},
        {'value': '拉脱维亚 Latvia'}, {'value': '捷克 Czech Republic'},
        {'value': '斯洛伐克 Slovakia'}, {'value': '匈牙利 Hungary'},
        {'value': '斯洛文尼亚 Slovenia'}, {'value': '克罗地亚 Croatia'},
        {'value': '波黑 Bosnia and Herzegovina'}, {'value': '黑山 Montenegro' },
        {'value': '塞尔维亚 Serbia'}, {'value': '阿尔巴尼亚 Albania'},
        {'value': '罗马尼亚 Romania'}, {'value': '保加利亚 Bulgaria'},
        {'value': '马其顿 Macedonia' }
      ]
    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = this.$URL + '/AddPinfServlet'
          } else {
            this.geturl = this.$URL + '/ChangePinfServlet'
          }
          // let PersonalJson = JSON.stringify(this.PersonalForm)
          // alert('submit!' + PersonalJson)
          this.$axios({
            method: 'get',
            url: this.geturl,
            params: {
              username: this.username,
              pic: this.PersonalForm.pic,
              passport_name: this.PersonalForm.passport_name,
              family_name: this.PersonalForm.family_name,
              given_name: this.PersonalForm.given_name,
              nationality: this.PersonalForm.nationality,
              date_birth: this.PersonalForm.date_birth,
              passport_no: this.PersonalForm.passport_no, // 空
              place_birth: this.PersonalForm.Country + '/' + this.PersonalForm.City,
              sex: this.PersonalForm.sex,
              marri: this.PersonalForm.marri,
              religion: this.PersonalForm.religion,
              address_c: this.PersonalForm.address_c,
              ctel: this.PersonalForm.ctel,
              cfax: this.PersonalForm.cfax,
              cmail: this.PersonalForm.cmail,
              address_h: this.PersonalForm.address_h,
              htel: this.PersonalForm.htel,
              hfax: this.PersonalForm.hfax,
              hmail: this.PersonalForm.hmail,
              typ: 1
            }
          }).then((response) => {
            if (this.isSave == false) {
              setCookie('InputInfo', 1, 1000 * 60)
            }
            this.$router.push('/asidetab/Information_2_Education')
            console.log(response)
            console.log(response.PersonalForm)
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
  },
  mounted () {
    this.religions = this.loadAll()
    this.countries = this.loadCountries()
  }
}
</script>
<style>
.Info_1_border{

}
</style>
<style lang="stylus">
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
    .score-split{
      width:680px;
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
        width:75%;
        margin-left:-20px;
      }
    }
    .el-in-nomal{
      width:73%;
    }
    .bottom_button{
      margin-bottom:40px;
      margin-top:60px;
      display:flex;
      justify-content:center;
    }
  }
}
</style>
