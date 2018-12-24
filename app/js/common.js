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
    $(".main-nav a, .btn").mPageScroll2id({
        offset: 90,
        duration: 900
    });
    $.mPageScroll2id("scrollTo","#top",{
        offset:0
    });

    //scroll top-link transparent
    $(function() {
        var header = $("#header-top");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 1) {
                header.addClass("header-scroll");
            } else {
                header.removeClass("header-scroll");
            }

            return false;
        });
    });

    /* close popup */
    $('.close').click(function() {
        $('#popup').hide();
        $('#quote-popup').hide();
    });

    /* Form Ajax */
    $("form").submit(function(e) { //Change
        //$(this).find('input[type="submit"]').css('pointer-events', 'none');
        e.preventDefault();
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).success(function() {
            console.log('success');
            //$(dataLayer.push({ 'event': 'event_liqveed' }));

            $('#popup').show();
            $('.popup').animate({
                top: '27%',
                opacity: 1
            }, 800);
            th.trigger("reset");
            $('.popup-sms').slideUp(100).delay(800).fadeIn(400);
        });
        return false;
    });


});


