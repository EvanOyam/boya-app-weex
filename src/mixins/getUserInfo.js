const storage = weex.requireModule('storage')

const getUserInfo = function() {
  let userInfo
  storage.getItem('userInfo', event => {
    userInfo = event.data
  })
  return userInfo
}

export default getUserInfo
