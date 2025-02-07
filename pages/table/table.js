Page({
  data: {
    dishes: [
      { name: '红烧肉', price: 38, quantity: 1, image: '/images/dish1.png' },
      { name: '宫保鸡丁', price: 28, quantity: 2, image: '/images/dish2.png' }
    ]
  },

  onDecrease(e) {
    const index = e.currentTarget.dataset.index;
    const dishes = this.data.dishes;
    if (dishes[index].quantity > 1) {
      dishes[index].quantity--;
      this.setData({ dishes });
    }
  },

  onIncrease(e) {
    const index = e.currentTarget.dataset.index;
    const dishes = this.data.dishes;
    dishes[index].quantity++;
    this.setData({ dishes });
  },

  onSubmit() {
    const order = {
      date: new Date().toLocaleString(),
      dishes: this.data.dishes.filter(item => item.quantity > 0)
    };

    // 获取历史订单
    wx.getStorage({
      key: 'orders',
      success: (res) => {
        const orders = res.data || [];
        orders.push(order); // 添加新订单
        wx.setStorage({
          key: 'orders',
          data: orders,
          success: () => {
            wx.showToast({
              title: '订单提交成功',
              icon: 'none'
            });
          }
        });
      },
      fail: () => {
        // 如果没有历史订单，初始化一个空数组
        wx.setStorage({
          key: 'orders',
          data: [order],
          success: () => {
            wx.showToast({
              title: '订单提交成功',
              icon: 'none'
            });
          }
        });
      }
    });
  }
});