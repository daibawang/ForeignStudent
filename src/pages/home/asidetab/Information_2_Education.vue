<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写学习经历(从高中开始): Please complete Education History，starting from high school:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="EducationForm" ref="EducationForm" label-width="100px" class="demo-dynamic">

      <div class="EducationForm_border" v-for='(item, index) in EducationForm.domains' :key="item.key">
        <el-form-item label="学习时间/Education Years Attended" required>
          <el-col :span="11">
            <el-form-item :prop="'domains.'+index+'.fromdate'"
            :rules="{
              required: true, message: 'This field is required', trigger: 'blur'
            }">
                <el-date-picker type="month" placeholder="from" v-model="item.fromdate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-left:5px;">
            <el-form-item :prop="'domains.'+index+'.todate'"
            :rules="{
              required: true, message: 'This field is required', trigger: 'blur'
            }">
              <el-date-picker type="month" placeholder="to" v-model="item.todate" style="width: 115px;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="单位/Previous and Current Education & Employer"
        :prop="'domains.'+index+'.Previous'" class="el_left"
        :rules="{
          required: true, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.Previous" clearable style="width:330px;" class="el-in-left"></el-input>
        </el-form-item>
        <el-form-item label="主修专业/Fields of Study" :prop="'domains.'+index+'.Fields'" class="el_left"
        :rules="{
          required: true, message: 'This field is required', trigger: 'blur'
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
  name: 'Information_2_Education',
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
<style lang="stylus">
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
    .EducationForm_submit{
      margin-left:400px;
    }
    .EducationForm_border{
      margin-bottom:30px;
    }
  }
}
</style>
