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
          与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript
          可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native 组件或模块供开发人员使用。
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
export default {
  components: { WxcMask },
  data() {
    return {
      show: false
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
