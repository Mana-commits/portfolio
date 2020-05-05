$(function(){

//スクロールトップ
$('a[href^="#"]').click(function(){ //#で始まるリンク元をクリックしたとき
    var speed = 400; //スクロールされるスピード
    var href = $(this).attr('href');　//クリックしたリンク元のhref要素（リンク先id）
    var target = $(href == "#" || href == "" ?'html' :　href);　//#のみまたは空だった場合はhtml,そうでなければリンク先id
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
       //ナビバースライド
        $('.navbar-slide').removeClass('hide').slideDown();//スライド表示
        $('.navbar-contents-hamburger span.top').css('transform','rotate(45deg)');
        $('.navbar-contents-hamburger span.bottom').css('transform','rotate(-45deg)').css('margin-top','0');
        $('.navbar-contents-hamburger span.middle').hide();//中央の直線を消す

    }
    else{
        $('.navbar-slide').addClass('hide').slideUp();//スライド閉じる
        $('.navbar-contents-hamburger span.top').css('transform','rotate(0deg)');
        $('.navbar-contents-hamburger span.bottom').css('transform','rotate(0deg)').css('margin-top','16px');
        $('.navbar-contents-hamburger span.middle').show();//中央の直線を表す    

    }});

//ハンバーガーメニュー閉じる
$('#menu a[href]').on('click', function() {
    $('.hamburger-wrap').trigger('click');//メニューをクリックすることで、hamburger-wrapをクリックしたときと同じ分岐に入る
});

});