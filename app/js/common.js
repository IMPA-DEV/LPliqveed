$(function() {

    //Slick slider
    $('.slider-effects').slick({
        infinite: true,
        speed: 800,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    // Mob menu
    if($(window).width() < 800){
        $('.header-mob, .close-nav, .header-nav a').click(function () {
            $('.header-nav').toggleClass('mobile');
            $('body').toggleClass('vh');
            $('.close').show(0);
        })
    }

    // Page to scroll
    $(".header-nav a").mPageScroll2id();

});


