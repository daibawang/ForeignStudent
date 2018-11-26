<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写曾发表的主要学术论文、著作及作品: Please complete Academic Papers, Writing & Art Works Published:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="Achievements" ref="Achievements" label-width="100px" class="demo-dynamic">

      <div class="Achievements_border" v-for='(item, index) in Achievements.domains' :key="item.key">
        <el-form-item label="论文题目/Topic"
        :prop="'domains.'+index+'.papers'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.papers" clearable style="width:320px;" class="el-in-left"></el-input>
        </el-form-item>

        <el-form-item label="发表时间/Published Date" >
            <el-form-item :prop="'domains.'+index+'.time'">
                <el-date-picker value-format="yyyyMM"  type="month" placeholder="from" v-model="item.time" style="width: 275px;"></el-date-picker>
            </el-form-item>
        </el-form-item>
        <el-button style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)" :disabled="isReadonly"></el-button>
      </div>
        <el-form-item>
          <el-button type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button @click="resetForm('Achievements')">重置</el-button>
          <div class="Achievements_submit">
            <el-button type="primary" @click="submitForm('Achievements')">保存 Save</el-button>
            <el-button type="primary" @click="PersonalFormNavicat('Achievements')">保存并继续 Save &Continue Save</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_6_Achievements',
  data () {
    return {
      username: '',
      isSave: false,
      geturl: '',
      Achievements: {
        domains: [{
          key: 0,
          papers: '',
          time: ''
        }]
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
      url: '/apis/GetXsByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      // 判断有没有值
      if (response.data == '') {
        console.log('zzzzzzzz')
      } else {
        this.isSave = true
        this.Achievements.domains = response.data
        for (let i = 0; i < this.Achievements.domains.length; i++) {
          this.Achievements.domains[i].papers = this.Achievements.domains[i].papers
          this.Achievements.domains[i].time = this.Achievements.domains[i].time
        }
      }
      console.log(this.Achievements.domains)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    PersonalFormNavicat (formName) {
      if (this.isClickSave == true) {
        this.$router.push('/asidetab/Information_7_OtherInformation')
      } else {
        this.submitForm(formName)
        this.$router.push('/asidetab/Information_7_OtherInformation')
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = '/apis/AddXsServlet'
          } else {
            this.geturl = '/apis/ChangeXsServlet'
          }
          var domainsJson = encodeURI(JSON.stringify(this.Achievements.domains))
          this.$axios({
            method: 'get',
            url: this.geturl,
            params: {
              username: this.username,
              domains: domainsJson
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
      // var index = this.Achievements.domains.length
      // if (index < 3) {
      this.Achievements.domains.push({
        value: '',
        key: Date.now()
      })
      // }
    },
    deleteRules (item, index) {
      this.index = this.Achievements.domains.indexOf(item)
      if (index !== 0) {
        this.Achievements.domains.splice(index, 1)
      }
    }
  }
}
</script>
<style>
</style>
<style lang="stylus" scoped>
.Achievements_submit{
  margin:50px 0px 50px 300px;
}
</style>
