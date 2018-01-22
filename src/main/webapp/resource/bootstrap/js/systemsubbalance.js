// JavaScript Document
$(document).ready(function() {
	
	/**
	 * 首页点击事件
	 */
	$(document).on('click','#index',function(){
		var PageNum=$("#PageNum").val();
		if(PageNum==1){
			show_pop(0,"已是首页");
			return;
		}
		$("#PageNum").val(1);
		$("#select_btn").click();
	});
	/**
	 * 上一页点击事件
	 */
	$(document).on('click','#fooler',function(){
		var PageNum=$("#PageNum").val();
		var totalPage=$("#totalPage1").val();
		if(parseInt(parseInt(PageNum)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");
			return;
		}
		$("#PageNum").val(parseInt(parseInt(PageNum)-parseInt(1)));
		$("#select_btn").click();
	});
	/**
	 * 下一页点击事件
	 */
	$(document).on('click','#next',function(){
		var PageNum=$("#PageNum").val();
		var totalPage=$("#totalPage1").val();
		if(parseInt(parseInt(PageNum)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#PageNum").val(parseInt(parseInt(PageNum)+parseInt(1)));
		$("#select_btn").click();
	});
	/**
	 * 尾页点击事件
	 */
	$(document).on('click','#end',function(){
		var PageNum=$("#PageNum").val();
		var totalPage=$("#totalPage1").val();
		if(parseInt(PageNum)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#PageNum").val($("#totalPage1").val());
		$("#select_btn").click();
	});
	
	$(document).on('click','#select_btn',function(){
		$.post(basePath + 'bankrecharge/querySubBalance.do', function(data) {
			$("#systemSubBalanceList").html('');
			if (data != null) {
				if (data.success) {
					$("#totalPage1").val(1);
					var system=data.data;
					for (var i=0;i<system.length;i++  ){
						var html="<tr>" +
						" <td>"+(i+1)+"</td><td>"+system[i].CustAcctId+"</td><td>"+system[i].ThirdCustId+"</td><td>"+(system[i].CustName!=''?system[i].CustName:system[i].CustType=='5'?'平台担保子账户':'其他')+"</td> " + 
						"<td>"+system[i].TotalBalance+"</td><td>"+system[i].TotalTranOutAmount+"</td><td>" +system[i].TranDate+"</td></tr>";
						$("#systemSubBalanceList").append(html);
					}
				}else{
					$("#Page").val("1");
					$("#totalPage1").val("1");
					show_pop(0, data.msg);
				}
			}
		}, 'json')
	});
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
	
	$("#select_btn").click();

});

function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
}
