$(function(){
  //youtube
  $('.playicon').click(function(){
    ytPlayer.playVideo();
    $('.poster_list').css('display', 'none');
  });

  //Tab to top
  $(".scroll-top-wrapper img").on("click", function() {
     $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  //scroll #
  var offsetY = 0;
  // スクロールにかかる時間
  var time = 500;
  $('a[href^=#]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });

  //scroll & fadeIn
//  $('.animate-box').animateCssPlus({
//    scroll:true,
//    class:'fadeInUp'
//  });


});
