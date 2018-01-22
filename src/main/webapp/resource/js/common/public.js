// JavaScript Document
$(document).ready(function() {
	
	$(".menu_div_menu_select1").mouseover(function(){
		$(".menu_div_menu_select2").show(200);
	});
	$(".menu_div_menu_select1").mouseout(function(){
		
	});
	
	$(".menu_div_menu_select2").mouseover(function(){
		
	});
	$(".menu_div_menu_select2").mouseout(function(){
		$(".menu_div_menu_select2").hide(200);

	});
	
});


function OnInput(x){
    if(x==1){
    	if($("#password1").val() != ""){
    		$("#password2").focus();
    	}else{
    		$("#password1").focus();
    	}
    }else if(x==2){
    	if($("#password2").val() != ""){
    		$("#password3").focus();
    	}else{
    		$("#password1").focus();
    	}
    }else if(x==3){
    	if($("#password3").val() != ""){
    		$("#password4").focus();
    	}else{
    		$("#password2").focus();
    	}
    }else if(x==4){
    	if($("#password4").val() != ""){
    		$("#password5").focus();
    	}else{
    		$("#password3").focus();
    	}
    }else if(x==5){
    	if($("#password5").val() != ""){
    		$("#password6").focus();
    	}else{
    		$("#password4").focus();
    	}
    }else if(x==6){
    	if($("#password6").val() != ""){
    		$("#password6").focus();
    	}else{
    		$("#password5").focus();
    	}
    }
}



    