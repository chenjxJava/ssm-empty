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

	$(document).on('click','.popup_bunnt3',function(){
		$('#popup_background').css('display','none');
		$('#popup_content').css('display','none');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','none');  
		$('#_edit_id').val('');
		$('#_username').val('');
		$('#_account').val('');
		$('#_type').prop('selectedIndex', 0);

	});
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

	$(document).on('click','.div_search_tilte_img2',function(){
		$('#popup_background').css('display','block');
		$('#popup_content').css('display','block');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','none');    
	}); 

	$(document).on('click','#_edit_save',function(){
		var flag=confirm('确认修改?');
		var id=$("#_edit_id").val();
		if(id==null||id==''||id==undefined){
			showReg('请选择用户!',2);
			return;
		}
		var status=$("#_edit_status option:selected").val();
		if(status==null||status==''||status==undefined){
			showReg('请选择用户账号状态!',2);
			return;
		}
		var type=$("#_edit_type option:selected").val();
		if(type==null||type==''||type==undefined){
			showReg('请选择用户类型!',2);
			return;
		}
		var name=$("#_edit_name").val();
		if(name==null||name==''||name==undefined){
			showReg('用户昵称不能为空!',2);
			return;
		}
		if(flag){
			$.post(basePath+"user/update.do",{'id':id,'status':status,'type':type,'name':name },function(data){
				if (data != null) {
					if(data.success){
						$(".popup_bunnt3").click();
						showReg(data.msg,1);
						setTimeout(function(){
							$("#select_btn").click();
						},2000);
					}else{
						showReg(data.msg,2);
					}
				}
			},'json');
		}
	});
	/**
	 * 清空查询条件
	 */
	$(document).on('click','#rest_btn',function(){
		$("#username").val('');
		$("#account").val('');
		$('#type').prop('selectedIndex', 0);
		$('#status').prop('selectedIndex', 0);
		$("#select_btn").click();
	});
	/**
	 * 查询事件
	 */
	$(document).on('click','#select_btn',function(){
		var username=$("#username").val();
		var account=$("#account").val();
		var PageNum=$("#PageNum").val();
		var pageSize=$("#pageSize").val();
		var type=$("#type option:selected").val();
		var status=$("#status option:selected").val();
		$.post(basePath+'user/queryUser.do',{'username':username,'account':account,'type':type,'status':status,'pageNum':PageNum,'pageSize':pageSize},function(data){
			$("#goodsInfoList").html('');
			if (data != null) {
				if(data.success){
					$("#totalPage1").val(data.total_page);
					var userlist=data.data;
					for (var i=0;i<userlist.length;i++  ){
						var html="<tr id=\"uesr"+i+"\"> <td>"+(i+1)+"</td><td>"+userlist[i].userAccount+"</td><td >"+userlist[i].userInfo.userName+"</td><td>"+(userlist[i].userType=='1'?'企业':userlist[i].userType=='2'?'个人':'平台')+"</td><td>"+(userlist[i].state=='1'?'使用中':userlist[i].state=='2'?'停用中':'未知')+"</td><td>"+userlist[i].userInfo.createDate+"</td><td>"+userlist[i].smsnumber+"</td> " +
						" <td><div class=\"table_but\"><div class=\"table_but1\" onclick=\"queryUser('"+userlist[i].id+"','query');\">查看</div><div class=\"table_but2\" onclick=\"updateUser('"+userlist[i].id+"','"+userlist[i].state+"');\" >"+(userlist[i].state=='1'?'冻结':userlist[i].state=='2'?'启用':'未知')+"</div></div></td> </tr>";
						$("#goodsInfoList").append(html);
					}
			}
			}else{
				$("#PageNum").val("1");
				$("#totalPage1").val("1");
				show_pop(0, data.msg)
			}
		},'json');
	});
	/**
	 * 重置密码
	 */
	$(document).on('click','#_rest_password',function(){
		var flag=confirm('确认重置密码?');
		var id=$("#_edit_id").val();
		if(id==null||id==''||id==undefined){
			showReg('请选择用户',2);
			return;
		}
		if(flag){
			$.post(basePath+"user/restPassword.do",{'id':id},function(data){
				if (data != null) {
					if(data.success){
						$(".popup_bunnt3").click();
						showReg(data.msg,1);
						setTimeout(function(){
							$("#select_btn").click();
						},2000);
					}else{
						showReg(data.msg,2);
					}
				}
			},'json');
		}
	});
	
	$(document).on('click','#addUser',function(){
		var account=$("#_account").val();
		var type=$("#_type option:selected").val();
		var name=$("#_username").val();
		if(account==null||account==''||account==undefined){
			showReg("请输入用户账号!",2);
			return false;
		}
		if(type==null||type==''||type==undefined){
			showReg("请选择用户类型!",2);
			return false;
		}
		if(name==null||name==''||name==undefined){
			showReg("请输入用户昵称!",2);
			return false;
		}
		$.post(basePath+"user/addUser.do",{'userName':name,'type':type,'userAccount':account},function(data){
			if (data != null) {
				if(data.success){
					$(".popup_bunnt3").click();
					showReg(data.msg,1);
					setTimeout(function(){
						$("#select_btn").click();
					},2000);
				}else{
					showReg(data.msg,2);
				}
			}
		},'json');
	});
	
	/**
	 * new
	 * @returns
	 */
	$("#reset").on("click",function(){
		resetinfo();
	});	

	$("#create").on("click",function(){
		document.getElementById("ts1").innerHTML="";
		document.getElementById("ts2").innerHTML="";
		document.getElementById("ts3").innerHTML="";
		document.getElementById("ts4").innerHTML="";
		document.getElementById("ts5").innerHTML="";
		var flag=0;
		if($("#acount").val()==""){
			document.getElementById("ts1").innerHTML="✖ 请输入用户账号！";flag=1;
		}
		if($("#name").val()==""){
			document.getElementById("ts2").innerHTML="✖ 请输入用户名称！";flag=1;
		}
		if($("#phoneNo").val()!=""){
			if ($("#phoneNo").val().length != 11 && isNaN($("#phoneNo").val())== false){
				document.getElementById("ts3").innerHTML="✖ 请输入该用户所绑定的手机号！";flag=1;
			}
		}
		if($("#type").val()=="0"){
			document.getElementById("ts4").innerHTML="✖ 请选择用户类型！";flag=1;
		}
		if($("#state").val()=="0"){
			document.getElementById("ts5").innerHTML="✖ 请选择账号使用状态！";flag=1;
		}
		if ($("#notes").val().length >= 200 && $("#notes").val() != "请输入内容（200字内）！"){
			document.getElementById("ts6").innerHTML="✖ 备注信息不可超过200字！";flag=1;
		}
		if(flag==1){return;}else{show_pop(0,"✔ 新用户添加成功！");}
	});	
	
	$("body").on("click",".popup_ok",function(){
		popup_ok();
	});
	
	$(function(){  
		var t = $('#notes');
		t.css("color","#A9A9A9");
		t.val("请输入内容（200字内）！");
		var default_value = t.val();
		t.focus(function() {  
			t.css("color","black");  
			if (t.val() == default_value){t.val('');}
		});  
		t.blur(function() {
			t.css("color","black");  
			if (t.val() == '') {t.val(default_value);t.css("color","#A9A9A9");}  
		});  
	}); 
	
	
});

