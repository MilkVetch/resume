// Description
	console.log('Designed By: Xing.Huang');



	var sTitle = $('.sketch-title').offset().top;

	var part1 = $('.part1').offset().top;
	var part2 = $('.part2').offset().top;
	var part3 = $('.part3').offset().top;
	var part4 = $('.part4').offset().top;
	var part5 = $('.part5').offset().top;
	var part6 = $('.part6').offset().top;
	var part7 = $('.part7').offset().top;
	var part1s = part1 - 88;
// start-arrow
	$('.menu-about').click(function() {
		$('.part1').animatescroll();
	});
	$('.start-arrow').click(function() {
		$('.part1').animatescroll();
	});	
// menu 
	$('.menu-skill').click(function() {
		$('.part2').animatescroll();
	});
	$('.menu-education').click(function() {
		$('.part3').animatescroll();
	});
	$('.menu-work').click(function() {
		$('.part4').animatescroll();
	});
	$('.menu-portfolio').click(function() {
		$('.part5').animatescroll();
	});
	$('.menu-social').click(function() {
		$('.part6').animatescroll();
	});
	$('.menu-contact').click(function() {
		$('.part7').animatescroll();
	});
// Scroll Effect
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		// console.log(wScroll);
		
		// TITLE OPACITY
			var sTitleNew = $('.sketch-title').offset().top;
			var k = (sTitleNew -sTitle) /5;
			if (k < 1) {
				k = 1;
			}
			var opacity = 1 / k;
			$('.sketch').css('transform','translate(0px, '+ wScroll /4 +'%)');

			$('.sketch-title').css({
				'transform': 'translate(0px, '+ wScroll /4 +'%)',
				'opacity': opacity
			});
			$('.sub-title').css({
				'transform': 'translate(0px, '+ wScroll /4 +'%)',
				'opacity': opacity
			});

		// // MENU
		// 	if ( wScroll >= $('.start-arrow').offset().top) {
		// 		$('.menu-btn').css('position','fixed').addClass('animated bounce');
		// 	} else {
		// 		$('.menu-btn').css('position','relative').removeClass('animated bounce');
		// 	}

	});