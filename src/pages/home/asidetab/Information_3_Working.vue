<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写工作经历: Please complete Working Experience:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="EducationForm" ref="EducationForm" label-width="100px" class="demo-dynamic">

      <div class="EducationForm_border" v-for='(item, index) in EducationForm.domains' :key="item.key">
        <el-form-item label="工作时间/Working Years Attended" >
          <el-col :span="11">
            <el-form-item :prop="'domains.'+index+'.fromdate'"
            :rules="{
              required: false, message: 'This field is required', trigger: 'blur'
            }">
                <el-date-picker  type="month" placeholder="from" v-model="item.fromdate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-left:5px;">
            <el-form-item :prop="'domains.'+index+'.todate'"
            :rules="{
              required: false, message: 'This field is required', trigger: 'blur'
            }">
              <el-date-picker type="month" placeholder="to" v-model="item.todate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="单位/Previous and Current Education & Employer"
        :prop="'domains.'+index+'.Previous'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.Previous" clearable style="width:330px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="职位/Position/Duty" :prop="'domains.'+index+'.Fields'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.Fields" clearable style="width:160px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-button style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)" :disabled="isReadonly"></el-button>
      </div>
        <el-form-item>
          <el-button type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button @click="resetForm('EducationForm')">重置</el-button>
          <div class="EducationForm_submit">
            <el-button type="primary" @click="submitForm('EducationForm')">保存 Save</el-button>
            <el-button type="primary" @click="submitForm('EducationForm')">保存并继续 Save &Continue Save</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_3_Working',
  data () {
    return {
      EducationForm: {
        domains: [{
          key: 0,
          fromdate: '',
          todate: '',
          Previous: '',
          Fields: ''
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!' + this.EducationForm.domains[1].Previous)
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
      if (index < 3) {
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
<style>
.Info_1_border{

}
</style>
<style lang="stylus" scoped>
</style>
