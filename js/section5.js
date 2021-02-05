;(function($,document,window,undefined){

    /* var s5AnimationFn = 0; //호이스팅 (ECMA SCRIPT 5 에서만): 이름으로 변수사용 / 변수이름과 함수이름이 같으면 함수가 먼저 */

    var t = 0;
    var c = 0;
    var y = 0;
    
    setTimeout(init(), 100);
    setTimeout(s7AnimationFormatFn(), 100);
    setTimeout(s6AnimationFormatFn(), 100);
//DOM

//패럴럭스(parallax) : 페이지 스크롤 이벤트
//강화 할 수 있는 이벤트는  : 마우스 휠 이벤트
//BOM ( Browser Object Modelling ) 윈도우(창) 스크롤 이벤트 : 스크롤 탑 값이 상단에서 400px 위치에 도달하면
//scroll, location, resize --> (반응형)

//애니메이션 함수 : scetion5 애니메이션 함수 호출

//문서 전체 길이 값 알아보기



$(window).scroll(function(){

    
/* 반응형 웹 점검 및 넓이 높이 */
//    console.log("현재 스크롤 탑", $(this).scrollTop() ); //스크롤이 발생하면 현재위치 출력  this--> window
//    console.log('문서 전체 길이', $(document).length); //문서 전체 개수
//    console.log('슬라이드 개수 ', $('.slide').length); //슬라이드 개수
//    console.log('실제 슬라이드 개수 ', $('.slide').length-2); //실제 슬라이드 개수
//    console.log('문서 전체 높이', $(document).height() ); //문서 전체 높이
//    console.log('문서 전체 너비', $(document).width() ); //문서 전체 넓이
//    console.log( $(document).height()-$(this).scrollTop() ); //창높이
//    console.log("창높이", $(window).height() ); //창높이
//    console.log("창너비", $(window).width() ); //창너비


// 스크롤 400이하 : t가 1로 되서 실행되었을 땐 없어짐
if( $(this).scrollTop() < 400){
    if(t==1){   //scrollOn
        t = 0;  
        s5AnimationFormatFn();
    }
}

// 스크롤 400이상 : t가 0일때 실행하고 1로 됨  재실행 x
if($(this).scrollTop() >= 400){
    if(t==0){  
        t = 1;  
        s5AnimationFn();
    }
}

 if($(this).scrollTop() >= 1400){
    if(c==0){
        c=1;
        s7AnimationFn();
    }
} 
if($(this).scrollTop() < 1400){
    if(c==1){
        c=0;
        s7AnimationFormatFn();
    }
} 

if($(this).scrollTop() >= $('#section5').offset().top-100 ){
    if(y==0){
        y=1;
        s6AnimationFn();
    }
} 
if($(this).scrollTop() < $('#section5').offset().top-100 ){
    if(y==1){
        y=0;
        s6AnimationFormatFn();
    }
} 

});

/* 모든 함수는 이벤트 밖에 만들기 */

//없어지는 함수
function init(){
    $('.sec5-left').stop().animate({left:-200, opacity:0}, 1000, function(){
        $('.sec5-left').stop().animate({left:0, opacity:1}, 2000);
    });
    $('.sec5-right').stop().animate({right:-200, opacity:0}, 1000, function(){
        $('.sec5-right').stop().animate({right:0, opacity:1}, 2000);
    });
}

function s5AnimationFormatFn(){
    $('.sec5-left').stop().animate({left:-200, opacity:0}, 1000);
    $('.sec5-right').stop().animate({right:-200, opacity:0}, 1000);
}
//나오는 함수

function s5AnimationFn(){
    $('.sec5-left').stop().animate({left:0, opacity:1}, 2000);
    $('.sec5-right').stop().animate({right:0, opacity:1}, 2000);
}

function s6AnimationFn(){
    $('#s6Ani').stop().animate({opacity:1}, 4000);
}
function s6AnimationFormatFn(){
    $('#s6Ani').stop().animate({opacity:0}, 4000);
}

function s7AnimationFn(){
    $('.s7img1').stop().animate({left:100, opacity:1}, 2000);
    $('.s7img2').stop().animate({left:0, opacity:1}, 2500);
    $('.sec7-left a').stop().animate({opacity:1}, 4000);
}
function s7AnimationFormatFn(){
    $('.s7img1').stop().animate({left:-400, opacity:0}, 2000);
    $('.s7img2').stop().animate({left:-400, opacity:0}, 2500);
    $('.sec7-left a').stop().animate({opacity:0}, 1000);
}


})(jQuery,document,window);