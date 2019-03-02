/* global Vue */

//全局引入图片路径处理方法
import getImg from '@/mixins/getImg'
Vue.prototype.$getImg = getImg
/* weex initialized here, please do not move this line */
const { router } = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')
