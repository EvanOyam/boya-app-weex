<template>
  <!-- 系统主页面 -->
  <div class="index-wrap">
    <component :is="viewComponent"></component>
    <MyTabBar></MyTabBar>
  </div>
</template>
<script>
import Home from '@/views/Home'
import MyTabBar from '@/components/MyTabBar'
import Me from '@/views/Me'
import Bus from '@/mixins/bus.js'
export default {
  name: 'Index',
  components: {
    Home,
    Me,
    MyTabBar
  },
  created() {
    Bus.$on('handleView', view => {
      if (view === 0) {
        this.viewComponent = 'Home'
      } else if (view === 1) {
        this.viewComponent = 'Me'
      }
    })
  },
  data() {
    return {
      viewComponent: 'Home'
    }
  },
  methods: {}
}
</script>
<style scoped>
.index-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
