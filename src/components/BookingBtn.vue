<template>
  <div class="booking-btn-outer">
    <div class="booking-btn-inner">
      <text class="iconfont iconText">&#xe782;</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookingBtn',
  data() {
    return {}
  },
  created() {
    this.$getIcon()
  },
  methods: {}
}
</script>

<style scoped>
.booking-btn-outer {
  width: 180px;
  height: 180px;
  border-radius: 80px;
  background-color: #fff;
  position: absolute;
  bottom: 120px;
  margin-bottom: -110px;
  justify-content: center;
  align-items: center;
}
.booking-btn-inner {
  width: 134px;
  height: 134px;
  border-radius: 70px;
  background-color: #FF9900;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.iconfont {
  font-family: iconfont;
}
.iconText {
  font-size: 60px;
  color: #e6efea;
}
</style>
