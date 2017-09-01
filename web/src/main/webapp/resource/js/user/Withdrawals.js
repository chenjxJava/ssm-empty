// JavaScript Document
$(document).ready(function(){
    
	$(".cash_card").click(function() {
		$(".cash_card").css("border","1px #d4d4d4 solid");
		$("#" +$(this).attr("id")).css("border","1px #42a0ff solid");
		$("#selectno").val($(this).attr("id"));
	});
	 
	$(document).on('click','#addCard',function(){
		$.post(basePath+'/user/checkAuther.do',function(data){
			if (condition) {
				if(data.success){
					window.location.href = "addcard.html";
				}else{
					show_pop(0,data.msg);
					/**
					 * 跳转到实名认证页面
					 */
				}
			}
		},'json');
	});
	
	$("#ok").click(function() {
		// 获取选中的radio
		var radioId = $("#selectno").val();
		// 获取银行ID
		var bankId = $("#bank" + radioId).val();
		//用户账户上能提现的金额
		var amount = $("#tixian").val();
		if (bankId == null || bankId == '' || bankId == undefined) {
			show_pop(0,"请选择提现的银行卡！")
			return;
		}
		var bankMoney = $("#je").val();
		if (bankMoney == null || bankMoney == '' || bankMoney == undefined) {
			show_pop(0,"请输入提现金额！")
			return;
		}
		if (parseInt(bankMoney) <= parseInt(0)) {
			show_pop(0,"请输入正确的提现金额！")
			return;
		}
		var reg = new RegExp("^[0-9]+(.[0-9]{2})?$", "g"); 
		if( !reg.test(bankMoney) ){
			show_pop(0,"金额的小数位数最多2位！")
			return;
		}
		/*if (parseInt(bankMoney) > parseInt(amount)) {
			show_pop(0,"提现金额不足！")
			return;
		}*/
		if (parseInt(bankMoney) > parseInt(50000)) {
			show_pop(0,"每次提现不能超过5W！")
			return;
		}
		
		zf();
		
	});
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
})

function zf(){
	//var password = $("#password1").val()+$("#password2").val()+$("#password3").val()+$("#password4").val()+$("#password5").val()+$("#password6").val();
	var password = $("#password1").val();
	var radioId = $('#selectno').val();
	var bankId = $("#bank"+ radioId).val();
	var bankMoney = $("#je").val();
	if (password == null || password == '' || password == undefined || password.length != 6 ) {
		show_pop(0,"请输入正确的支付密码！")
		return;
	}
	if ($("#TotalAmount").val() < bankMoney){
		show_pop(0,"提现金额大于可提现金额，请确认！")
		return;
	}
	var url = basePath + "withdrawals/drawals.do";
	$.ajax({
		type : 'POST',
		url : url,
		data : {
			bankId : bankId,
			bankMoney : bankMoney,
			password : hex_md5(password)
		},
		dataType : 'json',
		success : function(data) {
			if (data != null) {
				if (data.success) {
					show_pop(0,data.msg);
					setTimeout(function(){To_link('index');},2000);
				} else {
					show_pop(0,data.msg);
				}
			}
		},
		error : function() {
			show_pop(0,"系统异常！")
		}
	});
}

function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}

