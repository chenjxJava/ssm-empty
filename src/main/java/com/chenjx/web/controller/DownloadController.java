package com.chenjx.web.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSONObject;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 14:07 2018/1/22
 * @Modified By:
 */
@Controller
public class DownloadController {

	/**
	 * 下载
	 *
	 * @param response 响应
	 * @param request  the request
	 * @return model model and view
	 * @throws IOException the io exception
	 */
	@RequestMapping(value = "/downLoadFile",method = RequestMethod.GET)
	public void downLoadFile(String filename, HttpServletResponse response, HttpServletRequest request) throws IOException {
		JSONObject json = new JSONObject();
		//获得请求文件名
		filename = URLDecoder.decode(filename,"UTF-8");
		//设置文件MIME类型
		response.setContentType(request.getServletContext().getMimeType(filename));
		//设置Content-Disposition
		response.addHeader("Content-Disposition", "attachment;filename="
			+ new String(filename.getBytes("utf-8"), "ISO-8859-1"));
		//String fullFileName = request.getServletContext().getRealPath("/D://" + filename);

		InputStream in = new FileInputStream(filename);
		OutputStream out = response.getOutputStream();

		//写文件
		int b;
		while ((b = in.read()) != -1) {
			out.write(b);
		}

		in.close();
		out.close();

		json.put("code", 200);
		json.put("result", "附件下载成功");
		jsonOutput(response, json);

	}

	/**
	 * json输出
	 *
	 * @param response 响应
	 * @param json     json对象
	 */
	protected void jsonOutput(HttpServletResponse response, JSONObject json) throws IOException {
		// response.setHeader("Content-type", "application/json;charset=utf-8");
		response.setHeader("Content-type", "text/html;charset=utf-8"); // 为兼容IE模式Json
		response.getOutputStream().write(json.toString().getBytes("utf-8"));
	}
}
