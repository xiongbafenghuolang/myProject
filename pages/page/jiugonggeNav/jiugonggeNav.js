// pages/page/jiugonggeNav/jiugonggeNav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var navs = this.loadNavData();
    that.setData({
      navs:navs
    })
  },
  navBtn:function(e){
    console.log(e)
    var id = e.currentTarget.id;
    if(id == "9") {
      wx.navigateTo({
        url: '../../index/index',
      })
    }
  },
  loadNavData:function(){
    var navs = [];
    var nav0 = new Object();
    nav0.img = 'icon-hongbao';
    nav0.name = '红包';
    nav0.width = '19';
    nav0.height = '22';
    nav0.size = '40';
    nav0.color = 'red'
    navs[0] = nav0;

    var nav1 = new Object();
    nav1.img = 'icon-zhuanzhang';
    nav1.name = '转账';
    nav1.width = '19';
    nav1.height = '22';
    nav1.size = '40';
    nav1.color = '#f00ed6'
    navs[1] = nav1;

    var nav2 = new Object();
    nav2.img = 'icon-xinyongqia';
    nav2.name = '信用卡还款';
    nav2.width = '19';
    nav2.height = '22';
    nav2.size = '40';
    nav2.color = 'yellow'
    navs[2] = nav2;

    var nav3 = new Object();
    nav3.img = 'icon-chongzhizhongxin';
    nav3.name = '充值中心';
    nav3.width = '19';
    nav3.height = '22';
    nav3.size = '40';
    nav3.color = 'pink';
    navs[3] = nav3;

    var nav4 = new Object();
    nav4.img = 'icon-taopiaopiao';
    nav4.name = '淘票票';
    nav4.width = '19';
    nav4.height = '22';
    nav4.size = '40';
    nav4.color = '#ff0011'
    navs[4] = nav4;

    var nav5 = new Object();
    nav5.img = 'icon-didichuxing';
    nav5.name = '滴滴出行';
    nav5.width = '19';
    nav5.height = '22';
    nav5.size = '40';
    nav5.color = '#ef0f92'
    navs[5] = nav5;

    var nav6 = new Object();
    nav6.img = 'icon-yuebao';
    nav6.name = '余额宝';
    nav6.width = '19';
    nav6.height = '22';
    nav6.size = '40';
    nav6.color = 'red';
    navs[6] = nav6;

    var nav7 = new Object();
    nav7.img = 'icon-shenghuohao';
    nav7.name = '生活号';
    nav7.width = '19';
    nav7.height = '22';
    nav7.size = '40';
    nav7.color = '#4185e6';
    navs[7] = nav7;

    var nav8 = new Object();
    nav8.img = 'icon-gongxiangdanche';
    nav8.name = '共享单车';
    nav8.width = '19';
    nav8.height = '22';
    nav8.size = '40';
    nav8.color = '#4185e6';
    navs[8] = nav8;

    var nav9 = new Object();
    nav9.img = 'icon-gengduo';
    nav9.name = '更多';
    nav9.width = '19';
    nav9.height = '22';
    nav9.size = '40';
    nav9.color = '#eaeaea';
    navs[9] = nav9;
    return navs;
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