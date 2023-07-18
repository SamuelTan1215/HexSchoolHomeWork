$(document).ready(function() {
    //lightbox 效果
    lightbox.option({
      'showImageNumberLabel': false,
      'positionFromTop':150,
      'wrapAround': true
    })
    //swiper 效果
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    //Scroll Top 效果
    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 500);
    });



});