// e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
// - H5      : images/test.jpg        images和所在html路径同级
// - Android : local:///test          local代表项目各dpi目录,一般放在hdpi里一张即可
// - iOS     : local///test.jpg       local代表从项目中全局扫描 test.jpg可放至项目中任何目录
const getImg = function(imgName) {
  // 获取图片在三端上不同的路径
  let platform = weex.config.env.platform
  let imgPath = ''
  if (platform === 'Web') {
    imgPath = `src/images/${imgName}`
  } else if (platform === 'android') {
    // android不需要后缀
    imgName = imgName.substr(0, imgName.lastIndexOf('.'))
    imgPath = `local:///${imgName}`
  } else {
    imgPath = `local:///${imgName}` // imgPath = `../images/${imgName}`
  }
  return imgPath
}

// 导出接口
export default getImg
