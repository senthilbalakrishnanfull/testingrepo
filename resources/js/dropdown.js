$(document).ready(function() {
	enableSelectBoxes();
	$('body, .bdy').click(function(e){
	if(e.target.className!='selected' && e.target.className!='selectArrow')
		$('.selectOptions').hide();
 });		 
});

function enableSelectBoxes(){
	$('div.selectBox').each(function(){
		$(this).children('span.selected, span.selected b').html($(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).attr('value',$(this).children('div.selectOptions').find('ul').find('li:first').html());
		
		$(this).children('span.selected, span.selected b, code.selectArrow').click(function(){
			if($(this).parent().children('div.selectOptions').css('display') == 'none'){
				$(this).parent().children('div.selectOptions').css('display','block');
			}
			else
			{
				$(this).parent().children('div.selectOptions').css('display','none');
			}
		});
		
		$(this).find('ul').find('li.selectOption').click(function(){
			$(this).parent().parent().css('display','none');
			$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
			$(this).parent().parent().siblings('span.selected').html($(this).html());
		});
		
		$(this).click(function(){
			$(this).siblings('div.selectBox').find('div.selectOptions').hide();
		});
		
	});	
				
}//-->