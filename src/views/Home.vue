<template>
  <div class="home-wrapper">
    <wxc-tab-bar :tab-titles="tabIconFontTitles"
                 :tab-styles="tabIconFontStyles"
                 title-type="iconFont"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <scroller class="scroller"
                :style="`height:${scrollerHeight}px`">
        <!-- 第一个页面内容-->
        <div class="item-container">
          <TopBar></TopBar>
          <HeadBlock></HeadBlock>
          <MyCard class="home-card"></MyCard>
          <div class="ad-card-box">
            <div>
              <text class="ad-card-title">推荐的课程</text>
            </div>
            <div>
              <text class="ad-card-more"
                    @click="gotoTest">查看更多></text>
            </div>
          </div>
          <slider class="slider"
                  interval="3000"
                  keep-index="false"
                  auto-play="true">
            <div class="frame"
                 v-for="(img,index) in imageList"
                 :key="index">
              <image class="image"
                     resize="cover"
                     :src="img.src"></image>
            </div>
          </slider>
          <div class="ad-card-box">
            <div>
              <text class="ad-card-title">推荐的课程</text>
            </div>
            <div>
              <text class="ad-card-more"
                    @click="gotoTest">查看更多></text>
            </div>
          </div>
          <slider class="slider"
                  interval="3000"
                  keep-index="false"
                  auto-play="true">
            <div class="frame"
                 v-for="(img,index) in imageList"
                 :key="index">
              <image class="image"
                     resize="cover"
                     :src="img.src"></image>
            </div>
          </slider>
          <div class="ad-card-box">
            <div>
              <text class="ad-card-title">推荐的课程</text>
            </div>
            <div>
              <text class="ad-card-more"
                    @click="gotoTest">查看更多></text>
            </div>
          </div>
          <slider class="slider"
                  interval="3000"
                  keep-index="false"
                  auto-play="true">
            <div class="frame"
                 v-for="(img,index) in imageList"
                 :key="index">
              <image class="image"
                     resize="cover"
                     :src="img.src"></image>
            </div>
          </slider>
        </div>
      </scroller>
      <!-- 第二个页面内容-->
      <div class="item-container">
      </div>
    </wxc-tab-bar>
    <BookingBtn class="bookingBtn"></BookingBtn>
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
  created() {
    this.scrollerHeight = weex.config.env.deviceHeight - 200
    console.log(this.scrollerHeight)
  },
  data() {
    return {
      imageList: [
        {
          src: 'https://s2.ax1x.com/2019/03/04/kOsGD0.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/03/04/kOs8uq.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/03/04/kOsJbV.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/03/04/kOs1vn.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/03/04/kOslgs.png'
        }
      ],
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
    },
    wxcEpSliderCurrentIndexSelected(e) {
      const index = e.currentIndex
      console.log(index)
    },
    gotoTest() {
      this.$router.push('/test')
    }
  }
}
</script>

<style scoped>
.bookingBtn {
  position: absolute;
  bottom: 0;
}
.scroller {
  width: 750px;
}
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
.slider {
  width: 675px;
  height: 460px;
  border-radius: 16px;
}
.frame {
  width: 675px;
  height: 460px;
  border-radius: 16px;
  position: relative;
}
.image {
  width: 675px;
  height: 460px;
  border-radius: 16px;
}
.ad-card-box {
  width: 675px;
  height: 100px;
  line-height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.ad-card-title {
  font-size: 38px;
  font-weight: bold;
  color: #333;
}
.ad-card-more {
  color: #6e8ca0;
  font-size: 32px;
}
.ad-card-box {
  margin-top: 20px;
}
</style>
<style>
/* .tab-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
} */
</style>
