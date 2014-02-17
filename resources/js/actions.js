$(document).ready(function() {
	var shoe_ht = ($('.img-rack li').width())/4;
	var shoe_wt = ($('.img-rack li').width()) - shoe_ht;
//	$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );
	
	var someClass = { "height": shoe_wt };
	
	$('.img-rack li').css(someClass);
	
	$(window).resize(function() {
			var shoe_ht = ($('.img-rack li').width())/4
			$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );	


			$('.info_description, .like_description').height($('.img-idp-holder').height());
				$('.desc_wrapper').height($('.img-idp-holder').height()-50);


	});
	 
	$('.main-nav').click(function(){
		$('.rt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.rt-side').show(1000);
		}

		if ($('.img-idp-holder').hasClass('push-lt')) {
			$('.img-idp-holder').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.like').removeClass('hit');
			$('.like_description').show(5000);
		}
		if ($('.img-idp-holder').hasClass('push-rt')) {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.info').removeClass('hit');
			$('.info_description').show(5000);
		}

	});

	$('.rt-nav').click(function(){
		$('.lt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-lt', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-none', 'push-lt', 500, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-none', 'push-lt', 500, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.lt-side').show(1000);
		}

		if ($('.img-idp-holder').hasClass('push-lt')) {
			$('.img-idp-holder').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.like').removeClass('hit');
			$('.like_description').show(5000);
		}

		if ($('.img-idp-holder').hasClass('push-rt')) {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.info').removeClass('hit');
			$('.info_description').show(5000);
		}
	});



	$('.info').click(function(){
		if ($('.img-idp-holder').hasClass('push-none')) {
			$('.img-idp-holder').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
			$('.info').addClass('hit');
			$('.info_description').show(5000);
		}
		else {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.info').removeClass('hit');
			$('.info_description').show(5000);
		}

		if ($('section').hasClass('push-rt')) {
			$('section').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.rt-side').show(1000);
		}

		if($(window).width() < 321)
		{
			console.log('window width :: '+$(window).width());
			if ($('.info_description').css("z-index") != 2)
			{
				$('.info_description').css("z-index",2);
			}
		}
	});

	$('.info_description code').click(function(){
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.info').removeClass('hit');
			$('.info_description').show(5000);

			if($(window).width() < 321)
			{
				if ($('.info_description').css("z-index") == 2)
				{
					$('.info_description').css("z-index",0);
				}
			}	


	});



	$('.like_description code.icon-icons-remove').click(function(){
			$('.like').removeClass('hit');

			if($(window).width() < 321)
			{
				if ($('.like_description').css("z-index") == 2)
				{
					$('.like_description').css("z-index",0);
				}
			}	


	});




	$('.like').click(function(){
		if ($('.img-idp-holder').hasClass('push-none')) {
			$('.img-idp-holder').switchClass( 'push-none', 'push-lt', 500, 'easeInOutQuad');
			$('.like').addClass('hit');
		}
		else {
			$('.img-idp-holder').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.like').removeClass('hit');
			$('.like_description').show(5000);
		}

		if ($('section').hasClass('push-lt')) {
			$('section').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('.lt-side').show(1000);
		}

		if($(window).width() < 321)
		{
			console.log('window width :: '+$(window).width());
			if ($('.like_description').css("z-index") != 2)
			{
				$('.like_description').css("z-index",2);
			}
		}

	});


	
	// $(".rating_select_act code").toggle(function(){
	// 	$(this).removeClass("default_rating");
	// 	$(this).addClass("review_selected");
	// 	$(this).prevAll().removeClass("default_rating");		
	// 	$(this).prevAll().addClass("review_selected");
	// 	$(this).nextAll().removeClass("review_selected");		
	// 	$(this).nextAll().addClass("default_rating");
 //      },function(){		   
	// 	$(this).nextAll().removeClass("review_selected");		
	// 	$(this).nextAll().addClass("default_rating");
		
 //    });



	// $(window).load(function(){

	// 	$('.info_description, .like_description').height($('.img-idp-holder').height());
	// 	$('.desc_wrapper').height($('.img-idp-holder').height()-50);

	// });


	
	// $(function() {
	// 		$(".scroller").niceScroll();
	// 		alert("adsf");
	// 	});

/*** js scroll bar code ***/



});