// e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
// - H5      : images/test.jpg        images和所在html路径同级
// - Android : local:///test          local代表项目各dpi目录,一般放在hdpi里一张即可
// - iOS     : local///test.jpg       local代表从项目中全局扫描 test.jpg可放至项目中任何目录
export const getImg = function(img_name) {
  // 获取图片在三端上不同的路径
  let platform = weex.config.env.platform
  let img_path = ''
  if (platform == 'Web') {
    img_path = `src/images/${img_name}`
  } else if (platform == 'android') {
    //android 不需要后缀
    img_name = img_name.substr(0, img_name.lastIndexOf('.'))
    img_path = `local:///${img_name}`
  } else {
    img_path = `local:///${img_name}` // img_path = `../images/${img_name}`
  }
  return img_path
}

//导出接口
export default {
  getImg: getImg
}
