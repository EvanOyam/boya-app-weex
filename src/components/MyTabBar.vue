<template>
  <div class="my-tab-bar-wrap">
    <div class="tab-bar">
      <div class="icon-box"
           @click="gotoHome">
        <div class="icon">
          <text class="iconfont tarbar-icon"
                :class="[isActived === 0 ? 'active' : '']">&#xe64f;</text>
        </div>
        <div><text class="title"
                :class="[isActived === 0 ? 'active' : '']">首页</text></div>
      </div>
      <div class="icon-box"
           @click="gotoMe">
        <div class="icon">
          <text class="iconfont tarbar-icon"
                :class="[isActived === 1 ? 'active' : '']">&#xe61a;</text>
        </div>
        <div><text class="title"
                :class="[isActived === 1 ? 'active' : '']">我的</text></div>
      </div>
    </div>
    <div class="booking-btn-outer"
         @click="booking">
      <div class="booking-btn-inner">
        <text class="iconfont iconText">&#xe782;</text>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/mixins/bus.js'
const storage = weex.requireModule('storage')
export default {
  name: 'MyTabbar',
  data() {
    return {
      isActived: 0
    }
  },
  created() {
    this.$getIcon()
    Bus.$on('topBarLeftClick', () => {
      this.gotoHome()
    })
  },
  methods: {
    gotoHome() {
      this.isActived = 0
      Bus.$emit('handleView', 0)
    },
    gotoMe() {
      storage.getItem('userInfo', event => {
        let userInfo = event.data
        if (userInfo === 'undefined' || userInfo === undefined) {
          Bus.$emit('handleLogin')
        } else {
          this.isActived = 1
          Bus.$emit('handleView', 1)
        }
      })
      // if (this.isLogin) {
      // } else if (!this.isLogin) {
      //   Bus.$emit('handleLogin')
      // }
    },
    booking() {
      storage.getItem('userInfo', event => {
        let userInfo = event.data
        if (userInfo === 'undefined' || userInfo === undefined) {
          Bus.$emit('handleLogin')
        } else {
          this.$router.push('/booking')
        }
      })
      // if (!this.isLogin) {
      //   Bus.$emit('handleLogin')
      // }
    }
  }
}
</script>

<style scoped>
.my-tab-bar-wrap {
  position: fixed;
  height: 200px;
  width: 750px;
  bottom: 0;
  background: #e6efea;
}
.tab-bar {
  width: 750px;
  height: 120px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
}
.icon-box {
  flex: 1;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
}
.title {
  font-size: 28px;
  text-align: center;
}
.active {
  color: #ff9900;
}
.tarbar-icon {
  font-size: 48px;
  text-align: center;
}
.booking-btn-outer {
  width: 180px;
  height: 180px;
  border-radius: 80px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 375px;
  margin-left: -90px;
}
.booking-btn-inner {
  width: 134px;
  height: 134px;
  border-radius: 134px;
  background-color: #ff9900;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.iconfont {
  font-family: iconfont;
}
.iconText {
  font-size: 60px;
  color: #e6efea;
}
</style>
