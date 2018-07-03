$(function () {
    // setTimeout(() => {
    //     window.location.reload();
    // }, 1000);
    var audio = document.getElementById("x");
    audio.volume = .3;
    $('.W-yyue').hover(function () {
        $(this).find('.demoSpan1').css({
            'display': 'none'
        });
        $(this).find('.demoSpan2').css({
            'display': 'block'
        });
    }, function () {
        $(this).find('.demoSpan2').css({
            'display': 'none'
        });
    });
    $('.W-yyue').click(function () {
        event.stopPropagation(); //防止冒泡 
        if (audio.paused) { //如果当前是暂停状态 
            $('.W-yyue').hover(function () {
                $(this).find('.demoSpan1').css({
                    'display': 'block'
                });
                $(this).find('.demoSpan2').css({
                    'display': 'none'
                });
            }, function () {
                $(this).find('.demoSpan1').css({
                    'display': 'none'
                });
            });
            audio.play(); //播放 
            return;
        } else { //当前是播放状态 
            $('.W-yyue').hover(function () {
                $(this).find('.demoSpan1').css({
                    'display': 'none'
                });
                $(this).find('.demoSpan2').css({
                    'display': 'block'
                });
            }, function () {
                $(this).find('.demoSpan2').css({
                    'display': 'none'
                });
            });
            audio.pause(); //暂停
        }
    });
})