(function($,window,document){

    cnt=-1; //0이 되어야하기 때문에 함수 밖에
    //공지사항 롤링 슬라이드 상하
    function noticeSlideFn(){
        cnt++; //0 -> 1
        if(cnt>4){ 
            cnt=0; 
        }
        $(".notice-list li").stop().animate({top:24}, 0).css({zIndex:2}); //모두 초기화 24px 아래에서 대기
        $(".notice-list li").eq(cnt).stop().animate({top:0}, 0).css({zIndex:1}); //첫번째 화면에서 대기
        $(".notice-list li").eq((cnt+1) > 4 ? 0 : cnt).stop().animate({top:0}, 1000).css({zIndex:3}); //24px 아래에서 대기 위로 부드럽게 올라오기
            
    }

    /* noticeSlideFn(); */
    
    //타이머 (슬라이드 함수,2500);    - setInterval(함수, 2500초);
    setInterval(noticeSlideFn, 2500);

    //섹션2 버튼 클릭
  /*  $(".promotion-btn").on({
        click:function(e){
           e.preventDefault();
           $(this).toggleClass('addUp');
            $('#section3').stop().slideToggle(500);
    } });
  */
}(jQuery,window,document));