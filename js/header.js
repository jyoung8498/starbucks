

(function($){
//    $("선택자").on({});
    $(".main-btn").on({
        //focuson =
        mouseover:function(){
            //버튼효과 색상, 글자
            $(".main-btn").removeClass('addMain');
            $(this).addClass("addMain");
            //서브메뉴 슬라이드
            $(".sub").slideUp(0);
            $(this).next().stop().slideDown(500);
        },
        //탭키가 먹도록
        focusin:function(){
            $(".main-btn").removeClass('addMain');
            $(this).addClass("addMain")
        },
    });
    //네비에서 마우스가 떠나면 슬라이드가 올라가게
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMain");
        },
    });

    //each( 메소드 활용 버튼 배열처리 링크열기)
   // $(".main-btn").each();
    $(".main-btn").each(function(index){
        $(this).on({
            click:function(){
                if(index==0){
                    //location.href="https://www.starbucks.co.kr/coffee/index.do" 현재창
                    window.open("https://www.starbucks.co.kr/coffee/index.do") //새창열기
                }
                else if(index==1){
                    location.href="https://www.starbucks.co.kr/menu/index.do"
                }
                else if(index==2){
                    location.href="https://www.starbucks.co.kr/store/index.do"
                }
                else if(index==3){
                    location.href="https://www.starbucks.co.kr/responsibility/index.do"
                }
                else if(index==4){
                    location.href="https://www.starbucks.co.kr/msr/index.do"
                }
                else if(index==5){
                    location.href="https://www.starbucks.co.kr/whats_new/index.do"
                }
            }
        });
    });


    /*
    //each() 메소드 실무에 적용하기
    //.main-btn 버튼 6개  배열 자동화(0~5) 
    $(".main-btn").each(); //1 each() 이치 달기
    $(".main-btn").each(function(){}); //2 이치에 콜백함수 달기
    $(".main-btn").each(function(){ //3 콜백함수 공간벌리기

    });

    $(".main-btn").each(function(index){ //4 콜백함수 index(매개변수) 이벤트  넣기

    });

    $(".main-btn").each(function(index){ //5 클릭 이벤트 리스너 
        $(this).on({
            click: function(){
                console.log(index);  //핸들러 인덱스번호 콜백
            }
        });
    });

    $(".main-btn").each(function(index){ //5 클릭 이벤트 리스너 조건문 핸들러 수행 콜백
        $(this).on({
            click: function(){
                if(index==0){
                    location.href = "url";
                }
                else if(index==1){
                    location.href = "url";
                }
                else if(index==2){
                    location.href = "url";
                }
                :                
            }
        });
    });


*/



/* 

    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/coffee/index.do"
        }
    });
    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/menu/index.do"
        }
    });
    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/store/index.do"
        }
    });
    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/responsibility/index.do"
        }
    });
    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/msr/index.do"
        }
    });
    $(".main-btn").on({
        click:function(){
            location.href="https://www.starbucks.co.kr/whats_new/index.do"
        }
    }); */



})(jQuery);