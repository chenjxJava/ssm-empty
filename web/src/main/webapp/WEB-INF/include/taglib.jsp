<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:set var="ctxStatic" value="${pageContext.request.contextPath}/resource"></c:set>
<html>
<head>
<script type="text/javascript" src="${ctxStatic }/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="${ctxStatic }/js/common/md5.js"></script>
<script type="text/javascript" src="${ctxStatic }/js/common/link.js"></script>
<script type="text/javascript" src="${ctxStatic }/js/common/pop.js"></script>
<script type="text/javascript" src="${ctxStatic }/js/common/public.js"></script>
<link rel="stylesheet" type="text/css" href="${ctxStatic }/css/common/public.css" />
<script type="text/javascript" src="http://www.js-css.cn/jscode/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
<script type="text/javascript" src="${ctxStatic }/js/common/jquery.date_input.pack.js"></script>
<link rel="stylesheet" type="text/css" href="${ctxStatic }/css/common/pop.css" />
<script type="text/javascript">var basePath = '${ctx}';</script>
</head>
</html>
