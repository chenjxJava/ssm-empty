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
	}else if(x==888){
		html = "<div class=\"popup_background\">" +
				"<div class=\"popup_background_img\">" +
					"<div class=\"popup_background_txt1\"><img style=\"width:40px;\" src=\"resource/IMG/user/gif/loading.gif\"/></div>" +
					"<div class=\"popup_background_txt2\">"+strx+"</div>" +
				"</div>"+
				"</div>";
		$("body").append(html);
	}else if(x==999){
		$(".popup_background").remove();
		$(".popup_content").remove();
		$(".popup_content2").remove();
	}else if(x==1){
		html = "<div class=\"popup_background\"></div>"	
		$("body").append(html);
		html = ""
		html =        "<div class=\"popup_content2\">"
			html = html + "<div class= \"popup_top\">"
				html = html + "<div class= \"popup_top_c\">X</div>"
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
					html = html + "<div class= \"popup_top_c\">X</div>"
				html = html + "</div>"
				html = html + "<div class= \"popup_top\">"
					html = html + "<div class= \"popup_top_t\">支付信息</div>"
				html = html + "</div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">收款账号：</div><div class= \"popup_top_text2\"><input type=\"text\" id=\"inCustPhone\" class=\"popup_input2\" ></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">支付金额：</div><div class= \"popup_top_text2\"><input type=\"text\" id=\"Amount\" class=\"popup_input2\" ></div></div>"
				html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">备注信息：</div><div class= \"popup_top_text2\"><input type=\"text\" id=\"Descript\" class=\"popup_input2\" ></div></div>"
				html = html + "<div id=\"pop_zf_ts\" class= \"popup_top_text_ts\"></div>"
				html = html + "<div class= \"popup_top_text\"><div id=\"addOrder2\" class= \"popup_sc\">生成订单</div></div>"
				html = html + "<div class= \"popup_top_ps\"></div>"
			html = html + "</div>"
			$("body").append(html);
		}else if(x==5){
			html = "<div class=\"popup_background\"></div>"	
				$("body").append(html);
				html = ""
				html =        "<div class=\"popup_content\">"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_c\">X</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top\">"
						html = html + "<div class= \"popup_top_t\">支付信息</div>"
					html = html + "</div>"
					html = html + "<div class= \"popup_top_text\"><div class= \"popup_top_text1\">充值金额：</div><div class= \"popup_top_text2\"><input type=\"text\" id=\"price\" class=\"popup_input2\" ></div></div>"
					html = html + "<div id=\"pop_zf_ts\" class= \"popup_top_text_ts\"></div>"
					html = html + "<div class= \"popup_top_text\"><div id=\"yes\" class= \"popup_sc\">确定充值</div></div>"
					html = html + "<div class= \"popup_top_ps\"></div>"
					html = html + "</div>"
					$("body").append(html);
		}
	$(".popup_content").show(200);
	
}
