//JavaScript Document
$(document).ready(function() {

	/**
	 * 页面加载查询数据
	 */
	
	setTimeout(function(){
		$("#select_btn").click();
	},500);
	
	$("tr").hover(function(){  
		$("#"+$(this).attr("id")).css("background-color","#FFD5BA");
	},function(){  
		$("#"+$(this).attr("id")).css("background-color","#FFF");
	})

	
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

	
	
	/**
	 * 清空查询条件
	 */
	$(document).on('click','#rest_btn',function(){
		$("#frontLogNo").val('');
		$('#tranFlag').prop('selectedIndex', '');
		$('#tranStatus').prop('selectedIndex', '');
		$("#select_btn").click();
	});
	/**
	 * 查询事件
	 */
	$(document).on('click','#select_btn',function(){
		var frontLogNo=$("#frontLogNo").val();
		var tranFlag=$("#tranFlag").val();
		var tranStatus=$("#tranStatus").val();
		var pageSize=$("#pageSize").val();
		var pageNum=$('#PageNum').val();
		$.post(basePath+'bill/quaryDailyBillsDetail.do',{'frontLogNo':frontLogNo,'tranFlag':tranFlag,'tranStatus':tranStatus,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#dailybillsdetail").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage1").val(data.total_page);
					var dailybillsdetail=data.data;
					for (var i=0;i<dailybillsdetail.length;i++  ){
						var html="<tr id=\"dailybillsdetail"+i+"\"> <td>"+(i+1)+"</td><td>"+dailybillsdetail[i].frontLogNo+"</td><td>"+dailybillsdetail[i].thirdLogNo+"</td><td>"+dailybillsdetail[i].tranAmount+"</td><td>"+dailybillsdetail[i].handFee+"</td><td>"+(dailybillsdetail[i].tranStatus=='0'?'成功':'失败')+"</td><td>"+(dailybillsdetail[i].tranFlag=='1'?'会员支付':dailybillsdetail[i].tranFlag=='2'?'会员冻结':dailybillsdetail[i].tranFlag=='3'?'会员解冻':dailybillsdetail[i].tranFlag=='4'?'登记挂账':dailybillsdetail[i].tranFlag=='5'?'清分支付':dailybillsdetail[i].tranFlag=='6'?'下单预支付':dailybillsdetail[i].tranFlag=='7'?'确认并付款':dailybillsdetail[i].tranFlag=='1'?'会员支付':dailybillsdetail[i].tranFlag=='8'?'会员退款':dailybillsdetail[i].tranFlag=='9'?'支付到平台':'撤销交易')+"</td><td>"+dailybillsdetail[i].tranDate+"</td><td>"+dailybillsdetail[i].Note+"</td>" +
						"<td><div class=\"table_but\"><div class=\"table_but1\" onclick=\"queryUser('"+dailybillsdetail[i].id+"');\">查看</div></td> </tr>";
						$("#dailybillsdetail").append(html);
					}
				}else{
					$("#PageNum").val("1");
					$("#totalPage1").val("1");
					show_pop(0, data.msg)
				}
			}
		},'json');
	});

	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
	
	
	
});

function queryUser(id){
	$.post(basePath+'bill/quaryDailyBillsDetail2.do',{'id':id},function(data){
		if (data != null) {
			if(data.success){
				var DailyBillsDetail=data.data;
				show_pop(17,"");
				/**
				 * 设置用户信息
				 */
				$("#ThirdHtId").val(DailyBillsDetail[0].thirdHtId);
				$("#OutCustAcctId").val(DailyBillsDetail[0].outCustAcctId);
				$("#OutThirdCustId").val(DailyBillsDetail[0].outThirdCustId);
				$("#OutCustAcctName").val(DailyBillsDetail[0].outCustAccName);
				$("#InCustAcctId").val(DailyBillsDetail[0].inCustAcctId);
				$("#InCustAcctName").val(DailyBillsDetail[0].inCustAccName);
				$("#InThirdCustId").val(DailyBillsDetail[0].inThirdCustId);
				$("#Note2").val(DailyBillsDetail[0].Note2);
			}else{
				show_pop(0,data.msg);
			}
		}
	},'json');
}

function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}

