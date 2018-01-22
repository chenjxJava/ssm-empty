// JavaScript Document
$(document).ready(function(){
	$("#search").click(function(){
		searchDetail();
	});
	/**
	 * 参数查询
	 */
	function searchDetail(){
		var parameterName=$('#name').val();
		var status=$('#state').val();
		var pageSize=$("#pageSize").val();
		var pageNum=$('#Page').val();
		$.post(basePath+'bankrecharge/queryParameter.do',{'parameterName':parameterName,'status':status,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#parameterList").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage").val(data.total_page);
					var parameter=data.data;
					for (var i=0;i<parameter.length;i++  ){
						var html="<tr>" +
						" <td>"+(i+1)+"</td><td>"+parameter[i].parameterKey+"</td><td>"+parameter[i].parameterName+"</td><td>"+parameter[i].parameterValue+"</td> " + 
						"<td>"+(parameter[i].status=='1'?'使用中':parameter[i].status=='2'?'未使用':'已删除')+"</td><td>"+(typeof(parameter[i].note)=="undefined"?'无':parameter[i].note)+"</td><td>" +parameter[i].createDate+"</td><td>" +parameter[i].updateDate+"</td><td>" +parameter[i].createName+"</td><td>" +parameter[i].updateName+"</td><td>" +
						"<div class=\"table_but\"><div  class=\"table_but1\" onclick=\"edit('"+parameter[i].id+"');\">编辑</div><div class=\"table_but2\" onclick='del("+parameter[i].id+")'>删除</div></div></td></tr>";
						$("#parameterList").append(html);
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
	 * 首页点击事件
	 */
	$(document).on('click','#frist',function(){
		var pageNum=$("#Page").val();
		if(pageNum==1){
			show_pop(0,"已是首页");
			return;
		}
		$("#Page").val(1);
		$("#search").click();
	});
	/**
	 * 上一页点击事件
	 */
	$(document).on('click','#last',function(){
		var pageNum=$("#Page").val();
		var totalPage=$("#totalPage").val();
		if(parseInt(parseInt(pageNum)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");
			return;
		}
		$("#Page").val(parseInt(parseInt(pageNum)-parseInt(1)));
		$("#search").click();
	});
	/**
	 * 下一页点击事件
	 */
	$(document).on('click','#next',function(){
		var pageNum=$("#Page").val();
		var totalPage=$("#totalPage").val();
		if(parseInt(parseInt(pageNum)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#Page").val(parseInt(parseInt(pageNum)+parseInt(1)));
		$("#search").click();
	});
	/**
	 * 尾页点击事件
	 */
	$(document).on('click','#end',function(){
		var pageNum=$("#Page").val();
		var totalPage=$("#totalPage").val();
		if(parseInt(pageNum)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#Page").val($("#totalPage").val());
		$("#search").click();
	});
	/**
	 * 保存修改
	 */
	$(document).on('click','#yes',function(){
		var parameterKey = $("#parameterKey").val();
		if(parameterKey==""){
			alert("请输入参数key");
			return;
		}
		var parameterName = $("#parameterName").val();
		if(parameterName==""){
			alert("请输入参数名");
			return;
		}
		var parameterValue = $("#parameterValue").val();
		if(parameterValue==""){
			alert("请输入参数值");
			return;
		}
		var parameterState = $("#parameterState").val();
		if(parameterState==0){
			alert("请选择状态");
			return;
		}
		var note = $("#note").val();
		var id = $("#parameterId").val();
			$.post(basePath+'bankrecharge/updateParameter.do',{'id':id,'parameterKey':parameterKey,'parameterName':parameterName,'parameterValue':parameterValue,'parameterState':parameterState,'note':note},function(data){
				if (data != null) {
					if (data.success) {
						alert("更改成功");
						window.location.reload(); 
					}else{
						show_pop(0,data.msg);
					}
				}
				
			},'json')
	})
	
	/**
	 * 新增
	 */
	$(document).on('click','#add',function(){
		var parameterKey = $("#parameterKey").val();
		if(parameterKey==""){
			alert("请输入参数key");
			return;
		}
		var parameterName = $("#parameterName").val();
		if(parameterName==""){
			alert("请输入参数名");
			return;
		}
		var parameterValue = $("#parameterValue").val();
		if(parameterValue==""){
			alert("请输入参数值");
			return;
		}
		var parameterState = $("#parameterState").val();
		if(parameterState==0){
			alert("请选择状态");
			return;
		}
		var note = $("#note").val();
			$.post(basePath+'bankrecharge/addParameter.do',{'parameterKey':parameterKey,'parameterName':parameterName,'parameterValue':parameterValue,'parameterState':parameterState,'note':note},function(data){
				if (data != null) {
					if (data.success) {
						alert("新增成功");
						window.location.reload(); 
					}else{
						alert(data.msg);
						$("#addpara").click();
					}
				}
			},'json')
	})
	
	/**
	 * 增加数据
	 */
	$(document).on('click','#addpara',function(){
		show_pop(16,"");
	})
	
	$("#reset").on("click",function(){
		resetinfo();
		searchDetail();
	});	
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	$("#search").click();
	
});

function del(id) {
	var msg = "您真的确定要删除吗？";
	if (confirm(msg)==true){
		$.post(basePath+'bankrecharge/delParameter.do',{'id':id},function(data){
			if (data !=null) {
				if (data.success) {
					alert("删除成功");
					window.location.reload(); 
				}else {
					show_pop(0,data.msg);
				}
			}
		},'json');
	}else{
		
	}
}

function edit(id){
	$.post(basePath+'bankrecharge/queryParameter.do',{'id':id},function(data){
		if (data != null) {
			if(data.success){
				var parameter = data.data;
				show_pop(15,"");
				/**
				 * 设置用户信息
				 */
				$("#parameterId").val(parameter[0].id);
				$("#parameterKey").val(parameter[0].parameterKey);
				$("#parameterName").val(parameter[0].parameterName);
				$("#parameterValue").val(parameter[0].parameterValue);
				$("#parameterState").val(parameter[0].status);
				$("#note").val(parameter[0].note);
			}
		}
	},'json');
	
}


function resetinfo(){
	$("#name").val("");
	$("#state").val("0");
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}