function queryUser(id,type){
	$.post(basePath+'user/queryUserDetails.do',{'id':id},function(data){
		if (data != null) {
			if(data.success){
				var _user=data.data;
				show_pop(14,"");
				/**
				 * 设置用户信息
				 */
				$("#_select_acount").html(_user.user.userAccount);
				$("#_select_name").html(_user.user.userInfo.userName);
				$("#_select_phone").html(_user.user.userInfo.userPhone);
				$("#_select_type").html(_user.user.userType=='1'?'企业':_user.user.userType=='2'?'个人':'平台');
				if ("3" !=_user.user.userType) {
					$("#_select_balance").html(_user.moneyMap.TotalBalance);
					$("#_select_amount").html(_user.moneyMap.TotalAmount);
					$("#_select_freezeamount").html(_user.moneyMap.TotalFreezeAmount);
				}
			}else{
				show_pop(0,data.msg);
			}
		}
	},'json');
}


//修改账户状态
function updateUser(id,status){
	$.post(basePath+'user/updateUser.do',{'id':id,"status":status},function(data){
		if (data != null) {
			if (data.success) {
				$("#select_btn").click();
				show_pop(0, "更改成功");
			}else{
				show_pop(0, data.msg);
			}
		}
	},'json');
}

function resetinfo(){
	$("#acount").val("");
	$("#name").val("");
	$("#notes").val("请输入内容（200字内）！");
	$("#notes").css("color","#A9A9A9");
	$("#type").val("0");
	$("#state").val("0");
	document.getElementById("ts1").innerHTML="";
	document.getElementById("ts2").innerHTML="";
	document.getElementById("ts4").innerHTML="";
	document.getElementById("ts5").innerHTML="";
}
	
function popup_ok(){
	$(".popup_background").remove();
	$(".popup_content").remove();
	resetinfo();
}

