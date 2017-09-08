package com.javen.controller;

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
	 * @return
	 */
	@RequestMapping(value = "/toRegister.html")
	public String toRegister2() {
		return "toRegister";
	}

	/**
	 * 跳转到用户名密码登入
	 *
	 * @return
	 */
	@RequestMapping("/toLogin.html")
	public String toLogin() {
		return "login";
	}

	/**
	 * 跳转到手机登入页面
	 *
	 * @return
	 */
	@RequestMapping("/toLogin2.html")
	public String toLogin2() {
		return "login2";
	}

}
