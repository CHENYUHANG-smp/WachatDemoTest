// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"<h1>hello world</h1>"
  },
  clickMe(){
    console.log(this.data.msg);
    this.setData({
      msg:"<h1>this is me</h1>"
    })
  },

toast(){
  wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
  })
},

load(){
  wx.showLoading({
    title: '加载中'
  })
},

cancelLoad(){
  wx.hideLoading({
    complete: (res) => {},
  });
},

modal(){
  wx.showModal({
    title: '模式窗体',
    content: '确定退出吗',
    cancelColor: 'cancelColor',
    success:function(){
      console.log("点击确定回调");
    }
  })
},

goIndex(){
  wx.navigateTo({
    url: '../index/index',
  })
},

  getUserInfos(e){
    console.log(e);
  },
  getUserPhones(e){
    console.log(e);
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

  }
})