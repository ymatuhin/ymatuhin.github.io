$(document).ready(function(){

	$(".head_menu").click(function(){
		$(this).next(".message_body").slideToggle("fast");
		$(this).toggleClass("active");
	});


});

function Load(href, height)
{
	$("#Top").height(height);
	Top.innerHTML="<iframe src="+href+" id='NewFrame' scrolling='no'></iframe>";
}