// pages/wxml/wxml.js
  var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [{ msg: '11111111' }, { msg: '2222222' }],
    name1:"",
    name2:"",
    data:{
      userName:"吴雄",
      tel:14756893406
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name1:"aaaaa",
      name2:"bbbbb"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("route="+this.route);
    console.log("name1="+this.data.name1);
    console.log("name2="+this.data.name2);
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
    return {
      title: '测试一哈转发功能',
      desc:"吴雄",
      path: '/page/user?id=123'
    }
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  
  }
})