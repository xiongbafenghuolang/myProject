// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['打篮球', '唱歌', '游泳', '健身', '旅游'],
    index:2,
    timeval:"00:00",
    dateval:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  },
  bindpickerChange:function(e){
    console.log("picker发送选择改变携带值为："+ e.detail.value);
    this.setData({
      index:e.detail.value
    })
  },
  bindtimechange:function(e){
    console.log(e);
    this.setData({
      timeval:e.detail.value
    })
  },
  binddatechange:function(e){
    this.setData({
      dateval:e.detail.value
    })
  },
  formSubmit:function(e){
    console.log(e.detail.value)
  },
  formReset:function(e){
    console.log(e)
  }
})