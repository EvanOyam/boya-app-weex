<template>
  <div class="message-card"
       @click="openBottomPopup">
    <div class="card-shadow">
      <div class="front-card">
        <div class="logo-box"
             :style="{backgroundColor:backgroundColor}">
          <text class="iconfont icon">{{handleIconType}}</text>
        </div>
        <div class="text-box">
          <div>
            <text class="text-title common-text">{{cardTextTitle}}>></text>
          </div>
          <div>
            <text class="text-description common-text">{{cardTextDescription}}</text>
          </div>
          <div>
            <text class="text-cardTextTime common-text">{{cardTextTime}}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MessageCard',
  created() {
    this.$getIcon()
  },
  props: {
    iconType: {
      type: String,
      default: 'course'
    },
    cardTextTitle: {
      type: String,
      default: '标题'
    },
    cardTextDescription: {
      type: String,
      default: '这里是关于这则消息的详情'
    },
    cardTextTime: {
      type: String,
      default() {
        return new Date().toLocaleString()
      }
    }
  },
  data() {
    return {
      backgroundColor: ''
    }
  },
  methods: {
    openBottomPopup() {
      this.$emit('openBottomPopup')
    }
  },
  computed: {
    handleIconType() {
      const _this = this
      let iconType = this.iconType
      switch (iconType) {
        case 'course':
          _this.backgroundColor = '#5BC8FF'
          iconType = '\ue603'
          break
        case 'message':
          _this.backgroundColor = '#7fc159'
          iconType = '\ue600'
          break
        case 'commodity':
          _this.backgroundColor = '#FFAA3D'
          iconType = '\ue653'
          break
        default:
          break
      }
      return iconType
    }
  }
}
</script>

<style scoped>
.front-card {
  width: 675px;
  height: 160px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px 20px 30px;
}
.card-shadow {
  width: 682px;
  height: 166px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.03);
}
.logo-box {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 8px solid #e2e2e2;
  justify-content: center;
  align-items: center;
}
.logo-img {
  width: 120px;
  height: 120px;
}
.text-box {
  height: 120px;
  flex: 1;
  justify-content: center;
  align-items: stretch;
}
.text-title {
  font-size: 30px;
  font-weight: bold;
  color: #666;
}
.text-description {
  font-size: 28px;
  color: #999;
}
.text-cardTextTime {
  font-size: 26px;
  color: #ccc;
}
.common-text {
  lines: 1;
  text-align: right;
  padding-left: 30px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.iconfont {
  font-family: iconfont;
}
.icon {
  color: #fafafa;
  font-size: 50px;
  font-weight: bold;
}
</style>
