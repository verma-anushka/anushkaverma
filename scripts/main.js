(function ($) {
	"use strict";

	$('#text-slider').owlCarousel({
		nav: false,
		items: 1,
		navSpeed: 400,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});


	//On Click Open Menu Items
	$('.menu-block, .menu-item').on('click', function () {
		$('.name-block').addClass('reverse');
		$('.name-block-container').addClass('reverse');
		$('.main-menu').addClass('hidex');
		$('.main-menu').addClass('hide');
		$('.left-menu').removeClass('hidex');
		$('.left-menu').removeClass('hide');
		$('.menu-blocks').addClass('hidex');
	});

})(jQuery);