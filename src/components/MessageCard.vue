<template>
  <div class="message-card">
    <div class="card-shadow">
      <div class="front-card">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MessageCard',
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
.card-shadow {
  width: 682px;
  height: 206px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
