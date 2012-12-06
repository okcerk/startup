$(document).ready(function(){

	$("#menu").mouseover(function(){
		$("ul#menu").css("font-size","25px");
	});

	$("#menu").mouseout(function(){
		$("ul#menu").css("font-size","15px");
	});

	$(window).resize(function()
	{
		var art2width = $("#article2").width();
		if (art2width<900)
			$("#article2").css("float", "left");
		else
			$("#article2").css("float", "");
	});
	
});