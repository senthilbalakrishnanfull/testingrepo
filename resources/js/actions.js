$(document).ready(function() {
	var shoe_ht = ($('.img-rack li').width())/4;
	var shoe_wt = ($('.img-rack li').width()) - shoe_ht;
 	//$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );
	
	var someClass = { "height": shoe_wt };
	
	$('.img-rack li').css(someClass);
	
	$(window).resize(function() {
		var shoe_ht = ($('.img-rack li').width())/4
		$('.img-rack li').height(($('.img-rack li').width()) - shoe_ht );	

		$('.info-description, .social-links').height($('.img-idp-holder').height());
		$('.desc-wrapper').height($('.img-idp-holder').height()-50);
		$('.img-rack li a').height($('.img-rack li').height());

	});

	// nice scroll for dropdown and info code start here
	// nice scroll common code start here
	 var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-26840957-1']);
      _gaq.push(['_setDomainName', '.areaaperta.com']);
      _gaq.push(['_trackPageview']);
    
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
	// nice scroll common code end here

	$('.info-description, .social-links').height($('.img-idp-holder').height());
	$('.desc-wrapper').height($('.img-idp-holder').height()-50);

	$(".common-scroller").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
	});
	$(".dropdown_scroller").mCustomScrollbar();

	// customform code start here
	$('.dropdown, form').customForm();

	// img-rack spacing code start here
	$('.img-rack li a').height($('.img-rack li').height());

	 // left side menu navigation code start 
	$('.main-nav a, .main-nav code').click(function(){
		$('.rt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-rt', 200, 'easeInOutQuad');
			$('header').switchClass( 'push-none', 'push-rt', 200, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-none', 'push-rt', 200, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
			$('header').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
			//$('.rt-side').show(1000);
		}

		if ($('.img-idp-holder').hasClass('push-lt')) {
			$('.img-idp-holder').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
			$('.like').removeClass('hit');
			//$('.social-links').show(5000);
		}
		if ($('.img-idp-holder').hasClass('push-rt')) {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
			$('.info').removeClass('hit');
			//$('.info-description').show(5000);
		}
	});

	// right side menu navigation code start 
	$('.rt-nav').click(function(){
		$('.lt-side').hide();
		if ($('section').hasClass('push-none')) {
			$('section').switchClass( 'push-none', 'push-lt', 200, 'easeInOutQuad');
			$('header').switchClass( 'push-none', 'push-lt', 200, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-none', 'push-lt', 200, 'easeInOutQuad');
		}
		else {
			$('section').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
			$('header').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
			$('.sorting-wrapper').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
		}

		if ($('.img-idp-holder').hasClass('push-lt')) {
			$('.img-idp-holder').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
			$('.like').removeClass('hit');
		}

		if ($('.img-idp-holder').hasClass('push-rt')) {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
			$('.info').removeClass('hit');
		}
	});
	

	// cart holder code start
	$('.cart-color-act').click(function(){
		$('.rt-side-cart-color').addClass( 'push-rt', 200, 'easeInOutQuad');	
	});

	$('.cart-size-act').click(function(){
		$('.rt-side-cart-size').addClass( 'push-rt', 200, 'easeInOutQuad');
	});

	$('.cart-color-close-act').click(function(){
		$('.rt-side-cart-color').removeClass( 'push-rt', 200, 'easeInOutQuad');
	});

	$('.cart-size-close-act').click(function(){
		$('.rt-side-cart-size').removeClass( 'push-rt', 200, 'easeInOutQuad');
	});

	$('.cart-item-remove-act').click(function(){
		$(this).parent().hide();	
	});

	$('.rt-side-cart-color ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).siblings().removeClass('cart-color-select-act');
		$(this).addClass('active');
		$(this).addClass('cart-color-select-act');
		$('.rt-side-cart-color').removeClass( 'push-rt', 200, 'easeInOutQuad');
	});

	$('.rt-side-cart-size ul li.sold').click(function(){
		$(this).siblings().removeClass('active');
		$(this).siblings().removeClass('cart-size-select-act');
		$(this).addClass('active');
		$(this).addClass('cart-size-select-act');
		$('.rt-side-cart-size').removeClass( 'push-rt', 200, 'easeInOutQuad');
	});

	$('.lt-side nav a').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('section').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
		$('header').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
		$('.sorting-wrapper').switchClass( 'push-rt', 'push-none', 200, 'easeInOutQuad');
	});

	$('.checkout-act').click(function(){
		$('section').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
		$('header').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
		$('.sorting-wrapper').switchClass( 'push-lt', 'push-none', 200, 'easeInOutQuad');
	});
	
	// info click code start here
	$('.info').click(function(){
		if ($('.img-idp-holder').hasClass('push-none')) {
			$('.img-idp-holder').switchClass( 'push-none', 'push-rt', 500, 'easeInOutQuad');
			$('.info').addClass('hit');
			//$('.info-description').show(5000);
		}
		else {
			$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('.info').removeClass('hit');
			//$('.info-description').show(5000);
		}

		if ($('section').hasClass('push-rt')) {
			$('section').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
			//$('.rt-side').show(1000);
		}

		if($(window).width() < 321)
		{
			console.log('window width :: '+$(window).width());
			if ($('.info-description').css("z-index") != 2)
			{
				$('.info-description').css("z-index",2);
			}
		}
	});

	$('.info-description code').click(function(){
		$('.img-idp-holder').switchClass( 'push-rt', 'push-none', 500, 'easeInOutQuad');
		$('.info').removeClass('hit');
		//$('.info-description').show(5000);

		if($(window).width() < 321)
		{
			if ($('.info-description').css("z-index") == 2)
			{
				$('.info-description').css("z-index",0);
			}
		}	
	});

	// social link code start here
	$('.social-links code.icon-icons-remove').click(function(){
		$('.like').removeClass('hit');
		if($(window).width() < 321)
		{
			if ($('.social-links').css("z-index") == 2)
			{
				$('.social-links').css("z-index",0);
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
		}

		if ($('section').hasClass('push-lt')) {
			$('section').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
			$('header').switchClass( 'push-lt', 'push-none', 500, 'easeInOutQuad');
		}

		if($(window).width() < 321)
		{
			console.log('window width :: '+$(window).width());
			if ($('.social-links').css("z-index") != 2)
			{
				$('.social-links').css("z-index",2);
			}
		}

	});

	// rating code start here
	$(".rating-select-act code").click(function(){
		//console.log("inside rating");
		$(this).removeClass("default-rating");
		$(this).addClass("review-selected");
		$(this).prevAll().removeClass("default-rating");		
		$(this).prevAll().addClass("review-selected");
		$(this).nextAll().removeClass("review-selected");		
		$(this).nextAll().addClass("default-rating");
	});

});

