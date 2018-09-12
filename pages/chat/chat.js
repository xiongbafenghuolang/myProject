// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制发送按钮是否显示
    sendBtnFlag:true,
    // 控制+按钮是否显示
    moreBtnFlag:false,
    // 控制图片面板是否显示
    sendMoreMsgFlag:true,
    // 控制textarea组件的初始值
    keyboardInputValue:'',
    // 保存已选择的图片
    chooseFiles:[]
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
  bindChatInput:function(event){
    // console.log(event);
    var val = event.detail.value;
    var pos = event.detail.cursor;
    // console.log(val);
    this.data.keyboardInputValue = val
    // return val + "**"
    // if(pos !=-1) {
    //   var left = event.detail.value.slice(0,pos);
    //   console.log(left);
    //   pos = left.replace(/qq/g,"*").length;
    // }

    // return {
    //   value:val.replace(/qq/g,"*"),
    //   cursor:pos
    // }
  },
  bindChatFocus:function(){
    this.setSelectionRange(0, 0); 
    this.setData({
      sendBtnFlag: false,
      moreBtnFlag: true,
      sendMoreMsgFlag: true
    })
  },
  bindChatBlur:function(){
    this.setData({
      sendBtnFlag: true,
      moreBtnFlag: false
    })
    this.showCommitSucessToast();
  },
  submiContent:function(){
    var newData = {
      username:"青石",
      avatar:"/images/latest.png",
      create_time:new Date().getTime()/1000,
      content: {
        txt: this.data.keyboardInputValue
      },
    };
    if(!newData.content.txt){
      return;
    }
    console.log(newData.content.txt);
    this.showCommitSucessToast();
    this.resetAllDefaultStatus();
  },
  showCommitSucessToast:function(){
    wx.showToast({
      title: "发送成功",
      duration:1000,
      icon:"success"
    })
  },
  clickMore:function(){
    console.log("aaaaa")
    this.setData({
      sendMoreMsgFlag: !this.data.sendMoreMsgFlag
    })
  },
  resetAllDefaultStatus:function(){
    this.setData({
      keyboardInputValue:''
    })
  },
  // 选择本地照片与拍照
  chooseImage:function(event){
    // 已选择图片数组
    var imgArr = this.data.chooseFiles;
    // 只能上传三张照片，包括拍照
    var leftCount = 5 - imgArr.length;
    if(leftCount <= 0) {
      return;
    }
    var sourceType = [event.currentTarget.dataset.category],
    that = this;
    wx.chooseImage({
      count:leftCount,
      sourceType:sourceType,
      success: function(res) {
        // 可以分次选择图片，但总数不能超过三张
        console.log(res);
        that.setData({
          chooseFiles:imgArr.concat(res.tempFilePaths)
        })
      },
    })
  },
  clickContentBox:function(){
    this.bindChatBlur();
  }
})