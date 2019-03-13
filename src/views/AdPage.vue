<template>
  <div class="ad-page-wrapper">
    <div class="title-box"
         ref="adBox">
      <text class="text title">伯雅音乐</text>
      <text class="text introduction">Your dream tutor</text>
    </div>
    <image class="ad-page-logo"
           :src="logoSrc"
           ref="logo"></image>
    <div class="timer">
      <text class="timerText">{{timer}}</text>
    </div>
  </div>
</template>
<script>
const animation = weex.requireModule('animation')
export default {
  name: 'AdPage',
  components: {},
  mounted() {
    this.timer = 3
    this.showLogo()
    this.showAdBox()
    this.handleTimer()
  },
  data() {
    return {
      logoSrc: this.$getImg('logo3.png'),
      timer: 3
    }
  },
  methods: {
    handleTimer() {
      const _this = this
      var timerStart = setInterval(function() {
        _this.timer = _this.timer - 1
        if (_this.timer === 0) {
          clearInterval(timerStart)
          _this.$router.push('/index')
        }
      }, 1000)
    },
    showLogo() {
      const logo = this.$refs.logo
      animation.transition(logo, {
        styles: {
          opacity: 1
        },
        duration: 2000,
        timingFunction: 'ease',
        delay: 0
      })
    },
    showAdBox() {
      const adBox = this.$refs.adBox
      animation.transition(adBox, {
        styles: {
          opacity: 1
        },
        duration: 2000,
        timingFunction: 'ease',
        delay: 0
      })
    }
  }
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
  align-items: center;
  background-color: #e6efea;
  justify-content: space-between;
}
.ad-page-logo {
  width: 210px;
  height: 160px;
  opacity: 0;
  margin-bottom: 100px;
}
.text {
  text-align: center;
  font-weight: bold;
}
.title {
  margin-top: 400px;
  font-size: 50px;
  color: #ffb74c;
}
.introduction {
  font-size: 36px;
  color: #8e8e8e;
}
.title-box {
  opacity: 0;
}
.timer {
  position: absolute;
  top: 54px;
  right: 54px;
  width: 54px;
  height: 54px;
  border-radius: 54px;
  border: 2px solid #5e5e5e;
  background-color: #ededed;
  justify-content: center;
  align-items: center;
}
.timerText {
  font-size: 22px;
  text-align: center;
  color: #5e5e5e;
}
</style>
