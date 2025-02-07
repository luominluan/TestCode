Page({
  data: {
    orders: []
  },

  onLoad() {
    // 获取历史订单
    wx.getStorage({
      key: 'orders',
      success: (res) => {
        this.setData({
          orders: res.data || []
        });
      },
      fail: () => {
        this.setData({
          orders: []
        });
      }
    });
  }
});