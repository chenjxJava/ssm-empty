// JavaScript Document
$(document).ready(function() {
	
	change_div();
	
	$(".left-menu_but").hover(function(){  
		if($(this).attr("id") == 'user'){
	  	$("#but1").show(200);$("#but2").hide(200);$("#but3").hide(200);$("#but4").hide(200);
	  }else if ($(this).attr("id") == 'report') {
	  	$("#but1").hide(200);$("#but2").hide(200);$("#but3").show(200);$("#but4").hide(200);  
	  }else if ($(this).attr("id") == 'system') {
	  	$("#but1").hide(200);$("#but2").hide(200);$("#but3").hide(200);$("#but4").show(200); 
	  }
	},function(){  

	});

	$(".left-menu_but2").hover(function(){  
		$(".left-menu_but2").css("background-color","#FFF");
		$("#"+$(this).attr("id")).css("background-color","#FF6600");
		$("#"+$(this).attr("id")+"img").css("display","block");
	},function(){  
		$("#"+$(this).attr("id")+"img").css("display","none");
	});


});

function change_div(){
	var width = document.body.clientWidth - 230
	var height = $(window).height() - 102
	document.getElementById("right").style.width= width + "px"
	$("#ifr").css("width",width+ "px")
	$("#ifr").css("height",height+ "px")
}

