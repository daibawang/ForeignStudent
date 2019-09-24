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
                <el-date-picker :picker-options="pickerOptions0" :disabled="eqit" value-format="yyyyMM" type="month" placeholder="from" v-model="item.btime" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-left:5px;">
            <el-form-item :prop="'domains.'+index+'.ltime'"
            :rules="{
              required: false, message: 'This field is required', trigger: 'blur'
            }">
              <el-date-picker :picker-options="pickerOptions0" :disabled="eqit" value-format="yyyyMM" type="month" placeholder="to" v-model="item.ltime" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="单位/Previous and Current Education & Employer"
        :prop="'domains.'+index+'.unit'" class=""
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input :disabled="eqit" v-model="item.unit" clearable style="width:320px;" class=""></el-input>
        </el-form-item>
       <el-form-item label="职位/Position/Duty" :prop="'domains.'+index+'.obj'" style="margin-left:5px"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input :disabled="eqit" v-model="item.obj" clearable style="width:160px;" class=""></el-input>
        </el-form-item>
        <el-button :disabled="eqit" style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)" ></el-button>
      </div>
        <el-form-item>
          <el-button :disabled="eqit" type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button :disabled="eqit" @click="resetForm('WorkForm')">重置</el-button>
          <div class="EducationForm_submit">
            <el-button :disabled="eqit" type="primary" @click="submitForm('WorkForm')">保存并继续 Save &Continue Save</el-button>
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
    // console.log('我接受了来自父组件的' + this.actived)
    // this.$emit('thispath', 3)
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    this.$axios({
      method: 'get',
      url: this.$URL + '/GetWorkByNameServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      // 判断有没有值
      if (response.data == '') {
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
            if (isShow < 2) {
              this.$alert(this.NeedInput[isShow], {
                confirmButtonText: 'sure'
              })
              this.$router.push('/asidetab/' + this.NeedUrl[isShow])
            }
            setCookie('InputInfo', isShow, 1000 * 60)
          })
        } else {
          if (isShow < 2) {
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
        // setCookie('InputInfo', 3, 1000 * 60)
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isSave == false) {
            this.geturl = this.$URL + '/AddWorkServlet'
          } else {
            this.geturl = this.$URL + '/ChangeWorkServlet'
          }
          var domainsworkJson = encodeURI(JSON.stringify(this.WorkForm.domains))
          console.log(this.WorkForm.domains[0].btime)
          this.$axios({
            method: 'get',
            url: this.geturl,
            params: {
              username: this.username,
              domains: domainsworkJson,
              typ: 3
            }
          }).then((response) => {
            if (this.isSave == false) {
              setCookie('InputInfo', 3, 1000 * 60)
            }
            this.$router.push('/asidetab/Information_4_Language')
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
