<template>
  <div class="home-wrapper">
    <wxc-minibar title="BOYA"
                 background-color="#54ad7b"
                 text-color="#FFFFFF"
                 right-text="更多"
                 :use-default-return=false
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text class="iconfont"
            slot="right"
            style="color: #fff;fontSize:50px;">&#xe64f;</text>
      <text class="iconfont"
            slot="left"
            style="color: #fff;fontSize:50px;">&#xe60f;</text>
    </wxc-minibar>
  </div>
</template>
<script>
import { WxcMinibar } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
  name: 'HomePage',
  components: { WxcMinibar },
  created() {
    this.$getIcon()
  },
  data() {
    return {
      logoSrc: this.$getImg('logo3.png')
    }
  },
  methods: {
    minibarLeftButtonClick() {
      modal.toast({ message: 'click leftButton!', duration: 1 })
    },
    minibarRightButtonClick() {
      modal.toast({ message: 'click rightButton!', duration: 1 })
    }
  }
}
</script>

<style scoped>
.home-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.iconfont {
  font-family: iconfont;
}
</style>
