<template>
  <div class="ad-page-wrapper">
    <div class="title">
      <text>伯雅音乐</text>
      <text>Your dream tutor</text>
    </div>
    <image class="ad-page-logo"
           :src="logoSrc"></image>
  </div>
</template>
<script>
export default {
  name: 'AdPage',
  components: {},
  data() {
    return {
      logoSrc: this.$getImg('logo3.png')
    }
  },
  methods: {}
}
</script>

<style scoped>
.ad-page-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
  background-color: #e1ede6;
}
.ad-page-logo {
  width: 260px;
  height: 260px;
}
</style>
