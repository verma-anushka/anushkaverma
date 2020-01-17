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
		$('.inline-menu-container').addClass('showx');
		$('.inline-menu-container.style2').addClass('dark');
	});
	//On Click Open About/Resume Block
	$('.about-block, .menu-item.about').on('click', function () {
		$('.content-blocks').removeClass('showx');
		$('.content-blocks.about').addClass('showx');
		$('.content-blocks').addClass('hide');
		$('.content-blocks.about').removeClass('hide');
		$('.menu-item').removeClass('active');
		$('.menu-item.about').addClass('active');
	});
	//On Click Open Timeline Block
	$('.timeline-block, .menu-item.timeline').on('click', function () {
		$('.content-blocks').removeClass('showx');
		$('.content-blocks.timeline').addClass('showx');
		$('.content-blocks').addClass('hide');
		$('.content-blocks.timeline').removeClass('hide');
		$('.menu-item').removeClass('active');
		$('.menu-item.timeline').addClass('active');
	});
	//On Click Open Skills Block
	$('.skills-block, .menu-item.skills').on('click', function () {
		$('.content-blocks').removeClass('showx');
		$('.content-blocks.skills').addClass('showx');
		$('.content-blocks').addClass('hide');
		$('.content-blocks.skills').removeClass('hide');
		$('.menu-item').removeClass('active');
		$('.menu-item.skills').addClass('active');
	});
	//On Click Open Portfolio Block
	$('.portfolio-block, .menu-item.portfolio').on('click', function () {
		$('.content-blocks').removeClass('showx');
		$('.content-blocks.portfolio').addClass('showx');
		$('.content-blocks').addClass('hide');
		$('.content-blocks.portfolio').removeClass('hide');
		$('.menu-item').removeClass('active');
		$('.menu-item.portfolio').addClass('active');
	});
	//On Click Open Contact Block
	$('.contact-block, .menu-item.contact').on('click', function () {
		$('.content-blocks').removeClass('showx');
		$('.content-blocks.contact').addClass('showx');
		$('.content-blocks').addClass('hide');
		$('.content-blocks.contact').removeClass('hide');
		$('.menu-item').removeClass('active');
		$('.menu-item.contact').addClass('active');
	});
	//On Click Close Blocks
	$('#close').on('click', function () {
		$('.name-block').removeClass('reverse');
		$('.name-block-container').removeClass('reverse');
		$('.main-menu').removeClass('hidex');
		$('.main-menu').removeClass('hide');
		$('.left-menu').addClass('hidex');
		$('.left-menu').addClass('hide');
		$('.content-blocks').removeClass('showx');
		$('.content-blocks').addClass('hide');
		$('.menu-blocks').removeClass('hidex');
		$('.inline-menu-container').removeClass('showx');
		$('.menu-item').removeClass('active');
	});

	$('.menu-block, .menu-item, #close').on('click', function () {
		$('.content-blocks').animate({ scrollTop: 0 }, 800);
	});
	
})(jQuery);