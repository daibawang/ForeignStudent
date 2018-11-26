<template>
    <div id="bod">
      <div id="div1">
          <img style="height:70px;  align-self: flex-start;" src="~images/shool_logo_blue1.png">
          <div id="te">
              <div id="text">北京城市学院留学生申请系统 </div>
              <div id="text1">Application For International Student Admission</div>
          </div>
      </div>
      <div id="div2" v-show="showLogin">
        <el-input v-model="username" placeholder="用户名 Username" style="width:23%"></el-input>
        <el-input v-model="password" type="password" placeholder="密码 Password" style="width:23%;margin-top:30px"></el-input>
      </div>
      <div id="div2-2" v-show="showRegister">
        <el-input v-model="newUsername" placeholder="用户名 Username" style="width:23%"></el-input>
        <el-input v-model="newPassword" type="password" placeholder="密码 Password" style="width:23%;margin-top:30px"></el-input>
        <el-input v-model="newPasswordAgain" type="password" placeholder="确认密码 Confirm Password" style="width:23%;margin-top:30px"></el-input>
      </div>

      <div id="div4">
          <div id="div4_1" v-on:click="login" v-show="showLogin">登录 Sign in</div>
          <div id="div4_2" v-on:click="ToRegister" v-show="showLogin">注册 Sign up</div>
          <div id="div4_1_grey" v-on:click="ToLogin" v-show="showRegister">返回 Return</div>
          <div id="div4_2" v-on:click="Register" v-show="showRegister">注册 Sign up</div>
      </div>
    </div>
</template>
<style>
.div{

}
</style>
<style lang="stylus" scoped>
html{
  height 100%;
}
#bod{
    height:100%;
    display: flex;
    flex-direction:column;
    background-image:url("~images/bk3.jpg");
    background-size:cover;
    background-position:center center;
    background-repeat: no-repeat;
}
#div1 {
    padding-top: 30px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    #te{
        margin: 30px 0px 30px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

#div2,#div2-2 {
    margin:30px 0px 10px 0px;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
#div2-2{
  margin:70px 0px 10px 0px;
}

#div3 {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#div4 {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

#text {
    font-family: 'Microsoft Yahei';
    font-weight: bold;
    margin-top: 10px;
    font-size: 28px;
    color: 	#070B50;
    letter-spacing: 5px;
}

#text1 {
    letter-spacing: 2px;
    font-family: 'Microsoft Yahei';
    font-weight: bold;
    margin-top: 10px;
    font-size: 18px;
    color: 	#070B50;
    letter-spacing: 5px;
}
#div4_1,#div4_1_grey{
    width:100px;
    height: 30px;
    border-radius: 10px;
    margin-right: 30px;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
}
#div4_1{
  border: 1px #2F88EE solid;
  background: #409EFF;
  color: white;
}
#div4_1_grey{
  border: 1px #D5DADF solid;
  background: #D5DADF;
  color black
}
#div4_2{
    cursor:pointer;
    width:100px;
    height: 30px;
    border: 1px #E6A23C solid;
    background: #E6A23C;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 30px;
}
input{
    outline: none;
    border: 1px #8a8989 solid;
    border-radius: 10px;
    width:310px;
    height: 35px;
}
</style>
<script>
// @import '~styles/varibles.styl'
import {setCookie, getCookie} from '../../assets/js/cookie.js'
import axios from 'axios'
export default{
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      newpasswordAgain: ''
    }
  },
  props: {
    contents: {
      type: String,
      default: '请输入用户名或密码/Please Input your UserName or Password'
    },
    contentsNoA: {
      type: String,
      default: '请确认密码/Please Confirm Your Password'
    },
    contentsNoMatch: {
      type: String,
      default: '请输入相同密码/Please'
    },
    contentsTrue: {
      type: String,
      default: '注册成功'
    },
    contentsRepeat: {
      type: String,
      default: '此用户名已存在/'
    },
    contentsError: {
      type: String,
      default: '注册失败，请稍后再试/'
    },
    contentsNo: {
      type: String,
      default: '用户或密码错误/UserName or Password error'
    },
    confirmTitle: {
      type: String,
      default: 'Sure'
    }
  },
  mounted () {
  /* 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录 */
    if (getCookie('username')) {
      // this.$router.push('/main/'+ this.username)
    }
  },
  methods: {
    login () {
      if (this.username == '' || this.password == '') {
        this.$alert(this.contents, {
          confirmButtonText: this.confirmTitle
        })
      } else {
        this.$axios({
          method: 'post',
          url: '/apis/UserServlet',
          params: {
            username: this.username,
            password: this.password
          }
        }).then((response) => {
          if (response.data == 'false') {
            this.$alert(this.contentsNo, 'Error', {
              confirmButtonText: this.confirmTitle
            })
          } else {
            setCookie('username', this.username, 1000 * 60)
            setCookie('InputInfo', 0, 1000 * 60)
            setTimeout(function () {
              this.$router.push('/main')
            }.bind(this), 1000)
          }
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    ToRegister () {
      this.showRegister = true
      this.showLogin = false
    },
    ToLogin () {
      this.showRegister = false
      this.showLogin = true
    },
    Register () {
      if (this.newUsername == '' || this.newPassword == '') {
        this.$alert(this.contents, {
          confirmButtonText: this.confirmTitle
        })
      } else if (this.newPasswordAgain == '') {
        this.$alert(this.contentsNoA, {
          confirmButtonText: this.confirmTitle
        })
      } else if (this.newPassword != this.newPasswordAgain) {
        this.$alert(this.contentsNoMatch, {
          confirmButtonText: this.confirmTitle
        })
      } else {
        this.$axios({
          method: 'get',
          url: '/apis/AddUserServlet',
          params: {
            username: this.newUsername,
            password: this.newPassword,
            type: 1
          }
        }).then((response) => {
          console.log(response.data)
          if (response.data == true) {
            this.username = ''
            this.password = ''
            this.$alert(this.contentsTrue, {
              confirmButtonText: this.confirmTitle
            })
            setTimeout(function () {
              this.showRegister = false
              this.showLogin = true
              this.showTishi = false
            }.bind(this), 1000)
          } else if (response.data == 'repeat') {
            this.$alert(this.contentsRepeat, {
              confirmButtonText: this.confirmTitle
            })
          } else {
            this.$alert(this.contentsError, {
              confirmButtonText: this.confirmTitle
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }

  }
}
</script>
