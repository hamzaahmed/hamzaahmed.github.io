$(document).ready(function() {


setTimeout(function() {
		$('#wrapper').addClass('loaded');
		$('.navbar-container').addClass('loaded');
	}, 300);

/*
$(window).scroll(function(event){

   var lastScrollTop = 0;
   var st = $(this).scrollTop();
   if (st <= 0) {
   		$('.navbar-container').addClass('active');
   } else if (st > lastScrollTop){
       $('.navbar-container').removeClass('active');
   } else if  (st < lastScrollTop - 5) {
       $('.navbar-container').addClass('active');
   }

   lastScrollTop = st;
   if (st == 0) {
   	$('.navbar-container').css('border-bottom', '1px solid transparent');
   } else if (st - 100 > 0) {
   		$('.navbar-container').css('border-bottom', '1px solid rgba(0,0,0,0.05)');
   }
});*/

	$('#read-button').click(function() {
		$(this).text(function(i, text) {
          return text === "Read less" ? "Read more" : "Read less";
      	})

		if ($('#more-text').is(":visible")) {
			$('#more-text').slideUp(300);
		} else {
			$('#more-text').slideDown(300);
		}
	});


	$('.lines-button').click(function() {
		if ($(this).hasClass('close')) {
			$(this).removeClass('close');
			$('#navbar-item-container').removeClass('navbar-active');
		} else {
			$(this).addClass('close');
			$('#navbar-item-container').addClass('navbar-active');
		}
	});

	$('.navbar-item a').click(function() {
		$('.lines-button').removeClass('close');
		$('#navbar-item-container').removeClass('navbar-active');
	});

 });