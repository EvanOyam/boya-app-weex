<template>
  <div class="booking-wrapper">
    <scroller class="scroller">
      <TopBar></TopBar>
      <HeadBlock></HeadBlock>
      <div class="front-card">
        <div class="bar">
          <text class="bar-label">请选择乐器类型</text>
        </div>
        <div class="checkbox-position-box">
          <wxc-grid-select :single="true"
                           :cols="3"
                           :customStyles="customStyles"
                           :list="roomTypeList"
                           @select="selectRoom">
          </wxc-grid-select>
        </div>
        <div class="bar">
          <text class="bar-label">请选择日期</text>
        </div>
        <div class="select-bar"
             @click="openPicker">
          <text class="select-date">{{selectDate}}</text>
          <text class="iconfont select-icon">&#xe65b;</text>
        </div>
      </div>
      <!-- 琴房列表 -->
      <div class="search-list-warp">
        <wxc-cell :label="item.room"
                  :title="item.time"
                  :has-arrow="true"
                  @wxcCellClicked="wxcCellClicked(index)"
                  v-for="(item,index) in roomList"
                  :key="index"></wxc-cell>
      </div>
      <div class="search-btn"
           @click="search">
        <text class="iconfont search-icon">&#xe614;</text>
      </div>
      <x-picker type="date"
                :show="showPicker"
                @overlayClick="pickerOverlayClick"
                @onchange="change"
                :yearSection="getYearSection"
                v-show="isShow" />
    </scroller>
  </div>
