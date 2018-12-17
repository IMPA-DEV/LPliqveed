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
    $('.header-mob, .close-nav').click(function () {
        $('.header-nav').toggleClass('mobile');
        $('body').toggleClass('vh');
        $('.close').show(0);
    })

    // Page to scroll
    $(".header-nav a").mPageScroll2id();

});


