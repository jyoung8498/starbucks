;(function($,document,window,undefined){

    //goTop 버튼 사라졌다 나왔다
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('.goTop').stop().fadeIn(1000);
        }else{
            $('.goTop').stop().fadeOut(1000);
        }
    });

    $('.goTop-btn').on({
        click:function(){
            $('html,body').stop().animate({scrollTop:0}, 800); //맨위로 .8초
        }
    });

})(jQuery,document,window);