//app.js
App({
  globalData:1,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        var code = res.code //返回code
        console.log(code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=' + code + '&grant_type=authorization_code',
            data: {
              appid:'wxe7457a81b671a25d',
              code:code
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res)
             var openid = res.data.openid //返回openid
              console.log(openid)
            }
          })
        } else {
          console.log("用户登录失败" + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  gloablFun:function(){
    console.log("吴雄测试一哈全局函数")
  }
})