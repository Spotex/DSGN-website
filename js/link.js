$(function (){
	link='.b_news-text';

	$(link).each(function(){
	    $(this).click(function(){
	        location = $(this).find('a').attr('href');});
	    $(this).css('cursor','pointer');
	});
});