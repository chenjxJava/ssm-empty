// JavaScript Document
$(document).ready(function() {
	
	change_div();
	$(document).on('click','#exitJSP',function(){
		var Linkadd='bankrecharge/exitJSP.html';
		show_pop(888,"跳转中");
		window.location.href=basePath+Linkadd;
	})
});

function change_div(){
	var height = $(window).height() - 120
	$("#container").css("height",height+ "px")
}
