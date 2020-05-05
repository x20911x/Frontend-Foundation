$(document).ready(function() {
  $('.cart li').click(function(event) {
    $(this).find('h3').toggleClass('active').parent().siblings().children().removeClass('active');
  });
});