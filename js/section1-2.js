(function($,window,document,undefined){

    function fnSection1(){
        $('.ani-1').stop().animate({opacity:1},600,"easeOutExpo", function(){
            $('.ani-2').stop().animate({opacity:1},600,"easeOutExpo", function(){
                $('.ani-3').stop().animate({opacity:1},600,"easeOutExpo", function(){
                    $('.ani-4').stop().animate({opacity:1},600,"easeOutExpo", function(){
                        $('.ani-5').stop().animate({opacity:1},600,"easeOutExpo", function(){
                            $('.ani-6').stop().animate({opacity:1},600,"easeOutExpo", function(){
        });
    });
});
});
});
});
    }

    fnSection1();

    var nextBtn = document.querySelector('.nextBtn');
           var slideWrap = document.querySelector('.slide-wrap');
           var cnt = 0;

                nextBtn.onclick = function(){
                    cnt++;
                    cnt >= 3 ? cnt = 0 : cnt;   /* 3보다 크거나 같으면 0으로 돌아간다 */
                    slideWrap.style = 'left:' + (-819*cnt) + 'px; transition:all 0.6s;'; /* 다 0.6초 동안 슬라이드 웹이 왼쪽 (-819*숫자)px로 움직여라 */
                }

    var nextBtn = document.querySelector('.nextBtn');
    var slideWrap = document.querySelector('.slide-wrap');
    var cnt = 0;
         nextBtn.onclick = function(){
             cnt++;
             cnt >= 3 ? cnt = 0 : cnt;   /* 3보다 크거나 같으면 0으로 돌아간다 */
             slideWrap.style = 'left:' + (-819*cnt) + 'px; transition:all 0.6s;'; /* 다 0.6초 동안 슬라이드 웹이 왼쪽 (-819*숫자)px로 움직여라 */
         }


})(jQuery,window,document);