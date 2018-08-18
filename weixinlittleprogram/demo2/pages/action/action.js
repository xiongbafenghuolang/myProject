// pages/action/action.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden:true,
    actionSheetItems:["医生","老师","警察","其他"],
    modalHidden:true,
    toastHidden:true,
    loadingHidden:true
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
  actionSheetTap:function(e){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange:function(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    console.log("点击ation-sheet-cancel，会触发action-sheet绑定的事件。在这里可以通过改变hidden控制菜单的隐藏");
  },
  bindItemTap:function(e){
    console.log("data-name+++++++++:"+e.currentTarget.dataset.name)
    console.log("data-type+++++++++"+e.currentTarget.dataset.type)
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  modalTap:function(){
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  modalChange:function(){
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  toastTap:function(){
    this.setData({
      toastHidden: !this.data.toastHidden
    })
  },
  toastChange: function () {
    this.setData({
      toastHidden: !this.data.toastHidden
    })
  },
  loadingChange:function(){
    
  },
  loadingTap:function(e){
    var that = this;
    this.setData({
      loadingHidden: !this.data.loadingHidden
    })
    setTimeout(function(){
      that.setData({
        loadingHidden:true
      })
    },2000)
  }
})