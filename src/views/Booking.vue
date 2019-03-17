<template>
  <div class="booking-wrapper">
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
                         :list="roomData"
                         @select="selectRoom">
        </wxc-grid-select>
      </div>
      <div class="bar">
        <text class="bar-label"
              @click="openPicker">请选择日期</text>
      </div>
    </div>
    <x-picker type="single"
              :show="showPicker"
              :dataset="list"
              @overlayClick="pickerOverlayClick"
              @onchange="change"
              v-show="isShow" />
  </div>
</template>
<script>
import TopBar from '../components/TopBar'
import HeadBlock from '../components/HeadBlock'
import { WxcGridSelect } from 'weex-ui'
import { XPicker } from 'weex-x-picker'
export default {
  name: 'Booking',
  components: {
    HeadBlock,
    TopBar,
    WxcGridSelect,
    XPicker
  },
  data() {
    return {
      // 选择组件初始化时有闪烁的bug，用isShow延迟60毫秒处理闪烁问题
      isShow: false,
      showPicker: false,
      list: [
        { title: '金星' },
        { title: '木星' },
        { title: '水星' },
        { title: '火星' },
        { title: '地球' },
        { title: '天王星' },
        { title: '海王星' },
        { title: '冥王星' },
        { title: '哈雷彗星' }
      ],
      customStyles: {
        lineSpacing: '14px',
        width: '200px',
        height: '90px',
        icon: '',
        color: '#333333',
        checkedColor: '#ffffff',
        disabledColor: '#eeeeee',
        borderColor: '#666666',
        checkedBorderColor: '#ffb200',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#ffb200'
      },
      roomData: [
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
    change(e) {
      console.log('change')
      //   console.log(e)
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
  background-color: #e6efea;
  align-items: center;
}
.front-card {
  width: 680px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 330px;
  margin-top: -100px;
  left: 375px;
  margin-left: -340px;
  overflow: hidden;
}
.checkbox-position-box {
  padding: 30px 20px;
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
</style>
