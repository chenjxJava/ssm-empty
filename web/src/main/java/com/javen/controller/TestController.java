package com.javen.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.javen.model.Response;
import com.javen.model.User;

@Controller
@RequestMapping("/chenjx")
// /user/**
public class TestController {

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

	@RequestMapping("/toLogin.html")
	public String toLogin() {
		return "login";
	}

	@RequestMapping("/toLogin2.html")
	public String toLogin2() {
		return "login2";
	}

}
