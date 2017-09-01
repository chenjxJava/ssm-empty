// JavaScript Document
$(document).ready(function() {
	$("#GetNo").click(function() {
		time(this);
		show_pop(888, "验证发送中");
		$.ajax({
			type : 'POST',
			url : basePath + 'SmsMessage1.do',
			dataType : 'json',
			success : function(data) {
				if (data != null) {
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

		var Number = $("#Number").val();
		if (Number == null || Number == '') {
			alert("请输入验证码");
			return;
		}
		show_pop(888, "验证中");
		$.ajax({
			type : 'POST',
			url : basePath + 'VerifySmsMessage2.do',
			data : {
				Number : Number
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						window.location.href = "findrestpassword2.html";
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

	$("#Ok").click(function() {

		var password1 = $("#password1").val();
		if (password1 == null || password1 == '' || password1 == undefined) {
			show_pop(0, "ⓧ新的密码不能为空");
			return;
		} else {
			if (password1.length != 6 || isNaN(password1)) {
				show_pop(0, "ⓧ密码由6位数字组成");
				return;
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
		show_pop(888, "修改中");
		$.ajax({
			type : 'POST',
			url : basePath + 'user/restSmsPassword_pay.do',
			data : {
				password : hex_md5(password2)
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					console.info(data);
					if (data.success) {
						alert("修改成功");
						window.location.href = "account.html";
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

var wait = 60;
function time(o) {
	if (wait == 0) {
		o.removeAttribute("disabled");
		o.value = "获取验证码";
		wait = 60;
	} else {
		o.setAttribute("disabled", true);
		o.value = "重新发送(" + wait + ")";
		wait--;
		setTimeout(function() {
			time(o)
		}, 1000)
	}
}
