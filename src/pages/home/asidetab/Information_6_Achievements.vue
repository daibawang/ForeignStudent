<template>
  <div class="Info_1_border">
    <p style="letter-spacing:1px;">请填写曾发表的主要学术论文、著作及作品: Please complete Academic Papers, Writing & Art Works Published:</p>
    <div class="Info_1_form">
      <el-form label-position="top" :inline="true" :model="Achievements" ref="Achievements" label-width="100px" class="demo-dynamic">

      <div class="Achievements_border" v-for='(item, index) in Achievements.domains' :key="item.key">
        <el-form-item label="论文题目/Topic"
        :prop="'domains.'+index+'.Topic'" class="el_left"
        :rules="{
          required: false, message: 'This field is required', trigger: 'blur'
        }">
          <el-input v-model="item.Topic" clearable style="width:320px;" class="el-in-left"></el-input>
        </el-form-item>

        <el-form-item label="发表时间/Published Date" >
            <el-form-item :prop="'domains.'+index+'.PublishedDate'">
                <el-date-picker  type="month" placeholder="from" v-model="item.PublishedDate" style="width: 275px;"></el-date-picker>
            </el-form-item>
        </el-form-item>
        <el-button style="margin-top:50px" type="danger" icon="el-icon-delete" circle @click="deleteRules(item, index)" :disabled="isReadonly"></el-button>
      </div>
        <el-form-item>
          <el-button type="primary" icon="el-icon-edit" circle @click="addDomain"></el-button>
          <el-button @click="resetForm('Achievements')">重置</el-button>
          <div class="Achievements_submit">
            <el-button type="primary" @click="submitForm('Achievements')">保存 Save</el-button>
            <el-button type="primary" @click="submitForm('Achievements')">保存并继续 Save &Continue Save</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Information_6_Achievements',
  data () {
    return {
      Achievements: {
        domains: [{
          key: 0,
          Topic: '',
          PublishedDate: ''
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!' + this.Achievements.domains[1].Previous)
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
