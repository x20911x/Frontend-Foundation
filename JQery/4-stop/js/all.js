$(document).ready(function() {
  $('.start').click(function(event) {
    /* Act on the event */
    // 中斷當前的動畫，繼續執行下一個動作
    // $('.box').stop().slideToggle(3000);
    $('.box').toggleClass('jackInTheBox');
  });
});