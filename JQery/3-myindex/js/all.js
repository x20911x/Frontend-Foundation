// $(document).ready(function(){
// 	// 確認jquery的核心已經被載入到瀏覽器內執行完，全部成功以後
//   // $('.header h1').hide();

//   $('h1').css('background-color','#f60');

// })

// $(document).ready(function() {
//   $('.button1').hover(function(event) {
//   	// 顯示與隱藏交替
//   	$('.title1').toggle();
//   });

//   $('.button2').click(function(event) {
//   	// 顯示與隱藏交替
//   	$('.title2').toggle();
//   });
// });

// $(document).ready(function() {
// 	$('.button').click(function(event) {
// 		console.log('clicking');
// 		// $('.text').css('display','block')
// 		// $('.text').slideDown(1000);
// 		// $('.text').slideToggle(2000);
// 		// $('.text').fadeIn(2000);
// 		// $('.text').fadeToggle(2000);
// 		$('.text').toggleClass('active');
		$('.text').addClass('active');
		$('.text').removeClass('active');
// 	});
// });

// index2.html
// $(document).ready(function() {
// 	$('.button').click(function(event) {
// 		$('.title').toggleClass('title2');
// 	});
// });

// index3.html
// $(document).ready(function() {
//   $('.start').click(function(event) {
// 		/* Act on the event */
//     $('.box').slideUp(1000).slideDown(1000).slideUp(1000).slideDown(1000)
//   });
// });

// index4.html
// $(document).ready(function() {
// 	$('.close').click(function(event){
// 		event.preventDefault();
// 		$('.box').slideUp(1000);
// 	})
// });

$(document).ready(function() {
	$('.box').css('width','600px')
});




