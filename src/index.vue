<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
const globalEvent = weex.requireModule('globalEvent')
const eventModule = weex.requireModule('event')
export default {
  name: 'App',
  created: function() {
    var objThis = this
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: "url('http://at.alicdn.com/t/font_1068180_dzxj5qa3kjk.ttf?t1231')"
    })
    globalEvent.addEventListener('androidback', function(e) {
      if (objThis.$route.path === '/' || objThis.$route.path === '/home') {
        eventModule.closeApp()
      } else {
        objThis.$router.go(-1)
      }
    })
  },
  data() {
    return {}
  }
}
</script>

<style>
.iconfont {
  font-family: iconfont;
}
</style>
