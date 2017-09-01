//JavaScript Document

$(document).ready(function(){
	$(document).on('click','#yue',function(){ 
		$('#yue1').css('display','block');
		$('#card1').css('display','none');
		$('#wangguan1').css('display','none');
	});
	
	$(document).on('click','#card',function(){
		$('#yue1').css('display','none');
		$('#card1').css('display','block');
		$('#wangguan1').css('display','none');
	});
	
	$(document).on('click','#wangguan',function(){
		$('#yue1').css('display','none');
		$('#card1').css('display','none');
		$('#wangguan1').css('display','block');
	});
	
	$(document).on('click','.cash_card',function(){
		$(".cash_card_d").attr("class","cash_card");
		var this_id = $(this).attr("id");
		$("#"+this_id).attr("class","cash_card_d"); 
	});
	
	$("#add").on('click',function(){
		window.open(basePath+"recharge/addCard_kj.html");
	});
	
	$("#wgpay").on('click',function(){
		window.open(basePath+"recharge/generatedForm_pay.html?orderId="+$("#_orderNumber").val()+"&price="+$("#pay_sj").html());
	});
	
	/**
	 * 发送验证码
	 */
	$("#sendMessage").on('click',function(){
		var type=$('.cash_card_d').attr("id"); 
		if(type==null||type==''||type==undefined){
			show_pop(0,"请先选择需要支付的银行卡");
			return;
		}
		$(this).attr("disabled",true);
		/**
		 * 获取卡ID
		 */
		var openId=$("#"+type).find("input").val();
		var money=$("#pay_sj").html();
		show_pop(888,"发送中...");
		var url=basePath+"pay/SSMS.do";
		$.ajax({
			type : 'POST',
			url : url,
			dataType : 'json',
			data:{
				openId:openId,
				amount:money
			},
			success : function(data) {
				show_pop(999,"");
				if (data != null) {
					if (data.success) {
						show_pop(0,"发送成功");
						$("#orderId").val(data.data);
					} else {
						show_pop(0,data.msg);
					}
				}
				$(this).attr("disabled",false);
			},
			error : function() {
				show_pop(0,'系统异常');
				$(this).attr("disabled",false);
			}
		});

	});

	$(".zhifu").on('click',function(){
		
		if($(this).attr('id')=="pay1"){
			var _password=$("#_password").val();
			if(_password==null||_password==''||_password.length!=6||_password==undefined){
				show_pop(0,"请输入支付密码");
				return;
			}
			var _my_yue=$("#my_sjyue").html();//用户余额
			var _my_yfmoney=$("#pay_sj").html();//应付金额
			if(parseInt(_my_yue)<parseInt(_my_yfmoney)){
				show_pop(0,"余额不足");
				return;
			}
			var id = $("#_orderNumber").val();
			show_pop(888,"支付中...");
			var url = basePath+ "pay/payBalance.do";
			$.ajax({
				type : 'POST',
				url : url,
				dataType : 'json',
				data:{
					password:hex_md5(_password),
					id:id
				},
				success : function(data) {
					if (data != null) {
						if (data.success) {
							show_pop(0,"支付成功,3秒后自动跳转到订单页");
							setTimeout(function(){To_link('order');},3000);
						} else {
							show_pop(0,data.msg);
						}
					}
				},
				error : function() {
					show_pop(0,"系统异常");
				}
			});
			return;
		}
		
		if($(this).attr('id')=="pay2"){
			type=$('.cash_card_d').attr("id");
			if(type!=null && type!='' && type!=undefined){
				var openId=$("#"+type).find("input").val();
				var orderId=$("#orderId").val();
				
				var verifyCode=$("#verifyCode").val();
				if(verifyCode==null ||verifyCode=='' ||verifyCode==undefined){
					show_pop(0,'请输入验证码');
					return;
				}
				var _password=$("#_password_card").val();
				if(_password==null ||_password=='' ||_password==undefined){
					show_pop(0,'请输入支付密码');
					return;
				}
				
				var orderNumber=$("#_orderNumber").val();
				$("#_password").val(hex_md5(_password));
				var url = basePath+ "pay/submitPay.do"; 
				show_pop(888,"支付中...");
				$.ajax({
					type : 'POST',
					url : url,
					dataType : 'json',
					data:{
						orderId:orderId,
						password:hex_md5(_password),
						verifyCode:verifyCode,
						orderNumber:orderNumber,
					},
					success : function(data) {
						if (data != null) {
							if (data.success) {
								show_pop(0,'支付成功,3秒后自动跳转到订单首页');
								setTimeout(function(){To_link('order');},3000);
							} else {
								show_pop(0,data.msg);
							}
						}
					},
					error : function() {
						show_pop(0,"系统异常");
					}
				});
				return;
			}
			
			show_pop(0,'请选择支付的银行卡');
		}

	});
	
	$(".untie").on('click',function(){
		type=$(this).attr('id');
		var openId=$("#"+type).find("input").val();
		var url = basePath+"pay/untieCard_kj.do"; 
		$.ajax({
			type : 'POST',
			url : url,
			dataType : 'json',
			data:{
				openId:openId
			},
			success : function(data) {
				if (data != null) {
					if (data.success) {
						show_pop(0,'解绑成功');
						window.location.reload();
					} else {
						show_pop(0,data.msg);
					}
				}
			},
			error : function() {
				show_pop(0,"系统异常");
			}
		});
	})
})

function parseFormatNum(number,n){
	if(n != 0 ){
		n = (n > 0 && n <= 20) ? n : 2; 
	}
	number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	var sub_val = number.split(".")[0].split("").reverse(); 
	var sub_xs = number.split(".")[1];  
	
	var show_html = "";  
	for (i = 0; i < sub_val.length; i++){  
		show_html += sub_val[i] + ((i + 1) % 3 == 0 && (i + 1) != sub_val.length ? "," : "");  
	}  
	
	if(n == 0 ){
		return show_html.split("").reverse().join("");  
	}else{
		return show_html.split("").reverse().join("") + "." + sub_xs;  
	}
}

