
// Go up JS

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.goup').fadeIn(350);
        } else {
            $('.goup').fadeOut(350);
        }
    });

    $('.goup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
});