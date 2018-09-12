// pages/mydocList/mydocInto/mydocInto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docIntoData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var docId = options.id;
    var that = this;
    wx.request({
      url: 'https://www.haoniuzhongyi.cn/easydoctorv2-ws/testRequest/showDocScheduling?docid=' + docId+'&openId=ouK-vwv4hANp3-zvvryvtRtcYrn0&entry=1',
      method:"GET",
      success:function(res){
        var docIntoData = res.data;
        console.log(docIntoData);
        that.setData({
          docIntoData: docIntoData,
        })
      }
    })
  },
  goodAtManagement:function(event){
    var excel = event.currentTarget.dataset.excel;
    wx.navigateTo({
      url: 'goodAtManagement/goodAtManagement?excel=' + excel,
    })
  },
  docIntoFun:function(event){
    var ysjj = event.currentTarget.dataset.ysjj;
    console.log(ysjj);
    wx.navigateTo({
      url: 'docIntoDetail/docIntoDetail?ysjj=' + ysjj,
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