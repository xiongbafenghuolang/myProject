// pages/swiper/swiper.js
var dataObj = require("../../data/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/images/swiper/1.JPEG",
      "/images/swiper/2.JPEG",
      "/images/swiper/3.JPEG",
      "/images/swiper/4.JPEG",
    ],
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    duration:500,
    circular:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changeIndicatorDots:function(e){
    console.log("面板指点");
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay:function(e){
    console.log("自动播放");
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeIterval:function(e){
    this.setData({
      interval:e.detail.value
    })
  },
  changeDuration:function(e){
    this.setData({
      duration:e.detail.value
    })
  },
  onTapJump:function(){
    wx.redirectTo({
      url: "../wxss/wxss",
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log()
      }
    })
  },
  onLoad: function (options) {
    this.setData({
      swiperList:dataObj.swiperList
    })
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
  
  }
})