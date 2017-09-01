//JavaScript Document
$(document).ready(function() {
	
	setTimeout(function(){searchDetail(0);},'1000');
	
	$("#recharge").click(function() {
		show_pop(5, "");	
	})
	
	$(document).on('click','#yes',function(){
		var price = $("#price").val();
		if (parseInt(price) < 1) {
			show_pop(0,"充值金额必须大于1元");
			return;
		}
		window.location.href=basePath+"recharge/generatedForm.html"+"?price="+price;
	})
	$("#TotalBalance").html(parseFormatNum($("#TotalBalance").html(),2));
	$("#TotalAmount").html(parseFormatNum($("#TotalAmount").html(),2));
	
}); 
 
function searchDetail(x){
	var documenttype = x;
	var url = basePath + "transaction/queryDetail.do";
	$.ajax({
		type : 'POST',
		url : url,
		dataType : 'json',
		success : function(data) {
			$("#detail").html("");
			if (data != null) {
				if (data.success) {
					$("#nodate").hide(200);
					$("#selecting").hide(200);
					$("#yesdate").show(200);
					var detailList=data.data;
					var html="";
					for(var i=0;i<detailList.length;i++){
						var status="";
						if(detailList[i].type=='1'){
							status="收入";
						}else if(detailList[i].type=='2'){
							status="支出";
						}else if(detailList[i].type=='4'){
							status="冻结";
						}else{
							status="充值";
						}
						html+="<tr>";
						html+="<td>"+detailList[i].createDate+"</td>";
						html+="<td>"+detailList[i].orderNum+"</td>";
						html+="<td>"+status+"</td>";
						html+="<td>"+parseFormatNum(detailList[i].amonut,2)+"</td>";
						html+="<td>"+detailList[i].descript+"</td>";
						html+="</tr>";
					}
					$("#detail").append(html);
				} else{
					$("#nodate").show(200);
					$("#selecting").hide(200);
					$("#yesdate").hide(200);
				}
			}
		},
		error : function() {
			alert("系统异常");
		}
	});
	
}
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
