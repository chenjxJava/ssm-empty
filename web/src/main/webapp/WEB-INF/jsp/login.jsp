<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>数联中国-我的钱包-登录界面</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" type="text/css" href="${ctxStatic }/css/user/login.css" />
<script type="text/javascript">
function check(){
	var uesr=$("#email").val();
	if (uesr == null || uesr == '' || uesr == undefined ) {
		document.getElementById("ts").innerHTML="帐号不能为空！";
		return false;
	}
	var pwd=$("#password1").val();
	if (pwd == null || pwd == '' || pwd == undefined ) {
		document.getElementById("ts").innerHTML="密码不能为空！";
		return false;
	}
	$("#password1").val("");
	$("#password").val(hex_md5(pwd)); 
	
	html = "<div class=\"popup_background\">" +
	"<div class=\"popup_background_img\">" +
		"<div class=\"popup_background_txt1\"><img style=\"width:40px;\" src=\"resource/IMG/user/gif/loading.gif\"/></div>" +
		"<div class=\"popup_background_txt2\">验证跳转中</div>" +
	"</div>"+
	"</div>";
	$("body").append(html);
	
    return true;
} 

if(window!=top){
	 top.location.href=location.href;
}
</script>
</head>
<body style="background-color:#fcfcfc;">
<div class="container"style="height:100px; background-color:#ffffff;">
    	<div class="container_div" >
        	<img src="${ctxStatic }/IMG/user/logo.png" style=" margin-top:35px; float:left;">
            <div style=" height:34px; margin-top:35px; border-left:solid 1px #f2f2f2;  margin-left:20px; float:left;"></div>
            <div style=" color:#8f8f8f; font-size:20px; margin-left:20px; float:left; line-height:100px;">欢迎登陆</div>
        </div>
</div>
<form method="post" action="${ctx }/login.html" onsubmit="return check();">
<div class="container" style=" height:470px; background-color:#A3c2f2;">
	<div class="container_div">
       	  <img src="${ctxStatic }/IMG/user/login_banner.png" style="margin-top:138px; margin-left:50px; float:left;">
          <div style=" width:350px; height:320px; margin-top:42px; background-color:#ffffff; opacity:80%; border-radius:4px; float:right;">
          	<div style=" font-size:16px; color:#508ff1; font-weight:bold; text-align:center; margin-top:44px;">账号登陆</div>
            <input class="land_inp" id="email" value="${user}" name="userAccount" type="text" placeholder="请输入您的账号" />
            <input class="land_inp1" id="password1"  name="userPwd1" type="password" placeholder="请输入您的密码" />
            <input class="land_inp1" id="password" name="userPwd" type="hidden"/>
            <div class="land_inp2" id ="ts">${errMsg}</div>
            <button class="land_btn"  type="submit" id="submit_btn1">&nbsp;登&nbsp;录&nbsp </button>
             <div style="float:left; margin-left: 20px; margin-top:5px;font-size:14px;"><a style="text-decoration:none;" href="${ctx }/center/registered.html">立即注册</a></div>
          <div style="float:right; margin-right: 20px; margin-top:5px;font-size:14px;"><a style="text-decoration:none;" href="${ctx }/center/repwd1.html">找回密码</a></div>
          </div>
	</div>
	<div><a style="text-decoration:none;" href="/center/toLogin2.html">手机登入</a></div>
</div>
</form>

</body>
</html>
