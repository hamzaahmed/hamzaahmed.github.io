$(document).ready(function() {


	setTimeout(function() {
		$('.wrapper').addClass('loaded');
		$('.nav-container').addClass('loaded');
	}, 300);

	$('.body-text .body-text-btn').click(function() {
		$(this).text(function(i, text) {
          return text === "collapse" ? "read more" : "collapse";
      	})

		if ($('.body-text-expand').is(":visible")) {
			$('.body-text-expand').slideUp(300);
		} else {
			$('.body-text-expand').slideDown(300);
		}
	});


	$('.lines-btn').click(function() {
		if ($(this).hasClass('close')) {
			$(this).removeClass('close');
			$('.btn-container').removeClass('btn-active');
			$('.nav-item-container').removeClass('nav-active');
		} else {
			$(this).addClass('close');
			$('.btn-container').addClass('btn-active');
			$('.nav-item-container').addClass('nav-active');
		}
	});

	$('.nav-item a').click(function() {
		$('.lines-btn').removeClass('close');
		$('.nav-item-container').removeClass('nav-active');
		$('.btn-container').removeClass('btn-active');
	});
 });