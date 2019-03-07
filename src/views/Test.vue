<template>
  <scroller class="scroller">
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
  <!-- <div class="wxc-demo">
    <scroller class="scroller">
      <div class="wrapper">
        <wxc-ep-slider :slider-id="1"
                       :card-length='5'
                       ref="wxc-ep-slider"
                       :card-s="cardSize"
                       :auto-play="true"
                       :select-index="0"
                       :interval="5000"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected"> -->
  <!--自动生成demo-->
  <!-- <wxc-pan-item v-for="(v,index) in [1,2,3,4,5]"
                        :key="index"
                        :extId="index"
                        :class="['slider',`slider${index}`]"
                        @wxcPanItemPan="wxcPanItemPan"
                        @wxcPanItemClicked="wxcPanItemClicked"
                        :slot="`card${index}_1`"
                        :accessible="true"
                        :aria-label="`这里是第${index + 1}个滑块`">
            <text class="text">这里是第{{index + 1}}个滑块</text>
          </wxc-pan-item> -->
  <!-- <wxc-pan-item v-for="(item,index) in imgList"
                        :key="index"
                        :class="['slider',`slider${index}`]"
                        @wxcPanItemPan="wxcPanItemPan"
                        :slot="`card${index}_1`"
                        :accessible="true">
            <image class="sliderImg"
                   @click="handleClick(index)"
                   :src="item.src"></image>
          </wxc-pan-item>
        </wxc-ep-slider>
      </div>
    </scroller>
  </div> -->
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}
.scroller {
  flex: 1;
}
/* .wrapper {
  padding-top: 40px;
}
.text {
  font-size: 32px;
  color: #333333;
} */
.slider {
  width: 560px;
  height: 640px;
  background-color: #c3413d;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
.sliderImg {
  width: 560px;
  height: 640px;
  border-radius: 16px;
}
.slider1 {
  background-color: #635147;
}
.slider2 {
  background-color: #ffc302;
}
.slider3 {
  background-color: #ff9090;
}
.slider4 {
  background-color: #546e7a;
}
/* .more-slider {
  width: 100px;
  height: 300px;
  background-color: #ffc302;
} */
.scroller {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<script>
import { WxcEpSlider, WxcPanItem, BindEnv } from 'weex-ui'
export default {
  components: { WxcEpSlider, WxcPanItem },
  data: () => ({
    cardLength: 5,
    cardSize: {
      width: 560,
      height: 640,
      spacing: 16,
      scale: 0.9
    },
    imgList: [
      { id: 1, src: 'https://s2.ax1x.com/2019/03/04/kOsGD0.png' },
      { id: 2, src: 'https://s2.ax1x.com/2019/03/04/kOs8uq.png' },
      { id: 3, src: 'https://s2.ax1x.com/2019/03/04/kOsJbV.png' },
      { id: 4, src: 'https://s2.ax1x.com/2019/03/04/kOs1vn.png' },
      { id: 5, src: 'https://s2.ax1x.com/2019/03/04/kOslgs.png' }
    ]
  }),
  methods: {
    wxcEpSliderCurrentIndexSelected(e) {
      // const index = e.currentIndex
      // console.log(index)
    },
    wxcPanItemPan(e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-ep-slider'].clearAutoPlay()
        this.$refs['wxc-ep-slider'].bindExp(e.element)
      }
    },
    handleClick(idx) {
      console.log(idx)
    }
  }
}
</script>
