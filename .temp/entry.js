import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */

//全局引入图片路径处理方法
import getImg from '@/mixins/getImg'
import getIcon from '@/mixins/getIcon';
Vue.prototype.$getImg = getImg
Vue.prototype.$getIcon = getIcon
weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')
