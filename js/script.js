$(function() {

    let header = $("#header");
    let whatyouget_height = $("#anchor1").innerHeight();
    let scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);

/* Фиксированный header */

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset)
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= whatyouget_height) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }


/* Плавная прокрутка к якорям */

    $(document).ready(function(){
        $("#scroll").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
    });

/* Применение класса active выбранному элементу меню */

	$('.menu li a').click(function () {
        $('.menu li').removeClass('active');
        $(this).parent().addClass('active');
        return true;
    });

/* Бургер меню */

    $(document).ready(function(){
        $('.burger').click(function (event) {
            $('.burger, .menu').toggleClass('active');
        });
    });

});