package com.javen.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:50 2017-09-01
 * @Modified By:
 */
@Controller
@RequestMapping("/center")
public class CenterController {

	/**
	 * 跳转注册页面
	 *
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/registered.html")
	public String registered(HttpServletRequest request, HttpServletResponse response) {
		return "registered";
	}

	/**
	 *
	 * @return
	 */
	@RequestMapping("/toLogin.html")
	public String toLogin() {
		return "login";
	}

	/**
	 *
	 * @return
	 */
	@RequestMapping("/toLogin2.html")
	public String toLogin2() {
		return "login2";
	}

}
