<template>
  <div class="my-card">
    <div class="front-card">
      <image class="card-portrait"
             :src="cardPortraitSrc"></image>
      <div class="login-text-box"
           v-if="username !== '请先登录'">
        <text class="login-username">{{username}}</text>
        <text class="login-introduction">{{introduction}}</text>
      </div>
      <div class="unlogin-text-box"
           v-if="username === '请先登录'">
        <text class="unlogin-username">{{username}}</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCard',
  data() {
    return {
      username: '请先登录',
      introduction: '大家好，我叫陈发枝，可以叫我fat guy，我喜欢看大仙',
      cardPortraitSrc: this.$getImg('portrait.jpg')
    }
  },
  methods: {}
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
