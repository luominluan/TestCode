Page({
  data: {
    days: 0,
    hearts: []
  },

  onLoad() {
    const startDate = new Date('2019-12-28');
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    this.setData({ days });
  },

  onTap(e) {
    const { clientX, clientY } = e.touches[0];
    const hearts = this.data.hearts;
    hearts.push({ top: clientY, left: clientX });
    this.setData({ hearts });

    setTimeout(() => {
      hearts.shift();
      this.setData({ hearts });
    }, 1000);
  }
});