$(document).ready(function() {
	$("#clear").click(function(){
		if($("#popup_ts").text()=="绑定成功！"){
			window.location.href = "cardsJSP.html";
		}else{
			$('#popup_background').css('display','none'); 
			$('#popup_content').css('display','none');
			$("#ts").html("");
		}	
	});
	 
	$("#but2").click(function() {

		var flag=0;
		var custName=$("input[name='custName']").val();
		if(custName==null||custName==undefined||custName==''){
			flag=1;
		}
		var certificateType=$("#select2 option:selected").val();
		if(certificateType=='0'||certificateType==undefined||certificateType==''){
			flag=1;
		}
		var idCode=$("input[name='idCode']").val();
		if(idCode==null||idCode==undefined||idCode==''){
			flag=1;
		}
		var mobilePhone=$("input[name='mobilePhone']").val();
		if(mobilePhone==null||mobilePhone==undefined||mobilePhone==''){
			flag=1;
		}
		if(flag==1){
			show_pop(0,"信息输入不完整，请重新确认！")
			return;
			}
		show_pop(888,"验证发送中");
		$.ajax({
			type : 'POST',
			url : basePath+'card/sendMessage.do',
			data :  $("#form").serialize(),
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						$("#checkMessage").val('1');
						show_pop(0,"已发送成功");
					} else {
						show_pop(0,data.msg);
					}
				}
			},
			error : function() {
				show_pop(0,'系统异常!');
			}
		});
	});
	$("#but1").click(function() {

		var flag=0;
		var messageCode = $("#messageCode").val();
		if (messageCode==null||messageCode==undefined||messageCode==''){
			flag=1;
		}
		var custName=$("input[name='custName']").val();
		if(custName==null||custName==undefined||custName==''){
			flag=1;
		}
		var certificateType=$("#select2 option:selected").val();
		if(certificateType=='0'||certificateType==undefined||certificateType==''){
			flag=1;
		}
		var idCode=$("input[name='idCode']").val();
		if(idCode==null||idCode==undefined||idCode==''){
			flag=1;
		}
		var mobilePhone=$("input[name='mobilePhone']").val();
		if(mobilePhone==null||mobilePhone==undefined||mobilePhone==''){
			flag=1;
		}
		if(flag==1){
			show_pop(0,"信息输入不完整，请重新确认！")
			return;
			}
		show_pop(888,"验证开通中");
		$.ajax({
			type : 'POST',
			url : 'card/checkMessagePersonal.do',
			data : {
				bankNo : $("#acctId").val(),
				messageCode : $("#messageCode").val(),
				bankId:$("#bankId").val()
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						show_pop(0,data.msg);
						setTimeout(function(){To_link('card');},2000);
					} else {
						show_pop(0,data.msg);
					}
				}
			},
			error : function() {
				show_pop(0,"系统异常！")
			}
		});
	});
});

function HideOrShow2(flag) { 
		var current1=document.getElementById("boxcz"); 
		var current2=document.getElementById("boxcz_1_2"); 
		var current3=document.getElementById("boxcz_1_3"); 		
		if(flag=="1"){
			current1.style.display ="block";
			current2.style.display ="block";
			current3.style.display ="none";
		}
		else if(flag=="2"){
			current1.style.display ="block";
			current2.style.display ="none";
			current3.style.display ="block";
		}
		else if(flag=="3"){
			current1.style.display ="none";
		}
		else if(flag=="4"){
			window.location.href = "cardsJSP.html";
		}
	} 

function Showdiv2(x){ 
	var current1=document.getElementById('ts_box');  
	if(x=="1"){
		current1.style.display="block";
	}
	else if (x=="2"){
		current1.style.display="none";
	}
}	

function HideOrShow2(flag) { 
	var current1=document.getElementById("boxcz"); 
	var current2=document.getElementById("boxcz_1_2"); 
	var current3=document.getElementById("boxcz_1_3"); 		
	if(flag=="1"){
		current1.style.display ="block";
		current2.style.display ="block";
		current3.style.display ="none";
	}
	else if(flag=="2"){
		current1.style.display ="block";
		current2.style.display ="none";
		current3.style.display ="block";
	}
	else if(flag=="3"){
		current1.style.display ="none";
	}
	else if(flag=="4"){
		window.location.href = "accountJSP.html";
	}
} 


