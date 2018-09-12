// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestData:[],
    imageSrc:"",
    position:"",
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  chooseImage:function(){
    var THIS = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        THIS.setData({
          imageSrc: tempFilePaths[0]
        });
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log("width:" + res.width)
            console.log("height" + res.height)
          }
        })
      }
    })
  },
  lookImage:function(){
    wx.previewImage({
      current: 'http://img5.imgtn.bdimg.com/it/u=4009895462,3470828761&fm=27&gp=0.jpg', // 当前显示图片的http链接
      urls: [
        'http://img0.imgtn.bdimg.com/it/u=4087700510,2247942662&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=4144495554,3366535969&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=2079661167,2553880439&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=1426153639,3820085929&fm=27&gp=0.jpg'
      ] // 需要预览的图片http链接列表
    })
  },
  recordAudio:function(){
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
          }
        })
      },
      fail: function (res) {
        //录音失败
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  showMusic:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      title: '此时此刻',
      coverImgUrl: '../../images/hooulai.jpeg'
    });
    wx.seekBackgroundAudio({
      position: this.data.position
    })
  },
  pauseMusic:function(){
    var THIS = this;
    wx.stopBackgroundAudio();
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status
        var dataUrl = res.dataUrl
        var currentPosition = res.currentPosition
        var duration = res.duration
        var downloadPercent = res.downloadPercent
        THIS.setData({
          position: currentPosition
        })
      }
    })
  },
  stopMusic:function(){
    wx.stopBackgroundAudio();
  },
  getLocation:function(){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log("latitude:"+latitude);
        console.log("longitude:"+longitude);
        console.log("speed:"+speed);
        console.log("accuracy:" + accuracy)
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "北京市公安局海淀分局",
          address:"某地址这里是",
          scale: 28
        })
      }
    })
   
  },
  chooseLocation:function(){
    wx.chooseLocation({
      success: function(res) {
        console.log(res.name);
        console.log(res.address);
        console.log(res.latitude);
        console.log(res.longitude);
      },
    })  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  requestFromServer: function () {
    var THIS = this;
    wx.request({
      url: '../page/js/requestdemo.js',
      data:{
        x:'1',
        y:'2'
      },
      header:{
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        var data = res.data;
        THIS.setData({
          requestData:data
        })
      },
      fail: function (res){
        var data = res.data;
        console.log()
      }
    })
  },
  getSystemInfo:function(){
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log("networkType" + networkType)
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '17310176295' //仅为示例，并非真实的电话号码
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
  chatClick:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})