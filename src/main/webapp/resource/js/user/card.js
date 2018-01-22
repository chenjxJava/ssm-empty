// JavaScript Document
var cradno="";
$(document).ready(function(){
	$(document).on('click','#addCard',function(){
		$.post(basePath+'/user/checkAuther.do',function(data){
			if (data != null) {
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
})
 
function deleteCard(id) {
	if(!confirm('确认删除此卡？')){
		return;
	}
	cradno = id
	if (cradno == null || cradno == '' || cradno == undefined) {
		alert('卡号信息异常,请刷新页面!')
		/*showReg('卡号信息异常,请刷新页面!',2)	;	*/
		return;
	}
	var url = basePath + "card/delCard.do";
	$.ajax({
		type : 'POST',
		url : url,
		data:{
			cardNo:cradno
		},
		dataType : 'json',
		success : function(data) {
			if (data != null ) {
				if (data.success) {
					/*showReg(data.msg,1);*/
					alert(data.msg);
					window.location.href = "card.html";
					/*setTimeout(function(){To_link('card');},2000);*/
				} else {
					alert(data.msg);
					/*showReg(data.msg,2);*/
				}
			}
		},
		error : function() {
			alert('系统异常!');
			/*showReg('系统异常!',3);*/
		}
	});
}