;(function($,document,window,undefined){

    var x = 0;
    setTimeout(init(), 100);

$(window).scroll(function(){

    if($(this).scrollTop() >= $('#section7').offset().top -200 ){
        if(x==0){
            s9AniFn();
            x=1;
        }
    }
    if($(this).scrollTop() < $('#section7').offset().top -200 ){
        if(x==1){
            s9FormteAniFn();
            x=0;
        }
    }

});

function init(){
    $('#s9Ani1').stop().animate({left:2000, opacity:0}, 2000, function(){
        $('#s9Ani1').stop().animate({left:130, opacity:1}, 2000);
    });
    $('#s9Ani2').stop().animate({left:2000, opacity:0}, 2000, function(){
        $('#s9Ani2').stop().animate({left:130, opacity:1}, 2500);
    }); 
    $('#s9Ani3').stop().animate({opacity:0}, 2000, function(){
        $('#s9Ani3').stop().animate({opacity:1}, 2000);
    });
    $('#s9Ani4').stop().animate({opacity:0}, 2000, function(){
        $('#s9Ani4').stop().animate({opacity:1}, 2000);
    });
    $('#s9Ani5').stop().animate({opacity:0}, 2000, function(){
        $('#s9Ani5').stop().animate({opacity:1}, 2000);
    });
    $('#s9Ani6').stop().animate({opacity:0}, 2000, function(){
        $('#s9Ani6').stop().animate({opacity:1}, 2000);
    });
    $('#s9Ani7').stop().animate({opacity:0}, 2000, function(){
        $('#s9Ani7').stop().animate({opacity:1}, 2000);
    });
}


function s9AniFn(){
    $('#s9Ani1').stop().animate({left:130, opacity:1}, 2000);
    $('#s9Ani2').stop().animate({left:130, opacity:1}, 2500);
    $('#s9Ani3').stop().animate({opacity:1}, 2000);
    $('#s9Ani4').stop().animate({opacity:1}, 2000);
    $('#s9Ani5').stop().animate({opacity:1}, 2000);
    $('#s9Ani6').stop().animate({opacity:1}, 2000);
    $('#s9Ani7').stop().animate({opacity:1}, 2000);
}
function s9FormteAniFn(){
    $('#s9Ani1').stop().animate({left:2000, opacity:0}, 2000);
    $('#s9Ani2').stop().animate({left:2000, opacity:0}, 2000); 
    $('#s9Ani3').stop().animate({opacity:0}, 2000);
    $('#s9Ani4').stop().animate({opacity:0}, 2000);
    $('#s9Ani5').stop().animate({opacity:0}, 2000);
    $('#s9Ani6').stop().animate({opacity:0}, 2000);
    $('#s9Ani7').stop().animate({opacity:0}, 2000);
}

})(jQuery,document,window);