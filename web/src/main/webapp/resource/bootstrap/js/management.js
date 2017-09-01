// JavaScript Document
$(document).ready(function(){

	$("#reset").on("click",function(){
		resetinfo();
	});	
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
});

function resetinfo(){
	$("#name").val("");
	$("#state").val("0");
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}