<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017-09-05
  Time: 13:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
//测试页面identity.html为：
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>identity.html</title>

<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="this is my page">
<meta http-equiv="content-type" content="text/html; charset=GB18030">

<!--<link rel="stylesheet" type="text/css" href="./styles.css">-->

</head>

<body>

	<script>
		function reloadImage() {
			document.getElementById('btn').disabled = true;
			document.getElementById('identity').src='../servlet/IdentityServlet?ts=' + new Date().getTime();
		}
	</script>

	<a href="javascript:void(0)" onclick="reloadImage()"><img src="../servlet/IdentityServlet" id="identity" onload="btn.disabled = false; " /></a>
	<input type=button value=" 获取验证码 " onclick="reloadImage()" id="btn">

</body>
</html>
