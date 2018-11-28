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
            <el-button type="primary" @click="submitForm('Achievements')">保存并继续 Save &Continue Save</el-button>
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
      NeedInput: ['请先填写个人信息 Please complete  Personal Information', '请先填写个人信息 Please complete  Personal Information',
        '请先填写学习经历 Please complete  Education History',
        '请先填写工作经历 Please complete  Working Experience ',
        '请先填写语言能力 Please complete  Language Proficiency ',
        '请先填写来华学习计划 Please complete Proposed Study in BCU',
        '请先填写学习成就 Please complete Achievements',
        '请先填写其他信息 Please complete  Other Information',
        '请先上传申请材料 Please Upload Application Documents',
        '请先填写保证 Please complete Announcement '],
      NeedUrl: ['Information_1_Personal', 'Information_1_Personal', 'Information_2_Education', 'Information_3_Working', 'Information_4_Language', 'Information_5_Plan', 'Information_6_Achievements', 'Information_7_OtherInformation', 'Information_8_Upload', 'Information_9_Announcement', 'Information_10_Submission'],
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
    this.username = uname
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
        let isShow = getCookie('InputInfo')
        if (isShow < 5) {
          this.$alert(this.NeedInput[isShow], {
            confirmButtonText: 'sure'
          })
          this.$router.push('/asidetab/' + this.NeedUrl[isShow])
        }
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
            if (this.isSave == false) {
              setCookie('InputInfo', 6, 1000 * 60)
            }
            this.$router.push('/asidetab/Information_7_OtherInformation')
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
