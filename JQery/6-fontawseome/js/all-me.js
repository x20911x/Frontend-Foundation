$(document).ready(function() {

 $("a[href$='.doc']").addClass('fa fa-file-word-o');
 $("a[href$='.jpg']").addClass('fa fa-file-photo-o');
 $("a[href$='.zip']").addClass('fas fa-otter');
 $("a[href^='doc']").click(function(event) {
 	/* Act on the event */
 	event.preventDefault();
 	$(this).toggleClass($(this).attr('class'));
 });
});