// pages/page/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false ,
    item:{
      index:0,
      msg:"this is template",
      time:'2018-05-03'
    },
    arr: [{
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }],
    id: 0,
    length: 4,
    arr1:[0,1,2,3,4],
    a:1,
    b:0,
    c:3,
    d:4,
    for:'for',
    bar:'bar',
    obj:{
      for:'for',
      bar:'bar'
    },
    obj1:{
      a:1,
      b:2
    },
    obj2: {
      c: 3,
      d: 4
    },
    items:[{
      message:'foo'
    }],
    array:[{
      name:"王干"
    },{
      name:"王刚"
      },{
        name:"张华"
      }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停  
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停  
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭抽屉  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示抽屉  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },  
  showModal:function(){
    wx.showModal({
      title: '温馨提示',
      content: '订单支付成功',
      showCancel: false,
      success: function (res) {
        console.log("支付完成")
      }
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
  
  },
  outerClick:function(e){
    console.log(e)
    console.log("我点击了outer")
  },
  middleClick:function(e){
    console.log(e)
    console.log("我点击了middle")
  },
  innerClick:function(e){
    console.log(e)
    console.log("我点击了inner")
  }
})

// 倒计时
function Countdown() {
  var num = 10
  var name;
  name = setInterval(function () {
    num--;
    if (num == 0) {
      clearInterval(name);
    }
  }, 1000)
  return num;
};