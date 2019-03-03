<template>
  <div class="head-block">
    <text class="head-block-username">{{username}}</text>
  </div>
</template>
<script>
export default {
  name: 'HeadBlock',
  data() {
    return {
      username: '尚未登陆'
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
