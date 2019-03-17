<template>
  <div class="booking-wrapper">
    <TopBar></TopBar>
    <HeadBlock></HeadBlock>
    <div class="front-card">
      <div class="bar">
        <text class="bar-label">请选择乐器类型</text>
      </div>
      <wxc-grid-select :single="true"
                       :cols="3"
                       :customStyles="customStyles"
                       :list="roomData"
                       @select="selectRoom">
      </wxc-grid-select>
    </div>
  </div>
</template>
<script>
import TopBar from '../components/TopBar'
import HeadBlock from '../components/HeadBlock'
import { WxcGridSelect } from 'weex-ui'
export default {
  name: 'Booking',
  components: {
    HeadBlock,
    TopBar,
    WxcGridSelect
  },
  data() {
    return {
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
<style>
.grid-select {
  padding: 20px;
}
</style>
