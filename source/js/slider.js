import 'owl.carousel';

$(document).ready(function () {
  $('.main-slider__wrap').owlCarousel({
    loop: true,
    dots: true,
    dotsSpeed: 1000,
    dotsClass: 'main-slider__dots',
    dotClass: 'main-slider__dot',
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4500,
    responsive:{
      0:{
        items:1
      },
      750:{
        items:1
      },
      1172:{
        items:1
      }
    }
  });

  $('.slider').owlCarousel({
    center: true,
    touchDrag: true,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    stagePadding: 15,
    dots: false,
    lazyLoad: true,
    autoWidth: true,
    margin: 30,
    scrollPerPage: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1
      },
      750: {
        items: 3,
        stagePadding: 0,
        dots: true,
        dotsClass: 'slider__dots',
        dotClass: 'slider__dot'
      },
      1170: {
        center: false,
        items: 4,
        stagePadding: 0,
        dots: true,
        dotsClass: 'slider__dots',
        dotClass: 'slider__dot'
      }
    }
  })
});

