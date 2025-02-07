Page({
  onKitchenOrders() {
    console.log('点击了厨房订单按钮'); // 确认事件是否触发
    wx.navigateTo({
      url: '/pages/history/history',
      success: () => {
        console.log('跳转成功');
      },
      fail: (err) => {
        console.error('跳转失败', err);
      }
    });
  }
});