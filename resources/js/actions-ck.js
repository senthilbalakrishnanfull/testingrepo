$(document).ready(function(){var e=$(".img-rack li").width()/4,t=$(".img-rack li").width()-e,n={height:t};$(".img-rack li").css(n);$(window).resize(function(){var e=$(".img-rack li").width()/4;$(".img-rack li").height($(".img-rack li").width()-e);$(".info-description, .social-links").height($(".img-idp-holder").height());$(".desc-wrapper").height($(".img-idp-holder").height()-50);$(".img-rack li a").height($(".img-rack li").height())});var r=r||[];r.push(["_setAccount","UA-26840957-1"]);r.push(["_setDomainName",".areaaperta.com"]);r.push(["_trackPageview"]);(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();$(".info-description, .social-links").height($(".img-idp-holder").height());$(".desc-wrapper").height($(".img-idp-holder").height()-50);$(".common-scroller").mCustomScrollbar({scrollButtons:{enable:!0}});$(".dropdown_scroller").mCustomScrollbar();$(".dropdown, form").customForm();$(".img-rack li a").height($(".img-rack li").height());$(".main-nav a, .main-nav code").click(function(){$(".rt-side").hide();if($("section").hasClass("push-none")){$("section").switchClass("push-none","push-rt",200,"easeInOutQuad");$("header").switchClass("push-none","push-rt",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-none","push-rt",200,"easeInOutQuad");$(".lt-side").addClass("open-menu",200,"easeInOutQuad")}else{$("section").switchClass("push-rt","push-none",200,"easeInOutQuad");$("header").switchClass("push-rt","push-none",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-rt","push-none",200,"easeInOutQuad");$(".lt-side").removeClass("open-menu",200,"easeInOutQuad")}if($(".img-idp-holder").hasClass("push-lt")){$(".img-idp-holder").switchClass("push-lt","push-none",200,"easeInOutQuad");$(".like").removeClass("hit")}if($(".img-idp-holder").hasClass("push-rt")){$(".img-idp-holder").switchClass("push-rt","push-none",200,"easeInOutQuad");$(".info").removeClass("hit")}});$(".rt-nav").click(function(){$(".lt-side").hide();if($("section").hasClass("push-none")){$("section").switchClass("push-none","push-lt",200,"easeInOutQuad");$("header").switchClass("push-none","push-lt",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-none","push-lt",200,"easeInOutQuad");$(".rt-side").addClass("open-menu",200,"easeInOutQuad")}else{$("section").switchClass("push-lt","push-none",200,"easeInOutQuad");$("header").switchClass("push-lt","push-none",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-lt","push-none",200,"easeInOutQuad");$(".rt-side").removeClass("open-menu",200,"easeInOutQuad")}if($(".img-idp-holder").hasClass("push-lt")){$(".img-idp-holder").switchClass("push-lt","push-none",200,"easeInOutQuad");$(".like").removeClass("hit")}if($(".img-idp-holder").hasClass("push-rt")){$(".img-idp-holder").switchClass("push-rt","push-none",200,"easeInOutQuad");$(".info").removeClass("hit")}});$(".cart-color-act").click(function(){$(".rt-side-cart-color").addClass("push-rt",200,"easeInOutQuad")});$(".cart-size-act").click(function(){$(".rt-side-cart-size").addClass("push-rt",200,"easeInOutQuad")});$(".cart-color-close-act").click(function(){$(".rt-side-cart-color").removeClass("push-rt",200,"easeInOutQuad")});$(".cart-size-close-act").click(function(){$(".rt-side-cart-size").removeClass("push-rt",200,"easeInOutQuad")});$(".cart-item-remove-act").click(function(){$(this).parent().hide()});$(".rt-side-cart-color ul li").click(function(){$(this).siblings().removeClass("active");$(this).siblings().removeClass("cart-color-select-act");$(this).addClass("active");$(this).addClass("cart-color-select-act");$(".rt-side-cart-color").removeClass("push-rt",200,"easeInOutQuad")});$(".rt-side-cart-size ul li.sold").click(function(){$(this).siblings().removeClass("active");$(this).siblings().removeClass("cart-size-select-act");$(this).addClass("active");$(this).addClass("cart-size-select-act");$(".rt-side-cart-size").removeClass("push-rt",200,"easeInOutQuad")});$(".lt-side nav a").click(function(){$(this).siblings().removeClass("active");$(this).addClass("active");$("section").switchClass("push-rt","push-none",200,"easeInOutQuad");$("header").switchClass("push-rt","push-none",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-rt","push-none",200,"easeInOutQuad")});$(".checkout-act").click(function(){$("section").switchClass("push-lt","push-none",200,"easeInOutQuad");$("header").switchClass("push-lt","push-none",200,"easeInOutQuad");$(".sorting-wrapper").switchClass("push-lt","push-none",200,"easeInOutQuad")});$(".info").click(function(){if($(".img-idp-holder").hasClass("push-none")){$(".img-idp-holder").switchClass("push-none","push-rt",500,"easeInOutQuad");$(".info").addClass("hit")}else{$(".img-idp-holder").switchClass("push-rt","push-none",500,"easeInOutQuad");$(".info").removeClass("hit")}if($("section").hasClass("push-rt")){$("section").switchClass("push-rt","push-none",500,"easeInOutQuad");$("header").switchClass("push-rt","push-none",500,"easeInOutQuad")}if($(window).width()<321){console.log("window width :: "+$(window).width());$(".info-description").css("z-index")!=2&&$(".info-description").css("z-index",2)}});$(".info-description code").click(function(){$(".img-idp-holder").switchClass("push-rt","push-none",500,"easeInOutQuad");$(".info").removeClass("hit");$(window).width()<321&&$(".info-description").css("z-index")==2&&$(".info-description").css("z-index",0)});$(".social-links code.icon-icons-remove").click(function(){$(".like").removeClass("hit");$(window).width()<321&&$(".social-links").css("z-index")==2&&$(".social-links").css("z-index",0)});$(".like").click(function(){if($(".img-idp-holder").hasClass("push-none")){$(".img-idp-holder").switchClass("push-none","push-lt",500,"easeInOutQuad");$(".like").addClass("hit")}else{$(".img-idp-holder").switchClass("push-lt","push-none",500,"easeInOutQuad");$(".like").removeClass("hit")}if($("section").hasClass("push-lt")){$("section").switchClass("push-lt","push-none",500,"easeInOutQuad");$("header").switchClass("push-lt","push-none",500,"easeInOutQuad")}if($(window).width()<321){console.log("window width :: "+$(window).width());$(".social-links").css("z-index")!=2&&$(".social-links").css("z-index",2)}});$(".rating-select-act code").click(function(){$(this).removeClass("default-rating");$(this).addClass("review-selected");$(this).prevAll().removeClass("default-rating");$(this).prevAll().addClass("review-selected");$(this).nextAll().removeClass("review-selected");$(this).nextAll().addClass("default-rating")})});