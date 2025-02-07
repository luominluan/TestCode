Page({
  data: {
    categories: ['正经菜', '不正经菜', '凉菜', '小吃'],
    selectedCategory: 0,
    dishes: [
      { name: '红烧肉', times: 10, price: 38, image: '/images/dish1.png' },
      { name: '宫保鸡丁', times: 8, price: 28, image: '/images/dish2.png' },
      { name: '凉拌黄瓜', times: 15, price: 12, image: '/images/dish3.png' },
      { name: '炸鸡翅', times: 20, price: 18, image: '/images/dish4.png' }
    ]
  },

  onCategoryTap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedCategory: index });
  },

  onAddToTable(e) {
    const index = e.currentTarget.dataset.index;
    const dish = this.data.dishes[index];
    // 这里可以将菜品添加到第三页的桌上有啥
    wx.showToast({
      title: '已添加到桌上有啥',
      icon: 'none'
    });
  }
});