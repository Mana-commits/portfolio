$(function(){

//スクロールトップ
$('a[href^="#"]').click(function(){ //#で始まるリンクをクリックしたとき
    var speed = 400; //スクロールスピード
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ?'html' :　href);
    var position = target.offset().top;　//topまでの距離
    $('body,html').animate({
        scrollTop: position //
    },
    speed, 'swing');
    return false;
    });

$('.humberger-wrap').click(function(){
   
   if($('.navbar-slide').hasClass('display-none')){
        $('.navbar-slide').removeClass('display-none');
    }
    else{
        $('.navbar-slide').addClass('display-none');    

    }});

});