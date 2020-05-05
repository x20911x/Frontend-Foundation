$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
    autoplay: {
    delay: 3000,
    },
    effect:'slide',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

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

  console.log('all.jsing')
  lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true,
      'fadeDuration':600
    })
});

