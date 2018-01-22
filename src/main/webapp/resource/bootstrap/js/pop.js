// JavaScript Document
$(document).ready(function() {

	$("body").on("click",".popup_top_c",function(){
		$(".popup_background").remove();
		$(".popup_content").remove();
	});
	$("body").on("click",".popup_ok",function(){

		if($(".popup_top_ts").text()=="修改成功!,请重新登陆"){
			To_link('exitJSP');
		}
		$(".popup_background").remove();
		$(".popup_content").remove();

	});
});

function show_pop(x,strx){
	if(x==0){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">提示</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_ts\">" + strx + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_ok\">好的</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==1){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">用户信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户账号：</div><div class= \"popup_top_text2\">13606503021</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户名：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">绑定手机号：</div><div class= \"popup_top_text2\">13606503021</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">类型：</div><div class= \"popup_top_text2\">企业</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">状态：</div><div class= \"popup_top_text2\">使用中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">开通时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">杭州数博(实业)有限公司 使用</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==2){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">用户信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户账号：</div><div class= \"popup_top_text2\">13606503021</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户名：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">绑定手机号：</div><div class= \"popup_top_text2\">13606503021</div></div>"
html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">类型：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-个人-</option><option value=\"1\">-企业-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">开通时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==3){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">证件信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">证件名称：</div><div class= \"popup_top_text2\">身份证</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">证件类型：</div><div class= \"popup_top_text2\">个人</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\">使用中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">个人身份证号码</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==4){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">证件信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">证件名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">证件类型：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-个人-</option><option value=\"1\">-企业-</option></select></div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"		
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==5){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">日志信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">日志时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">日志内容：</div><div class= \"popup_top_text2\">为应用程序池“DefaultAppPool”提供服务并且进程 ID 为“3992”的工作进程因不活动而被关闭。应用程序池超时配置被设置为 20 分钟。需要时将启动一个新工作进程。</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==6){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">参数信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数名称：</div><div class= \"popup_top_text2\">手续费比例</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数值：</div><div class= \"popup_top_text2\">0.01</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\">使用中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">个人身份证号码</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==7){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">参数信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数值：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"		
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==8){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">任务信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">任务名称：</div><div class= \"popup_top_text2\">定时转账</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">执行时间：</div><div class= \"popup_top_text2\">每天-01:00-执行1回</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\">执行中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">每日执行转账交易成功的尾款</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==9){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">任务信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">任务名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">执行时间：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-每天-</option><option value=\"1\">-每周-</option><option value=\"2\">-每月-</option><option value=\"3\">-每时-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\"></div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"		
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==10){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">接口信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">接口名称：</div><div class= \"popup_top_text2\">个人查询账单</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">接口文件：</div><div class= \"popup_top_text2\">selectorder.java</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\">执行中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">查询个人的账单接口</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==11){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">接口信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">接口名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">接口文件：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"		
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==12){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">权限信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">权限名称：</div><div class= \"popup_top_text2\">平台管理员</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\">使用中</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\">可以使用部分后台超级管理员的功能</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==13){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\"><img style=\"width:15px;\" src=\"img/关闭.png\"/></div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_t\">权限信息</div>"
			html = html + "</div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">权限名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">使用状态：</div><div class= \"popup_top_text2\"><select class=\"popup_select\"><option value=\"0\">-停用-</option><option value=\"1\">-启用-</option></select></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">创建时间：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">最近更新：</div><div class= \"popup_top_text2\">2017-01-01 12:10:00</div></div>"		
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">操作人：</div><div class= \"popup_top_text2\">丁佳彬</div></div>"	
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><textarea class=\"popup_input\"/></div></div>"
			html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_bunnt\">保存</div></div>"
			html = html + "<div class= \"popup_top_ps\"></div>"
		html = html + "</div>"
		$("body").append(html);
	}else if(x==14){
		html = "<div class=\"popup_background\"></div>"	
			$("body").append(html);
			html = ""
			html =        "<div class=\"popup_content\">"
				html = html + "<div class= \"popup_top\">"
					html = html + "<div class= \"popup_top_c\">X</div>"
				html = html + "</div>"
				html = html + "<div class= \"popup_top\">"
					html = html + "<div class= \"popup_top_t\">用户信息</div>"
				html = html + "</div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户账号：</div><div id=\"_select_acount\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">用户名：</div><div id=\"_select_name\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">绑定手机号：</div><div id=\"_select_phone\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">类型：</div><div id=\"_select_type\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可用余额：</div><div id=\"_select_balance\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可提现余额：</div><div id=\"_select_amount\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">担保中资金：</div><div id=\"_select_freezeamount\" class= \"popup_top_text2\"></div></div>"
				html = html + "<div class= \"popup_top_ps\"></div>"
			html = html + "</div>"
			$("body").append(html);
		}else if(x==15){
			html = "<div class=\"popup_background\"></div>"	
				$("body").append(html);
				html = ""
				html =        "<div class=\"popup_content\">"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_c\">X</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_t\">参数信息</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"hidden\" id=\"parameterId\"/></div>	"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数key：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterKey\"/></div><div class=\"add_user_text3\" id=\"ts1\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterName\"/></div> <div class=\"add_user_text3\" id=\"ts2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数值：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterValue\"/></div> <div class=\"add_user_text3\" id=\"ts3\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">状态：</div><div class= \"popup_top_text2\"><select class=\"select_text\" id=\"parameterState\"><option value=\"0\" >--请选择--</option><option value=\"1\">--使用中--</option><option value=\"2\">--已停用--</option></select></div> <div class=\"add_user_text3\" id=\"ts4\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"note\"/></div> <div class=\"add_user_text3\" id=\"ts5\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div id=\"yes\" class= \"popup_top_bunnt\">保存</div></div>"
					/*html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可用余额：</div><div id=\"_select_balance\" class= \"popup_top_text2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可提现余额：</div><div id=\"_select_amount\" class= \"popup_top_text2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">冻结金额：</div><div id=\"_select_freezeamount\" class= \"popup_top_text2\"></div></div>"*/
					html = html + "<div class= \"popup_top_ps\"></div>"
				html = html + "</div>"
				$("body").append(html);
		}else if(x==16){
			html = "<div class=\"popup_background\"></div>"	
				$("body").append(html);
				html = ""
				html =        "<div class=\"popup_content\">"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_c\">X</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_t\">参数信息</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数key：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterKey\"/></div><div class=\"add_user_text3\" id=\"ts1\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数名称：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterName\"/></div> <div class=\"add_user_text3\" id=\"ts2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">参数值：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"parameterValue\"/></div> <div class=\"add_user_text3\" id=\"ts3\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">状态：</div><div class= \"popup_top_text2\"><select class=\"select_text\" id=\"parameterState\"><option value=\"0\" >--请选择--</option><option value=\"1\">--使用中--</option><option value=\"2\">--已停用--</option></select></div> <div class=\"add_user_text3\" id=\"ts4\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"note\"/></div> <div class=\"add_user_text3\" id=\"ts5\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div id=\"add\" class= \"popup_top_bunnt\">增加</div></div>"
					/*html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可用余额：</div><div id=\"_select_balance\" class= \"popup_top_text2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">可提现余额：</div><div id=\"_select_amount\" class= \"popup_top_text2\"></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">冻结金额：</div><div id=\"_select_freezeamount\" class= \"popup_top_text2\"></div></div>"*/
					html = html + "<div class= \"popup_top_ps\"></div>"
				html = html + "</div>"
				$("body").append(html);
		}else if(x==17){
			html = "<div class=\"popup_background\"></div>"	
				$("body").append(html);
				html = ""
				html =        "<div class=\"popup_content\">"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_c\">X</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_t\">交易明细对账明细</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">订单号：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"ThirdHtId\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转出子账户：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"OutCustAcctId\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转出会员代码：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"OutThirdCustId\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转出子账户名：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"OutCustAcctName\" readonly/></div> </div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转入子账户：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"InCustAcctId\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转入子账户名：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"InCustAcctName\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">转入会员代码：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"InThirdCustId\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注2：</div><div class= \"popup_top_text2\"><input class=\"popup_input2\" type=\"text\" id=\"Note2\" readonly/></div></div>"
					html = html + "<div class= \"popup_top_ps\"></div>"
				html = html + "</div>"
				$("body").append(html);
		}
	
	$(".popup_content").show(200);
	
}



