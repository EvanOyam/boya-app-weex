// 初始化iconfont文件位置
// - H5      : 使用在线资源
// - Android : local:///font
// - iOS     : 未测试
const getIcon = function() {
  let dom = weex.requireModule('dom')
  // 通过获取platform判断加载字体文件的路径,(待完善,在手机的playground中,是无法加载本地文件的)
  let platform = weex.config.env.platform.toLowerCase()
  let url
  if (platform === 'android') {
    // 本地资源采用'local:// '的方式加载
    // 第三个斜杠是代表当前目录,对于android来说,如果加载的是字体,那么就是assets目录,同理`/iconfont.ttf'`就是加载`assets`目录下的iconfont.ttf文件
    // 注意这里将字体文件放在'assets/font/'目录下
    url = "url('local:///font/iconfont.ttf')"
  } else if (platform === 'ios') {
    // ios未测试
    url = "url('local:///font/iconfont.ttf')"
  } else {
    url = "url('http://at.alicdn.com/t/font_1068180_72sxq1l9k0l.ttf')"
  }
  dom.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: url
  })
}

// 导出接口
export default getIcon
