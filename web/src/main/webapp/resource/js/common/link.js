//JavaScript Document
function To_link(id) { 
	var Linkadd=id + '.html';
	show_pop(888,"跳转中");
	window.location.href=basePath+Linkadd;
}
function HideOrShow(x,flag) { 
	var current1=document.getElementById(x);  
	if(flag=="1"){
		current1.style.display ="block"; 
	}else{
		current1.style.display ="none"; 
	}
} 