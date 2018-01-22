// JavaScript Document
$(document).ready(function(){

	$("#reset").on("click",function(){
		resetinfo();
	});	
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	/**
	 * 查询点击事件
	 */
	$("#search").click(function(){
		searchDetail();
	});
	/**
	 * 订单查询
	 */
	function searchDetail(){
		var outacctId=$('#name').val();
		var state=$('#state').val();
		var pageNum=$('#Page').val();
		var pageSize=$("#pageSize").val();
		$.post(basePath+'bankrecharge/quaryWithdrawal.do',{'outacctId':outacctId,'state':state,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#goodsInfoList").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage").val(
							data.total_page);
					var orderlist=data.data;
					for (var i=0;i<orderlist.length;i++  ){
						var html="<tr>" +
						" <td>"+(i+1)+"</td><td>"+orderlist[i].OutAcctId+"</td><td>"+orderlist[i].Note+"</td> " + 
						"<td>"+orderlist[i].create_date+"</td><td>"+orderlist[i].userName+"</td><td>" +orderlist[i].rspCode+"</td></tr>";
						$("#goodsInfoList").append(html);
					}
				}else{
					$("#Page").val("1");
					$("#totalPage").val("1");
					show_pop(0, data.msg);
				}
			}
		},'json');
	};
	/**
	 * 上一页的点击事件
	 */
	$(document).on("click",'#last',function(){
		var Page=$('#Page').val();
		var totalPage=$("#totalPage").val();
		if(parseInt(parseInt(Page)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");
			return;
		}
		$('#Page').val(parseInt(parseInt(Page)-parseInt(1)));
		searchDetail();
		
	});
	/**
	 * 下一页点击事件
	 */
	$(document).on('click','#next',function(){
		var Page=$('#Page').val();
		var totalPage=$("#totalPage").val();
		if(parseInt(parseInt(Page)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$('#Page').val(parseInt(parseInt(Page)+parseInt(1)));
		searchDetail();
	});
	/**
	 * 首页点击事件
	 */
	$(document).on('click','#frist',function(){
		var Page=$('#Page').val();
		if(Page==1){
			show_pop(0,"已是首页");
			return;
		}
		$('#Page').val(1);
		searchDetail();
	});
	/**
	 * 尾页点击事件
	 */
	$(document).on('click','#end',function(){
		var Page=$('#Page').val();
		var totalPage=$("#totalPage").val();
		if(parseInt(Page)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$('#Page').val($("#totalPage").val());
		searchDetail();
	});
	$("#search").click();
	
});

function resetinfo(){
	$("#name").val("");
	$("#state").val("0");
	$("#search").click();
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}