//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arr:[{
      a:1,
      b:2,
      c:3,
      d:4
    }],
    id:0,
    length:8
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToscroll:function(){
    wx.navigateTo({
      url: '../scrollview/scrollview'
    })
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("从上向下拉去刷新");
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log("从下向上拉去刷新");
  },
  onShareAppMessage: function () {
    return {
      title: '我想要转发一个东东',
      path: '/page/user?id=123'
    }
  },
  goAudio:function(){
    wx.navigateTo({
      url: "../audio/audio"
    })
  },
  goToImage:function(){
    wx.navigateTo({
      url: "../image/image"
    })
  }
})
