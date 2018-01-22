package com.chenjx.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chenjx.common.utils.FreeMarkerUtil;
import com.chenjx.sys.model.Response;
import com.chenjx.sys.model.User;



@Controller
@RequestMapping("/chenjx")
// /user/**
public class TestController {

	/*@Autowired
	private JobTaskService jobTaskService;*/

	@RequestMapping(value = "/user/{id}", method = {RequestMethod.GET})
	@ResponseBody
	public Response userg(@PathVariable String id, HttpServletRequest request) {
		Response response = new Response();
		User user = new User();
		System.out.println(request.getMethod());
		user.setId(Long.parseLong(id));
		return response.success(user);
	}

	@RequestMapping(value = "/userp", method = {RequestMethod.POST})
	@ResponseBody
	public Response userp(HttpServletRequest request) {
		Response response = new Response();
		User user = new User();
		System.out.println(request.getMethod());
		String param = request.getParameter("param");

		//user.setId(Long.parseLong(id));
		return response.success(user);
	}

	@RequestMapping(value = "/redis/service", method = {RequestMethod.GET})
	@ResponseBody
	public Response service(HttpServletRequest request) {
		Response response = new Response();
		//jobTaskService.sayHello();
		return response.success();
	}

	@ResponseBody
	@RequestMapping(value="test-freemarker",produces = "application/json; charset=utf-8", method = {RequestMethod.GET})
	public String testFreeMarker(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("name", "【我是名字】");
		return FreeMarkerUtil.instance().geneFileStr(request, "testFreeMarker.flt", map);
	}

	@RequestMapping(value="info",produces = "application/json; charset=utf-8",method = RequestMethod.GET)
	@ResponseBody
	public String info(HttpServletRequest request){
		Object principal = SecurityUtils.getSubject().getPrincipal();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("root", principal);
		return FreeMarkerUtil.instance().geneFileStr(request, "userinfo.flt", map);
	}
}
