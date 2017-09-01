// JavaScript Document
$(document).ready(function(){

	$("#reset").on("click",function(){
		resetinfo();
	});	

	$("#create").on("click",function(){
		document.getElementById("ts1").innerHTML="";
		document.getElementById("ts2").innerHTML="";
		document.getElementById("ts3").innerHTML="";
		var flag=0;
		var oldpwd=$("#oldpwd").val();
		if($("#oldpwd").val()==""){
			document.getElementById("ts1").innerHTML="✖ 请输入原始密码！";flag=1;
			return;
		}
		var newpwd1=$("#newpwd1").val();
		if($("#newpwd1").val()==""){
			document.getElementById("ts2").innerHTML="✖ 请输入新密码！";flag=1;
			return;
		}
		if($("#oldpwd").val()== $("#newpwd1").val()){
			document.getElementById("ts2").innerHTML="✖ 新密码不能与原始密码一样哦！";flag=1;
			return;
		}
		var newpwd2=$("#newpwd2").val();
		if($("#newpwd2").val()==""){
			document.getElementById("ts3").innerHTML="✖ 请再次输入新的密码！";flag=1;
			return;
		}
		if($("#newpwd1").val()!= $("#newpwd2").val()){
			document.getElementById("ts3").innerHTML="✖ 两次新密码输入不一致，请重新输入！";flag=1;
			return;
			}
		if(flag==1){
			return;
			}else{
			var URL=basePath+'user/restpassword_login.do';
			$.post(URL,{'oldPwd':hex_md5(oldpwd),'newPwd':hex_md5(newpwd1)},function(data){
				if (data != null) {
					if(data.success){
						alert("✔ 修改成功，请重新登录！");
						resetinfo();
						window.parent.location.reload();
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

});

function resetinfo(){
	$("#oldpwd").val("");
	$("#newpwd1").val("");
	$("#newpwd2").val("");
	document.getElementById("ts1").innerHTML="";
	document.getElementById("ts2").innerHTML="";
	document.getElementById("ts3").innerHTML="";
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
}