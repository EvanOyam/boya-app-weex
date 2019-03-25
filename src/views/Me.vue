<template>
  <!-- 我的页面 -->
  <div class="me-wrap">
    <scroller class="scroller">
      <div class="info-front-card">
        <div class="bar">
          <text class="bar-title">消息列表</text>
        </div>
        <wxc-cell label="预约消息"
                  :title="item.title"
                  :desc="item.desc"
                  :cell-style="cellStyle"
                  :has-arrow="true"
                  v-for="(item,index) in messageList"
                  @wxcCellClicked="openMask"
                  :key="index"></wxc-cell>
      </div>
      <wxc-mask border-radius="30"
                mask-bg-color='#fff'
                :show-close="true"
                :show="show"
                :has-animation="false"
                @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content">
          <text class="mask-title">琴房预约消息</text>
          <wxc-cell label="开始时间"
                    :title="maskInfo.startTime"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="结束时间"
                    :title="maskInfo.endTime"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="琴房"
                    :title="maskInfo.classroom"
                    :cell-style="cellStyle"></wxc-cell>
        </div>
      </wxc-mask>
    </scroller>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import { WxcCell, WxcMask } from 'weex-ui'
export default {
  name: 'Me',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    WxcCell,
    WxcMask
  },
  data() {
    return {
      show: false,
      maskInfo: {
        startTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        classroom: '207'
      },
      cellStyle: {
        marginLeft: '20px',
        marginRight: '20px'
      },
      messageList: [
        {
          title: '207琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '210琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '207琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '222琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '207琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '201琴房预约消息',
          desc: new Date().toLocaleDateString()
        },
        {
          title: '202琴房预约消息',
          desc: new Date().toLocaleDateString()
        }
      ]
    }
  },
  methods: {
    openMask(e) {
      this.show = true
    },
    wxcMaskSetHidden() {
      this.show = false
    }
  }
}
</script>
<style scoped>
.me-wrap {
  position: absolute;
  top: 466px;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #e6efea;
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
  width: 680px;
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
.content {
  height: 700px;
  width: 640px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  margin-left: 31px;
  margin-top: 50px;
  justify-content: space-around;
  /* align-items: center; */
}
.mask-title {
  font-size: 50px;
  color: #666;
  font-weight: bold;
  text-align: center;
  /* margin-top: 60px; */
  /* margin-bottom: 20px; */
}
</style>
