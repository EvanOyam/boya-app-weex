<template>
  <div class="head-block">
    <text class="head-block-username">{{username}}</text>
  </div>
</template>
<script>
const storage = weex.requireModule('storage')
export default {
  name: 'HeadBlock',
  created() {
    storage.getItem('userInfo', event => {
      let userInfo = event.data
      if (userInfo === 'undefined' || userInfo === undefined) {
        this.username = '尚未登录'
      } else {
        userInfo = JSON.parse(userInfo)
        this.username = userInfo.username
      }
    })
  },
  data() {
    return {
      username: '尚未登录'
    }
  },
  methods: {}
}
</script>

<style scoped>
.head-block {
  width: 750px;
  height: 240px;
  background-color: #54ad7b;
  justify-content: center;
  margin-top: -1px;
}
.head-block-username {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  margin-top: -120px;
}
</style>
