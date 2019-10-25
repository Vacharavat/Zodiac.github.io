$(window).scroll(function() {
    if ($(this).scrollTop() > 550) {
        $('.icon-totop').removeClass('icon-totop-hid');
        console.log("500");
    } else {
        $('.icon-totop').addClass('icon-totop-hid');
        console.log("0");
    }
});

$(document).ready(function() {

    $('.icon-totop').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});