package com.javen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	@RequestMapping(value = "/toRegister.html", method = {RequestMethod.GET})
	public String toRegister2() {
		return "toRegister";
	}

	/**
	 * 跳转到用户名密码登入
	 *
	 * @return
	 */
	@RequestMapping(value = "/toLogin.html", method = {RequestMethod.GET})
	public String toLogin() {
		return "login";
	}

	/**
	 * 跳转到手机登入页面
	 *
	 * @return
	 */
	@RequestMapping(value = "/toLogin2.html", method = {RequestMethod.GET})
	public String toLogin2() {
		return "login2";
	}

}
