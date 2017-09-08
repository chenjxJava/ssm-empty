// JavaScript Document
$(document).ready(function() {
	
	$('#MobilNo').bind('input propertychange', function() {
		if (checkSubmitMobil()) {
			$('#GetNo').removeAttr("disabled");
			$('#GetNo').css('color', "#FF2800");
		} else {
			$('#GetNo').attr('disabled', "true");
			$('#GetNo').css('color', "#8f8f8f");
		}
	});

	$("#GetNo").click(function() {
		time(this);
		var mobilePhone = $("#MobilNo").val();
		if (mobilePhone == null || mobilePhone == '') {
			alert("请输入手机号码");
			return;
		}
		show_pop(888, "验证发送中");
		$.ajax({
			type : 'POST',
			url : basePath + 'SmsMessage2.do',
			data : {
				mobilePhone : mobilePhone,
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						show_pop(0, "已发送成功");
						$('#Number').removeAttr("disabled");
					} else {
						show_pop(0, data.msg);
					}
				}
			},
			error : function() {
				show_pop(0, '系统异常!');
			}
		});
	});

	$('#Number').bind('input propertychange', function() {
		if (checkNumber()) {
			$('#Next_step').css('background-color', "#5492F2");
		} else {
			$('#Next_step').css('background-color', "#8f8f8f");
		}
	});

	$("#Next_step").click(function() {
		if (!checkNumber()) {
			return;
		}
		
		var mobilePhone = $("#MobilNo").val();
		if (mobilePhone == null || mobilePhone == '') {
			alert("请输入手机号码");
			return;
		}
		var Number = $("#Number").val();
		if (Number == null || Number == '') {
			alert("请输入验证码");
			return;
		}
		show_pop(888, "验证中");
		$.ajax({
			type : 'POST',
			url : basePath + 'VerifySmsMessage.do',
			data : {
				mobilePhone : mobilePhone,
				Number : Number
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						window.location.href = "registered2.html?mobilePhone="+mobilePhone;
					} else {
						show_pop(0, data.msg);
					}
				}
			},
			error : function() {
				show_pop(0, '系统异常!');
			}
		});
	});

	$("#Previous_step").click(function() {

	});
	
	
	$("#back").click(function() {
		self.location=document.referrer;
	})

	$("#Ok").click(function() {
		
		var password1 = $("#password1").val();
		if (password1 == null || password1 == '' || password1 == undefined) {
			show_pop(0, "ⓧ新的密码不能为空");
			return;
		} else {
			if (password1.length < 8 || password1.length > 16) {
				show_pop(0, "ⓧ密码由8-16个字符组成");
				return;
			} else {
				if (!isNaN(password1)) {
					show_pop(0, "ⓧ密码不能为纯数字");
					return;
				} else {
					var Regx = /^[A-Za-z0-9]*$/;	
					if(!Regx.test(password1)){
						show_pop(0,"ⓧ密码由8-16位，包含数字,字母组成");
						return;
					}
				}
			}
		}

		var password2 = $("#password2").val();
		if (password2 == null || password2 == '' || password2 == undefined) {
			show_pop(0, "ⓧ请再次输入新的密码");
			return;
		} else {
			if (password1 != password2) {
				show_pop(0, "ⓧ确认密码与新密码不符");
				return;
			}
		}
		var username = $("#username").val();
		show_pop(888, "修改中");
		$.ajax({
			type : 'POST',
			url : basePath + 'login/registered.do',
			data : {
				username : username,
				password : hex_md5(password2)
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						alert("注册成功");
						window.location.href = "login.html";
					} else {
						show_pop(0, data.msg);
					}
				}
			},
			error : function() {
				show_pop(0, '系统异常!');
			}
		});
	});

});

// jquery验证手机号码
function checkSubmitMobil() {
	if ($("#MobilNo").val() == "") {
		return false;
	}
	if (!/^1[3|4|5|7|8][0-9]{9}$/.test($("#MobilNo").val())) {
		return false;
	}
	return true;
}
// jquery验证号
function checkNumber() {
	if ($("#Number").val() == "") {
		return false;
	}
	if ($("#Number").val().length != 4) {
		return false;
	}
	reg = /^\d{4}$/;
	if (!reg.test($("#Number").val())) {
		return false;
	}
	return true;
}

var wait=60;
function time(o) {
  if (wait == 0) {
   o.removeAttribute("disabled");   
   o.value="获取验证码";
   wait = 60;
  } else { 
   o.setAttribute("disabled", true);
   o.value="重新发送(" + wait + ")";
   wait--;
   setTimeout(function() {
    time(o)
   },
   1000)
  }
 }
