// JavaScript Document
$(document).ready(function(){

	$("#reset").on("click",function(){
		resetinfo();
	});	

	$("#create").on("click",function(){
		var b = /^[0-9a-zA-Z]*$/g;
		document.getElementById("ts1").innerHTML="";
		document.getElementById("ts2").innerHTML="";
		document.getElementById("ts3").innerHTML="";
		document.getElementById("ts4").innerHTML="";
		document.getElementById("ts5").innerHTML="";
		var flag=0;
		
		if($("#acount").val()==""){
			document.getElementById("ts1").innerHTML="✖ 请输入用户账号(只能是数字和字母)！";flag=1;
		}
		if ($("#acount").val()!="") {
			if(!b.test($("#acount").val())){
				document.getElementById("ts1").innerHTML="✖ 必须是字母和数字组成！";flag=1;
			}	
		}
		if($("#name").val()==""){
			document.getElementById("ts2").innerHTML="✖ 请输入用户名称！";flag=1;
		}
		if ($("#phoneNo").val()=="") {
			document.getElementById("ts3").innerHTML="✖ 请输入手机号码！";flag=1;
		}
		if($("#phoneNo").val()!=""){
			if ($("#phoneNo").val().length != 11 && isNaN($("#phoneNo").val())== false && !/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#phoneNo").val())){
				document.getElementById("ts3").innerHTML="✖ 请输入正确的手机号！";flag=1;
			}
		}
		if($("#type").val()=="0"){
			document.getElementById("ts4").innerHTML="✖ 请选择用户类型！";flag=1;
		}
		if($("#state").val()=="0"){
			document.getElementById("ts5").innerHTML="✖ 请选择账号使用状态！";flag=1;
		}
		/*if ($("#notes").val().length >= 200 && $("#notes").val() != "请输入内容（200字内）！"){
			document.getElementById("ts6").innerHTML="✖ 备注信息不可超过200字！";flag=1;
		}*/
		if(flag==1){
			return;
		}else{
			var acount = $("#acount").val();
			var name = $("#name").val();
			var phoneNo = $("#phoneNo").val();
			var type = $("#type").val();
			var status = $("#state").val();
			var notes = $("#notes").val();
			$.post(basePath+'user/addUser.do',{'userAccount':acount,'userName':name,'phoneNo':phoneNo,'type':type,'status':status},function(data){
				if (data != null) {
					if(data.success){
						show_pop(0,"✔ 新用户添加成功！");	
						resetinfo();
					}else{
						show_pop(0,data.msg);	
					}
				}
			},'json');
		}
	});	
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
	/*$(function(){  
		var t = $('#notes');
		t.css("color","#A9A9A9");
		t.val("请输入内容（200字内）！");
		var default_value = t.val();
		t.focus(function() {  
			t.css("color","black");  
			if (t.val() == default_value){t.val('');}
		});  
		t.blur(function() {
			t.css("color","black");  
			if (t.val() == '') {t.val(default_value);t.css("color","#A9A9A9");}  
		});  
	}); */
	
});

function resetinfo(){
	$("#acount").val("");
	$("#name").val("");
	$("#phoneNo").val("");
	$("#notes").val("请输入内容（200字内）！");
	$("#notes").css("color","#A9A9A9");
	$("#type").val("0");
	$("#state").val("0");
	document.getElementById("ts1").innerHTML="";
	document.getElementById("ts2").innerHTML="";
	document.getElementById("ts3").innerHTML="";
	document.getElementById("ts4").innerHTML="";
	document.getElementById("ts5").innerHTML="";
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
}