$(document).ready(function() {
  $('.cart > li > a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    // $(this).parent().find('ul').slideToggle();
    $(this).siblings('ul').slideToggle();

    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
  });
});