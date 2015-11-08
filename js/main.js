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

// start-arrow
	$('.menu-about').click(function() {
		if ($(window).scrollTop() > part1) {
			$('.part1').animatescroll();
		} else {
			$('.part1').animatescroll({padding:75});
		}
	});
	$('.start-arrow').click(function() {
		if ($(window).scrollTop() > part1) {
			$('.part1').animatescroll();
		} else {
			$('.part1').animatescroll({padding:75});
		}
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

		// MENU
			if ( wScroll >= $('.start-arrow').offset().top) {
				$('.menu-btn').css('position','fixed').addClass('animated bounce');
			} else {
				$('.menu-btn').css('position','relative').removeClass('animated bounce');
			}

	});