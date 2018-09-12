Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytest:"my first test",
    mytitle:"wuixong",
    looknum:100,
    looknum2:{
      num:90
    },
    array:[{msg:"1"},{msg:"2"}],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("首先执行onload函数");
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
    // this.anyfunction();
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
  myfunction: function () {
    console.log("这是我自己的函数");
    this.setData({ mytest:"how are you"});
  },
  anyfunction:function(){
    this.setData({
      // "looknum":200
      "looknum2.num":200
    })
  }
})