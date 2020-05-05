$(document).ready(function() {

  // on 範例
  $('.wrap').on('click', 'h1', function(event) {
      event.preventDefault();
      alert('有效!')
  });
  $('.box1').html('<h1>用JQuery動態產生的</h1>')
});
