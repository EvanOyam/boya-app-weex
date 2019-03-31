<template>
  <div class="update-wrapper">
    <div class="update-wrapper-top">
      <text class="update-title-zh">伯雅音乐</text>
      <text class="update-title-en">Boya Music</text>
    </div>
    <div class="update-wrapper-bottom">
      <div class="input-box">
        <input class="input"
               type="text"
               placeholder="请输入真实姓名"
               autocomplete="off"
               return-key-type="next"
               @input="onInputTruename" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe61a;</text>
        </div>
      </div>
      <div class="input-box">
        <input class="input"
               type="password"
               placeholder="请输入手机号"
               autocomplete="off"
               return-key-type="next"
               @input="onInputPhoneNum" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe618;</text>
        </div>
      </div>
      <div class="input-box">
        <input class="input"
               type="password"
               placeholder="请输入验证码"
               autocomplete="off"
               return-key-type="done"
               @input="onInputCode" />
        <div class="input-icon">
          <text class="iconfont icon">&#xe618;</text>
        </div>
      </div>
      <div class="btn-group">
        <wxc-button text="发送短信"
                    type="green"
                    size="big"
                    @wxcButtonClicked="getCode"></wxc-button>
        <wxc-button text="绑定手机"
                    type="yellow"
                    size="big"
                    @wxcButtonClicked="update"></wxc-button>
      </div>
    </div>
    <image class="update-logo"
           :src="logoSrc"></image>
  </div>
</template>
<script>
import { WxcButton } from 'weex-ui'
import { setTimeout } from 'timers'
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
export default {
  name: 'Update',
  components: {
    WxcButton
  },
  data() {
    return {
      logoSrc: this.$getImg('logo2.png')
    }
  },
  methods: {
    update() {
      const _this = this
      let token
      let username
      storage.getItem('token', event => {
        token = event.data
      })
      storage.getItem('userInfo', event => {
        const userInfo = JSON.parse(event.data)
        username = userInfo.username
      })
      const truename = this.truename
      const phoneNum = this.phoneNum
      const code = this.code
      if (truename && phoneNum && code) {
        stream.fetch(
          {
            method: 'GET',
            url: `http://172.22.15.76:9091/getmsg?username=${username}&phoneNum=${phoneNum}&truename=${truename}&code=${code}`,
            type: 'json',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
            }
          },
          function(res) {
            console.log(res)
            if (res.data.code) {
              modal.toast({
                message: res.data.msg,
                duration: 1
              })
              if (res.data.code === 1) {
                let strData = JSON.stringify(res.data.userinfo)
                storage.setItem('userInfo', strData)
                setTimeout(function() {
                  _this.$router.push('index')
                }, 1000)
              }
            } else {
              modal.alert(
                {
                  message: '登录过期，请重新登录！',
                  okTitle: '重新登录'
                },
                function() {
                  _this.$router.push('/login')
                }
              )
            }
          }
        )
      } else {
        modal.toast({
          message: '请完善信息',
          duration: 1
        })
      }
    },
    onInputTruename(e) {
      this.truename = e.value
    },
    onInputPhoneNum(e) {
      this.phoneNum = e.value
    },
    onInputCode(e) {
      this.code = e.value
    },
    getCode() {
      if (this.phoneNum) {
        const _this = this
        let token
        let username
        let phoneNum = this.phoneNum
        storage.getItem('token', event => {
          token = event.data
        })
        storage.getItem('userInfo', event => {
          const userInfo = JSON.parse(event.data)
          username = userInfo.username
        })
        stream.fetch(
          {
            method: 'GET',
            url: `http://172.22.15.76:9091/sendmsg?username=${username}&phoneNum=${phoneNum}`,
            type: 'json',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
            }
          },
          function(res) {
            console.log(res)
            if (res.data.code === 1) {
              modal.toast({
                message: res.data.msg,
                duration: 1
              })
            } else {
              modal.alert(
                {
                  message: '登录过期，请重新登录！',
                  okTitle: '重新登录'
                },
                function() {
                  _this.$router.push('/login')
                }
              )
            }
          }
        )
      } else {
        modal.toast({
          message: '请输入手机号',
          duration: 1
        })
      }
    }
  }
}
</script>

<style scoped>
.update-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
}
.update-wrapper-top {
  background-image: linear-gradient(to bottom, #126d40, #116f77);
  height: 460px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.update-wrapper-bottom {
  background-color: #e6efea;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.update-title-zh {
  font-weight: bold;
  color: #e6efea;
  font-size: 96px;
}
.update-title-en {
  color: #e6efea;
  font-size: 72px;
  margin-bottom: 80px;
}
.update-logo {
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
.btn-group {
  flex-direction: row;
  width: 702px;
  justify-content: space-between;
}
</style>
