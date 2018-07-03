var mySwiper = new Swiper('.swiper-container', {
    // autoplay: true,
    speed: 1000,
    parallax: true,
    mousewheel: true,
    // autoplay: {
    //     delay: 1000
    // },
    initialSlide: 0,
    direction: 'vertical',
    stopOnLastSlide: true,
    // loop: true,
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画 
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画 
      }
    }
})