$(document).ready(function(){
	/**
	 * 页面加载查询数据
	 */
	setTimeout(function(){
		$("#select_btn").click();
	},1000);

	$("tr").hover(function(){  
		$("#"+$(this).attr("id")).css("background-color","#FFD5BA");
	},function(){  
		$("#"+$(this).attr("id")).css("background-color","#FFF");
	});


	/**
	 * 首页点击事件
	 */
	$(document).on('click','#index',function(){
		var pageNum=$("#pageNum").val();
		if(pageNum==1){
			show_pop(0,"已是首页");
			return;
		}
		$("#pageNum").val(1);
		$("#select_btn").click();
	});
	/**
	 * 上一页点击事件
	 */
	$(document).on('click','#fooler',function(){
		var pageNum=$("#pageNum").val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");
			return;
		}
		$("#pageNum").val(parseInt(parseInt(pageNum)-parseInt(1)));
		$("#select_btn").click();
	});
	/**
	 * 下一页点击事件
	 */
	$(document).on('click','#next',function(){
		var pageNum=$("#pageNum").val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#pageNum").val(parseInt(parseInt(pageNum)+parseInt(1)));
		$("#select_btn").click();
	});
	/**
	 * 尾页点击事件
	 */
	$(document).on('click','#end',function(){
		var pageNum=$("#pageNum").val();
		var totalPage=$("#totalpage").val();
		if(parseInt(pageNum)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$("#pageNum").val($("#totalpage").val());
		$("#select_btn").click();
	});

	/**
	 * 打开添加定时任务
	 */
	$(document).on('click','.div_search_tilte_img2',function(){
		$('#popup_background99').css('display','block');
		$('#popup_content99').css('display','block');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','none');    
	}); 
	/**
	 * 取消窗口打开
	 */
	$(document).on('click','.popup_bunnt3',function(){
		$('#popup_background99').css('display','none');
		$('#popup_content99').css('display','none');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','none');  
	});
	/**
	 * 添加定时任务
	 */
	$(document).on('click','#addJob',function(){
		var jobName=$('#_jobName').val();
		if(jobName==null||jobName==''||jobName==undefined){
			alert('请输入任务名称!');/*show_pop(0, '请输入任务名称!')s;*/
			return;
		}
		var jobKey=$('#_jobKey').val();
		if(jobKey==null||jobKey==''||jobKey==undefined){
			alert('请输入任务主键!');/*show_pop(0, '请输入任务key!')showReg('请输入任务key!',2);*/
			return;
		}
		var jobClass=$('#_jobClass').val();
		if(jobClass==null||jobClass==''||jobClass==undefined){
			alert('请输入任务类名!');	/*show_pop(0, '请输入任务类名!')showReg('请输入任务类名!',2);*/
			return;
		}
		var jobTime=$('#_jobtime').val();
		if(jobTime==null||jobTime==''||jobTime==undefined){
			alert('请输入任务执行时间!');	/*show_pop(0, '请输入任务执行时间!')showReg('请输入任务执行时间!',2);*/
			return;
		}
		var jobdes=$('#_jobdes').val();
		$.post(basePath+"quartz/addJob.do",{'jobName':jobName,'jobKey':jobKey,'jobClass':jobClass,'jobTime':jobTime,'jobdes':jobdes},function(data){
			if (data != null) {
				if(data.success){
					$('.popup_bunnt3').click();
					alert(data.msg);
					/**
					 * 重新加载定时任务
					 */
					setTimeout(function(){
						$("#select_btn").click();
					},2000);
				}else{
					alert(data.msg);
				}
			}
		},'json');
	});
	/**
	 * 查询定时任务
	 */
	$(document).on('click','#select_btn',function(){
		var jobName=$('#jobName').val();
		var jobClass=$('#jobClass').val();
		var jobKey=$('#jobKey').val();
		var status=$('#jobStatus option:selected').val();
		var pageNum=$("#pageNum").val();
		var pageSize=$("#pageSize").val();
		$.post(basePath+'quartz/queryJob.do',{'status':status,'jobName':jobName,'jobClass':jobClass,'jobKey':jobKey,'pageNum':pageNum,'pageSize':pageSize },function(data){
			$("#joblist").html('');
			if (data != null) {
				if(data.success){
					$("#totalpage").val(data.total_page);
					var joblist=data.data;
					for(var i=0;i<joblist.length;i++){
						var html="<tr><td>"+(i+1)+"</td><td>"+joblist[i].jobName+"</td><td>"+joblist[i].jobClass+"</td><td>"+joblist[i].jobKey+"</td><td>"+joblist[i].jobTime+"</td><td>"+joblist[i].description+"</td>" +
						"<td>"+(joblist[i].status==2?'正在执行':'未执行')+"</td><td><div class=\"table_but\"><div class=\"table_but1\" onclick=\"update('"+joblist[i].id+"','start');\">执行</div><div class=\"table_but2\" onclick=\"update('"+joblist[i].id+"','stop');\" >停止</div></div></td>" +
						"</tr>";
						$("#joblist").append(html);
					}
				}else{
					show_pop(0,data.msg);
				}
			}
		},'json');
	});
	/**
	 * 清空
	 */
	$("#rest_btn").on("click",function(){
		reset();
		$("#select_btn").click()
	});	
});
/**
 * 开启或者停止定时任务
 * @param id
 * @param type
 * @returns
 */
function update(id,type){
	$.post(basePath+'quartz/startOrstopJob.do',{'id':id,'type':type},function(data){
		if (data != null) {
			if(data.success){
				alert(data.msg);
				/**
				 * 重新加载定时任务
				 */
				setTimeout(function(){
					$("#select_btn").click();
				},2000);
			}else{
				alert(data.msg);
			}
		}
	},'json')
}

function reset(){
	$("#jobName").val("");
	$("#jobKey").val("");
	$("#jobClass").val("");
	$("#jobStatus").val("0");
}