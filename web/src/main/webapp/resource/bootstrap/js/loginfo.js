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
	$("#date_s").val("");
	$("#date_e").val("");
	$("#content").val("");
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}