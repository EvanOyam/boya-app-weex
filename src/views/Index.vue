<template>
  <!-- 系统主页面 -->
  <div class="index-wrap">
    <component :is="viewComponent"></component>
    <MyTabBar @onShow="handleShow"></MyTabBar>
  </div>
</template>
<script>
import Home from '@/views/Home'
import MyTabBar from '@/components/MyTabBar'
import Me from '@/views/Me'
export default {
  name: 'Index',
  components: {
    Home,
    Me,
    MyTabBar
  },
  data() {
    return {
      viewComponent: 'Home'
    }
  },
  methods: {
    handleShow(view) {
      this.viewComponent = view
    }
  }
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
