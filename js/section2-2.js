(function($,window,document){

    cnt=-1;
    //공지사항 슬라이드
    function noticeListFn(){
        cnt++;
        if(cnt>=4){cnt=0;}
        $('.notice-list li').stop().animate({top:24}, 0).css({zIndex:2});
        $('.notice-list li').stop().eq(cnt).animate({top:0}, 0).css({zIndex:1});
        $('.notice-list li').stop().eq(cnt+1).animate({top:0}, 1000).css({zIndex:3});
    }

    setInterval(noticeListFn,2500);

    //버튼 슬라이드
    $(".promotion-btn").on({
        click:function(e){
            e.preventDefault();
            $(this).toggleClass('addUp')
             $('#section3').stop().slideToggle(500);
         }
     });


    
}(jQuery,window,document));