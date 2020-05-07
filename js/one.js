$(function () {
    $('#ah-tab-content-game .up a').mouseenter(function () {
        $(this).css('opacity', 1);
        $(this).siblings().css('opacity', 0.5);
    })
    $('#ah-tab-content-game .up a').mouseleave(function () {
        $('li').css('opacity', 1);
    })

    $('#ah-tab-content-game .down a').mouseenter(function () {
        $(this).css('opacity', 1);
        $(this).siblings().css('opacity', 0.5);
    })
    $('#ah-tab-content-game .down a').mouseleave(function () {
        $('li').css('opacity', 1);
      })

})