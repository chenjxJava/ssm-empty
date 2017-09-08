package com.chenjx.common.entity;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 13:50 2017-09-05
 * @Modified By:
 */

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;


public class ResultEntity {
	private Boolean success;
	private String msg;
	private Object data;
	private Integer total_page;

	public Integer getTotal_page() {
		return total_page;
	}
	public void setTotal_page(Integer total_page) {
		this.total_page = total_page;
	}
	public Boolean getSuccess()
	{
		return this.success;
	}
	public void setSuccess(Boolean success) {
		this.success = success;
	}
	public String getMsg() {
		return this.msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

	public void setErrorMessage(String msg)
	{
		this.success = Boolean.valueOf(false);
		this.msg = msg;
	}

	public void setMessage(String msg)
	{
		this.success = Boolean.valueOf(true);
		this.msg = msg;
	}

	public void setMessageAndData(String msg, Object obj)
	{
		this.success = Boolean.valueOf(true);
		this.msg = msg;
		this.data = obj;
	}

	public void printJson(Object obj, HttpServletResponse response)
	{
		try
		{
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(json);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public void printJson_encode(Object obj, HttpServletResponse response) {
		try
		{
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			//response.getWriter().write(EncryptAndDecodeHelper.encoder(json, "GBK"));
			//response.getWriter().flush();
			response.getWriter().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	public Object getData() { return this.data; }

	public void setData(Object data) {
		this.data = data;
	}
}
