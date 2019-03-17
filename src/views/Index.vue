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
const modal = weex.requireModule('modal')
export default {
  name: 'Index',
  components: {
    Home,
    Me,
    MyTabBar
  },
  created() {
    const _this = this
    Bus.$on('handleView', view => {
      this.setView(view)
    })
    Bus.$on('handleLogin', () => {
      modal.alert(
        {
          message: '请先登录！',
          okTitle: '确认'
        },
        function() {
          _this.$router.push('/login')
        }
      )
    })
  },
  beforeDestroy() {
    console.log('destroy')
    Bus.$off('handleLogin')
  },
  data() {
    return {
      viewComponent: 'Home'
    }
  },
  methods: {
    setView(view) {
      if (view === 0) {
        this.viewComponent = 'Home'
      } else if (view === 1) {
        this.viewComponent = 'Me'
      }
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
