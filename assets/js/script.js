$(document).ready(function() {


setTimeout(function(){
		$('#wrapper').addClass('wrapper-active');
		$('#navbar_container').addClass('active');
	}, 300);

var lastScrollTop = 0;

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 400);
    return false;
});
$(window).scroll(function(event){


/*

   var st = $(this).scrollTop();
   if (st <= 0) {
   		$('#navbar_container').addClass('active');
   } else if (st > lastScrollTop){
       $('#navbar_container').removeClass('active');
   } else if  (st < lastScrollTop - 5) {
       $('#navbar_container').addClass('active');
   }

   lastScrollTop = st;
   if (st == 0) {
   	$('#navbar_container').css('border-bottom', '1px solid transparent');
   } else if (st - 100 > 0) {
   		$('#navbar_container').css('border-bottom', '1px solid rgba(0,0,0,0.05)');
   }*/
});


	$('.lines-button').click(function() {
		if ($(this).hasClass('close')) {
			$(this).removeClass('close');
			$('#navbar_right').removeClass('active-navbar');
		} else {
			$(this).addClass('close');
			$('#navbar_right').addClass('active-navbar');
		}
	});

	$('#button-wrapper').click(function() {

	});

 });