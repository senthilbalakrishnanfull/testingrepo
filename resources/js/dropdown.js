$(document).ready(function() {
	enableSelectBoxes();
	$('body, .bdy').click(function(e){
	if(e.target.className!='selected' && e.target.className!='selectArrow')
		$('.selectOptions').css('display','none');
 });		 
});

function enableSelectBoxes(){
	$('div.selectBox').each(function(){
		//alert("d");
		$(this).children('span.selected, span.selected b').html($(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).attr('value',$(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).children('span.selected, span.selected b, code.selectArrow').click(function(){
			if($(this).parent().children('div.selectOptions').css('display') == 'none'){
				$(this).parent().children('div.selectOptions').css('display','block');

				var customScrollbar=$(this).parent().children('div.selectOptions').find(".mCSB_scrollTools");
				customScrollbar.css({"opacity":0});
				$(this).parent().children('div.selectOptions').mCustomScrollbar("update");
				customScrollbar.animate({opacity:1},"slow");

			}
			else
			{
				$(this).parent().children('div.selectOptions').css('display','none');
			}
		});
		
		$(this).find('ul').find('li.selectOption').click(function(){
			//$(this).parent().parent().css('display','none');
			$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
			$(this).closest('div.selectBox').find('span.selected').html($(this).html());
			//$(this).parent().parent().siblings('span.selected').html($(this).html());
		});
		
		$(this).click(function(){
			//$(this).parent().siblings('div.selectBox').find('div.selectOptions').hide();
			 $(this).parent().siblings().find('div.selectOptions').css('display','none');
		});
		
	});	
				
}