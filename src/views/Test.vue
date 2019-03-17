<template>
  <div class="wrap">
    <div class="outter-box"
         @click="openMask"></div>
    <wxc-mask height="800"
              width="702"
              border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-animation="true"
              :has-overlay="true"
              :show-close="true"
              :show="show"
              @wxcMaskSetHidden="wxcMaskSetHidden">
      <div class="content">
        <div class="demo-title">
          <text class="title">Weex帮助你构建原生应用</text>
        </div>
        <text class="content-text">
          {{userInfo}}
        </text>
      </div>
    </wxc-mask>
  </div>
</template>

<style scoped>
.outter-box {
  width: 750px;
  height: 200px;
  background-color: greenyellow;
}
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<script>
import { WxcMask } from 'weex-ui'
const storage = weex.requireModule('storage')
export default {
  components: { WxcMask },
  created() {
    const _this = this
    storage.getItem('userInfo', event => {
      _this.userInfo = event.data
    })
  },
  data() {
    return {
      show: false,
      userInfo: 'init'
    }
  },
  methods: {
    openMask(e) {
      this.show = true
      this.hasAnimation = true
    },
    wxcMaskSetHidden() {
      this.show = false
    }
  }
}
</script>
