<template>
  <div class="home-wrapper">
    <wxc-tab-bar :tab-titles="tabIconFontTitles"
                 :tab-styles="tabIconFontStyles"
                 title-type="iconFont"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 第一个页面内容-->
      <div class="item-container">
        <TopBar></TopBar>
        <HeadBlock></HeadBlock>
        <MyCard class="home-card"></MyCard>
      </div>
      <!-- 第二个页面内容-->
      <div class="item-container"><text>我的</text></div>
    </wxc-tab-bar>
    <BookingBtn></BookingBtn>
  </div>
</template>
<script>
import { WxcTabBar } from 'weex-ui'
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import BookingBtn from '@/components/BookingBtn'
export default {
  name: 'HomePage',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    WxcTabBar,
    BookingBtn
  },
  created() {},
  data() {
    return {
      tabIconFontTitles: [
        {
          title: '首页',
          codePoint: '\ue64f'
        },
        {
          title: '我的',
          codePoint: '\ue61a'
        }
      ],
      tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#FF9900',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: '#FF9900',
        iconFontUrl: 'http://at.alicdn.com/t/font_1068180_lzkgwo6po4j.ttf'
      }
    }
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>

<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
.home-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e6efea;
  flex-direction: column;
  align-items: center;
}
.home-card {
  margin-top: -100px;
}
</style>
