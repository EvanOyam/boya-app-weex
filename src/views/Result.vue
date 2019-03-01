<template>
  <div class="result-wrapper">
    <wxc-result type="errorPage"
                :show="show"
                padding-top="232"
                :custom-set="customSet"
                @wxcResultButtonClicked="goBack"></wxc-result>
  </div>
</template>
<script>
import { WxcResult } from 'weex-ui'
export default {
  name: 'Result',
  components: {
    WxcResult
  },
  data() {
    return {
      show: true,
      customSet: {
        errorPage: {
          button: '返回',
          content: 'Github更新后不许在iframe中内嵌，请手动打开',
          desc: 'https://github.com/EvanOyam/boya-app-weex'
        }
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // var navigator = weex.requireModule('navigator')
      // navigator.push(
      //   {
      //     url: 'http://192.168.31.159:8081/web/preview.html?page=index.js&wsport=8082',
      //     animated: 'true'
      //   },
      //   event => {
      //     console.log('callback: ', event)
      //   }
      // )
    }
  }
}
</script>

<style scoped>
.result-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
}
</style>
