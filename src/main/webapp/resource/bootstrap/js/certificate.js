// JavaScript Document
$(document).ready(function(){
	$("#reset").on("click",function(){
		resetinfo();
		$("#search").click();
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
		var cardName=$('#name').val();
		var type=$('#type').val();
		var pageNum=$('#Page').val();
		var pageSize=$("#pageSize").val();
		$.post(basePath+'bankrecharge/crertificateMana.do',{'cardName':cardName,'status':type,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#goodsInfoList").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage").val(
							data.total_page);
					var orderlist=data.data;
					for (var i=0;i<orderlist.length;i++  ){
						var html="<tr>" +
						"<td>"+(i+1)+"</td><td>"+orderlist[i].name+"</td><td>"+(orderlist[i].useToB==0?'企业':orderlist[i].useToC==0?'个人':'无用')+"</td>" + 
						"<td>"+(orderlist[i].status==0?'可用':'不可用')+"</td><td>"+orderlist[i].createDate+"</td><td>" +
						"<div class=\"table_but\"><div class=\"table_but99\" onclick=\"updateCrertificate('"+orderlist[i].id+"','"+orderlist[i].status+"');\" >"+(orderlist[i].status=='0'?'冻结':'启用')+"</div></div></td></tr>";
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
	$("#type").val("0");
}

//修改账户状态
function updateCrertificate(id,status){
	$.post(basePath+'bankrecharge/updateCrertificate.do',{'id':id,"status":status},function(data){
		if (data != null) {
			if (data.success) {
				$("#search").click();
				show_pop(0, "更改成功");
			}else{
				show_pop(0, data.msg);
			}
		}
	},'json');
}

function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}