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
                  @wxcCellClicked="wxcCellClicked"
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
      roomList: [
        {
          room: '201',
          time: '9:00-10:00'
        },
        {
          room: '207',
          time: '9:00-10:00'
        },
        {
          room: '210',
          time: '13:00-14:00'
        },
        {
          room: '201',
          time: '13:00-14:00'
        },
        {
          room: '210',
          time: '10:00-11:00'
        },
        {
          room: '207',
          time: '19:00-20:00'
        },
        {
          room: '201',
          time: '15:00-16:00'
        }
      ]
    }
  },
  methods: {
    selectRoom() {
      console.log('select room')
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
      console.log(e)
      let date = new Date(e.titles.join('-')).toLocaleDateString()
      this.selectDate = date
    },
    // 预约点击事件
    wxcCellClicked(e) {
      console.log(e)
    },
    // 搜索琴房
    search() {
      console.log('search')
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
