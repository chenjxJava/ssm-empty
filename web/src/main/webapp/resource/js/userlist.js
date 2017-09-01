//JavaScript Document
$(document).ready(function() {

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
	});
	/**
	 * 首页点击事件
	 */
	$(document).on('click','#index',function(){
		var pageNum=$("#pageNum").val();
		if(pageNum==1){
			showReg("已是首页",2);
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
			showReg("已是第一页",2);
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
			showReg("已是最后一页",2);
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
			showReg("已是最后一页",2);
			return;
		}
		$("#pageNum").val($("#totalpage").val());
		$("#select_btn").click();
	});


	$(document).on('click','.table_but2',function(){
		$('#popup_background').css('display','block');
		$('#popup_content').css('display','none');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','block');    
	});

	$(document).on('click','.div_search_tilte_img2',function(){
		$('#popup_background').css('display','block');
		$('#popup_content').css('display','block');    
		$('#popup_content2').css('display','none');    
		$('#popup_content3').css('display','none');    
	}); 
	$(document).on('click','#rest_btn',function(){
		$("#username").val('');
		$("#account").val('');
		$('#type option:eq(1)').attr('selected','selected');
		$('#status option:eq(1)').attr('selected','selected');
	});
	/**
	 * 查询事件
	 */
	$(document).on('click','#select_btn',function(){
		var username=$("#username").val();
		var account=$("#account").val();
		var pageNum=$("#pageNum").val();
		var pageSize=$("#pageSize").val();
		var type=$("#type option:selected").val();
		var status=$("#status option:selected").val();
		$.post(basePath+'user/queryUser.do',{'username':username,'account':account,'type':type,'status':status,'pageNum':pageNum,'pageSize':pageSize},function(data){
			$("#goodsInfoList").html('');
			if (data != null) {
				if(data.success){
					$("#totalpage").val(data.total_page);
					var userlist=data.data;
					for (var i=0;i<userlist.length;i++  ){
						var html="<tr id=\"uesr"+i+"\"> <td>"+(i+1)+"</td><td>"+userlist[i].userAccount+"</td><td >"+userlist[i].userInfo.userName+"</td><td>"+(userlist[i].userType=='1'?'企业':userlist[i].userType=='2'?'个人':'平台')+"</td><td>"+(userlist[i].state=='1'?'停用':'正在使用')+"</td><td>"+userlist[i].userInfo.createDate+"</td><td>无</td> " +
						" <td><div class=\"table_but\"><div class=\"table_but1\" onclick=\"queryUser("+userlist[i].id+")\">查看</div><div class=\"table_but2\" onclick='editUser("+userlist[i].id+")'>编辑</div></div></td> </tr>";
						$("#goodsInfoList").append(html);
					}
				}else{
					showReg(data.msg,2);
				}
			}
		},'json');
	});
	/**
	 * 重置密码
	 */
	$(document).on('click','#_rest_password',function(){
		var flag=comfire('确认重置密码?');
		if(flag){
			$.post(basePath+"user/addUser.do",{'id':name,'userAccount':account},function(data){
				if(data.success){
					$(".popup_bunnt3").click();
					showReg(data.msg,1);
					setTimeout(function(){
						$("#select_btn").click();
					},2000);
				}else{
					showReg(data.msg,2);
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
			if(data.success){
				$(".popup_bunnt3").click();
				showReg(data.msg,1);
				setTimeout(function(){
					$("#select_btn").click();
				},2000);
			}else{
				showReg(data.msg,2);
			}
		},'json');
	});
});
function queryUser(id){
	$.post(basePath+'user/queryUser.do',{'id':id},function(data){
		if(data.success){
			/**
			 * 查询成功后，将用户页面弹窗出现
			 */
			$('#popup_background').css('display','block');
			$('#popup_content').css('display','none');    
			$('#popup_content2').css('display','block');    
			$('#popup_content3').css('display','none');  
			/**
			 * 设置用户信息
			 */
			var _user=data.data;
			$('#_select_acount').html(_user[0].userAccount);
			$('#_select_type').html(_user[0].userType=='1'?'企业':userlist[i].userType=='2'?'个人':'平台');
			$('#_select_status').html(_user[0].state=='1'?'停用':'正在使用');
			$('#_select_name').html(_user[0].userInfo.userName);
		}else{
			showReg(data.msg,2);
		}
	},'json');
}