$(document).ready(function() {
	enableSelectBoxes();
	$('body, .bdy').click(function(e){
	if(e.target.className!='selected' && e.target.className!='selectArrow')
		$('.selectOptions').css('z-index','-1');
 });		 
});

function enableSelectBoxes(){
	$('div.selectBox').each(function(){
		//alert("d");
		$(this).children('span.selected, span.selected b').html($(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).attr('value',$(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).children('span.selected, span.selected b, code.selectArrow').click(function(){
			if($(this).parent().children('div.selectOptions').css('z-index') == '-1'){
				$(this).parent().children('div.selectOptions').css('z-index','9');
			}
			else
			{
				$(this).parent().children('div.selectOptions').css('z-index','-1');
			}
		});
		
		$(this).find('ul').find('li.selectOption').click(function(){
			$(this).parent().parent().css('z-index','-1');
			$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
			$(this).closest('div.selectBox').find('span.selected').html($(this).html());
			//$(this).parent().parent().siblings('span.selected').html($(this).html());
		});
		
		$(this).click(function(){
			//$(this).parent().siblings('div.selectBox').find('div.selectOptions').hide();
			$(this).parent().siblings().find('div.selectOptions').css('z-index','-1');
		});
		
	});	
				
}//-->