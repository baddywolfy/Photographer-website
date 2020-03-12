function preload() {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('preloader-hidden');
}

setTimeout(preload, 1800);


(function () {
  const burger = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');
  });
  $(nav).focusout(function(){
    nav.classList.remove('nav-active');
  });
}());


new WOW().init();


var mySwiper = new Swiper ('.featured-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
        880: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 10,
        },
        100: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 10,
        },
    },
    
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



  function ScrollToTop(){   
    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' });
      return false;
    });
    
};