// pages/mydocList/mydocList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docList: [],
    loadingHidden: true,
    unreadHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDocdata();
  },
  getDocdata:function(){
    var that = this;
    that.setData({
      hiddenLoading: !that.data.loadingHidden
    })
    wx.request({
      url: 'https://www.haoniuzhongyi.cn/easydoctorv2-ws/testRequest/getDocIntoList',
      method: "GET",
      data: {},
      success: function (res) {
        var docList = res.data;
        that.setData({
          docList: docList,
          loadingHidden: that.data.loadingHidden 
        });
        console.log(docList)
        wx.showToast({
          title: "获取数据成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function () {
        var toastText = '获取数据失败' + JSON.stringify(e);
        that.setData({
          hiddenLoading: !that.data.hiddenLoading
        });
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        })
      }
    })
  },
  onTapDocInto:function(event){
    var docId = event.currentTarget.dataset.docId
    wx.navigateTo({
      url: 'mydocInto/mydocInto?id=' + docId,
    })

  },
  immediateConsult: function (event){
    console.log(event)
    var docId = event.currentTarget.dataset.docId
    wx.navigateTo({
      url: '../chat/chat?id=' + docId,
    })
  },
  consultCustom:function(event){
  
    wx.navigateTo({
      url: '../chat/chat',
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