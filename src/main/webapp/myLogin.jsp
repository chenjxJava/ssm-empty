<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="WEB-INF/include/taglib.jsp"%>
<%--
  Created by IntelliJ IDEA.
  User: chenjx
  Date: 2018/1/22
  Time: 14:59
  To change this template use File | Settings | File Templates.
--%>
﻿<!DOCTYPE html>

<html>
<head>
<title>登陆</title>
</head>

<body>
	<!-- cursor: pointer;鼠标放上显示手;   title:鼠标放上时显示的文字 -->
	<img id="imageCode" alt="" src="" onclick="checkcode()" style="cursor: pointer;" title="点我更换验证码"/>
</body>
<script type="text/javascript">
	${pageContext.servletContext}
	var basePath = "<%=basePath%>";
	$(function(){
		checkcode();
	});
	function checkcode(){
		var XMLHttp = null;
		if (window.XMLHttpRequest) {
			XMLHttp = new XMLHttpRequest()
		} else if (window.ActiveXObject) {
			XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		XMLHttp.onreadystatechange = function() {
			if (XMLHttp.readyState == 4) {
				document.getElementById("imageCode").src = basePath
					+ "image/getImage?" + new Date();//改变验证码图片
			}
		}
		//将请求发送出去
		//加上new Date()防止浏览器缓存，不重新发送请求
		XMLHttp.open("GET", basePath + "image/getImage?" + new Date(), true);
		XMLHttp.send(null);
	}
</script>
</html>
