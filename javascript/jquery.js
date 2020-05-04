$(function(){

//スクロールトップ
$('a[href^="#"]').click(function(){ //#で始まるリンクをクリックしたとき
    var speed = 400; //スクロールスピード
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ?'html' :　href);
    var position = target.offset().top;　//topまでの距離
    $('body,html').animate({
        scrollTop: position 
    },
    speed, 'swing');
    return false;
    });

//ハンバーガーメニュー開閉
$('.hamburger-wrap').on('click',function(){

   
   if($('.navbar-slide').hasClass('hide')){
       //ナビバースライドを表示
        $('.navbar-slide').removeClass('hide').slideDown();
        $('.navbar-contents-hamburger span.top').css('transform','rotate(45deg)');
        $('.navbar-contents-hamburger span.bottom').css('transform','rotate(-45deg)').css('margin-top','0');
        $('.navbar-contents-hamburger span.middle').hide();

    }
    else{
        $('.navbar-slide').addClass('hide').slideUp();
        $('.navbar-contents-hamburger span.top').css('transform','rotate(0deg)');
        $('.navbar-contents-hamburger span.bottom').css('transform','rotate(0deg)').css('margin-top','16px');
        $('.navbar-contents-hamburger span.middle').show();    

    }});

//ハンバーガーメニュー閉じる
$('#menu a[href]').on('click', function() {
    $('.hamburger-wrap').trigger('click');
});

});