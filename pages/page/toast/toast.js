// pages/page/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:{}
  },
  showToast:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
    })
  },
  showModal:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      showCancel:true,
      cancelText:"点击取消",
      cancelColor:"red",
      confirmText:"点击确认",
      confirmColor:"green",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
      complete:function(){
        console.log("模态框操作完成")
      }
    })
  },
  hideLoading:function(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet:function(){
    wx.showActionSheet({
      itemList: ['小艳', '郑婷', '龙哥','虎哥','瑞哥','聪锐'],
      itemColor:"blue",
      success: function (res) {
        if(!res.cancel){
          console.log(res.tapIndex)
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  setNavigationBarTitle:function(){
    wx.setNavigationBarTitle({
      title: '这是我的页面',
      success:function(){
        wx.navigateTo({
          url: '../wxml/wxml',
        })
      }
    })
  },
  showNavigationBarLoading:function(){
    wx.showNavigationBarLoading()
  },
  hideNavigationBarLoading:function(){
    wx.hideNavigationBarLoading()
  },
  showAnimationPage:function(){
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
      animation: {
        duration: 1000,
        timingFunc: 'easeIn'
      }
    })
  },
  showAnimation:function(){
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2,3).rotate(60).translate(200).skew(60).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(200).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 2000)
    this.rotateAndScale();
    this.rotateThenScale();
    this.rotateAndScaleThenTranslate();
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
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