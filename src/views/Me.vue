<template>
  <!-- 我的页面 -->
  <div class="me-wrap">
    <scroller class="scroller">
      <TopBar></TopBar>
      <HeadBlock></HeadBlock>
      <MyCard class="home-card"></MyCard>
      <div class="info-front-card">
        <div class="bar">
          <text class="bar-title">消息列表</text>
        </div>
        <wxc-cell :label="item.label"
                  :title="item.title"
                  :desc="item.desc"
                  :cell-style="cellStyle"
                  :has-arrow="true"
                  v-for="(item,index) in messageList"
                  :key="index"></wxc-cell>
      </div>
    </scroller>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import { WxcCell } from 'weex-ui'
export default {
  name: 'Me',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    WxcCell
  },
  data() {
    return {
      cellStyle: {
        marginLeft: '20px',
        marginRight: '20px'
      },
      messageList: [
        {
          label: '课程信息',
          title: '吉他大班课程',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '预约消息',
          title: '琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '课程信息',
          title: '尤克里里一对一课程',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '课程信息',
          title: '尤克里里一对一课程',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '课程信息',
          title: '尤克里里一对一课程',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '课程信息',
          title: '尤克里里一对一课程',
          desc: new Date().toLocaleDateString()
        },
        {
          label: '预约消息',
          title: '琴房预约消息',
          desc: new Date().toLocaleDateString()
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped>
.me-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #e6efea;
}
.home-card {
  margin-top: -100px;
}
.scroller {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #e6efea;
  flex-direction: column;
  align-items: center;
}
.info-front-card {
  width: 675px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  align-items: stretch;
  margin-bottom: 200px;
}
.bar {
  height: 80px;
  background-color: yellowgreen;
  align-items: center;
  justify-content: center;
}
.bar-title {
  font-size: 32px;
  color: #fff;
}
</style>