</template>
<script>
import TopBar from '../components/TopBar'
import HeadBlock from '../components/HeadBlock'
import { WxcGridSelect, WxcCell } from 'weex-ui'
import { XPicker } from 'weex-x-picker'
import { setTimeout } from 'timers'
import { roomToPeriod, periodToRoom } from '../mixins/roomHandler.js'
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
export default {
  name: 'Booking',
  components: {
    HeadBlock,
    TopBar,
    WxcGridSelect,
    XPicker,
    WxcCell
  },
  computed: {
    getYearSection() {
      var startYear = new Date().getFullYear()
      var endYear = new Date().getFullYear()
      return [startYear, endYear]
    }
  },
  data() {
    return {
      // 选择组件初始化时有闪烁的bug，用isShow延迟60毫秒处理闪烁问题
      isShow: false,
      showPicker: false,
      selectDate: '',
      customStyles: {
        lineSpacing: '14px',
        width: '200px',
        height: '90px',
        icon: '',
        color: '#333333',
        checkedColor: '#ffffff',
        disabledColor: '#eeeeee',
        borderColor: '#666666',
        checkedBorderColor: '#54AD7B',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#54AD7B'
      },
      instrument: '吉他',
      roomTypeList: [
        {
          title: '吉他',
          checked: true
        },
        {
          title: '钢琴'
        },
        {
          title: '尤克里里'
        },
        {
          title: '古筝'
        },
        {
          title: '架子鼓'
        },
        {
          title: '小提琴'
        }
      ],
      roomList: [],
      bookingInfo: {}
    }
  },
  created() {
    storage.getItem('userInfo', event => {
      let userInfo = event.data
      if (userInfo === 'undefined' || userInfo === undefined) {
        console.log('unlogin')
      } else {
        userInfo = JSON.parse(userInfo)
        this.userInfo = userInfo
      }
    })
  },
  methods: {
    selectRoom(res) {
      const title = res.checkedList[0].title
      this.instrument = title
    },
    openPicker() {
      const _this = this
      this.showPicker = true
      setTimeout(function() {
        _this.isShow = true
      }, 60)
    },
    pickerOverlayClick(e) {
      this.showPicker = false
      this.isShow = false
    },
    // 日期选择事件
    change(e) {
      const rawDate = e.titles.join('-')
      let date = new Date(rawDate).toLocaleDateString()
      this.time = new Date(rawDate).valueOf()
      this.selectDate = date
    },
    // 预约点击事件
    wxcCellClicked(i) {
      const _this = this
      modal.confirm(
        {
          message: '确认预约当前琴房？',
          okTitle: '确认',
          cancelTitle: '取消'
        },
        function(value) {
          if (value === '确认') {
            if (_this.userInfo.truename && _this.userInfo.phoneNum) {
              const period = roomToPeriod(_this.roomList[i].time)
              const rawBody = {
                username: _this.userInfo.username,
                truename: _this.userInfo.truename,
                phoneNum: _this.userInfo.phoneNum,
                roomId: _this.roomList[i].room,
                instrumentType: _this.instrument,
                reservationDate: _this.time,
                period: period
              }
              console.log(rawBody)
              const body = JSON.stringify(rawBody)
              let token
              storage.getItem('token', event => {
                token = event.data
              })
              stream.fetch(
                {
                  method: 'POST',
                  url: 'http://172.22.15.76:9091/roombooking',
                  type: 'json',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                  },
                  body: body
                },
                function(res) {
                  modal.toast({
                    message: res.data.msg,
                    duration: 1
                  })
                  if (res.data.code === 1) {
                    const searchData = {
                      instrument: _this.instrument,
                      date: _this.time
                    }
                    _this.getRoomList(searchData)
                  }
                }
              )
            } else {
              modal.toast({
                message: '请先完成身份认证',
                duration: 1
              })
              setTimeout(function() {
                _this.$router.push('/update')
              }, 1000)
            }
          } else {
            modal.toast({
              message: '已取消',
              duration: 1
            })
          }
        }
      )
    },
    // 搜索琴房
    search() {
      if (!this.time) {
        modal.toast({
          message: '请选择日期',
          duration: 1
        })
      } else {
        const searchData = {
          instrument: this.instrument,
          date: this.time
        }
        console.log(searchData)
        this.getRoomList(searchData)
      }
    },
    initRoom(room) {
      let roomList = []
      for (let i in room) {
        for (let j = 1; j < 13; j++) {
          const time = `${j + 8}:00-${j + 9}:00`
          const item = {
            room: String(room[i]),
            time: time
          }
          roomList.push(item)
        }
      }
      return roomList
    },
    getRoomList(searchData) {
      const { instrument, date } = searchData
      const _this = this
      stream.fetch(
        {
          method: 'GET',
          url: `http://172.22.15.76:9091/getroominfo?instrument=${instrument}&date=${date}`,
          type: 'json'
        },
        function(res) {
          if (!res.ok) {
            modal.toast({
              message: '服务器繁忙',
              duration: 2
            })
          } else {
            const instrumentRoom = res.data.data.roomList
            const roomData = res.data.data.roomData.map(item => {
              const time = periodToRoom(item.period)
              const newItem = {
                room: item.roomId,
                time
              }
              return newItem
            })
            let initRoomList = _this.initRoom(instrumentRoom)
            let newRoomList = initRoomList.filter(item => {
              let isMatch = true
              for (let i in roomData) {
                if (
                  roomData[i].room === item.room &&
                  roomData[i].time === item.time
                ) {
                  isMatch = false
                }
              }
              return isMatch
            })
            _this.roomList = newRoomList
            console.log('newRoomList', newRoomList)
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.booking-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.scroller {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #e6efea;
  align-items: center;
}
.front-card {
  width: 680px;
  height: 650px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 330px;
  margin-top: -100px;
  left: 375px;
  margin-left: -340px;
  overflow: hidden;
  align-items: center;
}
.checkbox-position-box {
  padding: 30px 20px;
  width: 680px;
}
.bar {
  width: 680px;
  height: 99px;
  background-color: #ffb200;
  align-items: center;
  justify-content: center;
}
.bar-label {
  color: #fff;
  font-size: 32px;
}
.select-bar {
  width: 646px;
  height: 80px;
  border: #aaaaaa solid 2px;
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px 100px 10px 40px;
  justify-content: center;
  position: relative;
}
.iconfont {
  font-family: iconfont;
}
.select-icon {
  position: absolute;
  right: 20px;
  font-size: 46px;
  color: #aaaaaa;
}
.select-date {
  font-size: 36px;
  color: #666;
}
.search-btn {
  width: 130px;
  height: 130px;
  position: absolute;
  top: 880px;
  border-radius: 130px;
  background-color: #ff9900;
  margin-top: -65px;
  align-items: center;
  justify-content: center;
}
.search-icon {
  font-size: 110px;
  color: #fff;
}
.search-list-warp {
  width: 680px;
  position: absolute;
  top: 980px;
  border-radius: 10px;
  margin-bottom: 30px;
}
</style>
