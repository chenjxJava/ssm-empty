//JavaScript Document
$(document).ready(function(){
	
	Chkuserpay();

});

function Chkuserpay() {
	$.ajax({
		type : 'POST',
		url : basePath + 'user/Chkuserpay.do',
		dataType : 'json',
		success : function(data) {
			if (data != null) {
				if (data.success) {
					$("#pwd_inp").css("display", "none");
				}else{
					$("#pwd_inp").css("display", "block");
				}
			}
		},
		error : function() {
		}
	});
}