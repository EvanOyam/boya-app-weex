<template>
  <div class="home-wrapper">
    <scroller class="scroller">
      <TopBar></TopBar>
      <HeadBlock></HeadBlock>
      <MyCard class="home-card"></MyCard>
      <div class="ad-card-box">
        <div class="ad-title-box">
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
      <MessageCard class="home-message-card"></MessageCard>
      <MessageCard class="home-message-card"></MessageCard>
      <MessageCard class="home-message-card"></MessageCard>
      <MessageCard class="home-message-card"></MessageCard>
      <MessageCard class="home-message-card"
                   style="marginBottom:200px"></MessageCard>
    </scroller>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import MessageCard from '@/components/MessageCard'
export default {
  name: 'HomePage',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    MessageCard
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
      ]
    }
  },
  methods: {
    gotoTest() {
      this.$router.push('/test')
    }
  }
}
</script>
<style>
.weex-scroller-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped>
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
.home-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
.ad-title-box {
  width: 675px;
  height: 100px;
  line-height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
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
.home-message-card {
  margin-top: 40px;
}
</style>
