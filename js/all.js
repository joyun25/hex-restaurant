$(document).ready(function () {
    $('.scrollTop').click(function (e) { 
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({scrollTop: targetPos}, 700);
    });
    $('.cart-menu li').click(function (e) { 
        e.preventDefault();
        $(this).addClass('select').siblings().removeClass('select');
    });
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $(".heart-icon").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("far");
        $(this).toggleClass("fas");
        $(this).toggleClass("red");
    });
});