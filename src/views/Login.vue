<template>
  <div class="login-wrapper">
    <div class="login-wrapper-top">
      <text class="login-title-zh">伯雅音乐</text>
      <text class="login-title-en">Boya Music</text>
    </div>
    <div class="login-wrapper-bottom"
         v-if="formType === 'login'">
      <div class="input-box">
        <input class="input"
               type="text"
               placeholder="请输入用户名"
               autocomplete="off"
               return-key-type="next"
               @input="onInputUsername" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe61a;</text>
        </div>
      </div>
      <div class="input-box">
        <input class="input"
               type="password"
               placeholder="请输入密码"
               autocomplete="off"
               return-key-type="done"
               @input="onInputPassword" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe618;</text>
        </div>
      </div>
      <wxc-button text="登录"
                  type="green"
                  :btnStyle="{height:'110px', marginBottom:'20px'}"
                  :textStyle="{fontSize:'40px',fontWeight:'bold',color:'#E6EFEA'}"
                  @wxcButtonClicked="login"></wxc-button>
    </div>
    <div class="login-wrapper-bottom"
         v-if="formType === 'register'">
      <div class="input-box">
        <input class="input"
               type="text"
               placeholder="请输入用户名"
               autocomplete="off"
               return-key-type="next"
               @input="onInputUsername" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe61a;</text>
        </div>
      </div>
      <div class="input-box">
        <input class="input"
               type="password"
               placeholder="请输入密码"
               autocomplete="off"
               return-key-type="next"
               @input="onInputPassword" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe618;</text>
        </div>
      </div>
      <div class="input-box">
        <input class="input"
               type="password"
               placeholder="确认密码"
               autocomplete="off"
               return-key-type="done"
               @input="onInputconfirm" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe618;</text>
        </div>
      </div>
      <wxc-button text="注册"
                  type="green"
                  :btnStyle="{height:'110px', marginBottom:'20px'}"
                  :textStyle="{fontSize:'40px',fontWeight:'bold',color:'#E6EFEA'}"
                  @wxcButtonClicked="register"></wxc-button>
    </div>
    <text class="change-to-register"
          @click="changeForm">{{formText}}</text>
    <image class="login-logo"
           :src="logoSrc"></image>
  </div>
</template>
<script>
import { WxcButton } from 'weex-ui'
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
export default {
  name: 'Login',
  components: {
    WxcButton
  },
  data() {
    return {
      logoSrc: this.$getImg('logo2.png'),
      formText: '注册用户',
      formType: 'login',
      userName: '',
      password: '',
      comfirmPassword: ''
    }
  },
  methods: {
    login() {
      const _this = this
      const rawbody = {
        username: this.userName,
        password: this.password
      }
      const body = JSON.stringify(rawbody)
      stream.fetch(
        {
          method: 'POST',
          url: 'http://127.0.0.1:9091/login',
          type: 'json',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body
        },
        function(res) {
          console.log(res)
          let strData = JSON.stringify(res.data.userinfo)
          let token = res.data.token
          modal.toast({
            message: res.data.msg,
            duration: 1
          })
          if (res.data.code === 1) {
            storage.setItem('userInfo', strData)
            storage.setItem('token', token)
            setTimeout(() => {
              _this.$router.push('/index')
            }, 1000)
          }
        }
      )
    },
    register() {
      console.log('username', this.userName)
      console.log('password', this.password)
      console.log('comfirmPassword', this.comfirmPassword)
      let usernameLen = [...String(this.userName)].length
      let passwordLen = [...String(this.password)].length
      if (this.password !== this.comfirmPassword) {
        modal.toast({
          message: '两次密码不匹配！',
          duration: 1
        })
      } else if (
        this.password === '' ||
        this.comfirmPassword === '' ||
        this.username === ''
      ) {
        modal.toast({
          message: '请完善注册信息！',
          duration: 1
        })
      } else if (usernameLen < 6 || passwordLen < 6) {
        modal.toast({
          message: '用户名和密码的长度都不可小于6',
          duration: 1
        })
      } else {
        const _this = this
        const rawbody = {
          username: this.userName,
          password: this.password
        }
        const body = JSON.stringify(rawbody)
        stream.fetch(
          {
            method: 'POST',
            url: 'http://127.0.0.1:9091/register',
            type: 'json',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          },
          function(res) {
            console.log(res)
            modal.toast({
              message: res.data.msg,
              duration: 1
            })
            if (res.data.code === 1) {
              _this.changeForm()
            }
          }
        )
      }
    },
    onInputUsername(e) {
      this.userName = e.value
    },
    onInputPassword(e) {
      this.password = e.value
    },
    onInputconfirm(e) {
      this.comfirmPassword = e.value
    },
    changeForm() {
      if (this.formType === 'login') {
        this.formText = '返回登录'
        this.formType = 'register'
      } else {
        this.formText = '注册用户'
        this.formType = 'login'
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
}
.login-wrapper-top {
  background-image: linear-gradient(to bottom, #126d40, #116f77);
  height: 460px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-wrapper-bottom {
  background-color: #e6efea;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-title-zh {
  font-weight: bold;
  color: #e6efea;
  font-size: 96px;
}
.login-title-en {
  color: #e6efea;
  font-size: 72px;
  margin-bottom: 80px;
}
.login-logo {
  position: absolute;
  width: 260px;
  height: 260px;
  left: 375px;
  margin-left: -130px;
  top: 460px;
  margin-top: -130px;
}
.input {
  height: 110px;
  width: 702px;
  padding: 10px 20px 10px 86px;
  border-radius: 6px;
}
.input-box {
  height: 110px;
  width: 702px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.input-icon {
  width: 70px;
  height: 70px;
  position: absolute;
  left: 12px;
  top: 55px;
  margin-top: -35px;
  justify-content: center;
  align-items: center;
}
.iconfont {
  font-family: iconfont;
}
.icon {
  font-size: 50px;
  text-align: center;
  color: #666;
}
.change-to-register {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
  color: #19be6b;
}
</style>
