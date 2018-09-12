// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster:"../../images/a.jpg",//一首歌的封面
    author:"于荣光",
    name:"此时此刻",
    src:"https://xcx.haoniuzhongyi.cn/miniprogram/filestore/voices/2018/0615/192.168.22.105/2018061509291570064.mp3"
  },
  audioPlay:function(){
    this.setData({
      action:{
        method:"play"
      }
    })
  },
  audioPause:function(){
    this.setData({
      action:{
        method:"pause"
      }
    })
  },
  audioBackOne:function(e){
    console.log(this)
    this.setData({
      action: {
        method: "setPlaybackRate",
        data:2
      }
    })
  },
  audioBackTwo: function () {
    this.setData({
      action: {
        method: "setPlaybackRate",
        data:1
      }
    })
  },
  audioBackThr: function () {
    this.setData({
      action: {
        method: "setPlaybackRate",
        data:0.5
      }
    })
  },
  audio14:function(){
    this.setData({
      action: {
        method: "setCurrentTime",
        data: 14
      }
    })
  },
  audioStart:function(){
    this.setData({
      action: {
        method: "setCurrentTime",
        data: 0
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myaudio')
    console.log(this.audioCtx)
    this.audioCtx.setSrc("https://xcx.haoniuzhongyi.cn/miniprogram/filestore/voices/2018/0615/192.168.22.105/2018061509291570064.mp3")
    this.audioCtx.play()
  },
  audioPlay1:function(){
    this.audioCtx.play()
  },
  audioPause1:function(){
    this.audioCtx.pause()
  },
  audioStart1:function(){
    this.audioCtx.seek(0)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})