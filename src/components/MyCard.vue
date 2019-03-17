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
const storage = weex.requireModule('storage')
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
      }
    })
  },
  data() {
    return {
      isLogin: false,
      userInfo: {},
      cardPortraitSrc: this.$getImg('portrait.jpg')
    }
  },
  methods: {
    login() {
      storage.getItem('userInfo', event => {
        let userInfo = event.data
        if (userInfo === 'undefined' || userInfo === undefined) {
          Bus.$emit('handleLogin')
        } else {
          console.log(userInfo)
        }
      })
    }
  }
}
</script>

<style scoped>
.front-card {
  width: 675px;
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
