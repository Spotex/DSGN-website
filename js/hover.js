$(function (){ 
	$('body').click(function (event) {
	    t=event.target||event.srcElement;
	    $(t).css('fill','#ff0000');
	    $(t).css('stroke','#ff0000');
	    $(t).closest('svg').css('transform','scale(1.1)');
	    $(t).closest('svg').css('cursor','default');
	    $(t).closest('svg').siblings('span').animate({
	       	opacity: "1"
	    }, 800);
	    $('.b_louis .i_heart path').css('fill','#fff');
        $('.b_louis .i_heart path').css('stroke','#fff');
	})
});
/*$(function (){ 
    $('.i_heart path').click(function(){
       $('.i_heart path').css('fill','red');
       $('.i_heart path').css('stroke','red');
       $('.i_heart svg').css('transform','scale(1.1)');
       $('.i_heart svg').css('cursor','default');
       $('.i_heart span').animate({
       		opacity: "1"
       }, 800);
    });
});*/