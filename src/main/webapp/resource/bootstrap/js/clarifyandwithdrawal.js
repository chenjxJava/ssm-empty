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
		$.post(basePath+'bill/quaryClarifyAndWithdrawal.do',{'frontLogNo':frontLogNo,'tranFlag':tranFlag,'tranStatus':tranStatus,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#clarifyAndWithdrawalInfoList").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage1").val(data.total_page);
					var ClarifyAndWithdrawal=data.data;
					for (var i=0;i<ClarifyAndWithdrawal.length;i++  ){
						var html="<tr id=\"uesr"+i+"\"> <td>"+(i+1)+"</td><td>"+ClarifyAndWithdrawal[i].custAcctId+"</td><td>"+(ClarifyAndWithdrawal[i].tranFlag=='1'?'提现':'清分')+"</td><td>"+(ClarifyAndWithdrawal[i].tranStatus=='0'?'成功':'失败')+"</td><td>"+ClarifyAndWithdrawal[i].custAcctName+"</td><td>"+ClarifyAndWithdrawal[i].tranAmount+"</td><td>"+ClarifyAndWithdrawal[i].tranDate+"</td><td>"+ClarifyAndWithdrawal[i].frontLogNo+"</td><td>"+ClarifyAndWithdrawal[i].thirdLogNo+"</td><td>"+ClarifyAndWithdrawal[i].Note+"</td>" +
						"</tr>";
						$("#clarifyAndWithdrawalInfoList").append(html);
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
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}

