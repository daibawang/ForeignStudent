<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写工作经历: Please complete Working Experience:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="WorkForm" ref="WorkForm" label-width="100px" class="demo-dynamic">

      <div class="WorkForm_border" v-for='(item, index) in WorkForm.domains' :key="item.key">
        <el-form-item label="工作时间/Working Years Attended" >
          <el-col :span="11">
            <el-form-item :prop="'domains.'+index+'.btime'"
            :rules="{
              required: false, message: 'This field is required', trigger: 'blur'
            }">
                <el-date-picker value-format="yyyyMM" type="month" placeholder="from" v-model="item.btime" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-left:5px;">
            <el-form-item :prop="'domains.'+index+'.ltime'"
            :rules="{
              required: false, message: 'This field is required', trigger: 'blur'
            }">
              <el-date-picker value-format="yyyyMM" type="month" placeholder="to" v-model="item.ltime" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="单位/Previous and Current Education & Employer"
        :prop="'domains.'+index+'.unit'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.unit" clearable style="width:330px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="职位/Position/Duty" :prop="'domains.'+index+'.obj'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.obj" clearable style="width:160px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-button style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)" :disabled="isReadonly"></el-button>
      </div>
        <el-form-item>
          <el-button type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button @click="resetForm('WorkForm')">重置</el-button>
          <div class="EducationForm_submit">
            <el-button type="primary" @click="submitForm('WorkForm')">保存 Save</el-button>
            <el-button type="primary" @click="PersonalFormNavicat('WorkForm')">保存并继续 Save &Continue Save</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_3_Working',
  props: ['actived'],
  data () {
    return {
      username: '',
      isSave: false,
      geturl: '',
      WorkForm: {
        domains: [{
          unit: '',
          btime: '',
          ltime: '',
          obj: '',
          key: 0
        }]
      }
    }
  },
  created: function () {
    console.log('我接受了来自父组件的' + this.actived)
    this.$emit('thispath', 3)
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    let isShow = getCookie('InputInfo')
    if (isShow < 3) {
      // console.log('cokkkie<3')
      // this.$router.push('/asidetab/Information_2_Education')
    }
    this.username = uname,
    console.log(this.username)
    this.$axios({
      method: 'get',
      url: '/apis/GetWorkByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      // 判断有没有值
      if (response.data == '') {
        console.log('zzzzzzzz')
      } else {
        this.isSave = true
        this.WorkForm.domains = response.data
        for (let i = 0; i < this.WorkForm.domains.length; i++) {
          this.WorkForm.domains[i].btime = this.WorkForm.domains[i].btime
          this.WorkForm.domains[i].ltime = this.WorkForm.domains[i].ltime
          this.WorkForm.domains[i].unit = this.WorkForm.domains[i].unit
          this.WorkForm.domains[i].obj = this.WorkForm.domains[i].obj
        }
      }
      console.log(this.WorkForm.domains)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    PersonalFormNavicat (formName) {
      if (this.isClickSave == true) {
        this.$router.push('/asidetab/Information_4_Language')
      } else {
        this.submitForm(formName)
        this.$router.push('/asidetab/Information_4_Language')
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = '/apis/AddWorkServlet'
          } else {
            this.geturl = '/apis/ChangeWorkServlet'
          }
          var domainsworkJson = encodeURI(JSON.stringify(this.WorkForm.domains))
          console.log(this.WorkForm.domains[0].btime)
          this.$axios({
            method: 'get',
            url: '/apis/AddWorkServlet',
            params: {
              username: this.username,
              domains: domainsworkJson
            }
          }).then((response) => {
            this.isSave = true
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
    },
    addDomain () {
      var index = this.WorkForm.domains.length
      if (index < 5) {
        this.WorkForm.domains.push({
          value: '',
          key: Date.now()
        })
      }
    },
    deleteRules (item, index) {
      this.index = this.WorkForm.domains.indexOf(item)
      if (index !== 0) {
        this.WorkForm.domains.splice(index, 1)
      }
    }
  }
}
</script>
<style>
.Info_1_border{

}
</style>
<style lang="stylus" scoped>
</style>
