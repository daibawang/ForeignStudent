<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写学习经历(从高中开始): Please complete Education History，starting from high school:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="EducationForm" ref="EducationForm" label-width="100px" class="demo-dynamic">

      <div class="EducationForm_border" v-for='(item, index) in EducationForm.domains' :key="item.key">
        <el-form-item label="学习时间/Education Years Attended" required style="margin-right:0px">
          <el-col :span="11">
            <el-form-item :prop="'domains.'+index+'.fromdate'"
            :rules="{
              required: true, message: 'This field is required', trigger: 'change'
            }">
                <el-date-picker :picker-options="pickerOptions0" :disabled="eqit" value-format="yyyyMM" type="month" placeholder="from" v-model="item.fromdate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-left:5px;">
            <el-form-item :prop="'domains.'+index+'.todate'"
            :rules="{
              required: true, message: 'This field is required', trigger: 'change'
            }">
              <el-date-picker :picker-options="pickerOptions0" :disabled="eqit" value-format="yyyyMM" type="month" placeholder="to" v-model="item.todate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="单位/Previous and Current Education & Employer"
        :prop="'domains.'+index+'.Previous'" class=""
        :rules="{
          required: true, message: 'This field is required', trigger: 'blur'
        }">
          <el-input :disabled="eqit" v-model="item.Previous" clearable style="width:325px;" class="el-in-left-more"></el-input>
        </el-form-item>
        <el-form-item label="主修专业/Fields of Study" :prop="'domains.'+index+'.Fields'" style="margin-left:8px"
        :rules="{
          required: true, message: 'This field is required', trigger: 'blur'
        }">
          <el-input :disabled="eqit" v-model="item.Fields" clearable style="width:160px;" class="el-in-left-more"></el-input>
        </el-form-item>
        <el-button :disabled="eqit" style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)"></el-button>
      </div>
        <el-form-item>
          <el-button :disabled="eqit" type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button :disabled="eqit" @click="resetForm('EducationForm')">重置</el-button>
          <div class="EducationForm_submit">
            <el-button :disabled="eqit" type="primary" @click="submitForm('EducationForm')">保存并继续 Save &Continue Save</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_2_Education',
  data () {
    return {
      username: '',
      isSave: false,
      geturl: '',
      eqit: false,
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl,
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      EducationForm: {
        domains: [{
          key: 0,
          fromdate: '',
          todate: '',
          Previous: '',
          Fields: '',
          befortime: ''
        }]
      }
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    console.log(this.username)
    this.$axios({
      method: 'get',
      url: this.$URL + '/GetStudyByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      // 判断有没有值
      if (response.data == '') {
        console.log('没取到值')
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
            if (isShow < 1) {
              this.$alert(this.NeedInput[isShow], {
                confirmButtonText: 'sure'
              })
              this.$router.push('/asidetab/' + this.NeedUrl[isShow])
            }
            setCookie('InputInfo', isShow, 1000 * 60)
          })
        } else {
          if (isShow < 1) {
            this.$alert(this.NeedInput[isShow], {
              confirmButtonText: 'sure'
            })
            this.$router.push('/asidetab/' + this.NeedUrl[isShow])
          }
        }
      } else {
        // 是否禁用
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
            if (isShow >= 15 || isShow == 12) {
              this.eqit = true
            }
          })
        } else {
          if (isShow >= 15 || isShow == 12) {
            this.eqit = true
          }
        }
        this.isSave = true
        // setCookie('InputInfo', 2, 1000 * 60)
        this.EducationForm.domains = response.data
        console.log(this.EducationForm.domains.length + '长度')
        for (let i = 0; i < this.EducationForm.domains.length; i++) {
          this.EducationForm.domains[i].fromdate = this.EducationForm.domains[i].btime
          this.EducationForm.domains[i].todate = this.EducationForm.domains[i].ltime
          this.EducationForm.domains[i].Previous = this.EducationForm.domains[i].unit
          this.EducationForm.domains[i].Fields = this.EducationForm.domains[i].obj
        }
      }
      console.log(this.EducationForm.domains)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    submitForm (formName) {
      this.isClickSave = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = this.$URL + '/AddStudyServlet'
          } else {
            this.geturl = this.$URL + '/ChangeStudyServlet'
          }
          console.log('上船前的domains' + this.EducationForm.domains)
          var domainsJson = encodeURI(JSON.stringify(this.EducationForm.domains))
          console.log(domainsJson)
          this.$axios({
            method: 'get',
            url: this.geturl,
            params: {
              username: this.username,
              domains: domainsJson,
              typ: 2
            }
          }).then((response) => {
            if (this.isSave == false) {
              setCookie('InputInfo', 2, 1000 * 60)
            }
            this.$router.push('/asidetab/Information_3_Working')
            console.log(response)
            console.log(response.data)
          }).catch((error) => {
            console.log(error)
          })
          // alert('submit!' + this.EducationForm.domains[1].Previous)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    addDomain () {
      var index = this.EducationForm.domains.length
      if (index < 5) {
        this.EducationForm.domains.push({
          value: '',
          key: Date.now()
        })
      }
    },
    deleteRules (item, index) {
      this.index = this.EducationForm.domains.indexOf(item)
      if (index !== 0) {
        this.EducationForm.domains.splice(index, 1)
      }
    }
  }
}
</script>
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
    .EducationForm_submit{
      margin-top:30px;
      margin-left:480px;
    }
    .EducationForm_border{
      margin-bottom:30px;
    }
    .el-in-left-more{
      margin-left:0px;
    }
  }
}
</style>
