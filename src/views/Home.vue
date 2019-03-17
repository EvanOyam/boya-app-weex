<template>
  <div class="home-wrapper">
    <scroller class="scroller">
      <TopBar></TopBar>
      <HeadBlock></HeadBlock>
      <MyCard class="home-card"
              :isLogin="isLogin"></MyCard>
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
      <MessageCard class="home-message-card"
                   v-for="(item,index) in messageList"
                   @openBottomPopup="showPopup(index)"
                   :key="index"
                   :cardTextTitle="item.cardTextTitle"
                   :cardTextDescription="item.cardTextDescription"
                   :cardTextTime="item.cardTextTime"
                   :iconType="item.iconType" />
      <div class="clearBox"></div>
    </scroller>
    <wxc-popup popup-color="#e6efea"
               :show="isBottomShow"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="bottom"
               height="500">
      <div class="msg-popup-content">
        <text class="msg-popup-title">{{popupTitle}}</text>
        <text class="msg-popup-time">{{popupTime}}</text>
        <text class="msg-popup-desc">{{popupDesc}}</text>
      </div>
    </wxc-popup>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import HeadBlock from '@/components/HeadBlock'
import MyCard from '@/components/MyCard'
import MessageCard from '@/components/MessageCard'
import { WxcPopup } from 'weex-ui'
export default {
  name: 'HomePage',
  components: {
    TopBar,
    HeadBlock,
    MyCard,
    MessageCard,
    WxcPopup
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isBottomShow: false,
      popupTitle: '标题',
      popupTime: new Date().toLocaleString(),
      popupDesc:
        '与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。',
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
      messageList: [
        {
          cardTextTitle: '吉他大班本周9折',
          cardTextDescription:
            '为了迎接新学期的到来，同时祝贺本店成立3周年，本周报名吉他大班，一律享受9折优惠！三人报名，每人折上再打8折！',
          cardTextTime: new Date().toLocaleString(),
          iconType: 'course'
        },
        {
          cardTextTitle: 'saga吉他到货',
          cardTextDescription:
            '网红款吉他，saga-sf700现货发售！980元送琴箱，送背带，送拨片，送变调夹！全网最低价，欢迎比价淘宝京东！',
          cardTextTime: new Date().toLocaleString(),
          iconType: 'commodity'
        },
        {
          cardTextTitle: 'bandlive音乐节',
          cardTextDescription:
            'bandlive摇滚音乐之夜将于5月13号在风雨球场举行，伯雅音乐社独家送票！参演乐队包括曾书记007乐队，北京特邀嘉宾超级童颜，以及bandlive的4支校乐队！',
          cardTextTime: new Date().toLocaleString(),
          iconType: 'message'
        },
        {
          cardTextTitle: '报名送琴',
          cardTextDescription:
            '即日起至月底，凡是在伯雅音乐社报名尤克里里小班的小伙伴，只要将报名链接发送至朋友圈，将免费获赠uku尤克里里一把。赶快拉上小伙伴一起来吧！',
          cardTextTime: new Date().toLocaleString(),
          iconType: 'message'
        }
      ]
    }
  },
  methods: {
    gotoTest() {
      this.$router.push('/test')
    },
    showPopup(i) {
      this.popupTitle = this.messageList[i].cardTextTitle
      this.popupTime = this.messageList[i].cardTextTime
      this.popupDesc = this.messageList[i].cardTextDescription
      this.isBottomShow = true
    },
    // 非状态组件，需要在这里关闭
    popupOverlayBottomClick() {
      this.isBottomShow = false
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
.wxc-popup {
  z-index: 999;
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
  margin-top: 26px;
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
  margin-bottom: 10px;
}
.clearBox {
  width: 750px;
  height: 200px;
}
.ad-card-box {
  margin-bottom: 40px;
}
.msg-popup-content {
  height: 400px;
  width: 680px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 35px;
  padding: 40px 20px 20px 30px;
}
.msg-popup-desc {
  color: #666;
  font-size: 30px;
  margin-top: 30px;
}
.msg-popup-title {
  color: #666;
  font-size: 40px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  lines: 1;
}
.msg-popup-time {
  color: #999;
  font-size: 28px;
}
</style>
