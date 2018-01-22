<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title></title>
<script Language="JavaScript" src="${ctxStatic }/js/user/repwd.js"></script>
</head>
<body style="background-color: #FFFFFF;">
	<div style="width: 100%; height: 100%;">
		<div
			style="width: 1024px; height: 50px; margin: auto; background-color: #FFFFFF;">
			<div
				style="width: 156px; height: 33px; float: left; margin-top: 8px; margin-left: 20px;">
				<img src="${ctxStatic }/IMG/user/changLogo.png" style="width: 100%">
			</div>
			<div
				style="width: 200px; height: 50px; float: left; line-height: 50px; color: #8f8f8f; font-size: 20px; margin-left: 30px;">
				找回密码</div>
		</div>
		<div style="width: 1024px; height: 400px; margin: auto;">
			<div style="width: 1024px; height: 80px;"></div>
			<div
				style="width: 1024px; height: 40px; margin-top: 10px; color: #8f8f8f; font-size: 18px; text-align: center; line-height: 40px;">您正在进行密码找回，请输入绑定手机号进行身份验证！</div>
			<div style="width: 1024px; height: 50px; margin-top: 20px;">
				<div
					style="width: 438px; height: 50px; float: left; color: #8f8f8f; font-size: 16px; text-align: right; line-height: 50px;">手机号：</div>
				<div style="width: 512px; height: 50px; float: left;">
					<input maxlength="11" id="MobilNo" type="text"
						style="height: 30px; width: 165px; font-size: 16px; margin-top: 8px;">
				</div>
			</div>
			<div style="width: 1024px; height: 50px; margin-top: 0px;">
				<div
					style="width: 438px; height: 50px; float: left; color: #8f8f8f; font-size: 16px; text-align: right; line-height: 50px;">验证码：</div>
				<div style="width: 512px; height: 50px; float: left;">
					<input maxlength="6" id="Number" type="text"
						style="height: 30px; width: 80px; font-size: 16px; margin-top: 8px;"
						disabled="disabled">
					<input id="GetNo" type="button"
						style="height: 36px; width: 80px; font-size: 12px; margin-top: 7px; color: #8f8f8f;"
						disabled="disabled" value="获取验证码"></input>
				</div>
			</div>
			<div id="Msg"
				style="width: 1024px; height: 40px; margin-top: 0px; line-height: 40px; text-align: center; color: #FF0000; font-size: 16px;"></div>
			<div style="width: 1024px; height: 30px; margin-top: 10px;">
					<div id="Next_step"
					style="cursor: pointer;width:150px; height: 35px; background-color: #8f8f8f; color: #FFF; border-radius: 2px; font-size: 18px; line-height: 35px; text-align: center; margin-left: 350px;float: left;">下
					一 步</div>
				<div id="back"
					style="cursor: pointer;width: 150px; height: 35px; background-color: #5492F2; color: #FFF; border-radius: 2px; font-size: 18px; line-height: 35px; text-align: center; margin-left: 40px;float: left;">返  回</div>
			</div>
		</div>
	</div>

</body>
</html>


