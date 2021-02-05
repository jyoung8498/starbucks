(function($,window,document){

    cnt=-1; //0이 되어야하기 때문에 함수 밖에
    //공지사항 롤링 슬라이드 상하
    function noticeSlideFn(){
        cnt++; //0 -> 1
        if(cnt>3){ 
            cnt=-1; //마지막 슬라이드를 0으로 셋팅 마지막 이전, 마지막 4
        }
        $(".notice-list li").stop().animate({top:24}, 0).css({zIndex:2});
        $(".notice-list li").eq(cnt < 0 ? 4 : cnt).stop().animate({top:0}, 0).css({zIndex:1}); 
        $(".notice-list li").eq(cnt+1).stop().animate({top:0}, 1000).css({zIndex:3}); 
            
    }

    
    setInterval(noticeSlideFn, 2500);

    //섹션2 버튼 클릭
/*     $(".promotion-btn").on({
        click:function(e){
           e.preventDefault();
           $(this).toggleClass('addUp')
            $('#section3').stop().slideToggle(500);
        }
    });
 */
}(jQuery,window,document));