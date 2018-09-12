// pages/lookImg/lookImg.js
Page({
  data: {
    imgalist: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2493851966,2623460447&fm=27&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529041646230&di=5648dd7b22944645313dbe7233b0e1b2&imgtype=0&src=http%3A%2F%2Fimg3.blog.eastmoney.com%2Fhb%2Fhbbk%2F201212%2F20121220175353854.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529041646229&di=e952a8eebf62b7c8b9034ed285bee3d4&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F367658%2Ff%2F8592305.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529041646227&di=c50c3828f49b5547afb07edc46237718&imgtype=0&src=http%3A%2F%2Fimg.youhuashijie.com%2Fimages%2F0614%2F23444817967.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529041728734&di=84f8d7306f9bdbfd71454c7390e5201e&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D314894200%2C106732968%26fm%3D214%26gp%3D0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529041646224&di=afa9986b5ad1efc72b1cf320ce5c4923&imgtype=0&src=http%3A%2F%2Fimg.doooor.com%2Fimg%2Fforum%2F201609%2F01%2F000547ycin35ic3ayac4iu.jpg'
      ]
  },
  /**   
   * 预览图片  
   */
  previewImage: function (e) {
    console.log(e)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgalist // 需要预览的图片http链接列表  
    })
  }
})