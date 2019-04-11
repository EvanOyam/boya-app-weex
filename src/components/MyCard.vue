<template>
  <div class="my-card"
       @click="login">
    <div class="front-card">
      <image class="card-portrait"
             :src="cardPortraitSrc"></image>
      <div class="login-text-box"
           v-if="isLogin === true">
        <text class="login-username">{{userInfo.username}}</text>
        <text class="login-introduction">{{userInfo.introduction}}</text>
      </div>
      <div class="unlogin-text-box"
           v-if="isLogin === false">
        <text class="unlogin-username">尚未登录</text>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/mixins/bus.js'
const modal = weex.requireModule('modal')
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
export default {
  name: 'MyCard',
  created() {
    storage.getItem('userInfo', event => {
      let userInfo = event.data
      if (userInfo === 'undefined' || userInfo === undefined) {
        console.log('unlogin')
      } else {
        this.userInfo = JSON.parse(userInfo)
        this.isLogin = true
        console.log(this.userInfo)
      }
    })
    storage.getItem('token', event => {
      let token = event.data
      this.token = token
    })
  },
  data() {
    return {
      isLogin: false,
      cardPortraitSrc: this.$getImg('portrait.jpg'),
      userInfo: undefined
    }
  },
  methods: {
    login() {
      const _this = this
      if (_this.userInfo === 'undefined' || _this.userInfo === undefined) {
        Bus.$emit('handleLogin')
      } else {
        modal.prompt(
          {
            message: '修改自我介绍',
            duration: 0.3,
            okTitle: '确认',
            cancelTitle: '取消'
          },
          function(res) {
            if (res.result === '确认') {
              _this.editIntroduction(res.data)
            } else {
              console.log(res.result)
            }
          }
        )
      }
    },
    editIntroduction(introduction) {
      const _this = this
      const rawBody = {
        username: this.userInfo.username,
        introduction
      }
      const body = JSON.stringify(rawBody)
      if (introduction !== '') {
        let token = `Bearer ${_this.token}`
        console.log('token', token)
        console.log('body', body)
        stream.fetch(
          {
            method: 'POST',
            url: 'http://127.0.0.1:9091/editIntroduction',
            type: 'json',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token
            },
            body: body
          },
          function(res) {
            if (res.status === 401) {
              modal.alert(
                {
                  message: '登录过期，请重新登录！',
                  okTitle: '重新登录'
                },
                function() {
                  _this.$router.push('/login')
                }
              )
            } else if (res.data.code === 1) {
              console.log(res.data)
              let strData = JSON.stringify(res.data.userInfo)
              _this.userInfo = res.data.userInfo
              storage.setItem('userInfo', strData)
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.front-card {
  width: 680px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px 20px 30px;
}
.login-username {
  font-weight: bold;
  color: #333;
  text-overflow: ellipsis;
  font-size: 36px;
}
.login-introduction {
  color: #777777;
  text-overflow: ellipsis;
  font-size: 30px;
  margin-top: 10px;
}
.card-portrait {
  width: 146px;
  height: 146px;
  border-radius: 80px;
}
.login-text-box {
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 146px;
  flex: 1;
  padding: 10px 0 10px 30px;
}
.unlogin-text-box {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 146px;
  flex: 1;
  padding: 10px 0 10px 30px;
}
.unlogin-username {
  font-weight: bold;
  font-size: 36px;
  color: #333;
}
</style>
