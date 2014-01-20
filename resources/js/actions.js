$(document).ready(function() {
	var shoe_ht = ($('.img-rack li').width())/4;
	var shoe_wt = ($('.img-rack li').width()) - shoe_ht;
//	$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );
	
	var someClass = { "height": shoe_wt };
	
	$('.img-rack li').css(someClass);
	
	$(window).resize(function() {
			var shoe_ht = ($('.img-rack li').width())/4
			$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );	
	});
	
	$('.main-nav').click(function(){
		$('.rt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.rt-side').show(1000);
		}
	});

	$('.rt-nav').click(function(){
		$('.lt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-lt', 500, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.lt-side').show(1000);
		}
	});
	

//	$('.dropdown-button').click(function(){
//		$(this).addClass('open');
//	});
	


});