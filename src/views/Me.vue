<template>
  <!-- 我的页面 -->
  <div class="me-wrap">
    <div class="btn-group">
      <wxc-button text="切换用户"
                  @wxcButtonClicked="changeUser"
                  type='blue'
                  size='big'
                  class="sign-out-btn"></wxc-button>
      <wxc-button text="退出登录"
                  @wxcButtonClicked="signOut"
                  type='red'
                  size='big'
                  class="sign-out-btn"></wxc-button>
    </div>
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
                  @wxcCellClicked="openMask(index)"
                  :key="index"></wxc-cell>
      </div>
      <wxc-mask border-radius="30"
                mask-bg-color='#fff'
                :show-close="true"
                :show="show"
                :has-animation="false"
                @wxcMaskSetHidden="wxcMaskSetHidden"
                v-if="msgReady">
        <div class="content">
          <text class="mask-title">{{maskInfo.classroom}}琴房二维码</text>
          <!-- <text class="mask-title">琴房预约消息</text>
          <wxc-cell label="预约人"
                    :title="maskInfo.trueName"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="琴房"
                    :title="maskInfo.classroom"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="预约类型"
                    :title="maskInfo.instrumentType"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="预留号码"
                    :title="maskInfo.phoneNum"
                    :cell-style="cellStyle"></wxc-cell> -->
          <wxc-cell label="开始时间"
                    :title="maskInfo.startTime"
                    :cell-style="cellStyle"></wxc-cell>
          <wxc-cell label="结束时间"
                    :title="maskInfo.endTime"
                    :cell-style="cellStyle"></wxc-cell>
          <image :src="qrcodeUrl"
                 style="width:450px;height:450px"></image>
        </div>
      </wxc-mask>
    </scroller>
    <wxc-loading :show="showLoading"></wxc-loading>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import { WxcCell, WxcMask, WxcButton, WxcLoading } from 'weex-ui'
import { periodToRoom } from '../mixins/roomHandler.js'
const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
export default {
  name: 'Me',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    WxcCell,
    WxcMask,
    WxcButton,
    WxcLoading
  },
  created() {
    storage.getItem('token', event => {
      let token = event.data
      this.token = token
    })
    storage.getItem('userInfo', event => {
      const userInfo = JSON.parse(event.data)
      this.userInfo = userInfo
      this.getBookingInfo()
    })
  },
  data() {
    return {
      show: false,
      maskInfo: {},
      cellStyle: {
        marginLeft: '20px',
        marginRight: '20px'
      },
      messageList: [],
      msgReady: false,
      showLoading: false
    }
  },
  methods: {
    openMask(i) {
      const _this = this
      const index = this.messageList[i].id
      this.showLoading = true
      this.msgReady = false
      stream.fetch(
        {
          method: 'GET',
          url: `http://127.0.0.1:9092/getBookingInfo/${index}`,
          type: 'json',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + _this.token
          }
        },
        function(res) {
          if (res.status === 401) {
            _this.showLoading = false
            _this.msgReady = false
            modal.alert(
              {
                message: '登录过期，请重新登录！',
                okTitle: '重新登录'
              },
              function() {
                _this.$router.push('/login')
              }
            )
          } else if (res.data.code === 1) {
            const bookingTime = periodToRoom(res.data.info.period)
            const bookingDate = new Date(
              Number(res.data.info.reservationDate)
            ).toLocaleDateString()
            const startTime = bookingTime.split('-')[0]
            const endTime = bookingTime.split('-')[1]
            const bookingInfo = {
              trueName: res.data.info.truename,
              phoneNum: res.data.info.phoneNum,
              instrumentType: res.data.info.instrumentType,
              startTime: `${bookingDate} ${startTime}`,
              endTime: `${bookingDate} ${endTime}`,
              classroom: res.data.info.roomId
            }
            _this.maskInfo = bookingInfo
            _this.qrcodeUrl = `http://127.0.0.1:9092/${index}.png`
            setTimeout(function() {
              _this.showLoading = false
              _this.msgReady = true
            }, 500)
          } else {
            _this.showLoading = false
            _this.msgReady = false
            modal.toast({
              message: '服务器繁忙',
              duration: 1
            })
          }
        }
      )

      this.show = true
    },
    wxcMaskSetHidden() {
      this.show = false
    },
    getBookingInfo() {
      const _this = this
      stream.fetch(
        {
          method: 'GET',
          url: `http://127.0.0.1:9092/getBookingInfo?username=${
            _this.userInfo.username
          }`,
          type: 'json',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + _this.token
          }
        },
        function(res) {
          console.log(res)
          if (res.status === 401 || !res.data.code) {
            modal.alert(
              {
                message: '登录过期，请重新登录！',
                okTitle: '重新登录'
              },
              function() {
                _this.$router.push('/login')
              }
            )
          } else if (res.data.code === 1) {
            let rawData = res.data.data.sort(
              _this.sortBookingInfo('reservationDate')
            )
            const data = rawData.map(item => {
              const bookingTime = periodToRoom(item.period)
              const year = new Date(Number(item.reservationDate)).getFullYear()
              const month = new Date(Number(item.reservationDate)).getMonth()
              const date = new Date(Number(item.reservationDate)).getDate()
              const bookingDate = `${year}-${month + 1}-${date}`
              return {
                id: item.reservationId,
                title: `${item.roomId}琴房预约消息`,
                desc: `${bookingDate} ${bookingTime}`
              }
            })
            _this.messageList = data
            console.log(data)
          }
        }
      )
    },
    sortBookingInfo(property) {
      return function(obj1, obj2) {
        const value1 = obj1[property]
        const value2 = obj2[property]
        return value1 - value2
      }
    },
    signOut() {
      const _this = this
      modal.confirm(
        {
          message: '确认登出？',
          okTitle: '确认',
          cancelTitle: '取消'
        },
        function(value) {
          if (value === '确认') {
            storage.removeItem('userInfo')
            storage.removeItem('token')
            _this.$router.push('/welcome')
          }
        }
      )
    },
    changeUser() {
      const _this = this
      modal.confirm(
        {
          message: '确认登出？',
          okTitle: '确认',
          cancelTitle: '取消'
        },
        function(value) {
          if (value === '确认') {
            storage.removeItem('userInfo')
            storage.removeItem('token')
            _this.$router.push('/login')
          }
        }
      )
    }
  }
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
  align-items: center;
}
.scroller {
  position: absolute;
  top: 566px;
  left: 0;
  bottom: 200px;
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
  justify-content: center;
  align-items: center;
  /* align-items: center; */
}
.mask-title {
  font-size: 40px;
  color: #666;
  font-weight: bold;
  text-align: center;
}
.btn-group {
  position: absolute;
  top: 466px;
  flex-direction: row;
  justify-content: space-around;
  width: 700px;
}
</style>
