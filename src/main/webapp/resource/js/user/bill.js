4//JavaScript Document
$(document).ready(function(){	
	
	$("#select").click(function(){
		$("#pageNum").val('1')
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	
	$("#to_coloes").click(function() {
		$('#popup_background').css('display','none');
		$('#see_bill').css('display','none');    	
	});
 
	$("#see").click(function() {
		$('#popup_background').css('display','block');
		$('#see_bill').css('display','block');    	
	});
	/**
	 * 首页点击事件
	 */
	$(document).on('click','#index1',function(){
		var pageNum=$('#pageNum').val();
		if(pageNum==1){
			show_pop(0,"已是首页");
			return;
		}
		$('#pageNum').val(1);
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/**
	 * 上一页点击事件
	 */
	$(document).on('click','#fooler',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)-parseInt(1))<parseInt(1)){
			show_pop(0,"已是第一页");
			return;
		}
		$('#pageNum').val(parseInt(parseInt(pageNum)-parseInt(1)));
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/**
	 * 下一页点击事件
	 */
	$(document).on('click','#next',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(parseInt(pageNum)+parseInt(1))>parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$('#pageNum').val(parseInt(parseInt(pageNum)+parseInt(1)));
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/**
	 * 尾页点击事件
	 */
	$(document).on('click','#end',function(){
		var pageNum=$('#pageNum').val();
		var totalPage=$("#totalpage").val();
		if(parseInt(pageNum)==parseInt(totalPage)){
			show_pop(0,"已是最后一页");
			return;
		}
		$('#pageNum').val($("#totalpage").val());
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 全部点击事件*/
	$(document).on('click','#all',function(){
		$("#documenttype").val('')
		$("#pageNum").val('1')
		searchDetail();
	});
	/** 未支付点击事件*/
	$(document).on('click','#pay1',function(){
		$("#documenttype").val('1')
		$("#pageNum").val('1')
		$("#orderNo").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 已支付点击事件*/
	$(document).on('click','#pay2',function(){
		$("#documenttype").val('2')
		$("#pageNum").val('1')
		$("#orderNo").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});

	/** 已废弃点击事件*/
	$(document).on('click','#pay3',function(){
		$("#documenttype").val('3')
		$("#pageNum").val('1')
		$("#orderNo").val("");
		$('#newPageNum').html($('#pageNum').val());
		searchDetail();
	});
	/** 今天点击事件*/
	$(document).on('click','#today',function(){
		/*var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){month ="0"+month;}
	    if(strDate<10){strDate ="0"+strDate;}
	    $("#startDate").val(year+"-"+month+"-"+strDate);
		$("#endDate").val(year+"-"+month+"-"+strDate);*/
		$("#startDate").val("");
		$("#endDate").val("");
		$("#orderNo").val("");
	    $("#pageNum").val('1');
	    $("#newPageNum").html('1');
	    $("#documenttype").val('');
		searchDetail();
	});
	/** 一个月点击事件*/
	$(document).on('click','#month',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){month ="0"+month;}
	    if(strDate<10){strDate ="0"+strDate;}
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    if (month==1){month=12;year =year -1;
	    }else{month=month-1;}
	    if(month<10){month ="0"+month;}
	   /* if(strDate<10){strDate ="0"+strDate;}*/
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNo").val("");
	    searchDetail();
	});
	/** 三个月点击事件*/
	$(document).on('click','#season',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){month ="0"+month;}
	    if(strDate<10){strDate ="0"+strDate;}
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    if (month==1){month = 10;year = year - 1;
	    }else if (month==2){month=11;year =year -1;
	    }else if (month==3){month=12;year =year -1;
	    }else{month=month-3;}
	    if(month<10){month ="0"+month;}
	    /*if(strDate<10){strDate ="0"+strDate;}*/
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNo").val("");
	    searchDetail();
	});
	/** 一年点击事件*/
	$(document).on('click','#year',function(){
		var date = new Date();
		var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    $("#pageNum").val('1')
	    if(month<10){month ="0"+month;}
	    if(strDate<10){strDate ="0"+strDate;}
	    $("#endDate").val(year+"-"+month+"-"+strDate);
	    year = year-1;
	    $("#startDate").val(year+"-"+month+"-"+strDate);
	    $('#newPageNum').html($('#pageNum').val());
	    $("#orderNo").val("");
	    searchDetail();
	});
	/**
	 * 订单查询
	 */
	function searchDetail(){
		var startDate=$('#startDate').val();
		var endDate = $('#endDate').val();
		var orderNum=$('#orderNo').val();
		var status=$('#documenttype').val();
		var pageNum=$('#pageNum').val();
		var pageSize=$("#pageSize").val();
		$.post(basePath+'bill/queryOrder.do',{'startDate':startDate,'orderNum':orderNum,'status':status,'pageNum':pageNum,'pageSize':pageSize,'endDate':endDate},function(data){
			$("#orderList").html('');
			if (data != null) {
				if(data.success){
					$("#yesdate").show(200);
					$("#nodate").hide(200);
					$("#totalpage").val(data.total_page);
					$('#totalPageNum').html(data.total_page);
					var orderlist=data.data;
					for (var i=0;i<orderlist.length;i++  ){
						var html="<tr>" +
						" <td>"+(i+1)+"</td><td>"+orderlist[i].orderNum+"</td><td>"+orderlist[i].createDate+"</td> " + 
						"<td>"+parseFormatNum(orderlist[i].amount,2)+"</td><td>"+(orderlist[i].status=='1'?'待支付':orderlist[i].status=='2'?'已支付':'已作废')+"</td><td>" +orderlist[i].descript+"</td><td>" +
						"<div class=\"bunnt_div\"><div class=\"bunnt_mx1\" id='"+orderlist[i].id+"' onclick='toPay(this.id)';>支付</div></div></td></tr>";
						$("#orderList").append(html);
					}
				}else{
					$("#nodate").show(200);
					$("#yesdate").hide(200);
				}
			}
		},'json');
	};
	/**
	 * 添加订单，测试使用
	 */
	$(document).on('click','#addOrder',function(){
		show_pop(2,"");
	});
	
	$(document).on('click','#addOrder2',function(){

		var bankMoney = $("#inCustPhone").val();
		if (bankMoney == null || bankMoney == '' || bankMoney == undefined) {
			$("#pop_zf_ts").text("请输入收款方帐号!");
			return;
		}
		
		var bankMoney = $("#Amount").val();
		if (bankMoney == null || bankMoney == '' || bankMoney == undefined) {
			$("#pop_zf_ts").text("请输入支付金额!");
			return;
		}
		var reg = new RegExp("^[0-9]+(.[0-9]{1,2})?$", "g"); 
		if( !reg.test(bankMoney) ){
			$("#pop_zf_ts").text("金额的小数位数最多2位！");
			return;
		}

		$.ajax({
			type : 'POST',
			url : basePath+'bill/addOrder.do',
			data :  {
				Amount:$('#Amount').val(),
				Status:"1",
				Type:"1",
				Descript:$('#Descript').val(),
				inCustPhone:$('#inCustPhone').val()
			},
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					if (data.success) {
						show_pop(999,"");
						show_pop(0,"添加成功！");
						$("#select").click();
					} else {
						$("#pop_zf_ts").text(data.msg);
					}
				}
			},
			error : function() {
				show_pop(0,"系统异常");
			}
		}); 
	});
	
	$("#select").click();
});
/**
 * 支付跳转
 * @param id
 * @returns
 */
function toPay(id){
	var flag=confirm('确认支付?');
	if(flag){
		$.post(basePath+'bill/checkPayOrder.do',{'id':id},function(data){
			if (data!=null) {
				if(data.success){
					var data=data.data;
					window.location.href=basePath+"/pay.html?_id="+data.param+"&_type="+data.type;
				}else{
					show_pop(0,data.msg);
					$("#select").click();
				}
			}
		},'json');
	}
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

