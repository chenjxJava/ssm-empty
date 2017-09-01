//JavaScript Document
$(document).ready(function(){

	$("#btn2").click(function() {
		var acctId=$("input[name='acctId']").val();
		var flag=0;
		if(acctId==null||acctId==undefined||acctId==''){
			flag=1;
		}
		var bankId=$("#select_bank option:selected").val();
		if(bankId==null||bankId==undefined||bankId==''){
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
		var arr = $("#select_bank").val().split('|');
		show_pop(888,"");
		$.ajax({
			type : 'POST',
			url : basePath+'card/applyVerification.do',
			data :  {
				acctId:acctId,
				bankName:$("#select_bank").find("option:selected").text(),
				custName:custName,
				mobilePhone:mobilePhone,
				idCode:idCode,
				idType:certificateType,
				sbankCode:arr[1]
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					if (data.success) {
						show_pop(0,"发送成功");
					} else {
						show_pop(0,data.msg);
					}
				}
			},
			error : function() {
			}
		});
	});
 
	$("#btn1").click(function() {
		var acctId=$("input[name='acctId']").val();
		var flag=0;
		if(acctId==null||acctId==undefined||acctId==''){
			flag=1;
		}
		var bankId=$("#select_bank option:selected").val();
		if(bankId==null||bankId==undefined||bankId==''){
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
		
		var idName=$("#select2 option:selected").text();
		var arr = $("#select_bank").val().split('|');
		show_pop(888,"");
		$.ajax({
			type : 'POST',
			url : 'card/verificationb.do',
			data : {
				bankNo : $("#acctId").val(),
				messageCode : $("#messageCode").val(),
				bankId:arr[0],
				idCode:idCode,
				idType:certificateType,
				userName:custName,
				idName:idName
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						show_pop(0,data.msg);
						setTimeout(function(){To_link('card');},1000);
					} else {
						show_pop(0,data.msg);
					}
				}
			},
			error : function() {
				show_pop(0,'系统异常');
			}
		});
	});

});


$(function(){

	$(document).on('click','#select_crad',function(){
		$('#popup_background').css('display','block'); 
		$('#popup_card').css('display','block');   
	});

	$(document).on('click','#clear',function(){
		$('#popup_background').css('display','none'); 
		$('#popup_card').css('display','none');   
	});

	$(document).on('click','#clear2',function(){
		$('#popup_background').css('display','none'); 
		$('#popup_content').css('display','none');   
	});

});

function ShowImg(x) {

	$('#popup_background').css('display','none'); 
	$('#popup_card').css('display','none'); 
	$('.content_tr_input3').css('display','block'); 

	var imgSrc = $("#" + x + "")[0].src;
	$("#select_bank").attr("src", imgSrc);
	$("#bankId").val($("#bank" + x + "").val());
	$("#sbankCode").val($("#code" + x + "").val());
	$("#bankName").val($("#name" + x + "").val());
}

