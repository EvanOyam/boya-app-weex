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
  },
  methods: {}
}
</script>

<style>
.iconfont {
  font-family: iconfont;
}
</style>
