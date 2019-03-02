<template>
  <div class="welcome-wrapper">
    <div class="welcome-wrapper-top">
      <text class="welcome-title-zh">伯雅音乐</text>
      <text class="welcome-title-en">Boya Music</text>
    </div>
    <div class="welcome-wrapper-bottom">
      <wxc-button text="进入系统"
                  type="green"
                  :btnStyle="{height:'110px', marginBottom:'20px'}"
                  :textStyle="{fontSize:'40px',fontWeight:'bold',color:'#e1ede6'}"
                  @wxcButtonClicked="enterSystem"></wxc-button>
      <wxc-button text="Github"
                  type="blue"
                  :btnStyle="{height:'110px',marginTop:'20px'}"
                  :textStyle="{fontSize:'40px',fontWeight:'bold',color:'#e1ede6'}"
                  @wxcButtonClicked="gotoGithub"></wxc-button>
    </div>
    <image class="welcome-logo"
           :src="logoSrc"></image>
  </div>
</template>
<script>
import { WxcButton } from 'weex-ui'
export default {
  name: 'Welcome',
  components: {
    WxcButton
  },
  data() {
    return {
      logoSrc: this.$getImg('logo2.png')
    }
  },
  methods: {
    enterSystem() {
      this.$router.push('/adpage')
    },
    gotoGithub(e) {
      this.$router.push('/result')
    }
  }
}
</script>

<style scoped>
.welcome-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
}
.welcome-wrapper-top {
  background-image: linear-gradient(to bottom, #126d40, #116f77);
  height: 460px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.welcome-wrapper-bottom {
  background-color: #e1ede6;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.welcome-title-zh {
  font-weight: bold;
  color: #e1ede6;
  font-size: 96px;
}
.welcome-title-en {
  color: #e1ede6;
  font-size: 72px;
  margin-bottom: 80px;
}
.welcome-logo {
  position: absolute;
  width: 260px;
  height: 260px;
  left: 375px;
  margin-left: -130px;
  top: 460px;
  margin-top: -130px;
}
</style>
