// JavaScript Document
$(document).ready(function(){	
	$("#TotalBalance").html(parseFormatNum($("#TotalBalance").html(),2));
	$("#TotalAmount").html(parseFormatNum($("#TotalAmount").html(),2));
	$("#TotalFreezeAmount").html(parseFormatNum($("#TotalFreezeAmount").html(),2));
	
	x_flag = 0;
	
	setTimeout(function(){
		searchDetail();},'1000'
	);
	 
	$("#select").click(function(){
		$("#pageNum").val('1')
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	
	/** 首页点击事件*/
	$(document).on('click','#index1',function(){
		var pageNum=$('#pageNum').val();
		if(pageNum==1){
			show_pop(0,"已是首页");return;
		}
		$('#pageNum').val(1);
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 上一页点击事件*/
	$(document).on('click','#fooler',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");return;
		}
		$('#pageNum').val(parseInt(parseInt(pageNum)-parseInt(1)));
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/**下一页点击事件*/
	$(document).on('click','#next',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");return;
		}
		$('#pageNum').val(parseInt(parseInt(pageNum)+parseInt(1)));
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
		x_flag = 1;
	});
	/**尾页点击事件*/
	$(document).on('click','#end',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(pageNum)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");return;
		}
		$('#pageNum').val($("#totalpage").val());
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
		scrollOffset();
	});
	/** 全部点击事件*/
	$(document).on('click','#all',function(){
		$("#documenttype").val('')
		$("#pageNum").val('1')
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 支出点击事件*/
	$(document).on('click','#zc',function(){
		$("#documenttype").val('2')
		$("#pageNum").val('1')
		$("#orderNum").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 收入点击事件*/
	$(document).on('click','#sr',function(){
		$("#documenttype").val('1')
		$("#pageNum").val('1')
		$("#orderNum").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 充值点击事件*/
	$(document).on('click','#cz',function(){
		$("#documenttype").val('3')
		$("#pageNum").val('1')
		$("#orderNum").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 冻结点击事件*/
	$(document).on('click','#dj',function(){
		$("#documenttype").val('4')
		$("#pageNum").val('1')
		$("#orderNum").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 今天点击事件*/
	$(document).on('click','#today',function(){
		//var date = new Date();
		/*var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();*/
		$("#startDate").val("");
		$("#endDate").val("");
		$("#orderNum").val("");
	    $("#pageNum").val('1');
	    $("#documenttype").val('');
	    $("#newPageNum").html('1');
	    /*if(month<10){
	    	month ="0"+month;
	    }
	    if(strDate<10){
	    	strDate ="0"+strDate;
	    }
	    $("#startDate").val(year+"-"+month+"-"+strDate);
		$("#endDate").val(year+"-"+month+"-"+strDate);*/
		searchDetail();
	});
	/** 一个月点击事件*/
	$(document).on('click','#month',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){
	    	month ="0"+month;
	    }
	    if(strDate<10){
	    	strDate ="0"+strDate;
	    }
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    if (month==1){
	    	month=12;
	    	year =year -1;
	    }else{
	    	month=month-1;
	    }
	    if(month<10){
	    	month ="0"+month;
	    }
	   /* if(strDate<10){
	    	strDate ="0"+strDate;
	    }*/
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNum").val("");
		searchDetail();
	});
	/** 三个月点击事件*/
	$(document).on('click','#season',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){
	    	month ="0"+month;
	    }
	    if(strDate<10){
	    	strDate ="0"+strDate;
	    }
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    if (month==1){
	    	month = 10;
	    	year = year - 1;
	    }else if (month==2){
	    	month=11;
	    	year =year -1;
	    }else if (month==3){
	    	month=12;
	    	year =year -1;
	    }else{
	    	month=month-3;
	    }
	    if(month<10){
	    	month ="0"+month;
	    }
	    /*if(strDate<10){
	    	alert(strDate);
	    	strDate ="0"+strDate;
	    }*/
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNum").val("");
		searchDetail();
	});
	/** 一年点击事件*/
	$(document).on('click','#year',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){
	    	month ="0"+month;
	    }
	    if(strDate<10){
	    	strDate ="0"+strDate;
	    }
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    year = year-1;
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNum").val("");
		searchDetail();
	});
});


function searchDetail(){
	var documenttype =  $("#documenttype").val();
	var orderNum = $("#orderNum").val();
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	var url = basePath + "transaction/queryDetail.do";
	$.ajax({
		type : 'POST',
		url : url,
		data:{
			orderNum:orderNum,
			startDate:startDate,
			endDate:endDate,
			pageNum:$('#pageNum').val(),
			pageSize:$('#pageSize').val(),
			type:documenttype
		},
		dataType : 'json',
		success : function(data) {
			$("#detail").html("");
			if (data != null) {
				if (data.success) {
					$("#yesdate").show(200);
					$("#nodate").hide(200);
					var detailList=data.data;
					$('#totalpage').val(data.total_page);
					$('#totalPageNum').html(data.total_page);
					var html="";
					for(var i=0;i<detailList.length;i++){
						html+="<tr><td class=>"+(i+1)+"</td><td>"+detailList[i].orderNum+"</td>";
						html+="<td>"+detailList[i].createDate+"</td><td>"+parseFormatNum(detailList[i].amonut,2)+"</td>";
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
						html+="<td >"+status+"</td><td >"+detailList[i].descript+"</td></tr>" 
					}
					$("#detail").append(html);
					if(x_flag == 1 ){
						scrollOffset();
						x_flag = 0;
					}
					
				}else{ 
					$("#nodate").show(200);
					$("#yesdate").hide(200);
				}
			}
			$("#search").attr("disabled",false); 
		},
		error : function() {
			$("#search").attr("disabled",false); 
		}
	});
}

function scrollOffset() {
	javascript:document.getElementsByTagName('body')[0].scrollTop=document.getElementsByTagName('body')[0].scrollHeight;
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