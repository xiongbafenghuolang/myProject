// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    mobile: ''  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  formSubmit:function(e){
    // console.log(e)
    this.btnclick();
    console.log('fotm发生了submit事件，携带数据为:', e.detail.value)
  },
  formReset:function(){
    console.log("form发生了reset事件")
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },

  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  btnclick: function () {
    var userName = this.data.userName;
    var mobile = this.data.mobile;
    var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var name = /^[u4E00-u9FA5]+$/;
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); 

    if (userName == '') {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1000,
        mask: true
      })

      return false
    } else if (reg.test(userName)){
      wx.showToast({
        title: '用户名允许输入特殊字符',
        icon: 'none',
        duration: 1500
      })
      return false;
    }else if (mobile == '') {
      wx.showToast({
        title: '手机号不能为空',
      })
      return false
    }
    else if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (!phonetel.test(mobile)) {
      wx.showToast({
        title: '手机号格式有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    return true;  
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