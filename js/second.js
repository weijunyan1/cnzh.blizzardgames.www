

$(function(){
    $('.main ').mouseenter(function () {
        $('.main-new').css({
            'border': '1px solid hsla(0, 0%, 100%, .15)'
        })
    })
    $(".main ").mouseleave(function () {
        $('.main-new').css({
            'border-bottom': '1px solid hsla(0, 0%, 100%, .15)'
        })
    });
})

