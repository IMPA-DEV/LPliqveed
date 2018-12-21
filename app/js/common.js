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

    // Page scroll to id
    $(".header-nav a").mPageScroll2id({
        offset: 90
    });

    //scroll top-link transparent
    $(function() {
        var header = $("#header-top");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 2) {
                header.addClass("header-scroll");
            } else {
                header.removeClass("header-scroll");
            }

            return false;
        });
    });

});


